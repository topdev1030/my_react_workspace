// types
import type { FeedlyCVEEvent, FeedlyCVE } from "@/types";

export const getCVEFeatures = ({ trending, exploits = [] }: FeedlyCVE) => {
  const features = [
    {
      visible: trending,
      text: "TRENDING",
    },
    {
      visible: exploits.length > 0,
      text: "EXPLOIT",
    },
  ];
  return features.filter(({ visible }) => visible);
};

export const getCVETimelineItems = (
  cveId: string,
  events: FeedlyCVEEvent[]
): (Omit<FeedlyCVEEvent, "type"> & {
  title: string;
  description?: string;
})[] => {
  return events
    .map(
      ({
        type,
        sourceName,
        scannerName,
        moduleId,
        score,
        percentile,
        summary,
        cvssCategoryEstimate,
        ...rest
      }) => {
        const epssScore = ((score || 0) * 100).toFixed(1);
        const epssPercent = ((percentile || 0) * 100).toFixed(1);

        switch (type) {
          case "vulnerability:exploitation":
            return {
              title: "Exploitation in the Wild",
              description: `Attacks in the wild have been reported by ${sourceName}`,
              sourceName,
              ...rest,
            };
          case "vulnerability:scannerInclusion":
            return {
              title: "Detection in Vulnerability Scanners",
              description: `Detection for the vulnerability has been added to ${scannerName} (${moduleId})`,
              ...rest,
            };
          case "vulnerability:cveAssigned":
            return {
              title: "CVE Assignment",
              description: `NVD published the first details for ${cveId}`,
              ...rest,
            };
          case "firstArticle":
            return {
              title: "First Article",
              description: `Feedly found the first article mentioning ${cveId}`,
              ...rest,
            };
          case "vulnerability:epssScoreUpdate":
            return {
              title: "EPSS",
              description: `EPSS Score was set to: ${epssScore}% (Percentile: ${epssPercent}%)`,
              ...rest,
            };
          case "threatIntelligenceReport":
            return {
              title: "Threat Intelligence Report",
              description: summary,
              ...rest,
            };
          case "vulnerability:cvssScoreUpdate":
            return {
              title: "CVSS",
              description: `A CVSS base score of ${Math.round(
                score || 0
              )} has been assigned.`,
              ...rest,
            };
          case "relationship:cveExploit":
            return {
              title: "Attribution of Exploits",
              description: "The vulnerability is known to be exploited",
              ...rest,
            };
          case "trending":
            return {
              title: "Trending",
              description: "This CVE stopped trending in security discussions",
              ...rest,
            };
          case "vulnerability:cvssScoreEstimation":
            return {
              title: "CVSS Estimate",
              description: `Feedly estimated the CVSS score as ${cvssCategoryEstimate}`,
              ...rest,
            };
          case "vulnerability:proofOfConcept":
            return {
              title: "Proof of Concept (PoC) Released",
              description: "A proof of concept exploit has been released",
              ...rest,
            };
          default:
            return { title: type, ...rest };
        }
      }
    )
    .reverse();
};

export const generateCVEOverviewText = ({
  cveid,
  cweIds = [],
  cvssV3,
  epssScore,
  exploits = [],
  patchDetails = [],
  affectedProducts = [],
  executiveSummary,
}: FeedlyCVE) =>
  `CVE Id:
${cveid}

CWE:
${cweIds.map(({ cweID, name }) => `${cweID}, ${name}`).join("\n")}

CVSS:
${cvssV3.baseScore}

EPSS Score:
${(Number(epssScore) * 100).toFixed(0)}%

Exploits:
${exploits.map((exploit) => `${exploit}`).join("\n")}

Patch:
${patchDetails.map(({ title, url }) => `${title}, ${url}`).join("\n")}

Vendors:
${affectedProducts.map(({ vendor }) => `${vendor}`).join("\n")}

Description:
${executiveSummary?.description || ""}

Impact:
${executiveSummary?.impact || ""}

Exploitation:
${executiveSummary?.exploitation || ""}

Patch:
${executiveSummary?.patch || ""}

Mitigation:
${executiveSummary?.mitigation || ""}

CVSS Vector:
${cvssV3.vectorString}` || "";
