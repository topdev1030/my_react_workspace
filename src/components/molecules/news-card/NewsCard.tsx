import cx from "clsx";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

// components
import { Typography, Button, Tooltip } from "@/components/atoms";

// theme
import { Icons, Glyphs } from "@/theme/icons";
import { colors } from "@/theme/colors";

// types
import type { NewsCardProps } from "./NewsCard.types";

// styles
import { useStyles } from "./NewsCard.styles";

dayjs.extend(relativeTime);

const { Title, Text } = Typography;

const NewsCard = ({
  className,
  title,
  originUrl,
  originTitle,
  abstract,
  thumbnail,
  feature,
  published,
  selected = false,
  onBookmark,
  onTag,
  onLessLike,
  onMark,
  onHide,
  onClick,
}: NewsCardProps) => {
  const styles = useStyles();

  const classes = cx({
    [styles.root]: true,
    [styles.rootSelected]: selected,
    [className || ""]: className,
  });

  const toolbarItems = [
    {
      icon: "bookmark-outlined",
      tooltipText: "Read Later",
      onClick: onBookmark,
    },
    {
      icon: "tag-outlined",
      tooltipText: "Save to Board",
      onClick: onTag,
    },
    {
      icon: "less-like-outlined",
      tooltipText: "Less Like This",
      onClick: onLessLike,
    },
    {
      icon: "check-outlined",
      tooltipText: "Mark as Unread",
      onClick: onMark,
    },
    {
      icon: "close-outlined",
      tooltipText: "Mark as Read and Hide",
      onClick: onHide,
    },
  ];

  return (
    <div className={classes} onClick={onClick}>
      {thumbnail && (
        <div className={styles.thumbnail}>
          <img src={thumbnail} alt={title} />
          <div className={styles.thumbnailOverlay} />
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.toolbar}>
          {toolbarItems.map(
            ({ icon, tooltipText, onClick: onToolbarItemClick }, idx) => (
              <Tooltip key={idx} title={tooltipText} placement="top">
                <Button
                  type="text"
                  icon={<Icons glyph={icon as Glyphs["glyph"]} />}
                  onClick={onToolbarItemClick}
                />
              </Tooltip>
            )
          )}
        </div>
        <Title className={styles.title}>{title}</Title>
        <div className={styles.metadata}>
          {feature && (
            <div className={styles.feature}>
              <Icons glyph={feature.glyph} color={colors.colorSuccess} />
              <Text>{feature.text}</Text>
            </div>
          )}
          <div className={styles.sourceInfo}>
            <Button
              className={styles.sourceOriginBtn}
              type="link"
              href={originUrl}
              target="_blank"
            >
              {originTitle}
            </Button>
            <span className={styles.sourceSeparator}>/</span>
            <Text className={styles.ago}>{dayjs(published).fromNow()}</Text>
          </div>
        </div>
        {abstract && (
          <p
            className={styles.abstract}
            dangerouslySetInnerHTML={{ __html: abstract }}
          />
        )}
      </div>
    </div>
  );
};

export { NewsCard };
