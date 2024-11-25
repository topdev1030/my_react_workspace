import { Fragment } from "react";
import dayjs from "dayjs";

// components
import { Typography } from "@/components";

// types
import { NewsVulnDrawerProps } from "./NewsVulnDrawer.types";

// styles
import { useStyles } from "./NewsVulnDrawerTrendingAnalysis.styles";

const { Title, Text, Paragraph } = Typography;

const NewsVulnDrawerTrendingAnalysis = ({
  vulnerability,
}: Pick<NewsVulnDrawerProps, "vulnerability">) => {
  const styles = useStyles();

  const {
    featured,
    label,
    summary = [],
    sparklineUrl,
    items = [],
    vulnerabilitiesMetadata: { vendor, publishedDate },
  } = vulnerability;

  const metadata = [
    { visible: vendor, text: vendor?.toUpperCase() },
    { visible: publishedDate, text: dayjs(publishedDate).fromNow() },
  ];

  return (
    <div className={styles.root}>
      <div className={styles.entryHeader}>
        {featured && <Text className={styles.featured}>FEATURED</Text>}
        <Title className={styles.title}>{label}</Title>
        <div className={styles.metadata}>
          {metadata
            .filter(({ visible }) => visible)
            .map(({ text }, idx) => (
              <Fragment key={idx}>
                {idx > 0 && <div className={styles.metadataSeparator}>/</div>}
                <div className={styles.metadataItem}>
                  <Text>{text}</Text>
                </div>
              </Fragment>
            ))}
        </div>
      </div>
      <div className={styles.entryContent}>
        <div className={styles.highlightPanel}>
          <Title className={styles.panelTitle} level={3}>
            HIGHLIGHTS
          </Title>
          <ul className={styles.highlights}>
            {summary.map((text, idx) => (
              <li key={`highlight_${idx}`}>{text}</li>
            ))}
          </ul>
        </div>
        <div className={styles.sparklinePanel}>
          <Title className={styles.panelTitle} level={3}>
            TRENDING CHART
          </Title>
          <img
            className={styles.imgSparkline}
            src={sparklineUrl}
            alt="trending-chart"
          />
          <Paragraph className={styles.sparklineDescription}>
            <b>{items.length} feeds</b> over <b>7 days</b>
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export { NewsVulnDrawerTrendingAnalysis };
