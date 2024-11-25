import { createUseStyles } from "react-jss";
import { Theme } from "@/theme";

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& .ant-table-tbody > tr": {
      cursor: "pointer",
    },
  },
  header: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
    paddingTop: 20,
    borderTop: `1px solid ${theme.colors.colorBorder}`,
    "&:first-of-type": {
      border: "none",
    },
  },
  title: {
    marginLeft: 10,
    "&.ant-typography": {
      color: theme.colors.colorTextSecondary,
      fontSize: 13,
      fontWeight: 600,
      textTransform: "uppercase",
    },
  },
  articlesTab: {
    position: "relative",
  },
  articles: {
    display: "flex",
    flexDirection: "column",
  },
  viewModeDropdown: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  tableView: {
    "& .ant-table.ant-table-small .ant-table-tbody>tr>td": {
      padding: "8px 4px",
    },
  },
  tableViewBookColumn: {
    width: 48,
  },
  tableViewBookBtn: {
    "&.ant-btn-text": {
      color: theme.colors.colorTextTertiary,
      "&:not(.ant-btn-disabled):hover": {
        color: theme.colors.colorTextSecondary,
      },
    },
  },
  tableViewMetaColumn: {
    width: 140,
    "& > span": {
      display: "block",
      overflow: "hidden",
      fontSize: 12,
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      color: theme.colors.colorTextTertiary,
    },
  },
  tableViewMetricContainer: {
    width: 45,
    fontSize: 12,
    color: theme.colors.colorTextTertiary,
    paddingRight: 8,
  },
  tableViewContent: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  tableViewEntryTitle: {
    display: "inline",
    "& > span": {
      fontSize: 13,
      color: theme.colors.colorText,
    },
  },
  tableViewEntryFeatures: {
    display: "flex",
    alignItems: "center",
    gap: 2,
  },
  tableViewEntryFeature: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    "& > span": {
      fontSize: 13,
      color: theme.colors.colorSuccess,
    },
  },
  tableViewEntrySeparator: {
    margin: "0 8px",
    color: theme.colors.colorTextTertiary,
  },
  tableViewExpandedRow: {
    fontSize: 13,
    color: theme.colors.colorTextTertiary,
    padding: "0 12px",
    "& *": {
      fontSize: 13,
      margin: 0,
    },
    "& a": {
      color: theme.colors.colorTextSecondary,
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
  tableViewAgoColumn: {
    width: 120,
    fontSize: 12,
    textAlign: "right",
    color: theme.colors.colorTextTertiary,
  },
  cardView: {
    display: "block",
  },
  threatsTab: {
    paddingTop: 20,
  },
  threatsTableView: {
    "& th": {
      fontSize: 10,
    },
    "& td": {
      verticalAlign: "baseline",
      fontSize: 14,
      color: theme.colors.colorTextSecondary,
      "& ul": {
        paddingLeft: 20,
      },
    },
  },
  threatsTableTechniquesColumn: {
    "&.ant-table-cell": {
      color: theme.colors.colorBrandWhite,
      fontWeight: "bold",
    },
  },
  malwareLoadMore: {
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
  },
}));

export { useStyles };
