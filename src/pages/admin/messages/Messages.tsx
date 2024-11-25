import { useState, useEffect, useCallback } from "react";
import { Form, Row, Col, message, Select } from "antd";
import type { TablePaginationConfig } from "antd/es/table/interface";
import {
  HomeOutlined,
  DeleteOutlined,
  FilterOutlined,
  SendOutlined,
} from "@ant-design/icons";
import debounce from "debounce";

// components
import {
  Button,
  Breadcrumb,
  Input,
  Modal,
  Table,
  FilterDropdown,
  Popconfirm,
  Typography,
} from "@/components";
import type { TableColumnType } from "@/components";

// services
import {
  AllMessagesFilters,
  CreateMessagePayload,
  messagesService,
} from "@/services";

// redux
import { useAppSelector } from "@/redux";
import { selectAccessToken } from "@/redux/auth";

// types
import { Option, Pagination, Message } from "@/types";
import { CreateMessageFormValues, CustomerOption } from "./Messages.types";

// constants
import { DEFAULT_PAGE_SIZE } from "@/components/atoms/table";
import { DEBOUNCE_WAIT, formLayout } from "./Messages.constants";

// styles
import { mgmtServices } from "@/services/Mgmt/MgmtServices";
import { useStyles } from "../reports/Reports.styles";
import dayjs from "dayjs";

const { Title } = Typography;

