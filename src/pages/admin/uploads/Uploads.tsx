import { useState, useEffect, useCallback } from "react";
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
import { Button, Breadcrumb, Table, FilterDropdown } from "@/components";
import type { TableColumnType } from "@/components";

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

const AdminUploads = () => {
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

  const uploadData = [
    {
      cust_id: "org_YuEJVWTjgRqJrUVJ",
      is_active: true,
      upload_id: "4d5fb3c5-3aa9-4e00-8283-ed33b66dd411",
      report_name: "vlad test",
      report_type: "22e48ca3-d670-4de9-a67b-a8aac5cf2704",
      subsidiary_id: "27598dd2-11f0-4503-882d-3bee454f3c85",
      upload_date_time: "2024-10-18T13:05:23.431Z",
      uploaded_by: "vlad.berns@omegablack.io",
      url: "https://devomegablack.blob.core.windows.net/corespecialty/1729256721441.pdf",
    },
    {
      cust_id: "org_YuEJVWTjgRqJrUVJ",
      is_active: true,
      upload_id: "4d5fb3c5-3aa9-4e00-8283-ed33b66dd411",
      report_name: "vlad test",
      report_type: "22e48ca3-d670-4de9-a67b-a8aac5cf2704",
      subsidiary_id: "27598dd2-11f0-4503-882d-3bee454f3c85",
      upload_date_time: "2024-10-18T13:05:23.431Z",
      uploaded_by: "vlad.berns@omegablack.io",
      url: "https://devomegablack.blob.core.windows.net/corespecialty/1729256721441.pdf",
    },
    {
      cust_id: "org_YuEJVWTjgRqJrUVJ",
      is_active: true,
      upload_id: "4d5fb3c5-3aa9-4e00-8283-ed33b66dd411",
      report_name: "vlad test",
      report_type: "22e48ca3-d670-4de9-a67b-a8aac5cf2704",
      subsidiary_id: "27598dd2-11f0-4503-882d-3bee454f3c85",
      upload_date_time: "2024-10-18T13:05:23.431Z",
      uploaded_by: "vlad.berns@omegablack.io",
      url: "https://devomegablack.blob.core.windows.net/corespecialty/1729256721441.pdf",
    },
    {
      cust_id: "org_YuEJVWTjgRqJrUVJ",
      is_active: true,
      upload_id: "4d5fb3c5-3aa9-4e00-8283-ed33b66dd411",
      report_name: "vlad test",
      report_type: "22e48ca3-d670-4de9-a67b-a8aac5cf2704",
      subsidiary_id: "27598dd2-11f0-4503-882d-3bee454f3c85",
      upload_date_time: "2024-10-18T13:05:23.431Z",
      uploaded_by: "vlad.berns@omegablack.io",
      url: "https://devomegablack.blob.core.windows.net/corespecialty/1729256721441.pdf",
    },
    {
      cust_id: "org_YuEJVWTjgRqJrUVJ",
      is_active: true,
      upload_id: "4d5fb3c5-3aa9-4e00-8283-ed33b66dd411",
      report_name: "vlad test",
      report_type: "22e48ca3-d670-4de9-a67b-a8aac5cf2704",
      subsidiary_id: "27598dd2-11f0-4503-882d-3bee454f3c85",
      upload_date_time: "2024-10-18T13:05:23.431Z",
      uploaded_by: "vlad.berns@omegablack.io",
      url: "https://devomegablack.blob.core.windows.net/corespecialty/1729256721441.pdf",
    },
    {
      cust_id: "org_YuEJVWTjgRqJrUVJ",
      is_active: true,
      upload_id: "4d5fb3c5-3aa9-4e00-8283-ed33b66dd411",
      report_name: "vlad test",
      report_type: "22e48ca3-d670-4de9-a67b-a8aac5cf2704",
      subsidiary_id: "27598dd2-11f0-4503-882d-3bee454f3c85",
      upload_date_time: "2024-10-18T13:05:23.431Z",
      uploaded_by: "vlad.berns@omegablack.io",
      url: "https://devomegablack.blob.core.windows.net/corespecialty/1729256721441.pdf",
    },
    {
      cust_id: "org_YuEJVWTjgRqJrUVJ",
      is_active: true,
      upload_id: "4d5fb3c5-3aa9-4e00-8283-ed33b66dd411",
      report_name: "vlad test",
      report_type: "22e48ca3-d670-4de9-a67b-a8aac5cf2704",
      subsidiary_id: "27598dd2-11f0-4503-882d-3bee454f3c85",
      upload_date_time: "2024-10-18T13:05:23.431Z",
      uploaded_by: "vlad.berns@omegablack.io",
      url: "https://devomegablack.blob.core.windows.net/corespecialty/1729256721441.pdf",
    },
    {
      cust_id: "org_YuEJVWTjgRqJrUVJ",
      is_active: true,
      upload_id: "4d5fb3c5-3aa9-4e00-8283-ed33b66dd411",
      report_name: "vlad test",
      report_type: "22e48ca3-d670-4de9-a67b-a8aac5cf2704",
      subsidiary_id: "27598dd2-11f0-4503-882d-3bee454f3c85",
      upload_date_time: "2024-10-18T13:05:23.431Z",
      uploaded_by: "vlad.berns@omegablack.io",
      url: "https://devomegablack.blob.core.windows.net/corespecialty/1729256721441.pdf",
    },
    {
      cust_id: "org_YuEJVWTjgRqJrUVJ",
      is_active: true,
      upload_id: "4d5fb3c5-3aa9-4e00-8283-ed33b66dd411",
      report_name: "vlad test",
      report_type: "22e48ca3-d670-4de9-a67b-a8aac5cf2704",
      subsidiary_id: "27598dd2-11f0-4503-882d-3bee454f3c85",
      upload_date_time: "2024-10-18T13:05:23.431Z",
      uploaded_by: "vlad.berns@omegablack.io",
      url: "https://devomegablack.blob.core.windows.net/corespecialty/1729256721441.pdf",
    },
    {
      cust_id: "org_YuEJVWTjgRqJrUVJ",
      is_active: true,
      upload_id: "4d5fb3c5-3aa9-4e00-8283-ed33b66dd411",
      report_name: "vlad test",
      report_type: "22e48ca3-d670-4de9-a67b-a8aac5cf2704",
      subsidiary_id: "27598dd2-11f0-4503-882d-3bee454f3c85",
      upload_date_time: "2024-10-18T13:05:23.431Z",
      uploaded_by: "vlad.berns@omegablack.io",
      url: "https://devomegablack.blob.core.windows.net/corespecialty/1729256721441.pdf",
    },
    {
      cust_id: "org_YuEJVWTjgRqJrUVJ",
      is_active: true,
      upload_id: "4d5fb3c5-3aa9-4e00-8283-ed33b66dd411",
      report_name: "vlad test",
      report_type: "22e48ca3-d670-4de9-a67b-a8aac5cf2704",
      subsidiary_id: "27598dd2-11f0-4503-882d-3bee454f3c85",
      upload_date_time: "2024-10-18T13:05:23.431Z",
      uploaded_by: "vlad.berns@omegablack.io",
      url: "https://devomegablack.blob.core.windows.net/corespecialty/1729256721441.pdf",
    },
  ];

  const columns: TableColumnType[] = [
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
      title: "Upload File",
      dataIndex: "url",
      align: "center",
      width: 240,
      render: (value) => (
        <div className={styles.uploadFileCol}>
          <Button
            icon={<EyeOutlined />}
            onClick={() => onOpenUploadFile(value)}
          />
          <Button
            icon={<DownloadOutlined />}
            onClick={() => onDownloadUploadUrl(value)}
          />
        </div>
      ),
    },
  ];

  const breadcrumbItems = [
    {
      title: <HomeOutlined />,
      href: "/dashboard",
    },
    { title: "Admin" },
    { title: "Uploads" },
  ];

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Breadcrumb items={breadcrumbItems} linkRouter />
      </div>
      <div className={styles.content}>
        <Table
          className={styles.uploadsTable}
          rowKey="upload_id"
          bordered={false}
          columns={columns}
          dataSource={uploadData}
          expandable={{
            defaultExpandAllRows: true,
          }}
          pagination={{
            total: totalCount,
            showTotal: (total) => `Total ${total} Uploads`,
          }}
          loading={loadingUploads}
          onChange={onTableChange}
        />
      </div>
    </div>
  );
};

export { AdminUploads };
