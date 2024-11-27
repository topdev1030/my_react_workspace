import { useState, useEffect, useCallback } from "react";
import {
  Form,
  Row,
  Col,
  message,
  Select,
  Divider,
  Image,
  Space,
  Card,
  PaginationProps,
  Pagination as CardPagination,
} from "antd";
import type { TablePaginationConfig } from "antd/es/table/interface";
import {
  HomeOutlined,
  DeleteOutlined,
  FilterOutlined,
  SendOutlined,
  SearchOutlined,
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

// Import TransitionGroup for animation
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Icon Import
import deleteIcon from "../../../static/images/deleteIcon.png";
import sendIcon from "../../../static/images/sendIcon.png";
import viewCardIcon from "../../../static/images/view.png";
import viewIcon from "../../../static/images/view_expand.png";

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
import { FooterBar } from "@/components/organisms/footer";

const { Title, Text } = Typography;

const AdminMessages = () => {
  const messageCards = [
    {
      uploadDate: "10/17/2024",
      customer: "Cyber Care System Pvt. Ltd.",
      title: "Security Issue",
      subject: "Message 3",
      tags: "Lorem ipsum",
      recommendations: "Lorem ipsum dolor",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      uploadDate: "10/17/2024",
      customer: "Cyber Care System Pvt. Ltd.",
      title: "Security Issue",
      subject: "Message 3",
      tags: "Lorem ipsum",
      recommendations: "Lorem ipsum dolor",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      uploadDate: "10/17/2024",
      customer: "Cyber Care System Pvt. Ltd.",
      title: "Security Issue",
      subject: "Message 3",
      tags: "Lorem ipsum",
      recommendations: "Lorem ipsum dolor",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      uploadDate: "10/17/2024",
      customer: "Cyber Care System Pvt. Ltd.",
      title: "Security Issue",
      subject: "Message 3",
      tags: "Lorem ipsum",
      recommendations: "Lorem ipsum dolor",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      uploadDate: "10/17/2024",
      customer: "Cyber Care System Pvt. Ltd.",
      title: "Security Issue",
      subject: "Message 3",
      tags: "Lorem ipsum",
      recommendations: "Lorem ipsum dolor",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      uploadDate: "10/17/2024",
      customer: "Cyber Care System Pvt. Ltd.",
      title: "Security Issue",
      subject: "Message 3",
      tags: "Lorem ipsum",
      recommendations: "Lorem ipsum dolor",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      uploadDate: "10/17/2024",
      customer: "Cyber Care System Pvt. Ltd.",
      title: "Security Issue",
      subject: "Message 3",
      tags: "Lorem ipsum",
      recommendations: "Lorem ipsum dolor",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      uploadDate: "10/17/2024",
      customer: "Cyber Care System Pvt. Ltd.",
      title: "Security Issue",
      subject: "Message 3",
      tags: "Lorem ipsum",
      recommendations: "Lorem ipsum dolor",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      uploadDate: "10/17/2024",
      customer: "Cyber Care System Pvt. Ltd.",
      title: "Security Issue",
      subject: "Message 3",
      tags: "Lorem ipsum",
      recommendations: "Lorem ipsum dolor",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      uploadDate: "10/17/2024",
      customer: "Cyber Care System Pvt. Ltd.",
      title: "Security Issue",
      subject: "Message 3",
      tags: "Lorem ipsum",
      recommendations: "Lorem ipsum dolor",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      uploadDate: "10/17/2024",
      customer: "Cyber Care System Pvt. Ltd.",
      title: "Security Issue",
      subject: "Message 3",
      tags: "Lorem ipsum",
      recommendations: "Lorem ipsum dolor",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      uploadDate: "10/17/2024",
      customer: "Cyber Care System Pvt. Ltd.",
      title: "Security Issue",
      subject: "Message 3",
      tags: "Lorem ipsum",
      recommendations: "Lorem ipsum dolor",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  const sort_message_options = [
    {
      key: "date",
      value: "Date",
    },
    {
      key: "message_type",
      value: "Message Type",
    },
    {
      key: "customer_name",
      value: "Customer Name",
    },
    {
      key: "message_name",
      value: "Message Name",
    },
  ];

  const [isTableView, setIsTableView] = useState<boolean>(true);

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
      width: 150,
      title: "Upload Date",
      dataIndex: "created_at",
      render: (value) => dayjs(value).format("MM/DD/YYYY"),
    },
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
      width: 140,
      title: "Action",
      align: "center",
      render: (_, messageData) => (
        <div className={styles.tdIconStyle}>
          <div className={styles.reportPdfCol}>
            <Popconfirm
              title="Resend a message"
              description="Are you sure to resend this message?"
              placement="topRight"
              okText="Yes"
              cancelText="No"
              onConfirm={() => onResend(messageData as Message)}
            >
              <Button
                shape="circle"
                style={{ border: 0, backgroundColor: "transparent" }}
                icon={<Image preview={false} src={sendIcon} />}
              />
            </Popconfirm>
            <Divider
              style={{
                borderColor: "#667075",
                borderWidth: 2,
                marginInline: 0,
              }}
              type="vertical"
            />
            <Popconfirm
              title="Delete a message"
              description="Are you sure to delete this message?"
              placement="topRight"
              okText="Yes"
              cancelText="No"
              onConfirm={() => onDelete(messageData as Message)}
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

  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const pageSize = 6; // Number of cards per page

  // Get current page <data>
  const startIndex = (currentPage - 1) * pageSize;
  const currentData = messageCards.slice(startIndex, startIndex + pageSize);

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
          Messages
        </Title>
        <Button
          className={styles.createReportBtn}
          disabled={loadingMessages}
          // onClick={() => sendMessageToAllUsers()}
          onClick={() => setOpenCreateMessageModal(true)}
        >
          <Text style={{ fontSize: 20 }}>Send a Message</Text>
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
              options={sort_message_options}
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
              options={sort_message_options}
            />
          </Col>
          <Col className={styles.fieldContainer} flex={2}>
            <Title level={5} className={styles.invisible} type="secondary">
              Search
            </Title>
            <Button className={styles.searchBtn} disabled={loadingOptions}>
              <Text className={styles.createBtn}>Search</Text>
            </Button>
          </Col>
          <Col className={styles.fieldContainer} flex={2}>
            <Title level={5} className={styles.invisible} type="secondary">
              Search
            </Title>
            <Button className={styles.clearBtn} disabled={loadingOptions}>
              <Text className={styles.createBtn}>Clear</Text>
            </Button>
          </Col>
        </Row>
        <Row className={styles.OptionContainer} gutter={32}>
          <Col flex={5}>
            <Title className={styles.optionTitle} level={2}>
              List of Messages (24)
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
                  options={sort_message_options}
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
                rowKey="cust_id"
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
                loading={loadingMessages}
                onChange={onTableChange}
              />
            </div>
          ) : (
            <div
              style={{
                marginTop: 15,
              }}
            >
              <Row justify="start" gutter={[24, 24]}>
                {currentData.map((item, index) => (
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
                          <br />
                          <Text className={styles.value}>
                            {item.uploadDate}
                          </Text>
                        </Col>
                        <Col>
                          <Space>
                            <Button
                              icon={
                                <Image
                                  preview={false}
                                  style={{ backgroundColor: "transparent" }}
                                  src={sendIcon}
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
                              {item.customer}
                            </Text>
                          </Space>
                        </Col>
                        <Col xs={24} sm={12}>
                          <Space direction="vertical">
                            <Text className={styles.subtitle}>Title</Text>
                            <Text className={styles.value}>{item.title}</Text>
                          </Space>
                        </Col>
                        <Col xs={24} sm={12}>
                          <Space direction="vertical">
                            <Text className={styles.subtitle}>Subject</Text>
                            <Text className={styles.value}>{item.subject}</Text>
                          </Space>
                        </Col>
                        <Col xs={24} sm={12}>
                          <Space direction="vertical">
                            <Text className={styles.subtitle}>Tags</Text>
                            <Text className={styles.value}>{item.tags}</Text>
                          </Space>
                        </Col>
                        <Col xs={24} sm={12}>
                          <Space direction="vertical">
                            <Text className={styles.subtitle}>
                              Recommendation
                            </Text>
                            <Text className={styles.value}>
                              {item.recommendations}
                            </Text>
                          </Space>
                        </Col>
                        <Col xs={12} sm={12}>
                          <Space direction="vertical">
                            <Text className={styles.subtitle}>Description</Text>
                            <p
                              className={styles.value}
                              style={{
                                position: "relative",
                                width: "475px",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                marginBottom: 0,
                              }}
                            >
                              {item.description}
                            </p>
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
                  total={messageCards.length}
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

      {/* send messgae modal */}
      <Modal
        className={styles.createReportModal}
        open={openCreateMessageModal}
        onCancel={onCloseCreateMessageModal}
        footer={null}
        title={<Text type="secondary">NEW MESSAGE</Text>}
      >
        <Form
          {...formLayout}
          className={styles.createReportForm}
          form={form}
          name="create-report"
          onFinish={onSubmitAlert}
        >
          <Title className={styles.formTitle}>Send a Message</Title>
          <Row gutter={30}>
            <Col sm={24}>
              <Form.Item
                name="cust_id"
                label="Select Customer"
                rules={[{ required: true }]}
              >
                <Select
                  options={customerTypeOptions}
                  placeholder="Select"
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
                <Input placeholder="Type in" />
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
                <Input placeholder="Type in" />
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
                <Input placeholder="Type in" />
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
                <Input
                  variant="textarea"
                  style={{ minHeight: 80, backgroundColor: "#282937" }}
                  placeholder="Type In"
                />
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
                <Input
                  variant="textarea"
                  style={{ minHeight: 80, backgroundColor: "#282937" }}
                  placeholder="Type In"
                />
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
