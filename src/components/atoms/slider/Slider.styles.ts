import { createUseStyles } from "react-jss";
import { Theme } from "@/theme";

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    display: "block",
  },
  sbContainer: {
    maxWidth: 720,
    padding: 20,
  },
  sbCard: {
    height: 120,
    margin: "0 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.colors.colorBgSpotlight,
    color: theme.colors.colorBrandWhite,
    fontSize: 32,
    fontWeight: 600,
    "& > h3": {
      margin: 0,
    },
  },
}));

export { useStyles };
