// constants
import { THREAT_HERO_IMAGES } from "./NewsThreatDrawer.constants";

// types
import type {
  FeedlyThreatEntity,
  FeedlyThreatArticleCountGraphs,
} from "@/types";

export const getMalwareMetadata = (threatEntity: FeedlyThreatEntity) => {
  const { malwareDetails, threatActorDetails } = threatEntity;

  const getHeroImage = () => {
    if (malwareDetails) {
      switch (malwareDetails.malwareTypes[0]) {
        case "KEYLOGGER":
          return THREAT_HERO_IMAGES.KEYLOGGER;
        case "WIPER":
          return THREAT_HERO_IMAGES.WIPER;
        case "RANSOMWARE":
          return THREAT_HERO_IMAGES.RANSOMWARE;
        case "DROPPER":
          return THREAT_HERO_IMAGES.DROPPER;
        case "BACKDOOR":
          return THREAT_HERO_IMAGES.BACKDOOR;
        case "SPYWARE":
          return THREAT_HERO_IMAGES.SPYWARE;
        case "DOWNLOADER":
          return THREAT_HERO_IMAGES.DOWNLOADER;
        case "VIRUS":
          return THREAT_HERO_IMAGES.VIRUS;
        case "TROJAN":
          return THREAT_HERO_IMAGES.TROJAN;
        default:
          return THREAT_HERO_IMAGES.DEFAULT;
      }
    }
    if (threatActorDetails) {
      switch (threatActorDetails.country) {
        case "RU":
          return THREAT_HERO_IMAGES.BROWN_BEAR;
        case "CN":
          return THREAT_HERO_IMAGES.GIANT_PANDA;
        case "IR":
          return THREAT_HERO_IMAGES.KITTEN;
        default:
          return THREAT_HERO_IMAGES.DEFAULT;
      }
    }
    return THREAT_HERO_IMAGES.DEFAULT;
  };
  const getCategory = () => {
    if (malwareDetails) {
      return malwareDetails.malwareTypes[0];
    }
    if (threatActorDetails) {
      switch (threatActorDetails.country) {
        case "RU":
          return "THREAT ACTOR FROM RUSSIAN FEDERATION";
        case "CN":
          return "THREAT ACTOR FROM CHINA";
        case "IR":
          return "THREAT ACTOR FROM IRAN";
        default:
          return "THREAT ACTOR";
      }
    }
    return "MALWARE";
  };
  const getOverview = () => {
    if (malwareDetails) return malwareDetails.malpediaDescription;
    if (threatActorDetails) return threatActorDetails.malpediaDescription;
    return threatEntity.description;
  };

  return {
    hero: getHeroImage(),
    category: getCategory(),
    overview: getOverview(),
  };
};

export const generateLineChartData = ({
  graphs,
  xLabels,
}: FeedlyThreatArticleCountGraphs) => {
  return xLabels.map((label, idx) => ({
    year: label,
    count: graphs[0].yValues[idx],
  }));
};
