import axios from "axios";

// config
import config from "@/config";

// constants
import { MAX_ENTRIES } from "./FeedlyServices.constants";

// types
import type {
  GetTrendingVulnerabilitiesPayload,
  GetTrendingVulnerabilitiesResponse,
  GetTopStoriesResponse,
  GetTrendingNewMalwareResponse,
  GetTrendingAttackerResponse,
  GetArticlesByStreamIDPayload,
  GetArticlesByStreamIDResponse,
  GetTTPsPayload,
  GetTTPsResponse,
  GetThreatInfoPayload,
  GetThreatTrendsResponse,
  GetThreatEntityResponse,
  GetThreatRelationshipsResponse,
  GetThreatArticleCountGraphsResponse,
  GetThreatExploitedVulnerabilitiesPayload,
  GetThreatExploitedVulnerabilitiesResponse,
  GetCVEEventsPayload,
  GetCVEEventsResponse,
} from "./FeedlyServices.types";
import { defaultRequestHeaders } from "@/constants";

const request = axios.create({
  baseURL: `${config.api.baseUrl}/feedly`,
  timeout: config.api.timeout,
  headers: {
    "X-App-Source": defaultRequestHeaders["X-App-Source"],
  },
});

const feedlyService = {
  getTrendingVulnerabilities: ({
    token,
    count,
  }: GetTrendingVulnerabilitiesPayload): Promise<GetTrendingVulnerabilitiesResponse> => {
    return new Promise((resolve, reject) => {
      request
        .get("/trends/vulns", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            count: Math.min(count, MAX_ENTRIES),
          },
        })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err?.response?.data?.errors || []);
        });
    });
  },
  getTrendingNewMalwares: (
    token: string
  ): Promise<GetTrendingNewMalwareResponse> => {
    return new Promise((resolve, reject) => {
      request
        .get("/trends/new-malwares", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err?.response?.data?.errors || []);
        });
    });
  },
  getTrendingAttackers: (
    token: string
  ): Promise<GetTrendingAttackerResponse> => {
    return new Promise((resolve, reject) => {
      request
        .get("/trends/attackers", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err?.response?.data?.errors || []);
        });
    });
  },
  getTopStories: (token: string): Promise<GetTopStoriesResponse> => {
    return new Promise((resolve, reject) => {
      request
        .get("/trends/stories", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err?.response?.data?.errors || []);
        });
    });
  },
  getArticlesByStreamID: ({
    token,
    stream_id,
  }: GetArticlesByStreamIDPayload): Promise<GetArticlesByStreamIDResponse> => {
    return new Promise((resolve, reject) => {
      request
        .get("/articles", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            stream_id,
          },
        })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err?.response?.data?.errors || []);
        });
    });
  },
  getTTPs: ({ token, type }: GetTTPsPayload): Promise<GetTTPsResponse> => {
    return new Promise((resolve, reject) => {
      request
        .get("/ttps", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            type,
          },
        })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err?.response?.data?.errors || []);
        });
    });
  },
  getThreatTrends: ({
    token,
    resource_id,
  }: GetThreatInfoPayload): Promise<GetThreatTrendsResponse> => {
    return new Promise((resolve, reject) => {
      request
        .get("/threat/trends", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            resource_id,
          },
        })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err?.response?.data?.errors || []);
        });
    });
  },
  getThreatEntity: ({
    token,
    resource_id,
  }: GetThreatInfoPayload): Promise<GetThreatEntityResponse> => {
    return new Promise((resolve, reject) => {
      request
        .get("/threat/entity", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            resource_id,
          },
        })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err?.response?.data?.errors || []);
        });
    });
  },
  getThreatRelationships: ({
    token,
    resource_id,
  }: GetThreatInfoPayload): Promise<GetThreatRelationshipsResponse> => {
    return new Promise((resolve, reject) => {
      request
        .get("/threat/relationships", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            resource_id,
          },
        })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err?.response?.data?.errors || []);
        });
    });
  },
  getThreatArticleCountGraphs: ({
    token,
    resource_id,
  }: GetThreatInfoPayload): Promise<GetThreatArticleCountGraphsResponse> => {
    return new Promise((resolve, reject) => {
      request
        .get("/threat/article-count-graphs", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            resource_id,
          },
        })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err?.response?.data?.errors || []);
        });
    });
  },
  getThreatExploitedVulnerabilities: ({
    token,
    entity_ids,
  }: GetThreatExploitedVulnerabilitiesPayload): Promise<GetThreatExploitedVulnerabilitiesResponse> => {
    return new Promise((resolve, reject) => {
      request
        .post(
          "/threat/vulns",
          { entity_ids },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err?.response?.data?.errors || []);
        });
    });
  },
  getCVEEvents: ({
    token,
    cve_id,
  }: GetCVEEventsPayload): Promise<GetCVEEventsResponse> => {
    return new Promise((resolve, reject) => {
      request
        .get("/cve/events", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            cve_id,
          },
        })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err?.response?.data?.errors || []);
        });
    });
  },
};

export { feedlyService };
