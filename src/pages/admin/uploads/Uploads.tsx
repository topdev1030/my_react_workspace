import { useState, useEffect, useCallback } from "react";

// Icon Imports
import viewIcon from "../../../static/images/view.png";
import viewCardIcon from "../../../static/images/view_expand.png";
import viewDetailIcon from "../../../static/images/viewIcon.png";
import deleteIcon from "../../../static/images/deleteIcon.png";
import downloadIcon from "../../../static/images/downloadIcon.png";

import {
  SearchOutlined,
  EyeOutlined,
  DownloadOutlined,
  FilterOutlined,
} from "@ant-design/icons";

import {
  Form,
  Row,
  Col,
  Image,
  message,
  Select,
  Card,
  Space,
  Divider,
  Pagination as CardPagination,
  PaginationProps,
} from "antd";

import type {
  TablePaginationConfig,
  SorterResult,
} from "antd/es/table/interface";
import debounce from "debounce";
import dayjs, { Dayjs } from "dayjs";

// components
import type { TableColumnType } from "@/components";
import {
  Button,
  Input,
  Modal,
  PdfViewerV2,
  Table,
  FilterDropdown,
  Popconfirm,
  Typography,
} from "@/components";

// Import TransitionGroup for animation
import { TransitionGroup, CSSTransition } from "react-transition-group";

// helpers
import { downloadFile } from "@/helpers";

// services
import { commonService, uploadService, hookService } from "@/services";

// redux
import { useAppSelector } from "@/redux";
import { selectAccessToken } from "@/redux/auth";

// types
import type { Upload, Pagination } from "@/types";
import type { AllUploadsFilters } from "@/services/upload";
import type { CustomerOption } from "./Uploads.types";

// constants
import { DEFAULT_PAGE_SIZE } from "@/components/atoms/table";
import { DEBOUNCE_WAIT, DEFAULT_SORTER } from "./Uploads.constants";

// styles
import { useStyles } from "./Uploads.styles";

const { Title, Text } = Typography;

