import { useState, useEffect, useMemo } from "react";
import {
  HomeOutlined,
  EyeOutlined,
  DownloadOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import type {
  TablePaginationConfig,
  SorterResult,
} from "antd/es/table/interface";
import debounce from "debounce";
import dayjs, { Dayjs } from "dayjs";

// components
import {
  Button,
  Breadcrumb,
  Table,
  FilterDropdown,
  Modal,
  PdfViewerV2,
} from "@/components";

import type { TableColumnType } from "@/components";

// helpers
import { downloadFile } from "@/helpers";

// services
import { commonService, reportService, hookService } from "@/services";

// redux
import { useAppSelector } from "@/redux";
import { selectAccessToken, selectUserInfo } from "@/redux/auth";

// types
import { Option, Report, Pagination } from "@/types";
import { CustomerReportsFilters } from "@/services/report";

// constants
import { DEFAULT_PAGE_SIZE } from "@/components/atoms/table";
import { DEBOUNCE_WAIT, DEFAULT_SORTER } from "./Reports.constants";

// styles
import { useStyles } from "./Reports.styles";

const CustomerReports = () => {
  const [subsidiariesOptions, setSubsidiariesOptions] = useState<Option[]>([]);
  const [reportTypeOptions, setReportTypeOptions] = useState<Option[]>([]);
  const [filters, setFilters] = useState<CustomerReportsFilters>({});
  const [pagination, setPagination] = useState<Pagination>({
    offset: 0,
    limit: DEFAULT_PAGE_SIZE,
    sort: DEFAULT_SORTER,
  });
  const [loadingReports, setLoadingReports] = useState<boolean>(false);
  const [loadingOptions, setLoadingOptions] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<Report[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [pdfUrl, setPdfUrl] = useState<string>("");
  const [openPdfPreviewModal, setOpenPdfPreviewModal] =
    useState<boolean>(false);

  const accessToken = useAppSelector(selectAccessToken);
  const userInfo = useAppSelector(selectUserInfo);

  const styles = useStyles();

  const getReportSorter = (
    sorter: SorterResult<Report> | SorterResult<Report>[]
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
      if (!userInfo) return;

      // load subsidiaries options
      const subsidiaries = await commonService.getSubsidiaries({
        token: accessToken,
        cust_id: userInfo?.cust_id,
      });
      const newSubsidiaries = subsidiaries.map(({ id, subsidiary_name }) => ({
        label: subsidiary_name,
        value: id,
      }));
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
      const { reports, metadata } = await reportService.getCustomerReports({
        token: accessToken,
        cust_id: userInfo?.cust_id || "",
        filters,
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

  const onTableChange = (
    { current, pageSize }: TablePaginationConfig,
    __,
    sorter: SorterResult<Report> | SorterResult<Report>[]
  ) => {
    if (current && pageSize) {
      setPagination({
        offset: (current - 1) * pageSize,
        limit: pageSize,
        sort: getReportSorter(sorter),
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

      // download report pdf
      downloadFile(reportPdfUrl, "report.pdf");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (accessToken && userInfo) {
      fetchOptions();
    }
  }, [accessToken, userInfo]);

  useEffect(() => {
    if (accessToken && userInfo) {
      fetchReports();
    }
  }, [accessToken, userInfo, filters, pagination]);

  const columns: TableColumnType[] = [
    {
      title: "Subsidiary",
      dataIndex: "subsidiary_id",
      filterIcon: <FilterOutlined />,
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
        return subsidiariesOptions.find((opt) => opt.value === value)?.label;
      },
    },
    {
      title: "Report Name",
      dataIndex: "report_name",
      sorter: true,
      filterIcon: <FilterOutlined />,
      filterDropdown: (
        <FilterDropdown
          variant="input"
          onChange={(e) => onChangeReportNameFilter(e.target.value)}
        />
      ),
    },
    {
      title: "Report Type",
      dataIndex: "report_type",
      sorter: true,
      filterIcon: <FilterOutlined />,
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
        return reportTypeOptions.find((opt) => opt.value === value)?.label;
      },
    },
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
      title: "Report Pdf",
      dataIndex: "url",
      align: "center",
      width: 240,
      render: (value) => (
        <div className={styles.reportPdfCol}>
          <Button
            icon={<EyeOutlined />}
            onClick={() => onOpenPDFReportPreview(value)}
          />
          <Button
            icon={<DownloadOutlined />}
            onClick={() => onDownloadPDFReport(value)}
          />
        </div>
      ),
    },
  ];

  const breadcrumbItems = useMemo(
    () => [
      {
        title: <HomeOutlined />,
        href: "/dashboard",
      },
      { title: "Customer" },
      { title: "Reports" },
      { title: userInfo?.org_name },
    ],
    [userInfo]
  );

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Breadcrumb items={breadcrumbItems} linkRouter />
      </div>
      <div className={styles.content}>
        <Table
          className={styles.reportsTable}
          rowKey="report_id"
          bordered={false}
          columns={columns}
          dataSource={dataSource}
          expandable={{
            defaultExpandAllRows: true,
          }}
          pagination={{
            total: totalCount,
            showTotal: (total) => `Total ${total} Reports`,
          }}
          loading={loadingReports}
          onChange={onTableChange}
        />
      </div>

      {/* Pdf Preview Modal */}
      <Modal
        className={styles.pdfPreviewModal}
        open={openPdfPreviewModal}
        onCancel={() => setOpenPdfPreviewModal(false)}
        footer={null}
      >
        <PdfViewerV2 file={pdfUrl} />
      </Modal>
    </div>
  );
};

export { CustomerReports };
