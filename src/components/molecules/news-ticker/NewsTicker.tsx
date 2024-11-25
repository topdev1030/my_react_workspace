import cx from "clsx";

// components
import { Slider, Tooltip, Typography } from "@/components/atoms";

// theme
import { Icons } from "@/theme/icons";

// types
import type { SliderDataType, NewsTickerProps } from "./NewsTicker.types";

// styles
import { useStyles } from "./NewsTicker.styles";

const { Text } = Typography;

const NewsTicker = ({ className, newsData = [] }: NewsTickerProps) => {
  const styles = useStyles();

  const classes = cx({
    [styles.root]: true,
    [className || ""]: className,
  });

  const sliderData = newsData.reduce(
    (acc: SliderDataType[], { name, items }) =>
      acc.concat({ id: name, title: name, isCategory: true }, items),
    []
  );

  const renderSliderCard = ({
    title,
    link,
    summary,
    meta,
    isCategory,
    onClick,
  }: SliderDataType) => {
    if (isCategory) {
      return (
        <Text className={styles.sliderCategoryTitle}>
          {title} {" :"}
        </Text>
      );
    }
    return (
      <Tooltip
        rootClassName={styles.newsTooltipRoot}
        title={
          <div className={styles.newsTooltip}>
            <div className={styles.newTooltipHeader}>
              <span
                className={styles.newsTooltipTitle}
                dangerouslySetInnerHTML={{ __html: title }}
                onClick={onClick}
              />
              {link && (
                <a
                  className={styles.newsTooltipLink}
                  href={link}
                  target="_blank"
                  aria-label="external-link"
                  rel="noreferrer"
                >
                  <Icons glyph="external-link-outlined" />
                </a>
              )}
            </div>
            <p className={styles.newsTooltipSummary}>{summary}</p>
            {meta && <span className={styles.newsTooltipMeta}>{meta}</span>}
          </div>
        }
        placement="bottom"
        arrow={false}
      >
        <span
          className={styles.sliderTitle}
          dangerouslySetInnerHTML={{ __html: title }}
          onClick={onClick}
        />
      </Tooltip>
    );
  };

  return (
    <div className={classes}>
      <Slider
        className={styles.slider}
        infinite
        variableWidth
        autoplay
        slidesToScroll={1}
        speed={3000}
        cssEase="linear"
        arrows={false}
        draggable={false}
      >
        {sliderData.map((sliderItem, idx) => (
          <div className={styles.sliderCardWrapper} key={idx}>
            <div className={styles.sliderCard}>
              {renderSliderCard(sliderItem)}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export { NewsTicker };
