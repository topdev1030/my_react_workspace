import { createUseStyles } from "react-jss";
import { Theme } from "@/theme";

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: 32,
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
}));

export { useStyles };
