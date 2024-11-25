import { useState, useEffect } from "react";
import {
  HomeOutlined,
  EyeOutlined,
  DownloadOutlined,
  FilterOutlined,
  FilePdfOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Form, message } from "antd";
import type {
  TablePaginationConfig,
  SorterResult,
} from "antd/es/table/interface";
import type { UploadFile } from "antd/lib/upload/interface";
import type { UploadRequestOption } from "rc-upload/lib/interface";
import debounce from "debounce";
import dayjs, { Dayjs } from "dayjs";

// components
import {
  Button,
  Breadcrumb,
  Upload as Uploader,
  Modal,
  Table,
  FilterDropdown,
  Typography,
} from "@/components";
import type { TableColumnType } from "@/components";

// helpers
import { downloadFile, getStorgeHostUrl } from "@/helpers";

// services
import { uploadService, azureService, hookService } from "@/services";
import type { UploadFilePayload } from "@/services";

// redux
import { useAppSelector } from "@/redux";
import { selectAccessToken, selectUserInfo } from "@/redux/auth";

// types
import { Upload, Pagination } from "@/types";
import { CustomerUploadsFilters } from "@/services/upload";

// constants
import { DEFAULT_PAGE_SIZE } from "@/components/atoms/table";
import {
  DEBOUNCE_WAIT,
  DEFAULT_SORTER,
  formLayout,
  allowedFileTypes,
} from "./Uploads.constants";

// styles
import { useStyles } from "./Uploads.styles";

const { Title } = Typography;
const { Dragger } = Uploader;

const CustomerUploads = () => {
  const [filters, setFilters] = useState<CustomerUploadsFilters>({});
  const [pagination, setPagination] = useState<Pagination>({
    offset: 0,
    limit: DEFAULT_PAGE_SIZE,
    sort: DEFAULT_SORTER,
  });
  const [loadingUploads, setLoadingUploads] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<Upload[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [openFileUploadModal, setOpenFileUploadModal] =
    useState<boolean>(false);

  const accessToken = useAppSelector(selectAccessToken);
  const userInfo = useAppSelector(selectUserInfo);

  const styles = useStyles();

  const getUploadSorter = (
    sorter: SorterResult<Upload> | SorterResult<Upload>[]
  ) => {
    const { order, field } = Array.isArray(sorter) ? sorter[0] : sorter;
    if (order && field) {
      return `${order === "ascend" ? "-" : ""}${field}`;
    }
    return DEFAULT_SORTER;
  };

  const fetchUploads = async () => {
    setLoadingUploads(true);
    try {
      const { uploads, metadata } = await uploadService.getCustomerUploads({
        token: accessToken,
        cust_id: userInfo?.cust_id || "",
        filters,
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

  const onCustomRequest = async ({
    file,
    onProgress,
    onSuccess,
    onError,
  }: UploadRequestOption) => {
    try {
      if (!userInfo) return;

      // generate blob name
      const fileName = (file as File).name;
      const extension = fileName.slice(fileName.lastIndexOf(".") + 1);
      const blobName = `uploads/${dayjs().valueOf()}.${extension}`;
      const storageContainerName = userInfo.storage_container_name || "";

      // upload blob to azure storage
      const blobPayload: UploadFilePayload = {
        file: file as Blob,
        blobName,
        containerName: storageContainerName,
        token: accessToken,
        onProgress: (percent) => onProgress?.({ percent }),
      };
      await azureService.uploadFile(blobPayload);

      // create upload record
      const uploadUrl = `${getStorgeHostUrl()}/${storageContainerName}/${blobName}`;
      const uploadPayload = {
        cust_id: userInfo.cust_id,
        url: uploadUrl,
        upload_date_time: dayjs().toISOString(),
        uploaded_by: userInfo.email,
        token: accessToken,
      };
      await uploadService.createUpload(uploadPayload);

      // complete progress bar
      onSuccess?.(null);
    } catch (error: any) {
      onError?.(error);
      message.error("Failed to upload a file, try again!");
    }
  };

  const onCloseFileUploadModal = () => {
    if (fileList.length > 0) {
      setFileList([]);
      fetchUploads();
    }
    setOpenFileUploadModal(false);
  };

  useEffect(() => {
    if (accessToken && userInfo) {
      fetchUploads();
    }
  }, [accessToken, userInfo, filters, pagination]);

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
    { title: "Customer" },
    { title: "Uploads" },
  ];

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Breadcrumb items={breadcrumbItems} linkRouter />
        <Button
          className={styles.uploadFilesBtn}
          icon={<UploadOutlined />}
          onClick={() => setOpenFileUploadModal(true)}
        >
          Upload files
        </Button>
      </div>
      <div className={styles.content}>
        <Table
          className={styles.uploadsTable}
          rowKey="upload_id"
          bordered={false}
          columns={columns}
          dataSource={dataSource}
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

      {/* Upload Files Modal */}
      <Modal
        className={styles.fileUploadModal}
        open={openFileUploadModal}
        onCancel={onCloseFileUploadModal}
        footer={null}
      >
        <Form
          {...formLayout}
          className={styles.fileUploadForm}
          name="file-upload"
        >
          <Title className={styles.formTitle}>Omega Black Secure Storage</Title>
          <Form.Item>
            <Dragger
              className={styles.fileDragger}
              showUploadList={{
                showRemoveIcon: false,
              }}
              multiple={false}
              accept={allowedFileTypes.join(",")}
              fileList={fileList}
              customRequest={onCustomRequest}
              onChange={(info) => setFileList(info.fileList)}
            >
              <p className="ant-upload-drag-icon">
                <FilePdfOutlined />
              </p>
              <p className="ant-upload-text">
                Drag and drop your file here or click to browse
              </p>
              <p className="ant-upload-hint">
                Supported file types: {allowedFileTypes.join(", ")}
              </p>
            </Dragger>
          </Form.Item>
          <div className={styles.formActions}>
            <Button
              type="primary"
              htmlType="button"
              onClick={onCloseFileUploadModal}
            >
              Done
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export { CustomerUploads };
