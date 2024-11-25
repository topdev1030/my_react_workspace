import { Fragment } from "react";
import dayjs from "dayjs";

// components
import { Button, Typography, Drawer } from "@/components";

// utils
import { getArticleFeatures } from "../News.utils";

// types
import type { ArticleDrawerProps } from "./ArticleDrawer.types";

// theme
import { Icons, Glyphs } from "@/theme/icons";
import { colors } from "@/theme/colors";

// styles
import { useStyles } from "./ArticleDrawer.styles";

const { Title, Text } = Typography;

const ArticleDrawer = ({ article, open, onClose }: ArticleDrawerProps) => {
  const styles = useStyles();

  const {
    alternate,
    origin,
    title,
    author,
    published,
    engagement,
    fullContent,
    summary,
  } = article;

  const features = getArticleFeatures(article);
  const contentHtml = fullContent || summary?.content;

  return (
    <Drawer
      className={styles.root}
      contentWrapperStyle={{ width: "70%" }}
      placement="right"
      open={open}
      onClose={onClose}
    >
      <div className={styles.entryContainer}>
        <div className={styles.entryHeader}>
          <Title className={styles.title}>{title}</Title>
          {features.length > 0 && (
            <div className={styles.features}>
              {features.map(({ glyph, text }, idx) => (
                <Fragment key={idx}>
                  {idx > 0 && <div className={styles.featureSeparator}>•</div>}
                  <div className={styles.feature}>
                    <Icons
                      glyph={glyph as Glyphs["glyph"]}
                      color={colors.colorSuccess}
                    />
                    <Text>{text}</Text>
                  </div>
                </Fragment>
              ))}
            </div>
          )}
          <div className={styles.metadata}>
            <Text>
              {origin.title} by {author}
            </Text>
            <Text>{dayjs(published).format("MMM D, YYYY [at] h:mm a")}</Text>
            {engagement && <Text>{engagement}</Text>}
          </div>
        </div>
        {contentHtml && (
          <div
            className={styles.entryContent}
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        )}
        <div className={styles.entryFooter}>
          {alternate && alternate?.length > 0 && (
            <Button
              className={styles.visitBtn}
              type="default"
              href={alternate[0].href}
              target="_blank"
            >
              Visit Website
            </Button>
          )}
        </div>
      </div>
    </Drawer>
  );
};

export { ArticleDrawer };