const AdminMessages = () => {
  const cardData = {
    uploadDate: "10/17/2024",
    customer: "Cyber Care System Pvt. Ltd.",
    title: "Security Issue",
    subject: "Message 3",
    tags: "Lorem ipsum",
    recommendations: "Lorem ipsum dolor",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  };

  const [customerOptions, setCustomerOptions] = useState<CustomerOption[]>([]);
  const [filters, setFilters] = useState<AllMessagesFilters>({});
  const [pagination, setPagination] = useState<Pagination>({
    offset: 0,
    limit: DEFAULT_PAGE_SIZE,
  });
  const [loadingMessages, setLoadingMessages] = useState<boolean>(false);
  const [creatingMessage, setCreatingMessage] = useState<boolean>(false);
  const [loadingOptions, setLoadingOptions] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<Message[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [highlightedRow, setHighlightedRow] = useState<string | null>(null);
  const [customerTypeOptions, setCustomerTypeOptions] = useState<
    Array<Option & { id?: string }>
  >([]);
  const [openCreateMessageModal, setOpenCreateMessageModal] =
    useState<boolean>(false);

  const [form] = Form.useForm();

  const accessToken = useAppSelector(selectAccessToken);

  const styles = useStyles();
  const getMessageFilters = useCallback(() => {
    const { dbconnstrs = [] } = filters;
    if (dbconnstrs.length > 0) return filters;
    return {
      ...filters,
      dbconnstrs: customerOptions.map(({ value }) => value),
    };
  }, [filters, customerOptions]);

  const onChangeFilter = debounce((value: string, key: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  }, DEBOUNCE_WAIT);

  const onTableChange = ({ current, pageSize }: TablePaginationConfig) => {
    if (current && pageSize) {
      setPagination({
        offset: (current - 1) * pageSize,
        limit: pageSize,
      });
    }
  };

  const onResetCreateMessageForm = () => {
    form.resetFields();
  };

  const onCloseCreateMessageModal = () => {
    setOpenCreateMessageModal(false);
    form.resetFields();
  };

  const fetchOptions = async () => {
    setLoadingOptions(true);
    try {
      const token = await mgmtServices.getMgmtToken();
      const access = token?.access_token;
      if (access) {
        const organizational = await mgmtServices.getOrganizational(access);
        // Map the organizational data to customer type options
        const newOrganizationalOptions = organizational.map(
          ({ display_name, name, id }) => ({
            id,
            label: display_name,
            value: name,
          })
        );

        // Set customer type options
        setCustomerTypeOptions(newOrganizationalOptions);
      } else {
        console.error("Access token not found in the response");
      }
    } catch (error) {
      console.log("Error from getOrganizations:", error);
    } finally {
      setLoadingOptions(false);
    }
  };
  useEffect(() => {
    if (accessToken) {
      fetchOptions();
    }
  }, [accessToken]);

  useEffect(() => {
    if (accessToken) {
      getAllMessages();
    }
  }, [accessToken, customerOptions, filters, pagination]);

  const onDelete = async ({ notification_id }: Message) => {
    try {
      // delete report & reload table
      await messagesService.deleteMessage({
        message_id: notification_id,
        token: accessToken,
      });
      await getAllMessages();

      // notify message
      message.success("A message was deleted successfully.");
    } catch (error) {
      console.log(error);
      message.error("Failed to delete a message, try again later.");
    }
  };

  const onResend = async ({ notification_id }: Message) => {
    try {
      const response = await messagesService.resendMessage({
        message_id: notification_id,
        token: accessToken,
      });

      await getAllMessages();
      // notify message
      message.success("A message was resent successfully.");

      const resentMessageId = response.id;
      if (resentMessageId) {
        setHighlightedRow(resentMessageId);
        setTimeout(() => setHighlightedRow(null), 3000);
      }
    } catch (error) {
      console.log(error);
      message.error("Failed to resend a message, try again later.");
    }
  };

  const onSubmitAlert = async (values: CreateMessageFormValues) => {
    setCreatingMessage(true);

    const cust_ids: string[] = [];

    if (values?.select_customer && values.select_customer.length > 0) {
      (values.select_customer as unknown as string[]).forEach(
        (select_customer) => {
          const orgId = customerTypeOptions.find(
            (item) => item.value === select_customer
          )?.id;
          if (orgId) cust_ids.push(orgId);
        }
      );
    }
    const currentDate = new Date();
    const currentMonthPlusOne = currentDate.getMonth() + 1;
    const datetime = `${currentDate.getDate()}/${currentMonthPlusOne}/${currentDate.getFullYear()} @ ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

    // Step 1: Parse the input date string
    const [datePart, timePart] = datetime.split(" @ ");

    if (!datePart || !timePart) return;

    const tags: string[] = [];

    if (values?.message_tags && values.message_tags.length > 0) {
      if (typeof values.message_tags === "object") {
        tags.push(values.message_tags);
      } else tags.push(...[values.message_tags]);
    }

    try {
      const dataToSave = {
        tags,
        cust_ids,
        title: values?.message_title,
        subject: values?.message_subject,
        description: values?.message_descriptions,
        recommendations: values?.message_recomendations,
      };
      await messagesService.sendMessage({
        ...dataToSave,
        token: accessToken,
      } as unknown as CreateMessagePayload);
      await getAllMessages();

      // reset form & close modal
      form.resetFields();
      setOpenCreateMessageModal(false);
      setCreatingMessage(false);

      message.success("Message sent successfully.");
    } catch (error) {
      console.log(error);
      message.error(
        "The user associated with this organization is not registered on the app."
      );
    } finally {
      setCreatingMessage(false);
    }
  };

  const getAllMessages = async () => {
    setLoadingMessages(true);
    try {
      const { alerts, metadata } = await messagesService.getAllMessages({
        token: accessToken,
        filters: getMessageFilters(),
        ...pagination,
      });
      setDataSource(alerts);
      setTotalCount(metadata.total);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingMessages(false);
    }
  };

  const columns: TableColumnType[] = [
    {
      title: "Customer",
      width: 200,
      dataIndex: "cust_id",
      filterIcon: <FilterOutlined />,
      filterDropdown: (
        <FilterDropdown
          variant="input"
          onChange={(e) => onChangeFilter(e.target.value, "cust_id")}
        />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      filterIcon: <FilterOutlined />,
      filterDropdown: (
        <FilterDropdown
          variant="input"
          onChange={(e) => onChangeFilter(e.target.value, "title")}
        />
      ),
    },
    {
      title: "Subject",
      dataIndex: "subject",
      filterIcon: <FilterOutlined />,
      filterDropdown: (
        <FilterDropdown
          variant="input"
          onChange={(e) => onChangeFilter(e.target.value, "subject")}
        />
      ),
    },
    {
      title: "Tags",
      dataIndex: "tags",
      filterIcon: <FilterOutlined />,
      filterDropdown: (
        <FilterDropdown
          variant="input"
          onChange={(e) => onChangeFilter(e.target.value, "tags")}
        />
      ),
    },
    {
      title: "Recommendations",
      dataIndex: "recommendations",
      filterIcon: <FilterOutlined />,
      filterDropdown: (
        <FilterDropdown
          variant="input"
          onChange={(e) => onChangeFilter(e.target.value, "recommendations")}
        />
      ),
    },
    {
      width: 150,
      title: "Upload Date",
      dataIndex: "created_at",
      render: (value) => dayjs(value).format("MM/DD/YYYY"),
    },
    {
      title: "Description",
      dataIndex: "description",
      render: (text) => {
        if (text && text.length > 25) return `${text.slice(0, 25)}…`;
        return text;
      },
      filterIcon: <FilterOutlined />,
      filterDropdown: (
        <FilterDropdown
          variant="input"
          onChange={(e) => onChangeFilter(e.target.value, "description")}
        />
      ),
    },
    {
      width: 70,
      title: "Resend",
      align: "center",
      render: (_, messageData) => (
        <Popconfirm
          title="Resend a message"
          description="Are you sure to resend this message?"
          placement="topRight"
          okText="Yes"
          cancelText="No"
          onConfirm={() => onResend(messageData as Message)}
        >
          <Button shape="circle" icon={<SendOutlined />} />
        </Popconfirm>
      ),
    },
    {
      width: 70,
      title: "Delete",
      align: "center",
      render: (_, messageData) => (
        <Popconfirm
          title="Delete a message"
          description="Are you sure to delete this message?"
          placement="topRight"
          okText="Yes"
          cancelText="No"
          onConfirm={() => onDelete(messageData as Message)}
        >
          <Button shape="circle" icon={<DeleteOutlined />} />
        </Popconfirm>
      ),
    },
  ];

  const breadcrumbItems = [
    {
      href: "/dashboard",
      title: <HomeOutlined />,
    },
    { title: "Admin" },
    { title: "Messages" },
  ];

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Breadcrumb items={breadcrumbItems} linkRouter />
        <Button
          className={styles.createReportBtn}
          disabled={loadingMessages}
          // onClick={() => sendMessageToAllUsers()}
          onClick={() => setOpenCreateMessageModal(true)}
        >
          Send a message
        </Button>
      </div>
      <div className={styles.content}>
        <Table
          className={styles.reportsTable}
          rowKey="report_id"
          bordered={false}
          columns={columns}
          dataSource={dataSource}
          rowClassName={(record) =>
            record.id === highlightedRow ? "highlight-row" : ""
          }
          pagination={{
            total: totalCount,
            showTotal: (total) => `Total ${total} Messages`,
          }}
          loading={loadingMessages}
          onChange={onTableChange}
        />
      </div>

      {/* <div
        style={{
          padding: "20px",
          background: "#121212",
          minHeight: "100vh",
        }}
      >
        <Row justify="start" gutter={[16, 16]}>
          <Col xs={16} sm={12} md={10} lg={8} span={6}>
            <Card
              style={{
                background: "#1f1f1f",
                color: "#fff",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Row
                justify="space-between"
                align="middle"
                style={{ marginBottom: 16 }}
              >
                <Text style={{ color: "#bbb" }}>Upload Date</Text>
                <Text style={{ color: "#bbb" }}>{cardData.uploadDate}</Text>
              </Row>
              <Row
                justify="space-between"
                align="middle"
                style={{ marginBottom: 16 }}
              >
                <Title level={5} style={{ color: "#fff", marginBottom: 0 }}>
                  {cardData.customer}
                </Title>
                <Space>
                  <Button
                    type="text"
                    icon={<SendOutlined />}
                    style={{ color: "#00bfff" }}
                  />
                  <Button
                    type="text"
                    icon={<DeleteOutlined />}
                    style={{ color: "#ff4d4f" }}
                  />
                </Space>
              </Row>
              <Row gutter={16} style={{ marginBottom: 16 }}>
                <Col span={12}>
                  <Text style={{ color: "#bbb" }}>Title</Text>
                  <div>{cardData.title}</div>
                </Col>
                <Col span={12}>
                  <Text style={{ color: "#bbb" }}>Subject</Text>
                  <div>{cardData.subject}</div>
                </Col>
              </Row>
              <Row gutter={16} style={{ marginBottom: 16 }}>
                <Col span={12}>
                  <Text style={{ color: "#bbb" }}>Tags</Text>
                  <div>{cardData.tags}</div>
                </Col>
                <Col span={12}>
                  <Text style={{ color: "#bbb" }}>Recommendations</Text>
                  <div>{cardData.recommendations}</div>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Text style={{ color: "#bbb" }}>Description</Text>
                  <div>{cardData.description}</div>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={16} sm={12} md={10} lg={8} span={6}>
            <Card
              style={{
                background: "#1f1f1f",
                color: "#fff",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Row
                justify="space-between"
                align="middle"
                style={{ marginBottom: 16 }}
              >
                <Text style={{ color: "#bbb" }}>Upload Date</Text>
                <Text style={{ color: "#bbb" }}>{cardData.uploadDate}</Text>
              </Row>
              <Row
                justify="space-between"
                align="middle"
                style={{ marginBottom: 16 }}
              >
                <Title level={5} style={{ color: "#fff", marginBottom: 0 }}>
                  {cardData.customer}
                </Title>
                <Space>
                  <Button
                    type="text"
                    icon={<SendOutlined />}
                    style={{ color: "#00bfff" }}
                  />
                  <Button
                    type="text"
                    icon={<DeleteOutlined />}
                    style={{ color: "#ff4d4f" }}
                  />
                </Space>
              </Row>
              <Row gutter={16} style={{ marginBottom: 16 }}>
                <Col span={12}>
                  <Text style={{ color: "#bbb" }}>Title</Text>
                  <div>{cardData.title}</div>
                </Col>
                <Col span={12}>
                  <Text style={{ color: "#bbb" }}>Subject</Text>
                  <div>{cardData.subject}</div>
                </Col>
              </Row>
              <Row gutter={16} style={{ marginBottom: 16 }}>
                <Col span={12}>
                  <Text style={{ color: "#bbb" }}>Tags</Text>
                  <div>{cardData.tags}</div>
                </Col>
                <Col span={12}>
                  <Text style={{ color: "#bbb" }}>Recommendations</Text>
                  <div>{cardData.recommendations}</div>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Text style={{ color: "#bbb" }}>Description</Text>
                  <div>{cardData.description}</div>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={16} sm={12} md={10} lg={8} span={6}>
            <Card
              style={{
                background: "#1f1f1f",
                color: "#fff",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Row
                justify="space-between"
                align="middle"
                style={{ marginBottom: 16 }}
              >
                <Text style={{ color: "#bbb" }}>Upload Date</Text>
                <Text style={{ color: "#bbb" }}>{cardData.uploadDate}</Text>
              </Row>
              <Row
                justify="space-between"
                align="middle"
                style={{ marginBottom: 16 }}
              >
                <Title level={5} style={{ color: "#fff", marginBottom: 0 }}>
                  {cardData.customer}
                </Title>
                <Space>
                  <Button
                    type="text"
                    icon={<SendOutlined />}
                    style={{ color: "#00bfff" }}
                  />
                  <Button
                    type="text"
                    icon={<DeleteOutlined />}
                    style={{ color: "#ff4d4f" }}
                  />
                </Space>
              </Row>
              <Row gutter={16} style={{ marginBottom: 16 }}>
                <Col span={12}>
                  <Text style={{ color: "#bbb" }}>Title</Text>
                  <div>{cardData.title}</div>
                </Col>
                <Col span={12}>
                  <Text style={{ color: "#bbb" }}>Subject</Text>
                  <div>{cardData.subject}</div>
                </Col>
              </Row>
              <Row gutter={16} style={{ marginBottom: 16 }}>
                <Col span={12}>
                  <Text style={{ color: "#bbb" }}>Tags</Text>
                  <div>{cardData.tags}</div>
                </Col>
                <Col span={12}>
                  <Text style={{ color: "#bbb" }}>Recommendations</Text>
                  <div>{cardData.recommendations}</div>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Text style={{ color: "#bbb" }}>Description</Text>
                  <div>{cardData.description}</div>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={16} sm={12} md={10} lg={8} span={6}>
            <Card
              style={{
                background: "#1f1f1f",
                color: "#fff",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Row
                justify="space-between"
                align="middle"
                style={{ marginBottom: 16 }}
              >
                <Text style={{ color: "#bbb" }}>Upload Date</Text>
                <Text style={{ color: "#bbb" }}>{cardData.uploadDate}</Text>
              </Row>
              <Row
                justify="space-between"
                align="middle"
                style={{ marginBottom: 16 }}
              >
                <Title level={5} style={{ color: "#fff", marginBottom: 0 }}>
                  {cardData.customer}
                </Title>
                <Space>
                  <Button
                    type="text"
                    icon={<SendOutlined />}
                    style={{ color: "#00bfff" }}
                  />
                  <Button
                    type="text"
                    icon={<DeleteOutlined />}
                    style={{ color: "#ff4d4f" }}
                  />
                </Space>
              </Row>
              <Row gutter={16} style={{ marginBottom: 16 }}>
                <Col span={12}>
                  <Text style={{ color: "#bbb" }}>Title</Text>
                  <div>{cardData.title}</div>
                </Col>
                <Col span={12}>
                  <Text style={{ color: "#bbb" }}>Subject</Text>
                  <div>{cardData.subject}</div>
                </Col>
              </Row>
              <Row gutter={16} style={{ marginBottom: 16 }}>
                <Col span={12}>
                  <Text style={{ color: "#bbb" }}>Tags</Text>
                  <div>{cardData.tags}</div>
                </Col>
                <Col span={12}>
                  <Text style={{ color: "#bbb" }}>Recommendations</Text>
                  <div>{cardData.recommendations}</div>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Text style={{ color: "#bbb" }}>Description</Text>
                  <div>{cardData.description}</div>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={16} sm={12} md={10} lg={8} span={6}>
            <Card
              style={{
                background: "#1f1f1f",
                color: "#fff",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Row
                justify="space-between"
                align="middle"
                style={{ marginBottom: 16 }}
              >
                <Text style={{ color: "#bbb" }}>Upload Date</Text>
                <Text style={{ color: "#bbb" }}>{cardData.uploadDate}</Text>
              </Row>
              <Row
                justify="space-between"
                align="middle"
                style={{ marginBottom: 16 }}
              >
                <Title level={5} style={{ color: "#fff", marginBottom: 0 }}>
                  {cardData.customer}
                </Title>
                <Space>
                  <Button
                    type="text"
                    icon={<SendOutlined />}
                    style={{ color: "#00bfff" }}
                  />
                  <Button
                    type="text"
                    icon={<DeleteOutlined />}
                    style={{ color: "#ff4d4f" }}
                  />
                </Space>
              </Row>
              <Row gutter={16} style={{ marginBottom: 16 }}>
                <Col span={12}>
                  <Text style={{ color: "#bbb" }}>Title</Text>
                  <div>{cardData.title}</div>
                </Col>
                <Col span={12}>
                  <Text style={{ color: "#bbb" }}>Subject</Text>
                  <div>{cardData.subject}</div>
                </Col>
              </Row>
              <Row gutter={16} style={{ marginBottom: 16 }}>
                <Col span={12}>
                  <Text style={{ color: "#bbb" }}>Tags</Text>
                  <div>{cardData.tags}</div>
                </Col>
                <Col span={12}>
                  <Text style={{ color: "#bbb" }}>Recommendations</Text>
                  <div>{cardData.recommendations}</div>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Text style={{ color: "#bbb" }}>Description</Text>
                  <div>{cardData.description}</div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div> */}

      {/* send messgae modal */}
      <Modal
        className={styles.createReportModal}
        open={openCreateMessageModal}
        onCancel={onCloseCreateMessageModal}
        footer={null}
      >
        <Form
          {...formLayout}
          className={styles.createReportForm}
          form={form}
          name="create-report"
          onFinish={onSubmitAlert}
        >
          <Title className={styles.formTitle}>Send a Message</Title>

          <Row gutter={30} style={{ maxWidth: 420 }}>
            <Col sm={24}>
              <Form.Item
                name="select_customer"
                label="Select Customer"
                rules={[{ required: true }]}
              >
                <Select
                  options={customerTypeOptions}
                  mode="multiple"
                  showSearch
                  allowClear
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={30}>
            <Col sm={24}>
              <Form.Item
                name="message_title"
                label="Message Title"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={30}>
            <Col sm={24}>
              <Form.Item
                name="message_tags"
                label="Message Tags"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={30}>
            <Col sm={24}>
              <Form.Item
                name="message_subject"
                label="Message Subject"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={30}>
            <Col sm={24}>
              <Form.Item
                name="message_recomendations"
                label="Message Recomendation"
                rules={[{ required: true }]}
              >
                <Input variant="textarea" style={{ minHeight: 80 }} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={30}>
            <Col sm={24}>
              <Form.Item
                name="message_descriptions"
                label="Message Body"
                rules={[{ required: true }]}
              >
                <Input variant="textarea" style={{ minHeight: 80 }} />
              </Form.Item>
            </Col>
          </Row>
          <div className={styles.formActions}>
            <Button type="primary" htmlType="submit" loading={creatingMessage}>
              Submit
            </Button>
            <Button htmlType="button" onClick={onResetCreateMessageForm}>
              Reset
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export { AdminMessages };
