import { useState, useMemo, useEffect, MouseEvent, KeyboardEvent } from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import dayjs from "dayjs";

// components
import {
  Button,
  Tag,
  Typography,
  Tooltip,
  Table,
  Drawer,
  Spin,
} from "@/components";
import type { TableColumnType } from "@/components";

// theme
import { colors } from "@/theme/colors";

// service
import { feedlyService } from "@/services";

// redux
import { useAppSelector } from "@/redux";
import { selectAccessToken } from "@/redux/auth";

// utils
import {
  getMalwareMetadata,
  generateLineChartData,
} from "./NewsThreatDrawer.utils";

// types
import {
  FeedlyCVE,
  FeedlyThreatArticleCountGraphs,
  FeedlyThreatEntityTrends,
  FeedlyThreatRelationShips,
  FeedlyThreatEntity,
} from "@/types";
import {
  NewsThreatDrawerProps,
  THREAT_DRAWER_TYPE,
} from "./NewsThreatDrawer.types";

// constants
import {
  DEFAULT_ALIAS_COUNT,
  DEFAULT_TARGET_COUNT,
  initEntity,
  initTrends,
  initArticleCountGraphs,
  initRelationships,
} from "./NewsThreatDrawer.constants";

// styles
import { useStyles } from "./NewsThreatDrawer.styles";

const { Title, Text, Paragraph } = Typography;

type renderSecondParam = {
  cveid: any;
  description: any;
};

