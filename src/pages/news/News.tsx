import { useState, useEffect } from "react";
import { HomeOutlined } from "@ant-design/icons";

// components
import { Breadcrumb, Typography, Tabs, NewsTicker, Spin } from "@/components";
import { ArticlesTab, ArticleCardView } from "./articles-tab";
import { NewsThreatsTab } from "./threats-tab";
import { ArticleDrawer } from "./article-drawer";
import { NewsThreatDrawer, THREAT_DRAWER_TYPE } from "./threat-drawer";
import { NewsVulnDrawer } from "./vuln-drawer";

// types
import type { NewsTickerGroupType } from "@/components";
import type { FeedlyArticle, FeedlyTrendingVulnerability } from "@/types";

// service
import { feedlyService } from "@/services";

// redux
import { useAppSelector } from "@/redux";
import { selectAccessToken } from "@/redux/auth";

// constants
import { TRENDING_VULNERABILITIES_COUNT } from "./News.constants";

// styles
import { useStyles } from "./News.styles";

const { Title } = Typography;

const News = () => {
  const [tickerData, setTickerData] = useState<NewsTickerGroupType[]>([]);
  const [topStories, setTopStories] = useState<FeedlyArticle[]>([]);
  const [loadingNewsData, setLoadingNewsData] = useState<boolean>(false);
  const [selectedThreatId, setSelectedThreatId] = useState<string>("");
  const [selectedArticle, setSelectedArticle] = useState<FeedlyArticle>();
  const [selectedVulnerability, setSelectedVulnerability] =
    useState<FeedlyTrendingVulnerability | null>(null);
  const [threatDrawerType, setThreatDrawerType] = useState<THREAT_DRAWER_TYPE>(
    THREAT_DRAWER_TYPE.MALWARE
  );
  const [openArticleDrawer, setOpenArticleDrawer] = useState<boolean>(false);
  const [openThreatDrawer, setOpenThreatDrawer] = useState<boolean>(false);
  const [openVulnerabilityDrawer, setOpenVulnerabilityDrawer] =
    useState<boolean>(false);

  const accessToken = useAppSelector(selectAccessToken);

  const styles = useStyles();

  const onViewArticle = (article: FeedlyArticle) => {
    setSelectedArticle(article);
    setOpenArticleDrawer(true);
  };

  const onViewMalware = (resourceId: string) => {
    setSelectedThreatId(resourceId);
    setOpenThreatDrawer(true);
    setThreatDrawerType(THREAT_DRAWER_TYPE.MALWARE);
  };

  const onViewActor = (resourceId: string) => {
    setSelectedThreatId(resourceId);
    setOpenThreatDrawer(true);
    setThreatDrawerType(THREAT_DRAWER_TYPE.ACTOR);
  };

  const onViewVulnerability = (vuln: FeedlyTrendingVulnerability) => {
    setOpenVulnerabilityDrawer(true);
    setSelectedVulnerability(vuln);
  };

  const onCloseThreatDrawer = () => {
    setOpenThreatDrawer(false);
    setSelectedThreatId("");
  };

  const onCloseVulnDrawer = () => {
    setOpenVulnerabilityDrawer(false);
    setSelectedVulnerability(null);
  };

  const fetchTrendings = async () => {
    setLoadingNewsData(true);
    try {
      const [vulns, newMalwares, attackers, articles] = await Promise.all([
        feedlyService.getTrendingVulnerabilities({
          token: accessToken,
          count: TRENDING_VULNERABILITIES_COUNT,
        }),
        feedlyService.getTrendingNewMalwares(accessToken),
        feedlyService.getTrendingAttackers(accessToken),
        feedlyService.getTopStories(accessToken),
      ]);

      // generate ticker data source
      const tickerVluns = vulns.map((vlun) => {
        const { id, label, summary } = vlun;
        return {
          id,
          title: label,
          summary: summary.join(" "),
          onClick: () => onViewVulnerability(vlun),
        };
      });
      const tickerMalwares = newMalwares.map((malware) => ({
        id: malware["new-malware"].id,
        title: malware["new-malware"].label,
        meta: `${malware.entryIds.length} articles`,
        onClick: () => onViewMalware(malware["new-malware"].id),
      }));
      const tickerAttackers = attackers.map(({ entryIds, actor }) => ({
        id: actor.id,
        title: actor.label,
        meta: `${entryIds.length} articles`,
        onClick: () => onViewActor(actor.id),
      }));

      const tickerDataSource: NewsTickerGroupType[] = [
        { name: "Vulnerabilities", items: tickerVluns },
        { name: "New Malwares", items: tickerMalwares },
        { name: "Attackers", items: tickerAttackers },
      ];

      setTickerData(tickerDataSource);
      setTopStories(articles);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingNewsData(false);
    }
  };

  useEffect(() => {
    if (accessToken) {
      fetchTrendings();
    }
  }, [accessToken]);

  const breadcrumbItems = [
    {
      title: <HomeOutlined />,
      href: "/dashboard",
    },
    { title: "Customer" },
    { title: "News" },
  ];

  return (
    <Spin size="default" tip="Loading news data..." spinning={loadingNewsData}>
      <div className={styles.root}>
        <div className={styles.header}>
          <Breadcrumb items={breadcrumbItems} linkRouter />
          {tickerData.length > 0 && <NewsTicker newsData={tickerData} />}
        </div>
        {topStories.length > 0 && (
          <div className={styles.section}>
            <Title className={styles.title}>Top stories</Title>
            <ArticleCardView
              newsData={topStories}
              onViewArticle={onViewArticle}
            />
          </div>
        )}
        <Tabs
          defaultActiveKey="news"
          type="card"
          items={[
            {
              key: "news",
              label: "News",
              children: <ArticlesTab onViewArticle={onViewArticle} />,
            },
            {
              key: "threats",
              label: "Threats",
              children: (
                <NewsThreatsTab
                  onViewMalware={onViewMalware}
                  onViewActor={onViewActor}
                />
              ),
            },
          ]}
        />

        {/* Threat Drawer */}
        <NewsThreatDrawer
          type={threatDrawerType}
          resourceId={selectedThreatId}
          open={openThreatDrawer}
          onClose={onCloseThreatDrawer}
        />

        {/* Article Drawer */}
        {selectedArticle && (
          <ArticleDrawer
            article={selectedArticle}
            open={openArticleDrawer}
            onClose={() => setOpenArticleDrawer(false)}
          />
        )}

        {/* Vulnerability Drawer */}
        {selectedVulnerability && (
          <NewsVulnDrawer
            vulnerability={selectedVulnerability}
            open={openVulnerabilityDrawer}
            onClose={onCloseVulnDrawer}
          />
        )}
      </div>
    </Spin>
  );
};

export { News };
