import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// import { Fade } from "react-awesome-reveal";
import ReCaptcha from "react-google-recaptcha";
import { Form, Row, Col, Layout, FloatButton, Tooltip, message } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import cx from "clsx";

// components
import {
  Button,
  Typography,
  Card,
  Modal,
  Input,
  InputPhone,
} from "@/components/atoms";

// services
import { publicService } from "@/services";

// config
import config from "@/config";

// constants
import { solutions, formLayout } from "./Home.contants";

// types
import { ContactUsFormValues } from "./Home.types";

// assets
import ImgLogo from "@/static/images/logo.png";

// styles
import { useStyles } from "./Home.styles";

const { Header, Footer, Content } = Layout;
const { Title, Text } = Typography;

const Home = () => {
  const [openContactUsModal, setOpenContactUsModal] = useState<boolean>(false);
  const [captchaPassed, setCaptchaPassed] = useState<boolean>(false);

  const { loginWithRedirect } = useAuth0();
  const [form] = Form.useForm();

  const styles = useStyles();

  const onLogin = () => {
    loginWithRedirect();
  };

  const onSubmitContactUsForm = async ({
    firstName,
    lastName,
    ...rest
  }: ContactUsFormValues) => {
    try {
      const msgText = await publicService.contactUs({
        first_name: firstName,
        last_name: lastName,
        ...rest,
      });
      message.success(msgText);

      // reset form & close modal
      form.resetFields();
      setOpenContactUsModal(false);
    } catch (error) {
      console.log(error);
      message.error("Something went wrong, try again!");
    }
  };

  const onSuccessCaptcha = () => {
    setCaptchaPassed(true);
  };

  const onResetContactUsForm = () => {
    form.resetFields();
  };

  const onCloseContactUsModal = () => {
    setOpenContactUsModal(false);
    form.resetFields();
  };

  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <div className={cx(styles.container, styles.headerContainer)}>
          <Link className={styles.imgLogo} to="/">
            <img src={ImgLogo} alt="logo" />
          </Link>
          <div className={styles.menuContainer}>
            <Button className={styles.menuBtn} type="default" onClick={onLogin}>
              Login
            </Button>
          </div>
        </div>
      </Header>
      <Content className={styles.content}>
        <div className={cx(styles.container, styles.contentContainer)}>
          <div className={styles.banner}>
            <Title className={styles.heading}>
              Threat Intelligence.
              <br />
              Delivered.
            </Title>
            {/* <Fade duration={1200}> */}
            <Button
              className={styles.getIntelBtn}
              type="primary"
              onClick={() => setOpenContactUsModal(true)}
            >
              Contact Us <ArrowRightOutlined />
            </Button>
            {/* </Fade> */}
          </div>
          <div className={styles.solutions}>
            <Card className={styles.headingCard}>
              {/* <Fade duration={1200}> */}
              <Title className={styles.headingCardTitle}>
                Discover
                <br />
                Our
                <br />
                Solutions.
              </Title>
              {/* </Fade> */}
              {/* <Fade duration={1200}> */}
              <Text className={styles.headingCardDesc}>
                Step into a world of advanced cybersecurity services tailored
                for the modern digital landscape.
              </Text>
              {/* </Fade> */}
            </Card>
            {solutions.map(
              ({ icon: Icon, title, description, learnMoreText }, idx) => (
                <>
                  {/* // <Fade key={idx + 1} duration={1200}> */}
                  <Card className={styles.solutionCard}>
                    <Icon className={styles.solutionIcon} />
                    <Title className={styles.solutionTitle}>{title}</Title>
                    <Text className={styles.solutionDesc}> {description}</Text>
                    <Tooltip
                      rootClassName={styles.learnMoreTooltip}
                      title={learnMoreText}
                      placement="bottom"
                      trigger="click"
                    >
                      <Button className={styles.learnMoreBtn} type="link">
                        Learn more »
                      </Button>
                    </Tooltip>
                  </Card>
                  {/* // </Fade> */}
                </>
              )
            )}
          </div>
        </div>
      </Content>
      <Footer className={styles.footer}>
        <Text>Omegablack, Inc. &copy; All Rights Reserved</Text>
      </Footer>

      {/* BackTop */}
      <FloatButton.BackTop className={styles.backTop} />

      {/* Contact Us Modal */}
      <Modal
        className={styles.contactUsModal}
        open={openContactUsModal}
        onCancel={onCloseContactUsModal}
        footer={null}
      >
        <Form
          {...formLayout}
          className={styles.contactUsForm}
          form={form}
          name="contact-us"
          onFinish={onSubmitContactUsForm}
        >
          <Title className={styles.formTitle}>
            Have a question? Contact Us!
          </Title>
          <Row gutter={30}>
            <Col sm={12}>
              <Form.Item
                name="firstName"
                label="First Name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col sm={12}>
              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={30}>
            <Col sm={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ type: "email" }, { required: true }]}
              >
                <Input type="email" />
              </Form.Item>
            </Col>
            <Col sm={12}>
              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[{ required: true }]}
              >
                <InputPhone />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={30}>
            <Col sm={12}>
              <Form.Item
                name="company"
                label="Company Name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col sm={12}>
              <Form.Item
                name="job"
                label="Job Title"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="message"
            label="Message"
            rules={[{ required: true }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <ReCaptcha
            sitekey={config.reCaptcha.siteKey}
            onChange={onSuccessCaptcha}
          />
          <div className={styles.formActions}>
            <Button type="primary" htmlType="submit" disabled={!captchaPassed}>
              Submit
            </Button>
            <Button htmlType="button" onClick={onResetContactUsForm}>
              Reset
            </Button>
          </div>
        </Form>
      </Modal>
    </Layout>
  );
};

export { Home };