const NewsThreatDrawer = ({
  type = THREAT_DRAWER_TYPE.MALWARE,
  resourceId,
  open,
  onClose,
}: NewsThreatDrawerProps) => {
  const [threatEntity, setThreatEntity] =
    useState<FeedlyThreatEntity>(initEntity);
  const [threatEntityTrends, setThreatEntityTrends] =
    useState<FeedlyThreatEntityTrends>(initTrends);
  const [threatCVEs, setThreatCVEs] = useState<FeedlyCVE[]>([]);
  const [threatArticleCounts, setThreatArticleCounts] =
    useState<FeedlyThreatArticleCountGraphs>(initArticleCountGraphs);
  const [threatRelationShips, setThreatRelationShips] =
    useState<FeedlyThreatRelationShips>(initRelationships);
  const [aliasesExpanded, setAliasesExpanded] = useState<boolean>(false);
  const [targetsExpanded, setTargetsExpanded] = useState<boolean>(false);
  const [loadingThreatData, setLoadingThreatData] = useState<boolean>(false);

  const accessToken = useAppSelector(selectAccessToken);

  const styles = useStyles();

  const onCloseDrawer = (e: MouseEvent | KeyboardEvent) => {
    // close drawer
    onClose?.(e);

    // reset drawer
    setThreatEntity(initEntity);
    setThreatEntityTrends(initTrends);
    setThreatCVEs([]);
    setThreatArticleCounts(initArticleCountGraphs);
    setThreatRelationShips(initRelationships);
  };

  const fetchThreatMalware = async () => {
    setLoadingThreatData(true);
    try {
      const [trends, entity, relationships, countGraphs] = await Promise.all([
        feedlyService.getThreatTrends({
          token: accessToken,
          resource_id: resourceId,
        }),
        feedlyService.getThreatEntity({
          token: accessToken,
          resource_id: resourceId,
        }),
        feedlyService.getThreatRelationships({
          token: accessToken,
          resource_id: resourceId,
        }),
        feedlyService.getThreatArticleCountGraphs({
          token: accessToken,
          resource_id: resourceId,
        }),
      ]);

      setThreatEntity(entity as FeedlyThreatEntity);
      setThreatEntityTrends(trends);
      setThreatArticleCounts(countGraphs);
      setThreatRelationShips(relationships);

      if (relationships.vulnerabilities.length > 0) {
        const vulnEntityIds = relationships.vulnerabilities.map(
          (vuln) => vuln.entity.id
        );
        const exploitedVulns =
          await feedlyService.getThreatExploitedVulnerabilities({
            token: accessToken,
            entity_ids: vulnEntityIds,
          });
        setThreatCVEs(exploitedVulns);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingThreatData(false);
    }
  };

  const fetchThreatActor = async () => {
    setLoadingThreatData(true);
    try {
      const entity = await feedlyService.getThreatEntity({
        token: accessToken,
        resource_id: resourceId,
      });
      setThreatEntity(entity as FeedlyThreatEntity);

      const { relationships, trends } = entity as FeedlyThreatEntity;
      if (relationships && relationships.vulnerabilities.length > 0) {
        const vulnEntityIds = relationships.vulnerabilities.map(
          (vuln) => vuln.entity.id
        );
        const exploitedVulns =
          await feedlyService.getThreatExploitedVulnerabilities({
            token: accessToken,
            entity_ids: vulnEntityIds,
          });
        setThreatRelationShips(relationships);
        setThreatCVEs(exploitedVulns);
      }
      if (trends) {
        setThreatEntityTrends(trends);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingThreatData(false);
    }
  };

  useEffect(() => {
    if (!resourceId || !accessToken) return;
    if (type === THREAT_DRAWER_TYPE.MALWARE) {
      fetchThreatMalware();
    } else {
      fetchThreatActor();
    }
  }, [resourceId, accessToken, type]);

  const {
    aliases = [],
    threatActorDetails = {
      targets: [],
    },
  } = threatEntity;

  const { headerSmallGraphUrl, nArticlesPastYear } = threatEntityTrends;

  const { hero, category, overview } = getMalwareMetadata(threatEntity);

  const articlesChartData = generateLineChartData(threatArticleCounts);

  const [displayAliases, restAliases] = useMemo(() => {
    if (aliasesExpanded) return [aliases, 0];
    const sliceAliases = aliases.slice(0, DEFAULT_ALIAS_COUNT);
    return [sliceAliases, aliases.length - sliceAliases.length];
  }, [aliases, aliasesExpanded]);

  const [displayTargets, restTargets] = useMemo(() => {
    const originTargets = threatActorDetails.targets;
    if (targetsExpanded) return [originTargets, 0];
    const sliceTargets = originTargets.slice(0, DEFAULT_TARGET_COUNT);
    return [sliceTargets, originTargets.length - sliceTargets.length];
  }, [threatActorDetails, targetsExpanded]);

  const ttpsColumns: TableColumnType[] = [
    {
      className: styles.ttpsTableTechniqueColumn,
      title: "TECHNIQUE",
      dataIndex: "technique",
    },
    {
      title: "MITRE ID",
      dataIndex: "mitreId",
    },
    {
      title: "PROCEDURES",
      dataIndex: "procedureCount",
    },
    {
      title: "MITIGATION",
      dataIndex: "mitigations",
      render: (mitigations) => mitigations.length,
    },
    {
      title: "ARTICLES",
      dataIndex: "articleCount",
    },
  ];

  const vulnsColumns: TableColumnType[] = [
    {
      className: styles.vulnsTableCVEIDColumn,
      title: "CVE ID",
      render: (__, param) => {
        return (
          <>
            <Title>{(param as renderSecondParam)?.cveid}</Title>
            <div
              dangerouslySetInnerHTML={{
                __html: (param as renderSecondParam)?.description,
              }}
            />
          </>
        );
      },
    },
    {
      title: "CVSS SCORE",
      dataIndex: "cvssV3",
      render: (cvssV3) => {
        if (!cvssV3) return null;
        return (
          <Tag className={styles.cvssScoreTag}>CVSS {cvssV3.baseScore}</Tag>
        );
      },
    },
    {
      className: styles.vulnsTableVendorColumn,
      title: "VENDOR",
      dataIndex: "vulnerableProducts",
      render: (vulnProducts) => vulnProducts?.vendor,
    },
    {
      title: "TREND",
      dataIndex: "smallGraphUrl",
      render: (smallGraphUrl) => (
        <img
          className={styles.volnTrendingGraph}
          src={smallGraphUrl}
          alt="Trending graph for this CVE"
        />
      ),
    },
    {
      title: "PUBLISHED DATE",
      dataIndex: "publishedDate",
      width: 100,
      render: (publishedDate) => dayjs(publishedDate).format("MMM D, YYYY"),
    },
  ];

  return (
    <Drawer
      className={styles.root}
      contentWrapperStyle={{ width: "70%" }}
      placement="right"
      open={open}
      onClose={onCloseDrawer}
    >
      <div className={styles.entryContainer}>
        <Spin
          size="default"
          tip="Loading Insights Card details..."
          spinning={loadingThreatData}
        >
          <div
            className={styles.entryHeader}
            style={{ backgroundImage: `url(${hero})` }}
          >
            <Tag className={styles.betaTag}>Beta</Tag>
            <Text className={styles.category}>{category}</Text>
            <Title className={styles.title}>{threatEntity?.label}</Title>
            <Tag className={styles.mentionsTag}>
              7 mentions in the last 2 weeks
            </Tag>
            {headerSmallGraphUrl && (
              <img
                className={styles.trendingGraphImage}
                src={headerSmallGraphUrl}
                alt="Trending graph over the past year"
              />
            )}
            <Text className={styles.nArticlesPastYear}>
              {nArticlesPastYear} articles in the last 12 months
            </Text>
          </div>
          <div className={styles.entryContent}>
            <div className={styles.section}>
              <Title className={styles.sectionTitle}>Overview</Title>
              <div className={styles.sectionContent}>
                <Paragraph className={styles.overview}>{overview}</Paragraph>
              </div>
            </div>

            {/* Aliases */}
            {aliases.length > 0 && (
              <div className={styles.section}>
                <Title className={styles.sectionTitle}>Aliases</Title>
                <div className={styles.sectionContent}>
                  <ul className={styles.bullPointList}>
                    {displayAliases.map((alias, idx) => (
                      <li key={idx}>{alias}</li>
                    ))}
                  </ul>
                  {aliases.length > DEFAULT_ALIAS_COUNT && (
                    <Button
                      className={styles.loadMoreListBtn}
                      type="link"
                      onClick={() => setAliasesExpanded((prev) => !prev)}
                    >
                      See {aliasesExpanded ? "less" : `${restAliases} more`}{" "}
                      aliases
                    </Button>
                  )}
                </div>
              </div>
            )}

            {/* Targets */}
            {threatActorDetails.targets.length > 0 && (
              <div className={styles.section}>
                <Title className={styles.sectionTitle}>Targets</Title>
                <div className={styles.sectionContent}>
                  <ul className={styles.bullPointList}>
                    {displayTargets.map((target, idx) => (
                      <li key={idx}>{target}</li>
                    ))}
                  </ul>
                  {threatActorDetails.targets.length > DEFAULT_TARGET_COUNT && (
                    <Button
                      className={styles.loadMoreListBtn}
                      type="link"
                      onClick={() => setTargetsExpanded((prev) => !prev)}
                    >
                      See {targetsExpanded ? "less" : `${restTargets} more`}{" "}
                      targets
                    </Button>
                  )}
                </div>
              </div>
            )}

            {/* Count Chart */}
            {articlesChartData.length > 0 && (
              <div className={styles.section}>
                <Title className={styles.sectionTitle}>
                  Article count
                  <Tooltip title="Article count of selected AI Models within a certain time frame">
                    <span className={styles.articleCountTooltipTrigger}>
                      <InfoCircleOutlined />
                    </span>
                  </Tooltip>
                </Title>
                <div className={styles.sectionContent}>
                  <ResponsiveContainer width="100%" height={270}>
                    <LineChart
                      className={styles.articleCountLineChart}
                      data={articlesChartData}
                    >
                      <CartesianGrid vertical={false} />
                      <XAxis dataKey="year" tickLine={false} axisLine={false} />
                      <YAxis tickLine={false} axisLine={false} />
                      <Line
                        type="linear"
                        dataKey="count"
                        stroke={colors.colorSuccess}
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* TTPs */}
            {threatRelationShips.ttps.length > 0 && (
              <div className={styles.section}>
                <Title className={styles.sectionTitle}>
                  Tactics, Techniques, and Procedures
                </Title>
                <div className={styles.sectionContent}>
                  <Table
                    className={styles.tableView}
                    rowKey="entityId"
                    size="small"
                    columns={ttpsColumns}
                    dataSource={threatRelationShips.ttps}
                  />
                </div>
              </div>
            )}

            {/* Vulns */}
            {threatCVEs.length > 0 && (
              <div className={styles.section}>
                <Title className={styles.sectionTitle}>
                  Exploited vulnerabilities
                </Title>
                <div className={styles.sectionContent}>
                  <Table
                    className={styles.tableView}
                    rowKey="id"
                    size="small"
                    columns={vulnsColumns}
                    dataSource={threatCVEs}
                  />
                </div>
              </div>
            )}
          </div>
        </Spin>
      </div>
    </Drawer>
  );
};

export { NewsThreatDrawer };
