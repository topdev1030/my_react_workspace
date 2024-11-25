// types
import type { FeedlyTrendingVulnerability } from "@/types";
import type { DrawerProps } from "@/components";

export enum VULN_DRAWER_TYPE {
  UNKNOWN = "unknown",
  CVE = "cve",
  TREND_ANALYSIS = "trend-analysis",
}

export interface NewsVulnDrawerProps {
  vulnerability: FeedlyTrendingVulnerability;
  open?: boolean;
  onClose?: DrawerProps["onClose"];
}
