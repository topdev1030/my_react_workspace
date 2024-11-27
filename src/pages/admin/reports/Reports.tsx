import { useState, useEffect, useCallback, useMemo } from "react";
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
import type { TablePaginationConfig } from "antd/es/table/interface";
import type { UploadRequestOption } from "rc-upload/lib/interface";

import {
  HomeOutlined,
  FilePdfOutlined,
  SearchOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import debounce from "debounce";
import dayjs, { Dayjs } from "dayjs";

import React from "react";

// components
import {
  Button,
  Input,
  Modal,
  PdfViewerV2,
  Table,
  Upload,
  FilterDropdown,
  Popconfirm,
  Typography,
} from "@/components";
import type { TableColumnType } from "@/components";

// services
import {
  commonService,
  reportService,
  azureService,
  hookService,
} from "@/services";
import type { UploadFilePayload } from "@/services";

// redux
import { useAppSelector } from "@/redux";
import { selectAccessToken, selectUserInfo } from "@/redux/auth";

// helpers
import { downloadFile, getStorgeHostUrl } from "@/helpers";

// types
import { Option, Report, Pagination } from "@/types";
import { AllReportsFilters } from "@/services/report";
import {
  CustomerOption,
  SubsidiaryOption,
  CreateReportFormValues,
} from "./Reports.types";

// Import TransitionGroup for animation
import { TransitionGroup, CSSTransition } from "react-transition-group";

// constants
import { DEFAULT_PAGE_SIZE } from "@/components/atoms/table";
import { DEBOUNCE_WAIT, formLayout } from "./Reports.constants";

// styles
import { useStyles } from "./Reports.styles";
import axios from "axios";
import config from "@/config";
import { defaultRequestHeaders } from "@/constants";

// Icon Imports
import viewIcon from "../../../static/images/view.png";
import viewCardIcon from "../../../static/images/view_expand.png";
import viewDetailIcon from "../../../static/images/viewIcon.png";
import deleteIcon from "../../../static/images/deleteIcon.png";
import downloadIcon from "../../../static/images/downloadIcon.png";
import { FooterBar } from "@/components/organisms/footer";

const { Title, Text } = Typography;
const { Dragger } = Upload;

const AdminReports = () => {
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
  const [subsidiariesOptions, setSubsidiariesOptions] = useState<
    SubsidiaryOption[]
  >([]);
  const [reportTypeOptions, setReportTypeOptions] = useState<Option[]>([]);
  const [filters, setFilters] = useState<AllReportsFilters>({});
  const [pagination, setPagination] = useState<Pagination>({
    offset: 0,
    limit: DEFAULT_PAGE_SIZE,
  });
  const [loadingReports, setLoadingReports] = useState<boolean>(false);
  const [creatingReport, setCreatingReport] = useState<boolean>(false);
  const [loadingOptions, setLoadingOptions] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<Report[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [pdfUrl, setPdfUrl] = useState<string>("");
  const [currentCustomerOption, setCurrentCustomerOption] =
    useState<CustomerOption>();
  const [openPdfPreviewModal, setOpenPdfPreviewModal] =
    useState<boolean>(false);
  const [openCreateReportModal, setOpenCreateReportModal] =
    useState<boolean>(false);

  const [form] = Form.useForm();

  const accessToken = useAppSelector(selectAccessToken);
  const userInfo = useAppSelector(selectUserInfo);

  const styles = useStyles();
  const getReportFilters = useCallback(() => {
    const { dbconnstrs = [] } = filters;
    if (dbconnstrs.length > 0) return filters;
    return {
      ...filters,
      dbconnstrs: customerOptions.map(({ value }) => value),
    };
  }, [filters, customerOptions]);

  const connStr2CustID = useCallback(
    (connStr: string) => {
      const customer = customerOptions.find(({ value }) => value === connStr);
      return customer?.cust_id || "";
    },
    [customerOptions]
  );

  const fetchOptions = async () => {
    setLoadingOptions(true);
    try {
      // load customer options
      const customers = await commonService.getCustomers(accessToken);
      const newCustomerOptions = customers.map(
        ({ cust_id, storage_container_name, dbconnstr, customer_name }) => ({
          cust_id,
          storage_container_name,
          label: customer_name,
          value: dbconnstr,
        })
      );
      setCustomerOptions(newCustomerOptions);

      // load subsidiaries options
      const subsidiaries = await commonService.getSubsidiaries({
        token: accessToken,
      });
      const newSubsidiaries = subsidiaries.map(
        ({ id, org_id, subsidiary_name }) => ({
          org_id,
          label: subsidiary_name,
          value: id,
        })
      );
      setSubsidiariesOptions(newSubsidiaries);

      // load report types
      const reportTypes = await commonService.getReportTypes(accessToken);
      const newReportTypeOptions = reportTypes.map(
        ({ report_type_id, report_type }) => ({
          value: report_type_id,
          label: report_type,
        })
      );
      setReportTypeOptions(newReportTypeOptions);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingOptions(false);
    }
  };

  const fetchReports = async () => {
    setLoadingReports(true);
    try {
      // load reports
      const { reports, metadata } = await reportService.getAllReports({
        token: accessToken,
        filters: getReportFilters(),
        ...pagination,
      });
      setDataSource(reports);
      setTotalCount(metadata.total);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingReports(false);
    }
  };

  const onChangeReportNameFilter = debounce((value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      report_name: value,
    }));
  }, DEBOUNCE_WAIT);

  const onChangeUploadedByFilter = debounce((value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      uploaded_by: value,
    }));
  }, DEBOUNCE_WAIT);

  const onDelete = async ({ cust_id, report_id }: Report) => {
    try {
      // delete report & reload table
      await reportService.deleteReport({
        cust_id,
        report_id,
        token: accessToken,
      });
      await fetchReports();

      // notify message
      message.success("A reported was deleted successfully.");
    } catch (error) {
      console.log(error);
      message.error("Failed to delete a report, try again later.");
    }
  };

  const onTableChange = ({ current, pageSize }: TablePaginationConfig) => {
    if (current && pageSize) {
      setPagination({
        offset: (current - 1) * pageSize,
        limit: pageSize,
      });
    }
  };

  const onOpenPDFReportPreview = async (url: string) => {
    try {
      // generate report pdf url
      const { sasToken } = await hookService.getSASToken({
        token: accessToken,
      });
      const reportPdfUrl = `${url}?${sasToken}`;

      // update pdf url
      setPdfUrl(reportPdfUrl);
      setOpenPdfPreviewModal(true);
    } catch (error) {
      console.log(error);
    }
  };
  const onDownloadPDFReport = async (url: string) => {
    try {
      // generate report pdf url
      const { sasToken } = await hookService.getSASToken({
        token: accessToken,
      });
      const reportPdfUrl = `${url}?${sasToken}`;
      const findName = dataSource?.find((item) => item?.url === url);
      let reportName = "";

      if (findName?.report_name) {
        reportName = findName.report_name;
        reportName = reportName.replace(/ /g, "_");
      }
      // update pdf url
      downloadFile(reportPdfUrl, reportName || "report.pdf");
    } catch (error) {
      console.log(error);
    }
  };

  const onCustomRequest = async ({
    file,
    onProgress,
    onSuccess,
    onError,
  }: UploadRequestOption) => {
    try {
      if (!currentCustomerOption) return;

      // get storage container name
      const { storage_container_name } = currentCustomerOption;

      // generate blob name
      const fileName = (file as File).name;
      const extension = fileName.slice(fileName.lastIndexOf(".") + 1);
      const blobName = `${dayjs().valueOf()}.${extension}`;

      // upload blob to azure storage
      const payload: UploadFilePayload = {
        file: file as Blob,
        blobName,
        containerName: storage_container_name,
        token: accessToken,
        onProgress: (percent) => onProgress?.({ percent }),
      };
      await azureService.uploadFile(payload);
      onSuccess?.(null);

      // update url field value
      form.setFieldsValue({
        url: `${getStorgeHostUrl()}/${storage_container_name}/${blobName}`,
      });
    } catch (error: any) {
      onError?.(error);
      message.error("Failed to upload a file, try again!");
    }
  };

  const sendMessageToAllUsers = async () => {
    try {
      console.log(
        "sendMessageToAllUserssendMessageToAllUserssendMessageToAllUsers"
      );
      const currentdate = new Date();
      const dataToSave = {
        title: "New report has been uploaded",
        body: "A new report has been uploaded to the secure portal.",
      };

      const url = `${config.api.baseUrl}/upload/sendNotification`;
      const response = await axios.post(
        url,
        {
          data: dataToSave,
          timestamp: currentdate,
        },
        {
          headers: {
            ...defaultRequestHeaders,
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("Alert added successfully!", response.data, response.status);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  const onSubmitCreateReportForm = async (values: CreateReportFormValues) => {
    setCreatingReport(true);

    try {
      await reportService.createReport({
        ...values,
        cust_id: connStr2CustID(values.cust_id),
        upload_date_time: dayjs().toISOString(),
        uploaded_by: userInfo?.email,
        token: accessToken,
      });
      await fetchReports();

      // reset form & close modal
      form.resetFields();
      setOpenCreateReportModal(false);

      // notify message
      message.success("A reported was created successfully.");
      sendMessageToAllUsers();
    } catch (error) {
      console.log(error);
      message.error("Failed to create a report, try again later.");
    } finally {
      setCreatingReport(false);
    }
  };

  const onChangeReportCustomer = (newValue: string) => {
    const customer = customerOptions.find(({ value }) => value === newValue);
    setCurrentCustomerOption(customer);
    form.resetFields(["subsidiary_id", "url"]);
  };

  const onResetCreateReportForm = () => {
    form.resetFields();
  };

  const onCloseCreateReportModal = () => {
    setOpenCreateReportModal(false);
    form.resetFields();
  };

  useEffect(() => {
    if (accessToken) {
      fetchOptions();
    }
  }, [accessToken]);

  useEffect(() => {
    if (accessToken) {
      fetchReports();
    }
  }, [accessToken, customerOptions, filters, pagination]);

  const filteredSubsidiariesOptions = useMemo(
    () =>
      subsidiariesOptions.filter(
        ({ org_id }) => org_id === currentCustomerOption?.cust_id
      ),
    [subsidiariesOptions, currentCustomerOption]
  );

  dataSource.forEach((data) =>
    console.log(new Date(data.upload_date_time).toISOString().split("T")[0])
  );

  const columns: TableColumnType[] = [
    {
      title: "Upload Date",
      dataIndex: "upload_date_time",
      width: 200,
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
      render: (value) => {
        return (
          <div className={styles.tdFirstCell}>
            {dayjs(value).format("MM/DD/YYYY")}
          </div>
        );
      },
    },
    {
      title: "Customers",
      dataIndex: "cust_id",

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
        return (
          <div>
            {customerOptions.find((opt) => opt.cust_id === value)?.label}
          </div>
        );
      },
    },
    {
      title: "Subsidiary",
      dataIndex: "subsidiary_id",

      filterDropdown: (
        <FilterDropdown
          variant="multi-select"
          loading={loadingOptions}
          options={subsidiariesOptions}
          onChange={(value) => {
            setFilters((prevFilters) => ({
              ...prevFilters,
              subsidiaries: value,
            }));
          }}
        />
      ),
      render: (value) => {
        return (
          <div>
            {subsidiariesOptions.find((opt) => opt.value === value)?.label}
          </div>
        );
      },
    },
    {
      title: "Report Name",
      dataIndex: "report_name",

      filterDropdown: (
        <FilterDropdown
          variant="input"
          onChange={(e) => onChangeReportNameFilter(e.target.value)}
        />
      ),
      render: (value) => {
        return <div>{value}</div>;
      },
    },
    {
      title: "Report Type",
      dataIndex: "report_type",
      width: 320,

      filterDropdown: (
        <FilterDropdown
          variant="multi-select"
          loading={loadingOptions}
          options={reportTypeOptions}
          onChange={(value) =>
            setFilters((prevFilters) => ({
              ...prevFilters,
              report_types: value,
            }))
          }
        />
      ),
      render: (value) => {
        return (
          <div>
            {reportTypeOptions.find((opt) => opt.value === value)?.label}
          </div>
        );
      },
    },

    {
      title: "Uploaded By",
      dataIndex: "uploaded_by",
      width: 200,

      filterDropdown: (
        <FilterDropdown
          variant="input"
          onChange={(e) => onChangeUploadedByFilter(e.target.value)}
        />
      ),
      render: (value) => {
        return <div>{value}</div>;
      },
    },
    {
      title: "Action",
      dataIndex: "url",
      align: "center",
      width: 240,
      render: (value, record) => (
        <div className={styles.tdIconStyle}>
          <div className={styles.reportPdfCol}>
            <Button
              style={{ border: 0, backgroundColor: "transparent" }}
              icon={<Image preview={false} src={viewDetailIcon} />}
              onClick={() => onOpenPDFReportPreview(value)}
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
              style={{ border: 0, backgroundColor: "transparent" }}
              icon={<Image preview={false} src={downloadIcon} />}
              onClick={() => onDownloadPDFReport(value)}
            />
            <Divider
              style={{
                borderColor: "#667075",
                borderWidth: 2,
                marginInline: 0,
              }}
              type="vertical"
            />
            <Popconfirm
              title="Delete a report"
              description="Are you sure to delete this report?"
              placement="topRight"
              okText="Yes"
              cancelText="No"
              onConfirm={() => onDelete(record as Report)}
            >
              <Button
                shape="circle"
                style={{ border: 0, backgroundColor: "transparent" }}
                icon={<Image preview={false} src={deleteIcon} />}
              />
            </Popconfirm>
          </div>
        </div>
      ),
    },
  ];

  const reportData = [
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
  const currentData = reportData.slice(startIndex, startIndex + pageSize);

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
          Reports
        </Title>
        <Button
          className={styles.createReportBtn}
          disabled={loadingReports}
          icon={<PlusOutlined />}
          // onClick={() => sendMessageToAllUsers()}
          onClick={() => setOpenCreateReportModal(true)}
        >
          <Text className={styles.createBtn}>Create a Report</Text>
        </Button>
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
          <Col className={styles.fieldContainer} flex={3}>
            <Title level={5} type="secondary">
              Date:
            </Title>
            <Select
              defaultValue=""
              placeholder="Till Today"
              className={styles.selectBar}
              options={sort_report_options}
            />
          </Col>
          <Col className={styles.fieldContainer} flex={3}>
            <Title level={5} type="secondary">
              Report Type
            </Title>
            <Select
              defaultValue=""
              className={styles.selectBar}
              placeholder="Select"
              options={sort_report_options}
            />
          </Col>
          <Col className={styles.fieldContainer} flex={2}>
            <Title level={5} className={styles.invisible} type="secondary">
              Search
            </Title>
            <Button className={styles.searchBtn} disabled={loadingReports}>
              <Text className={styles.createBtn}>Search</Text>
            </Button>
          </Col>
          <Col className={styles.fieldContainer} flex={2}>
            <Title level={5} className={styles.invisible} type="secondary">
              Search
            </Title>
            <Button className={styles.clearBtn} disabled={loadingReports}>
              <Text className={styles.createBtn}>Clear</Text>
            </Button>
          </Col>
        </Row>
        <Row className={styles.OptionContainer} gutter={32}>
          <Col flex={5}>
            <Title className={styles.optionTitle} level={2}>
              List of Reports (24)
            </Title>
          </Col>
          <Col style={{ marginTop: 15 }} flex={1}>
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
                className={styles.reportsTable}
                rowClassName={(record, index) =>
                  index % 2 === 0 ? styles.tdStyleOdd : styles.tdStyleEven
                }
                rowKey="report_id"
                bordered={false}
                columns={columns}
                dataSource={dataSource}
                pagination={{
                  total: totalCount,
                  position: ["bottomCenter"],
                  defaultPageSize: 5,
                  itemRender: (page, type, originalElement) => {
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
                loading={loadingReports}
                onChange={onTableChange}
              />
            </div>
          ) : (
            <div style={{ marginTop: 15 }}>
              <Row gutter={[24, 24]} justify="start">
                {currentData.map((report, index) => (
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
                            {report.uploadDate}
                          </Text>
                        </Col>
                        <Col>
                          <Space>
                            <Button
                              icon={
                                <Image
                                  preview={false}
                                  style={{ backgroundColor: "transparent" }}
                                  src={viewDetailIcon}
                                />
                              }
                              type="link"
                              style={{ color: "#fff" }}
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
                                <Image
                                  preview={false}
                                  style={{ backgroundColor: "transparent" }}
                                  src={downloadIcon}
                                />
                              }
                              type="link"
                              style={{ color: "#fff" }}
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
                                <Image
                                  style={{ backgroundColor: "transparent" }}
                                  preview={false}
                                  src={deleteIcon}
                                />
                              }
                              type="link"
                              danger
                            />
                          </Space>
                        </Col>
                      </Row>
                      <Divider
                        style={{
                          borderColor: index % 2 === 0 ? "#000" : "#282828",
                        }}
                      />
                      <Row gutter={[16, 16]}>
                        <Col xs={24} sm={16}>
                          <Space direction="vertical">
                            <Text className={styles.subtitle}>Customers</Text>
                            <Text className={styles.value}>
                              {report.customer}
                            </Text>
                          </Space>
                        </Col>
                        <Col xs={24} sm={12}>
                          <Space direction="vertical">
                            <Text className={styles.subtitle}>Report Name</Text>
                            <Text className={styles.value}>
                              {report.reportName}
                            </Text>
                          </Space>
                        </Col>
                        <Col xs={24} sm={12}>
                          <Space direction="vertical">
                            <Text className={styles.subtitle}>Subsidiary</Text>
                            <Text className={styles.value}>
                              {report.subsidiary}
                            </Text>
                          </Space>
                        </Col>
                        <Col xs={24} sm={12}>
                          <Space direction="vertical">
                            <Text className={styles.subtitle}>Uploaded by</Text>
                            <Text className={styles.value}>
                              {report.uploadedBy}
                            </Text>
                          </Space>
                        </Col>
                        <Col xs={24} sm={12}>
                          <Space direction="vertical">
                            <Text className={styles.subtitle}>Report Type</Text>
                            <Text className={styles.value}>
                              {report.reportType}
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
                  total={reportData.length}
                  onChange={handlePageChange}
                  itemRender={itemRender}
                  responsive
                />
              </div>
            </div>
          )}
        </CSSTransition>
      </TransitionGroup>

      <FooterBar />

      {/* Show the reports data with cards */}

      {/* Create Report Modal */}
      <Modal
        className={styles.createReportModal}
        open={openCreateReportModal}
        onCancel={onCloseCreateReportModal}
        footer={null}
        title={<Text type="secondary">NEW REPORT</Text>}
      >
        <Form
          {...formLayout}
          className={styles.createReportForm}
          form={form}
          name="create-report"
          onFinish={onSubmitCreateReportForm}
        >
          <Title className={styles.formTitle}>Create a Report</Title>
          <Row gutter={30}>
            <Col sm={24}>
              <Form.Item
                name="report_name"
                label="Report Name"
                rules={[{ required: true }]}
              >
                <Input placeholder="Type in" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={30}>
            <Col sm={24}>
              <Form.Item
                name="report_type"
                label="Report Type"
                rules={[{ required: true }]}
              >
                <Select
                  options={reportTypeOptions}
                  style={{ cursor: "pointer" }}
                  showSearch
                  allowClear
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={30}>
            <Col sm={24}>
              <Form.Item
                name="cust_id"
                label="Customer"
                rules={[{ required: true }]}
              >
                <Select
                  options={customerOptions}
                  onChange={onChangeReportCustomer}
                  showSearch
                  allowClear
                />
              </Form.Item>
            </Col>
          </Row>
          {filteredSubsidiariesOptions.length > 0 && (
            <Row gutter={30}>
              <Col sm={24}>
                <Form.Item name="subsidiary_id" label="Subsidiary">
                  <Select
                    options={filteredSubsidiariesOptions}
                    style={{ cursor: "pointer" }}
                    showSearch
                    allowClear
                    disabled={!currentCustomerOption}
                  />
                </Form.Item>
              </Col>
            </Row>
          )}
          <Row gutter={30}>
            <Col sm={24}>
              <Form.Item
                name="url"
                label="Report File"
                rules={[{ required: true }]}
              >
                <Dragger
                  className={styles.reportFileDragger}
                  multiple={false}
                  name="file"
                  maxCount={1}
                  accept=".pdf,.doc,.docx,.csv"
                  customRequest={onCustomRequest}
                  disabled={!currentCustomerOption}
                >
                  <p
                    className="ant-upload-text"
                    style={{
                      color: "#498dce",
                      marginBottom: 15,
                      fontSize: "10px !important",
                    }}
                  >
                    Drag and drop your file here or click to browse
                  </p>
                  <p className="ant-upload-drag-icon">
                    <FilePdfOutlined />
                  </p>
                  <p className="ant-upload-hint">
                    Support file type: .pdf .docs .csv
                  </p>
                </Dragger>
              </Form.Item>
            </Col>
          </Row>
          <div className={styles.formActions}>
            <Button
              htmlType="button"
              size="large"
              style={{ backgroundColor: "transparent" }}
              onClick={onResetCreateReportForm}
            >
              Cancel
            </Button>
            <Button
              style={{ backgroundColor: "#498dce" }}
              htmlType="submit"
              size="large"
              loading={creatingReport}
            >
              Submit
            </Button>
          </div>
        </Form>
      </Modal>

      {/* Pdf Preview Modal */}
      <Modal
        className={`${styles.pdfPreviewModal} pdfViewerV2Button`}
        open={openPdfPreviewModal}
        onCancel={() => setOpenPdfPreviewModal(false)}
        footer={null}
      >
        <PdfViewerV2 file={pdfUrl} />
      </Modal>
    </div>
  );
};

export { AdminReports };
