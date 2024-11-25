import { useState, useEffect } from "react";

// components
import { Typography, Dropdown, Spin } from "@/components";
import { ArticleCardView } from "./ArticleCardView";
import { ArticleTableView } from "./ArticleTableView";

// theme
import { Icons } from "@/theme/icons";

// service
import { feedlyService } from "@/services";

// redux
import { useAppSelector } from "@/redux";
import { selectAccessToken } from "@/redux/auth";

// constants
import { STEAM_IDS } from "./ArticlesTab.constants";

// types
import { FeedlyArticle } from "@/types";
import { ArticlesTabProps, NEWS_VIEW_MODE } from "./ArticlesTab.types";

// styles
import { useStyles } from "./ArticlesTab.styles";

const { Title } = Typography;

const ArticlesTab = ({ onViewArticle }: ArticlesTabProps) => {
  const [CVESArticles, setCVESArticles] = useState<FeedlyArticle[]>([]);
  const [CVSSArticles, setCVSSArticles] = useState<FeedlyArticle[]>([]);
  const [cyberArticles, setCyberArticles] = useState<FeedlyArticle[]>([]);
  const [insuranceArticles, setInsuranceArticles] = useState<FeedlyArticle[]>(
    []
  );
  const [threatResearchArticles, setThreatResearchArticles] = useState<
    FeedlyArticle[]
  >([]);
  const [loadingArticles, setLoadingArticles] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<NEWS_VIEW_MODE>(
    NEWS_VIEW_MODE.TABLE
  );

  const accessToken = useAppSelector(selectAccessToken);

  const styles = useStyles();

  const fetchArticles = async () => {
    setLoadingArticles(true);
    try {
      const [cves, cvss, cybers, insurances, threats] = await Promise.all([
        feedlyService.getTopStories(accessToken),
        feedlyService.getArticlesByStreamID({
          token: accessToken,
          stream_id: STEAM_IDS.CVSS,
        }),
        feedlyService.getArticlesByStreamID({
          token: accessToken,
          stream_id: STEAM_IDS.CYBER,
        }),
        feedlyService.getArticlesByStreamID({
          token: accessToken,
          stream_id: STEAM_IDS.INSURANCE,
        }),
        feedlyService.getArticlesByStreamID({
          token: accessToken,
          stream_id: STEAM_IDS.THREAT_RESEARCH,
        }),
      ]);

      setCVESArticles(cves);
      setCVSSArticles(cvss);
      setCyberArticles(cybers);
      setInsuranceArticles(insurances);
      setThreatResearchArticles(threats);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingArticles(false);
    }
  };

  useEffect(() => {
    if (accessToken) {
      fetchArticles();
    }
  }, [accessToken]);

  const renderNewsItem = (data: FeedlyArticle[]) => {
    switch (viewMode) {
      case NEWS_VIEW_MODE.CARD:
        return (
          <ArticleCardView newsData={data} onViewArticle={onViewArticle} />
        );
      case NEWS_VIEW_MODE.TABLE:
      default:
        return (
          <ArticleTableView newsData={data} onViewArticle={onViewArticle} />
        );
    }
  };

  return (
    <Spin size="small" spinning={loadingArticles}>
      <div className={styles.root}>
        <div className={styles.viewModeDropdown}>
          <Dropdown
            trigger={["click"]}
            menu={{
              selectable: true,
              items: [
                {
                  key: NEWS_VIEW_MODE.CARD,
                  label: "Cards View",
                },
                {
                  key: NEWS_VIEW_MODE.TABLE,
                  label: "Table View",
                },
              ],
              selectedKeys: [viewMode],
              onSelect: ({ selectedKeys }) => {
                setViewMode(selectedKeys[0] as NEWS_VIEW_MODE);
              },
            }}
          >
            <Icons glyph="layout-outlined" />
          </Dropdown>
        </div>
        <div className={styles.articles}>
          <div className={styles.section}>
            <Title className={styles.title}>CVEs</Title>
            {renderNewsItem(CVESArticles)}
          </div>
          <div className={styles.section}>
            <Title className={styles.title}>CVSS</Title>
            {renderNewsItem(CVSSArticles)}
          </div>
          <div className={styles.section}>
            <Title className={styles.title}>Cyber</Title>
            {renderNewsItem(cyberArticles)}
          </div>
          <div className={styles.section}>
            <Title className={styles.title}>Insurance</Title>
            {renderNewsItem(insuranceArticles)}
          </div>
          <div className={styles.section}>
            <Title className={styles.title}>Threat Research</Title>
            {renderNewsItem(threatResearchArticles)}
          </div>
        </div>
      </div>
    </Spin>
  );
};

export { ArticlesTab };
