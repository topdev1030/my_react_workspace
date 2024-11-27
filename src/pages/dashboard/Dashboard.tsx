import { useNavigate } from "react-router-dom";

import cx from "clsx";

import { Col, Row, Image } from "antd";

// components
import { Typography, Card } from "@/components/atoms";
import { Head } from "@/components/organisms/head";
import { FooterBar } from "@/components/organisms/footer";

// helpers
import { toNumberWithSign } from "@/helpers";

// constants
import { weeklyStatsData as stats } from "./Dashboard.contants";

// styles
import { useStyles } from "./Dashboard.styles";

// Import Icon assets
import dashboardIcon_1 from "../../static/images/dashboard_icons_1.png";
import dashboardIcon_2 from "../../static/images/dashboard_icons_2.png";
import dashboardIcon_3 from "../../static/images/dashboard_icons_3.png";
import dashboardIcon_4 from "../../static/images/dashboard_icons_4.png";
import viewArrowIcon from "../../static/images/ri_arrow-up-line.png";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const Dashboard = () => {
  const styles = useStyles();
  const navigate = useNavigate();

  const handleRedirect = (url: String) => {
    navigate(`/admin/${url}`);
  };

  const statsData = [
    {
      title: "LOW",
      badge: false,
      subtitle: "Dark web chatter (Volume)",
      icon: (
        <Image
          width={50}
          height={50}
          src={dashboardIcon_1}
          preview={false}
          className={cx({
            [styles.statsIcon]: true,
            [styles.statsTextSuccess]: stats.chatter === "low",
            [styles.statsTextDanger]: stats.chatter === "high",
          })}
        />
      ),
      background: "linear-gradient(75.78deg, #232331 11.71%, #3C290E 134.63%)",
    },
    {
      title: stats.thirdAlerts.toLocaleString(),
      badge: false,
      subtitle: "3rd and 4th party alerts",
      icon: (
        <Image
          width={50}
          height={50}
          preview={false}
          src={dashboardIcon_2}
          className={cx(styles.statsIcon, styles.statsTextWarning)}
        />
      ),
      background: "linear-gradient(75.78deg, #232331 11.71%, #3C290E 134.63%)",
    },
    {
      title: stats.breachAlerts.toLocaleString(),
      badge: false,
      subtitle: "Breach Alerts",
      icon: (
        <Image
          width={50}
          height={50}
          preview={false}
          src={dashboardIcon_3}
          className={cx(styles.statsIcon, styles.statsTextDanger)}
        />
      ),
      background: "linear-gradient(75.78deg, #232331 11.71%, #3C290E 134.63%)",
    },
    {
      title: stats.malwareFamilies.toLocaleString(),
      badge: true,
      subtitle: "Malware Families",
      icon: (
        <Image
          width={50}
          height={50}
          preview={false}
          src={dashboardIcon_4}
          className={cx({
            [styles.statsIcon]: true,
            [styles.statsTextSuccess]: stats.malwareFamiliesMargin > 0,
            [styles.statsTextOrange]: stats.malwareFamiliesMargin < 0,
          })}
        />
      ),
      background: "linear-gradient(75.78deg, #232331 11.71%, #3C290E 134.63%)",
    },
  ];

  const galanceData = [
    { title: "Reports Created", url: "reports", value: 10, color: "#C38A39" },
    { title: "Uploaded Files", url: "uploads", value: 50, color: "#A5F167" },
    { title: "Messages Sent", url: "messages", value: 14, color: "#72C3F1" },
  ];

  const feedData = [
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      subtitle: "Data Privacy Tips for College Students",
      feed_date: "Cole Claybourn Nov. 19, 2024",
    },
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      subtitle: "Data Privacy Tips for College Students",
      feed_date: "Cole Claybourn Nov. 19, 2024",
    },
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      subtitle: "Data Privacy Tips for College Students",
      feed_date: "Cole Claybourn Nov. 19, 2024",
    },
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      subtitle: "Data Privacy Tips for College Students",
      feed_date: "Cole Claybourn Nov. 19, 2024",
    },
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      subtitle: "Data Privacy Tips for College Students",
      feed_date: "Cole Claybourn Nov. 19, 2024",
    },
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      subtitle: "Data Privacy Tips for College Students",
      feed_date: "Cole Claybourn Nov. 19, 2024",
    },
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      subtitle: "Data Privacy Tips for College Students",
      feed_date: "Cole Claybourn Nov. 19, 2024",
    },
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      subtitle: "Data Privacy Tips for College Students",
      feed_date: "Cole Claybourn Nov. 19, 2024",
    },
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      subtitle: "Data Privacy Tips for College Students",
      feed_date: "Cole Claybourn Nov. 19, 2024",
    },
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      subtitle: "Data Privacy Tips for College Students",
      feed_date: "Cole Claybourn Nov. 19, 2024",
    },
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      subtitle: "Data Privacy Tips for College Students",
      feed_date: "Cole Claybourn Nov. 19, 2024",
    },
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      subtitle: "Data Privacy Tips for College Students",
      feed_date: "Cole Claybourn Nov. 19, 2024",
    },
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      subtitle: "Data Privacy Tips for College Students",
      feed_date: "Cole Claybourn Nov. 19, 2024",
    },
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      subtitle: "Data Privacy Tips for College Students",
      feed_date: "Cole Claybourn Nov. 19, 2024",
    },
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      subtitle: "Data Privacy Tips for College Students",
      feed_date: "Cole Claybourn Nov. 19, 2024",
    },
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      subtitle: "Data Privacy Tips for College Students",
      feed_date: "Cole Claybourn Nov. 19, 2024",
    },
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      subtitle: "Data Privacy Tips for College Students",
      feed_date: "Cole Claybourn Nov. 19, 2024",
    },
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      subtitle: "Data Privacy Tips for College Students",
      feed_date: "Cole Claybourn Nov. 19, 2024",
    },
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      subtitle: "Data Privacy Tips for College Students",
      feed_date: "Cole Claybourn Nov. 19, 2024",
    },
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      subtitle: "Data Privacy Tips for College Students",
      feed_date: "Cole Claybourn Nov. 19, 2024",
    },
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      subtitle: "Data Privacy Tips for College Students",
      feed_date: "Cole Claybourn Nov. 19, 2024",
    },
  ];

  return (
    <div className={styles.root}>
      <Row style={{ flexFlow: "nowrap" }}>
        <Col className={styles.mainContainer}>
          <Head />

          <div className={styles.statsContainer}>
            <Row gutter={[24, 24]}>
              {statsData.map((item, index) => (
                <Col xs={24} sm={18} md={16} lg={12} key={index}>
                  <Card
                    className={styles.statsCard}
                    style={{
                      background: item.background,
                    }}
                  >
                    <div className={styles.chatterContainer}>
                      <Title className={styles.statsValue}>
                        {item.title}
                        {item.badge ? (
                          <sup className={styles.statsSup}>-5</sup>
                        ) : (
                          ""
                        )}
                      </Title>
                      {item.icon}
                    </div>
                    <Text type="secondary" className={styles.statsTitle}>
                      {item.subtitle}
                    </Text>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

          <div className={styles.galanceContainer}>
            <h2 className={styles.galanceTitle}>Data at a glance</h2>
            <Row gutter={16} justify="space-between" style={{ marginTop: 30 }}>
              {galanceData.map((card, index) => (
                <Col key={index} xs={16} sm={14} md={12} lg={6}>
                  <Card
                    className={styles.galanceCard}
                    style={{
                      backgroundColor: card.color,
                    }}
                    hoverable
                    onClick={() => handleRedirect(card.url)}
                  >
                    <h3 className={styles.galanceSubTitle}>{card.title}</h3>
                    <h1 className={styles.galanceValue}>{card.value}</h1>
                    <div className={styles.galanceViewAll}>
                      <span
                        style={{
                          color: "#000",
                          fontSize: 17,
                          fontWeight: 600,
                        }}
                      >
                        View All
                      </span>
                      <Image
                        src={viewArrowIcon}
                        width={20}
                        preview={false}
                        style={{ color: "#000" }}
                      />
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

          <FooterBar />
        </Col>

        {/* Right Side bar */}
        <Col
          style={{
            backgroundColor: "#000000",
            overflow: "auto",
            right: 0,
            width: "400px",
            height: "100vh",
          }}
        >
          <div className={styles.rightBar}>
            <div className={styles.feedContainer}>
              <Text
                style={{ fontStyle: "Medium", fontSize: 12, color: "#8E8E8E" }}
              >
                NEWS FEED
              </Text>
              <Text style={{ fontStyle: "Medium", fontSize: 16 }} strong>
                Cyber Secutiry Updates
              </Text>
            </div>
            <Card className={styles.newsCard}>
              <div className={styles.newsCardContainer}>
                <Image
                  width="100%"
                  height={230}
                  preview={false}
                  className={styles.newsImage}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />

                <div className={styles.newsDescription}>
                  <Text strong>Data Privacy Tips for College Students</Text>
                  <Text type="secondary">Cole Claybourn Nov. 19, 2024</Text>
                </div>
              </div>
            </Card>

            <div className={styles.newsContainer}>
              {feedData.map((feed, index) => (
                <Card
                  className={styles.newsCard}
                  key={index}
                  style={{ cursor: "pointer" }}
                >
                  <div className={styles.cardContainer}>
                    <Image
                      width={80}
                      height={65}
                      preview={false}
                      className={styles.newsImage}
                      src={feed.src}
                    />

                    <div className={styles.titleContainer}>
                      <Text className={styles.newsTitle} strong>
                        {feed.subtitle}
                      </Text>
                      <Text type="secondary">{feed.feed_date}</Text>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export { Dashboard };
