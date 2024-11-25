import { createUseStyles } from "react-jss";
import { Theme } from "@/theme";

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    padding: 0,
  },
  document: {
    width: "100%",
    display: "inline-block",
    zIndex: 1,
  },
  page: {
    background: "red",
    width: "100%",
    "& > *": {
      width: "100% !important",
      height: "auto !important",
    },
  },
  pagination: {
    width: 160,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    padding: "4px 8px",
    position: "absolute",
    left: "50%",
    bottom: 40,
    transform: "translateX(-50%)",
    zIndex: 2,
    boxShadow: `0 2px 4px 0 ${theme.colors.colorFillSecondary}`,
    background: theme.colors.colorBgMask,
    borderRadius: 5,
  },
  paginationBtn: {
    color: theme.colors.colorBrandWhite,
    padding: 0,
    height: 24,
    width: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paginationText: {
    color: theme.colors.colorBrandWhite,
  },
}));

export { useStyles };
