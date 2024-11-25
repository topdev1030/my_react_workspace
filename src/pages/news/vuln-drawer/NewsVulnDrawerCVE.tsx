import { useState, useMemo, useCallback, useEffect, Fragment } from "react";
import { message } from "antd";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import axios from "axios";

// components
import {
  Button,
  Tag,
  Typography,
  Timeline,
  Spin,
  CVSSDial,
  SeverityDial,
} from "@/components";

// icons
import { Icons } from "@/theme/icons";

// service
import { feedlyService } from "@/services";

// redux
import { useAppSelector } from "@/redux";
import { selectAccessToken } from "@/redux/auth";

// utils
import {
  getCVEFeatures,
  getCVETimelineItems,
  generateCVEOverviewText,
} from "./NewsVulnDrawer.utils";

// types
import type { FeedlyCVE, FeedlyCVEEvent } from "@/types";
import type { SeverityDialProps } from "@/components";
import type { NewsVulnDrawerProps } from "./NewsVulnDrawer.types";

// constants
import { initVulnCVE } from "./NewsVulnDrawer.constants";

// styles
import { useStyles } from "./NewsVulnDrawerCVE.styles";

dayjs.extend(relativeTime);

const { Title, Text, Paragraph } = Typography;

const NewsVulnDrawerCVE = ({
  vulnerability,
}: Pick<NewsVulnDrawerProps, "vulnerability">) => {
  const [vulnCVE, setVulnCVE] = useState<FeedlyCVE>(initVulnCVE);
  const [CVEEvents, setCVEEvents] = useState<FeedlyCVEEvent[]>([]);
  const [graphSVG, setGraphSVG] = useState<string>("");
  const [loadingCVEData, setLoadingCVEData] = useState<boolean>(false);

  const accessToken = useAppSelector(selectAccessToken);

  const styles = useStyles();

  const onOpenNVD = useCallback(() => {
    window.open(`https://nvd.nist.gov/vuln/detail/${vulnCVE.cveid}`, "_blank");
  }, [vulnCVE.cveid]);

  const onCopyCVEOverview = useCallback(async () => {
    try {
      const overviewText = generateCVEOverviewText(vulnCVE);
      await navigator.clipboard.writeText(overviewText);

      // notify message
      message.success("Copied to clipboard");
    } catch (error) {
      console.log(error);
      message.error("Copy to clipboard failed, try again later.");
    }
  }, [vulnCVE]);

  const fetchCVEData = async () => {
    setLoadingCVEData(true);
    try {
      // get CVE id
      const cveId = vulnerability.label.split("&")[0].trim();

      // get cve & events
      const [cve, events] = await Promise.all([
        feedlyService.getThreatEntity({
          token: accessToken,
          resource_id: cveId,
        }),
        feedlyService.getCVEEvents({
          token: accessToken,
          cve_id: cveId,
        }),
      ]);

      setVulnCVE(cve as FeedlyCVE);
      setCVEEvents(events);

      // load graph svg
      const { data: svgContent } = await axios.get((cve as FeedlyCVE).graphUrl);
      setGraphSVG(svgContent.replace(/ns0:path/g, "path"));
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingCVEData(false);
    }
  };

  useEffect(() => {
    if (accessToken && vulnerability) {
      fetchCVEData();
    }
  }, [accessToken, vulnerability]);

  const timelineItems = useMemo(
    () => getCVETimelineItems(vulnCVE.cveid, CVEEvents),
    [vulnCVE, CVEEvents]
  );

  const features = useMemo(() => getCVEFeatures(vulnCVE), [vulnCVE]);

  const {
    label,
    description,
    cvssV3,
    cweIds = [],
    publishedDate,
    publicationDateInfo = [],
    executiveSummary,
    affectedProducts = [],
    exploits = [],
    proofOfExploits = [],
    patchDetails = [],
  } = vulnCVE;

  const renderMeterDial = () => {
    const { cvss, cvssCategoryEstimate } =
      vulnerability.vulnerabilitiesMetadata;
    if (cvss) {
      return <CVSSDial cvss={cvss} epss={Number(vulnCVE.epssScore)} />;
    }
    if (cvssCategoryEstimate) {
      return (
        <SeverityDial
          severity={cvssCategoryEstimate as SeverityDialProps["severity"]}
        />
      );
    }
    return null;
  };

  return (
    <Spin size="default" tip="Loading CVE info..." spinning={loadingCVEData}>
      <div className={styles.header}>
        <div className={styles.heading}>
          {features.length > 0 && (
            <div className={styles.features}>
              {features.map(({ text }, idx) => (
                <Fragment key={idx}>
                  {idx > 0 && (
                    <span className={styles.featureSeparator}>•</span>
                  )}
                  <Text className={styles.feature}>{text}</Text>
                </Fragment>
              ))}
            </div>
          )}
          <Title className={styles.label}>{label}</Title>
          {cweIds.length > 0 && (
            <Paragraph className={styles.cweInfo}>
              {cweIds[0].name} ({cweIds[0].cweID})
            </Paragraph>
          )}
          {publishedDate && publicationDateInfo.length > 0 && (
            <Paragraph className={styles.metadata}>
              Published: {dayjs(publishedDate).format("MMM D, YYYY")} / Updated:{" "}
              {dayjs(publicationDateInfo[0].publishedDate).fromNow()}
            </Paragraph>
          )}
          <div className={styles.actions}>
            <Button
              icon={<Icons glyph="nvd-outlined" />}
              onClick={() => onOpenNVD()}
            />
            <Button
              icon={<Icons glyph="copy-outlined" />}
              onClick={() => onCopyCVEOverview()}
            />
          </div>
        </div>
        <div className={styles.dial}>{renderMeterDial()}</div>
      </div>
      <div className={styles.content}>
        {/* Summary */}
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            <Title level={2}>Summary</Title>
          </div>
          <div className={styles.sectionContent}>
            <Paragraph className={styles.description}>{description}</Paragraph>
          </div>
        </div>

        {/* Impact */}
        {executiveSummary?.impact && (
          <div className={styles.section}>
            <div className={styles.sectionTitle}>
              <Title level={2}>Impact</Title>
            </div>
            <div className={styles.sectionContent}>
              <Paragraph className={styles.description}>
                {executiveSummary?.impact}
              </Paragraph>
            </div>
          </div>
        )}

        {/* Exploitation */}
        {executiveSummary?.impact && (
          <div className={styles.section}>
            <div className={styles.sectionTitle}>
              <Title level={2}>Exploitation</Title>
            </div>
            <div className={styles.sectionContent}>
              <Paragraph className={styles.description}>
                {executiveSummary?.exploitation}
              </Paragraph>
            </div>
          </div>
        )}

        {/* Patch */}
        {executiveSummary?.patch && (
          <div className={styles.section}>
            <div className={styles.sectionTitle}>
              <Title level={2}>Patch</Title>
            </div>
            <div className={styles.sectionContent}>
              <Paragraph className={styles.description}>
                {executiveSummary?.patch}
              </Paragraph>
            </div>
          </div>
        )}

        {/* Mitigation */}
        {executiveSummary?.mitigation && (
          <div className={styles.section}>
            <div className={styles.sectionTitle}>
              <Title level={2}>Mitigation</Title>
            </div>
            <div className={styles.sectionContent}>
              <Paragraph className={styles.description}>
                {executiveSummary?.mitigation}
              </Paragraph>
            </div>
          </div>
        )}

        {/* CVSS Vector */}
        {cvssV3?.vectorString && (
          <Paragraph className={styles.vector}>{cvssV3.vectorString}</Paragraph>
        )}

        {/* Timeline */}
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            <Title level={3}>TIMELINE</Title>
          </div>
          <div className={styles.sectionContent}>
            <Timeline
              className={styles.timeline}
              items={timelineItems.map(
                ({ title, ts, description: desc, sourceName, url }) => ({
                  children: (
                    <div className={styles.timelineItem}>
                      <Title className={styles.timelineTitle}>{title}</Title>
                      <Paragraph className={styles.timelineDescription}>
                        {desc}
                      </Paragraph>
                      <div className={styles.timelineMetadata}>
                        <Text>
                          {dayjs(ts).format("MMM D, YYYY [at] h:mm a")}
                        </Text>
                        {sourceName && <Text>/</Text>}
                        {url ? (
                          <Button type="link" href={url} target="_blank">
                            {sourceName}
                          </Button>
                        ) : (
                          <Text>{sourceName}</Text>
                        )}
                      </div>
                    </div>
                  ),
                })
              )}
            />
            {graphSVG && (
              <div
                className={styles.eventsGraph}
                dangerouslySetInnerHTML={{ __html: graphSVG }}
              />
            )}
          </div>
        </div>

        {/* Affected Systems */}
        {affectedProducts.length > 0 && (
          <div className={styles.section}>
            <div className={styles.sectionTitle}>
              <Title level={3}>AFFECTED SYSTEMS</Title>
            </div>
            <div className={styles.sectionContent}>
              <div className={styles.tags}>
                {affectedProducts.map(({ vendor, products = [] }, idx) => (
                  <Tag
                    key={`affected_system_${idx}`}
                    className={styles.tag}
                    onClick={onOpenNVD}
                  >
                    <Icons glyph="screen-outlined" />
                    <Text className={styles.tagText}>
                      {vendor}
                      <span>/</span>
                      <b>{products.map(({ name }) => name).join(", ")}</b>
                    </Text>
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Exploits */}
        {exploits.length > 0 && (
          <div className={styles.section}>
            <div className={styles.sectionTitle}>
              <Title level={3}>EXPLOITS</Title>
            </div>
            <div className={styles.sectionContent}>
              <div className={styles.tags}>
                {exploits.map((url, idx) => (
                  <Tag
                    key={`exploit_${idx}`}
                    className={styles.tag}
                    onClick={() => window.open(url, "_blank")}
                  >
                    <Icons glyph="target-outlined" />
                    <Text className={styles.tagText}>{url}</Text>
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Proof of Exploits */}
        {proofOfExploits.length > 0 && (
          <div className={styles.section}>
            <div className={styles.sectionTitle}>
              <Title level={3}>PROOF OF EXPLOIT</Title>
            </div>
            <div className={styles.sectionContent}>
              <div className={styles.tags}>
                {proofOfExploits.map((url, idx) => (
                  <Tag
                    key={`proof_of_exploit_${idx}`}
                    className={styles.tag}
                    onClick={() => window.open(url, "_blank")}
                  >
                    <Icons glyph="target-outlined" />
                    <Text className={styles.tagText}>{url}</Text>
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Patches */}
        {patchDetails.length > 0 && (
          <div className={styles.section}>
            <div className={styles.sectionTitle}>
              <Title level={3}>PATCHES</Title>
            </div>
            <div className={styles.sectionContent}>
              <div className={styles.tags}>
                {patchDetails.map(({ title, url }, idx) => (
                  <Tag
                    key={`patch_${idx}`}
                    className={styles.tag}
                    onClick={() => window.open(url, "_blank")}
                  >
                    <Icons glyph="atom-outlined" />
                    <Text className={styles.tagText}>{title}</Text>
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Spin>
  );
};

export { NewsVulnDrawerCVE };
