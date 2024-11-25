// types
import type { FeedlyArticle } from "@/types";

export const getArticleFeatures = ({
  featuredMeme,
  entities = [],
}: FeedlyArticle) => {
  const vulnerabilityEntity = entities.find(
    (entity) => entity?.vulnerabilityInfo?.cvssScore
  );
  const mitreAttackInfo = entities.find(
    (entity) => entity?.type === "mitreAttack"
  );

  const features = [
    {
      visible: featuredMeme,
      glyph: "line-chart-outlined",
      text: featuredMeme?.label,
    },
    {
      visible: vulnerabilityEntity,
      glyph: "bug-outlined",
      text: `CVSS ${vulnerabilityEntity?.vulnerabilityInfo?.cvssScore} ex`,
    },
    {
      visible: mitreAttackInfo,
      glyph: "crossed-dagger-outlined",
      text: mitreAttackInfo?.label,
    },
  ];

  return features.filter(({ visible }) => visible);
};
