// types
import {
  FeedlyArticle,
  FeedlyThreat,
  FeedlyCVE,
  FeedlyThreatArticleCountGraphs,
  FeedlyThreatEntityTrends,
  FeedlyThreatRelationShips,
  FeedlyThreatEntity,
  FeedlyTrendingVulnerability,
  FeedlyTrendingNewMalware,
  FeedlyTrendingAttacker,
  FeedlyCVEEvent,
} from "@/types";

export type GetTrendingVulnerabilitiesPayload = {
  token: string;
  count: number;
};

export type GetTrendingVulnerabilitiesResponse = FeedlyTrendingVulnerability[];

export type GetTopStoriesResponse = FeedlyArticle[];

export type GetTrendingNewMalwareResponse = FeedlyTrendingNewMalware[];

export type GetTrendingAttackerResponse = FeedlyTrendingAttacker[];

export type GetArticlesByStreamIDPayload = {
  token: string;
  stream_id: string;
};

export type GetArticlesByStreamIDResponse = FeedlyArticle[];

export type TTPDashboardPeriod =
  | "Last7Days"
  | "Last30Days"
  | "Last3Months"
  | "Last6Months"
  | "LastYear";

export type GetTTPsPayload = {
  token: string;
  type: TTPDashboardPeriod;
};

export type GetTTPsResponse = FeedlyThreat[];

export type GetThreatInfoPayload = {
  token: string;
  resource_id: string;
};

export type GetThreatTrendsResponse = FeedlyThreatEntityTrends;

export type GetThreatEntityResponse = FeedlyThreatEntity | FeedlyCVE;

export type GetThreatRelationshipsResponse = FeedlyThreatRelationShips;

export type GetThreatArticleCountGraphsResponse =
  FeedlyThreatArticleCountGraphs;

export type GetThreatExploitedVulnerabilitiesPayload = {
  token: string;
  entity_ids: string[];
};

export type GetThreatExploitedVulnerabilitiesResponse = FeedlyCVE[];

export type GetCVEEventsPayload = {
  token: string;
  cve_id: string;
};

export type GetCVEEventsResponse = FeedlyCVEEvent[];
