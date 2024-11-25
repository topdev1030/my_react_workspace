import { createUseStyles } from "react-jss";
import { Theme } from "@/theme";

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
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
  listItem: {
    textDecoration: "underline",
    cursor: "pointer",
    "&:hover": {
      filter: "brightness(0.8)",
    },
  },
  loadMore: {
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
  },
}));

export { useStyles };
