export enum USER_ROLE {
  ADMIN = "admin",
  CUSTOMER = "customer",
}

export type Option = {
  value: string | number;
  label: string;
};

export type UserInfo = {
  sub: string;
  name: string;
  email?: string;
  picture?: string;
  cust_id: string;
  org_name: string;
  dbconnstr: string;
  storage_container_name: string;
  role: USER_ROLE;
};
export type MgmtToken = {
  access_token: string;
};
export type Organization = {
  display_name: string;
  name: string;
  id: string;
};
export type Customer = {
  cust_id: string;
  customer_name: string;
  contact_fname?: string;
  contact_lname?: string;
  contact_email?: string;
  entities?: object;
  watcher_group_id?: string;
  watcher_group_req?: object;
  watcher_group_resp?: object;
  is_active?: boolean;
  dbconnstr: string;
  storage_container_name: string;
};

export type Subsidiary = {
  id: string;
  org_id: string;
  subsidiary_name: string;
  is_active?: boolean;
};

export type Report = {
  report_id: string;
  subsidiary_id: string;
  cust_id: string;
  report_type: string;
  report_name: string;
  url: string;
  upload_date_time: string;
  uploaded_by?: string;
  is_active?: boolean;
};

export type Message = {
  id: string;
  notification_id: string;
  title: string;
  message: string;
  description: string;
  tags: string;
  url: string;
  cust_id: string;
};

export type Upload = {
  upload_id: string;
  cust_id: string;
  url: string;
  upload_date_time: string;
  uploaded_by?: string;
  is_active?: boolean;
};

export type Pagination = {
  offset: number;
  limit: number;
  sort?: string;
};

export type FeedlyArticle = {
  id: string;
  fingerprint?: string;
  language?: string;
  title: string;
  author?: string;
  originId: string;
  origin: {
    htmlUrl: string;
    title: string;
    streamId: string;
  };
  keywords?: string[];
  engagement?: number;
  engagementRate?: number;
  expansionFailureStatus?: number;
  visual: {
    url: string;
    contentType?: string;
    processor?: string;
    expirationDate?: number;
    width?: number;
    height?: number;
    edgeCacheUrl?: string;
  };
  summary?: {
    content: string;
    direction: string;
  };
  featuredMeme?: {
    id: string;
    featured: boolean;
    score: number;
    label: string;
  };
  attackNavigator?: {
    ttpCount: number;
    url: string;
  };
  webfeeds?: {
    icon: string;
    partial: boolean;
  };
  businessEvents?: {
    id: string;
    score: number;
    label: string;
    mentions: { text: string }[];
    salienceLevel: string;
  }[];
  entities?: {
    id: string;
    label: string;
    type?: string;
    disambiguated?: boolean;
    vulnerabilityInfo?: {
      cvssScore?: number;
      cvssCategoryEstimate?: string;
      description?: string;
      hasExploit?: boolean;
      hasPatch?: boolean;
      trending?: boolean;
      vendors?: { name: string }[];
    };
    mentions?: { text: string }[];
    causes?: { id: string; label: string }[];
    salienceLevel?: string;
  }[];
  enclosure?: {
    href: string;
    type: string;
    length?: number;
  }[];
  categories?: { id: string; label: string }[];
  alternate?: { type: string; href: string }[];
  clusters?: { id: string }[];
  commonTopics?: {
    type: string;
    id: string;
    label: string;
    score: number;
    salienceLevel: string;
    causes?: { id: string; label: string }[];
    mentions?: { text: string }[];
    targets?: {
      confidence: number;
      text: string;
      id: string;
    }[];
  }[];
  analysisFeedbackPrompt?: {
    type: string;
    confidence: number;
    topic?: {
      id: string;
      label: string;
    };
    confidenceLevel?: string;
    predictedTarget?: { text: string };
  };
  recrawled?: number;
  related?: {
    entryId: string;
    feedId: string;
    feedTitle: string;
    unread: boolean;
  }[];
  leoSummary?: {
    sentences: { text: string }[];
  };
  indicatorsOfCompromise?: {
    mentions?: {
      type?: string;
      text: string;
      canonical?: string;
    }[];
    exports: { type: string; url: string }[];
  };
  content?: {
    content: string;
    direction: string;
  };
  duplicates?: {
    entryId: string;
    feedId: string;
    feedTitle: string;
    unread: boolean;
  }[];
  canonicalUrl?: string;
  ampUrl?: string;
  cdnAmpUrl?: string;
  abstract?: {
    text: string;
  };
  fullContent?: string;
  unread?: boolean;
  crawled?: number;
  published: number;
  updated?: number;
  updateCount?: number;
};

