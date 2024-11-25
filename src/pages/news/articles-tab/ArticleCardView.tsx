import cx from "clsx";

// components
import { Slider, NewsCard } from "@/components";
import type { NewsCardFeatureType } from "@/components";

// utils
import { getArticleFeatures } from "../News.utils";

// types
import type { ArticleViewProps } from "./ArticlesTab.types";

// styles
import { useStyles } from "./ArticleCardView.styles";

const ArticleCardView = ({
  className,
  newsData = [],
  onViewArticle,
}: ArticleViewProps) => {
  const styles = useStyles();

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <div
      className={cx({
        [styles.root]: true,
        [className || ""]: className,
      })}
    >
      <Slider {...sliderSettings}>
        {newsData.map((article, idx) => {
          const { title, origin, summary, visual, published } = article;
          const features = getArticleFeatures(article);
          return (
            <div key={idx} style={{ width: "fit-content" }}>
              <NewsCard
                title={title}
                originUrl={origin?.htmlUrl}
                originTitle={origin?.title}
                abstract={summary?.content}
                thumbnail={visual?.edgeCacheUrl}
                feature={features[0] as NewsCardFeatureType}
                published={published}
                onClick={() => onViewArticle?.(article)}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export { ArticleCardView };
