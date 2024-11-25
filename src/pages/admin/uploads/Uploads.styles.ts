import { createUseStyles } from "react-jss";
import { Theme } from "@/theme";

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    marginTop: 20,
  },
  uploadsTable: {
    flex: 1,
    "& .ant-table": {
      "& th, & td": {
        fontSize: 13,
        color: theme.colors.colorText,
      },
    },
  },
  uploadFileCol: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
}));

export { useStyles };