export type FeedlyThreat = {
  actors: {
    id: string;
    label: string;
    type: string;
  }[];
  delta: number;
  malwares: {
    id: string;
    label: string;
    type: string;
  }[];
  nArticles: number;
  ttp: {
    id: string;
    label: string;
    mitreId: string;
    name: string;
  };
};

export type FeedlyThreatArticleCountGraphs = {
  graphs: {
    articleCountType: string;
    yTipsies: number[][];
    yValues: number[];
  }[];
  xLabels: string[];
};

export type FeedlyThreatEntityTrends = {
  headerSmallGraphUrl: string;
  nArticlesPastYear: number;
};

export type FeedlyThreatRelationShips = {
  actors?: {
    id: string;
    label: string;
    type: string;
  }[];
  industries?: {
    count?: number;
    articleCount?: number;
    companies?: [
      {
        articleCount: number;
        entity: {
          id: string;
          label: string;
          type: string;
        };
        firstMention: string;
      }
    ];
    entity: {
      id: string;
      label: string;
      type: string;
    };
    score?: number;
  }[];
  malwares?: {
    count: number;
    entity: {
      id: string;
      label: string;
      type: string;
    };
    score: number;
  }[];
  vulnerabilities: {
    count: number;
    entity: {
      id: string;
      label: string;
      type: string;
    };
    firstMention: string;
    score: number;
  }[];
  ttps: {
    articleCount: number;
    entityId: string;
    lastSeen: number;
    mitigations: {
      description: string;
      entityId: string;
      label: string;
      mitreId: string;
    }[];
    mitreId: string;
    procedureCount: number;
    technique: string;
    trend: string;
  }[];
};

export type FeedlyThreatEntity = {
  id: string;
  knowledgeBaseUrl: string;
  entitiesToSupersede: string[];
  searchStrategy: string;
  enterpriseFeatures: string[];
  description: string;
  badges: string[];
  leoBehaviorExplanation: string;
  leoBehaviorExamples: string[];
  hasSalience: boolean;
  aliases: string[];
  popularity: number;
  type: string;
  label: string;
  createdAt: string;
  malwareDetails?: {
    associatedThreatActors: string[];
    malpediaDescription: string;
    malwareTypes: string[];
  };
  threatActorDetails?: {
    associatedMalwares: {
      id: string;
      label: string;
    }[];
    country: string;
    malpediaDescription: string;
    targets: string[];
  };
  relationships?: FeedlyThreatRelationShips;
  trends?: FeedlyThreatEntityTrends;
};

export type FeedlyTrendingVulnerability = {
  id: string;
  topic: string;
  label: string;
  score: number;
  summary: string[];
  items: { id: string }[];
  featured: boolean;
  referenceId: string;
  sparklineUrl: string;
  startDate: number;
  rank: number;
  vulnerabilitiesMetadata: {
    vendor: string;
    vendors: string[];
    products: string[];
    cvss?: number;
    cvssCategoryEstimate?: string;
    publishedDate: number;
  };
  version: number;
  language: string;
};

export type FeedlyTrendingNewMalware = {
  entryIds: string[];
  "new-malware": {
    id: string;
    label: string;
  };
};

