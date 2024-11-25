export const DEFAULT_ALIAS_COUNT = 4;

export const DEFAULT_TARGET_COUNT = 4;

export const THREAT_HERO_IMAGES = {
  DEFAULT: "https://s1.feedly.com/web/main/images/default-malware.b2522183.png",
  KEYLOGGER: "https://s1.feedly.com/web/main/images/keylogger.704c214f.png",
  BROWN_BEAR: "https://s1.feedly.com/web/main/images/brown-bear.dff12089.png",
  GIANT_PANDA: "https://s1.feedly.com/web/main/images/giant-panda.1369b617.png",
  KITTEN: "https://s1.feedly.com/web/main/images/kitten.25b50302.png",
  WIPER: "https://s1.feedly.com/web/main/images/wiper.10f9cb0a.png",
  RANSOMWARE: "https://s1.feedly.com/web/main/images/ransomware.87bef5fc.png",
  DROPPER: "https://s1.feedly.com/web/main/images/dropper.b9497596.png",
  BACKDOOR: "https://s1.feedly.com/web/main/images/backdoor.f0993b43.png",
  SPYWARE: "https://s1.feedly.com/web/main/images/spyware.2c9ec9ca.png",
  DOWNLOADER: "https://s1.feedly.com/web/main/images/downloader.72726cc6.png",
  VIRUS: "https://s1.feedly.com/web/main/images/virus.34c7d827.png",
  TROJAN: "https://s1.feedly.com/web/main/images/trojan.3a1947b3.png",
};

export const initEntity = {
  id: "",
  knowledgeBaseUrl: "",
  entitiesToSupersede: [],
  searchStrategy: "",
  enterpriseFeatures: [],
  description: "",
  badges: [],
  leoBehaviorExplanation: "",
  leoBehaviorExamples: [],
  hasSalience: false,
  aliases: [],
  popularity: 0,
  type: "",
  label: "",
  createdAt: "",
};

export const initTrends = {
  headerSmallGraphUrl: "",
  nArticlesPastYear: 0,
};

export const initArticleCountGraphs = { graphs: [], xLabels: [] };

export const initRelationships = {
  actors: [],
  industries: [],
  ttps: [],
  vulnerabilities: [],
};
