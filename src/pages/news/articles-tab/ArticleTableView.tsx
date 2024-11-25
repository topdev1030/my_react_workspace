import { Fragment } from "react";
import { BookOutlined } from "@ant-design/icons";
import cx from "clsx";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

// components
import { Button, Typography, Table } from "@/components";
import type { TableColumnType } from "@/components";

// theme
import { Icons, Glyphs } from "@/theme/icons";
import { colors } from "@/theme/colors";

// utils
import { getArticleFeatures } from "../News.utils";

// types
import type { FeedlyArticle } from "@/types";
import type { ArticleViewProps } from "./ArticlesTab.types";

// styles
import { useStyles } from "./ArticleTableView.styles";

dayjs.extend(relativeTime);

const { Text } = Typography;

const ArticleTableView = ({
  className,
  newsData = [],
  onViewArticle,
}: ArticleViewProps) => {
  const styles = useStyles();

  const columns: TableColumnType[] = [
    {
      className: styles.tableViewBookColumn,
      align: "center",
      render: () => (
        <Button
          className={styles.tableViewBookBtn}
          type="text"
          icon={<BookOutlined />}
        />
      ),
    },
    {
      className: styles.tableViewMetaColumn,
      dataIndex: "origin",
      render: ({ title }) => <span>{title}</span>,
    },
    {
      className: styles.tableViewMetricContainer,
      dataIndex: "engagement",
    },
    {
      ellipsis: true,
      render: (__, article) => {
        const { title } = article as FeedlyArticle;
        const features = getArticleFeatures(article as FeedlyArticle);

        return (
          <div className={styles.tableViewContent}>
            <div className={styles.tableViewEntryTitle}>
              <span>{title}</span>
            </div>
            <div className={styles.tableViewEntryFeatures}>
              {features.map(({ glyph, text }, idx) => (
                <Fragment key={idx}>
                  {idx > 0 && (
                    <div className={styles.tableViewEntrySeparator}>•</div>
                  )}
                  <div className={styles.tableViewEntryFeature}>
                    <Icons
                      glyph={glyph as Glyphs["glyph"]}
                      color={colors.colorSuccess}
                    />
                    <Text>{text}</Text>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        );
      },
    },
    {
      className: styles.tableViewAgoColumn,
      fixed: "right",
      dataIndex: "published",
      render: (published) => dayjs(published).fromNow(),
    },
  ];

  return (
    <Table
      className={cx({
        [styles.root]: true,
        [className || ""]: className,
      })}
      rowKey="id"
      size="small"
      columns={columns}
      showHeader={false}
      bordered={false}
      expandable={{
        expandedRowRender: ({ leoSummary, summary }) => {
          const hasLeoSummary = leoSummary?.sentences?.length > 0;
          return (
            <div className={styles.tableViewExpandedRow}>
              {hasLeoSummary ? (
                leoSummary.sentences.map(({ text }, idx) => (
                  <p key={idx}>{text}</p>
                ))
              ) : (
                <div dangerouslySetInnerHTML={{ __html: summary?.content }} />
              )}
            </div>
          );
        },
      }}
      dataSource={newsData}
      onRow={(record) => ({
        onClick: () => onViewArticle?.(record),
      })}
    />
  );
};

export { ArticleTableView };