export type FeedlyTrendingAttacker = {
  entryIds: string[];
  actor: {
    id: string;
    label: string;
  };
};

export type FeedlyCVE = {
  cveid: string;
  id: string;
  type: string;
  label: string;
  hasSalience: boolean;
  advisoryUrl?: string;
  description: string;
  cvssCategoryEstimate?: string;
  cvssV3: {
    integrityImpact: string;
    version: string;
    availabilityImpact: string;
    scope: string;
    attackVector: string;
    userInteraction: string;
    baseScore: number;
    attackComplexity: string;
    confidentialityImpact: string;
    privilegesRequired: string;
    vectorString?: string;
  };
  cvssV2?: {
    integrityImpact: string;
    version: string;
    availabilityImpact: string;
    authentication: string;
    accessComplexity: string;
    baseScore: number;
    vectorString: string;
    confidentialityImpact: string;
    accessVector: string;
  };
  cweIds: {
    cweID: string;
    name: string;
  }[];
  smallGraphUrl: string;
  trending: boolean;
  graphUrl: string;
  trendingCve?: boolean;
  epssScore: string;
  patchDetails: {
    title: string;
    patchAddedDate: string;
    source: string;
    url: string;
    feedlyPatchAddedDate?: string;
  }[];
  patched: boolean;
  newExploits?: {
    exploitAddedDate: string;
    source: string;
    url: string;
  }[];
  exploits?: string[];
  detectedBy?: {
    detectionId: string;
    scannerName: string;
  }[];
  proofOfExploits?: string[];
  feedlyInsertedDate: string;
  feedlyUpdatedDate?: string;
  publishedDate: string;
  publicationDateInfo: {
    publishedDate: string;
    feedlyInsertedDate?: string;
    feedlyUpdatedDate?: string;
    lastModifiedDate?: string;
    source: string;
  }[];
  affectedProducts?: {
    vendor: string;
    products: {
      name: string;
      vulnerableVersions?: { version: string }[] | string[];
    }[];
  }[];
  vulnerableProducts?: {
    vendor: string;
    products: string[];
  };
  executiveSummary?: {
    impact: string;
    exploitation: string;
    description: string;
    patch: string;
    mitigation: string;
    processing_time_s: number;
  };
  stats?: {
    firstEntryId: string;
    timeSeries: Record<
      string,
      {
        url: string;
        firstEntryId: string;
        age: number;
        timestamp: number;
        sourceType?: string[];
      }[]
    >;
    firstTimestamp: number;
    advisoryEntryId?: string;
    referenceEntries?: {
      vendor: {
        url: string;
        firstEntryId: string;
        age: number;
        timestamp: number;
        sourceType: string[];
      }[];
      threatIntelligenceReports: {
        url: string;
        firstEntryId: string;
        age: number;
        timestamp: number;
        sourceType?: string[];
      }[];
    };
  };
  idMapping: { id: string; name: string }[];
  timeline?: {
    event: string;
    date: string;
    source: string;
  }[];
  tweets?: {
    tweetAddedDate: string;
    screen_name: string;
    full_text: string;
    id: string;
  }[];
  relationships?: {
    cveId: string;
    firstArticle: {
      crawledAt: string;
      entryId: string;
      sourceName: string;
      title: string;
    };
    threat: {
      id: string;
      label: string;
      type: string;
    };
    validatedAt: string;
  }[];
};

export type FeedlyCVEEvent = {
  id: string;
  cveId?: string;
  entryId?: string;
  threatId?: string;
  threatLabel?: string;
  advisoryId?: string;
  moduleId?: string;
  sourceName?: string;
  scannerName?: string;
  vendorName?: string;
  type: string;
  ts: number;
  url?: string;
  updated: number;
  percentile?: number;
  score?: number;
  update?: boolean;
  trending?: boolean;
  cvssCategoryEstimate?: string;
  summary?: string;
};