const AdminUploads = () => {
  const sort_report_options = [
    {
      key: "date",
      value: "Date",
    },
    {
      key: "report_type",
      value: "Report Type",
    },
    {
      key: "customer_name",
      value: "Customer Name",
    },
    {
      key: "report_name",
      value: "Report Name",
    },
  ];

  const [isTableView, setIsTableView] = useState<boolean>(true);

  const [customerOptions, setCustomerOptions] = useState<CustomerOption[]>([]);
  const [filters, setFilters] = useState<AllUploadsFilters>({});
  const [pagination, setPagination] = useState<Pagination>({
    offset: 0,
    limit: DEFAULT_PAGE_SIZE,
    sort: DEFAULT_SORTER,
  });
  const [loadingUploads, setLoadingUploads] = useState<boolean>(false);
  const [loadingOptions, setLoadingOptions] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<Upload[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  const accessToken = useAppSelector(selectAccessToken);

  const styles = useStyles();

  const getUploadFilters = useCallback(() => {
    const { dbconnstrs = [] } = filters;
    if (dbconnstrs.length > 0) return filters;
    return {
      ...filters,
      dbconnstrs: customerOptions.map(({ value }) => value),
    };
  }, [filters, customerOptions]);

  const getUploadSorter = (
    sorter: SorterResult<Upload> | SorterResult<Upload>[]
  ) => {
    const { order, field } = Array.isArray(sorter) ? sorter[0] : sorter;
    if (order && field) {
      return `${order === "ascend" ? "-" : ""}${field}`;
    }
    return DEFAULT_SORTER;
  };

  const fetchOptions = async () => {
    setLoadingOptions(true);
    try {
      // load customer options
      const customers = await commonService.getCustomers(accessToken);
      const newCustomerOptions = customers.map(
        ({ cust_id, dbconnstr, customer_name }) => ({
          cust_id,
          label: customer_name,
          value: dbconnstr,
        })
      );
      setCustomerOptions(newCustomerOptions);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingOptions(false);
    }
  };

  const fetchUploads = async () => {
    setLoadingUploads(true);
    try {
      // load uploads
      const { uploads, metadata } = await uploadService.getAllUploads({
        token: accessToken,
        filters: getUploadFilters(),
        ...pagination,
      });
      setDataSource(uploads);
      setTotalCount(metadata.total);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingUploads(false);
    }
  };

  const onChangeUploadedByFilter = debounce((value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      uploaded_by: value,
    }));
  }, DEBOUNCE_WAIT);

  const onTableChange = (
    { current, pageSize }: TablePaginationConfig,
    __,
    sorter: SorterResult<Upload> | SorterResult<Upload>[]
  ) => {
    if (current && pageSize) {
      setPagination({
        offset: (current - 1) * pageSize,
        limit: pageSize,
        sort: getUploadSorter(sorter),
      });
    }
  };

  const onOpenUploadFile = async (url: string) => {
    try {
      // generate upload file url
      const { sasToken } = await hookService.getSASToken({
        token: accessToken,
      });
      const uploadFileUrl = `${url}?${sasToken}`;

      // open upload file
      window.open(uploadFileUrl, "_blank");
    } catch (error) {
      console.log(error);
    }
  };

  const onDownloadUploadUrl = async (url: string) => {
    try {
      // generate upload url & file name
      const { sasToken } = await hookService.getSASToken({
        token: accessToken,
      });
      const uploadFileUrl = `${url}?${sasToken}`;
      const uploadFileName = url.split("/").pop() || "upload_file";

      // download upload file
      downloadFile(uploadFileUrl, uploadFileName);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (accessToken) {
      fetchOptions();
    }
  }, [accessToken]);

  useEffect(() => {
    if (accessToken) {
      fetchUploads();
    }
  }, [accessToken, customerOptions, filters, pagination]);

  const columns: TableColumnType[] = [
    {
      title: "Upload Date",
      dataIndex: "upload_date_time",
      sorter: true,
      filterIcon: <FilterOutlined />,
      filterDropdown: (
        <FilterDropdown
          variant="range-picker"
          onChange={(dates: Dayjs[]) =>
            setFilters((prevFilters) => ({
              ...prevFilters,
              upload_date_range: dates?.map((date) => date.toISOString()),
            }))
          }
        />
      ),
      render: (value) => dayjs(value).format("MM/DD/YYYY"),
    },
    {
      title: "Customer",
      dataIndex: "cust_id",
      filterIcon: <FilterOutlined />,
      filterDropdown: (
        <FilterDropdown
          variant="multi-select"
          loading={loadingOptions}
          options={customerOptions}
          onChange={(value) => {
            setFilters((prevFilters) => ({
              ...prevFilters,
              dbconnstrs: value,
            }));
          }}
        />
      ),
      render: (value) => {
        return customerOptions.find((opt) => opt.cust_id === value)?.label;
      },
    },
    {
      title: "Uploaded By",
      dataIndex: "uploaded_by",
      filterIcon: <FilterOutlined />,
      filterDropdown: (
        <FilterDropdown
          variant="input"
          onChange={(e) => onChangeUploadedByFilter(e.target.value)}
        />
      ),
    },
    {
      title: "Action",
      dataIndex: "url",
      align: "center",
      width: 240,
      render: (value) => (
        <div className={styles.uploadFileCol}>
          <Button
            shape="circle"
            style={{ border: 0, backgroundColor: "transparent" }}
            icon={<Image preview={false} src={viewDetailIcon} />}
            onClick={() => onOpenUploadFile(value)}
          />
          <Divider
            style={{
              borderColor: "#667075",
              borderWidth: 2,
              marginInline: 0,
            }}
            type="vertical"
          />
          <Button
            shape="circle"
            style={{ border: 0, backgroundColor: "transparent" }}
            icon={<Image preview={false} src={downloadIcon} />}
            onClick={() => onDownloadUploadUrl(value)}
          />
        </div>
      ),
    },
  ];

  const uploadData = [
    {
      uploadDate: "10/18/2024",
      customer: "Care Specialty",
      subsidiary: "Lancer Insurance",
      reportName: "Lorem ipsum dolor sit",
      reportType: "Threat Actor",
      uploadedBy: "eric.huang@omegablck.io",
    },
    {
      uploadDate: "10/17/2024",
      customer: "Cyber Zone",
      subsidiary: "Lancer Insurance",
      reportName: "Lorem ipsum dolor sit",
      reportType: "Threat Actor",
      uploadedBy: "benjamin@omegablck.io",
    },
    {
      uploadDate: "10/15/2024",
      customer: "Cyber Zone",
      subsidiary: "Lancer Insurance",
      reportName: "Lorem ipsum dolor sit",
      reportType: "Threat Actor",
      uploadedBy: "benjamin@omegablck.io",
    },
    {
      uploadDate: "10/17/2024",
      customer: "Cyber Care System Pvt. Ltd.",
      subsidiary: "Truetech Insurance",
      reportName: "Lorem ipsum dolor sit",
      reportType: "Threat Actor",
      uploadedBy: "eric.huang@omegablck.io",
    },
    {
      uploadDate: "10/14/2024",
      customer: "Cyber Care System Pvt. Ltd.",
      subsidiary: "Truetech Insurance",
      reportName: "Lorem ipsum dolor sit",
      reportType: "Threat Actor",
      uploadedBy: "eric.huang@omegablck.io",
    },
    {
      uploadDate: "10/14/2024",
      customer: "Cyber Care System Pvt. Ltd.",
      subsidiary: "Truetech Insurance",
      reportName: "Lorem ipsum dolor sit",
      reportType: "Threat Actor",
      uploadedBy: "eric.huang@omegablck.io",
    },
    {
      uploadDate: "10/14/2024",
      customer: "Cyber Care System Pvt. Ltd.",
      subsidiary: "Truetech Insurance",
      reportName: "Lorem ipsum dolor sit",
      reportType: "Threat Actor",
      uploadedBy: "eric.huang@omegablck.io",
    },
    {
      uploadDate: "10/14/2024",
      customer: "Cyber Care System Pvt. Ltd.",
      subsidiary: "Truetech Insurance",
      reportName: "Lorem ipsum dolor sit",
      reportType: "Threat Actor",
      uploadedBy: "eric.huang@omegablck.io",
    },
    {
      uploadDate: "10/14/2024",
      customer: "Cyber Care System Pvt. Ltd.",
      subsidiary: "Truetech Insurance",
      reportName: "Lorem ipsum dolor sit",
      reportType: "Threat Actor",
      uploadedBy: "eric.huang@omegablck.io",
    },
    {
      uploadDate: "10/14/2024",
      customer: "Cyber Care System Pvt. Ltd.",
      subsidiary: "Truetech Insurance",
      reportName: "Lorem ipsum dolor sit",
      reportType: "Threat Actor",
      uploadedBy: "eric.huang@omegablck.io",
    },
    {
      uploadDate: "10/14/2024",
      customer: "Cyber Care System Pvt. Ltd.",
      subsidiary: "Truetech Insurance",
      reportName: "Lorem ipsum dolor sit",
      reportType: "Threat Actor",
      uploadedBy: "eric.huang@omegablck.io",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const pageSize = 6; // Number of cards per page

  // Get current page <data>
  const startIndex = (currentPage - 1) * pageSize;
  const currentData = uploadData.slice(startIndex, startIndex + pageSize);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Change the pagenation previous and next button
  const itemRender: PaginationProps["itemRender"] = (
    _,
    type,
    originalElement
  ) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Title className={styles.title} level={2}>
          Uploads
        </Title>
      </div>
      <div className={styles.searchContainer}>
        <Title className={styles.panelTitle} level={3}>
          Search Panel
        </Title>
        <Row className={styles.searchOptionContainer} gutter={32}>
          <Col className={styles.fieldContainer} flex={4}>
            <Title level={5} type="secondary">
              Search
            </Title>
            <Input
              size="large"
              placeholder="Enter customer or report name or email"
              className={styles.searchBar}
              prefix={<SearchOutlined />}
            />
          </Col>
          <Col className={styles.fieldContainer} flex={2}>
            <Title level={5} type="secondary">
              Date
            </Title>
            <Select
              defaultValue=""
              placeholder="Till Today"
              className={styles.selectBar}
              options={sort_report_options}
            />
          </Col>
          <Col className={styles.fieldContainer} flex={1}>
            <Title level={5} className={styles.invisible} type="secondary">
              Search
            </Title>
            <Button className={styles.searchBtn} disabled={loadingUploads}>
              <Text className={styles.createBtn}>Search</Text>
            </Button>
          </Col>
          <Col className={styles.fieldContainer} flex={1}>
            <Title level={5} className={styles.invisible} type="secondary">
              Search
            </Title>
            <Button className={styles.clearBtn} disabled={loadingUploads}>
              <Text className={styles.createBtn}>Clear</Text>
            </Button>
          </Col>
        </Row>
        <Row className={styles.OptionContainer} gutter={32}>
          <Col flex={5}>
            <Title className={styles.optionTitle} level={2}>
              List of Uploaded files (15)
            </Title>
          </Col>
          <Col flex={1}>
            <Row className={styles.OptionContainer}>
              <Col className={styles.sortContainer} flex={4}>
                <Title className={styles.sortTitle} level={5} type="secondary">
                  Sort:
                </Title>
                <Select
                  defaultValue=""
                  style={{ flex: 1 }}
                  className={styles.sortBar}
                  placeholder="Till Today"
                  options={sort_report_options}
                />
              </Col>
              <Col className={styles.viewIconContainer} flex={1}>
                <Image
                  width={35}
                  height={35}
                  className={styles.viewIcon}
                  src={isTableView ? viewIcon : viewCardIcon}
                  preview={false}
                  onClick={() => {
                    setIsTableView(!isTableView);
                  }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      {/* Show the reports data with table */}
      <TransitionGroup>
        <CSSTransition
          key={isTableView ? "table" : "cards"}
          classNames="fade"
          timeout={500}
        >
          {isTableView ? (
            <div className={styles.content}>
              <Table
                className={styles.uploadsTable}
                rowClassName={(record, index) =>
                  index % 2 === 0 ? styles.tdStyleOdd : styles.tdStyleEven
                }
                rowKey="upload_id"
                bordered={false}
                columns={columns}
                dataSource={dataSource}
                expandable={{
                  defaultExpandAllRows: true,
                }}
                pagination={{
                  total: totalCount,
                  position: ["bottomCenter"],
                  defaultPageSize: 5,
                  itemRender: (_, type, originalElement) => {
                    if (type === "prev") {
                      return <a>Previous</a>;
                    }
                    if (type === "next") {
                      return <a>Next</a>;
                    }
                    return originalElement;
                  },
                  showSizeChanger: false,
                }}
                loading={loadingUploads}
                onChange={onTableChange}
              />
            </div>
          ) : (
            <div style={{ marginTop: 15 }}>
              <Row gutter={[24, 24]} justify="start">
                {currentData.map((upload, index) => (
                  <Col xs={24} sm={16} md={12} lg={8} key={index}>
                    <Card
                      className={styles.cardContainer}
                      style={{
                        backgroundColor:
                          index % 2 === 0 ? "#282828" : "transparent",
                      }}
                    >
                      <Row justify="space-between" align="middle">
                        <Col>
                          <Text className={styles.subtitle}>Upload Date</Text>
                          <Text className={styles.value}>
                            {upload.uploadDate}
                          </Text>
                        </Col>
                        <Col>
                          <Space>
                            <Button
                              icon={
                                <Image preview={false} src={viewDetailIcon} />
                              }
                              type="link"
                              style={{
                                border: 0,
                                backgroundColor: "transparent",
                              }}
                            />
                            <Divider
                              style={{
                                borderColor: "#667075",
                                borderWidth: 2,
                                marginInline: 0,
                              }}
                              type="vertical"
                            />
                            <Button
                              icon={
                                <Image preview={false} src={downloadIcon} />
                              }
                              type="link"
                              style={{
                                border: 0,
                                backgroundColor: "transparent",
                              }}
                            />
                          </Space>
                        </Col>
                      </Row>
                      <Divider />
                      <Row gutter={[16, 16]}>
                        <Col xs={24} sm={16}>
                          <Space direction="vertical">
                            <Text className={styles.subtitle}>Customers</Text>
                            <Text className={styles.value}>
                              {upload.customer}
                            </Text>
                          </Space>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={24} sm={12}>
                          <Space direction="vertical">
                            <Text className={styles.subtitle}>Uploaded by</Text>
                            <Text className={styles.value}>
                              {upload.uploadedBy}
                            </Text>
                          </Space>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
              </Row>

              <div className={styles.cardPagination}>
                <CardPagination
                  current={currentPage}
                  pageSize={pageSize}
                  total={uploadData.length}
                  onChange={handlePageChange}
                  itemRender={itemRender}
                  responsive
                />
              </div>
            </div>
          )}
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export { AdminUploads };
