import { createUseStyles } from "react-jss";
import { Theme } from "@/theme";

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    height: "auto",
    padding: "16px 8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: `1px solid ${theme.colors.colorBorder}`,
  },
  imgLogo: {
    margin: "4px 0",
    width: 220,
  },
  logoText: {
    fontSize: 16,
  },
  content: {
    display: "flex",
    alignItems: "center",
    gap: 18,
    paddingRight: 12,
  },
  menuContainer: {
    display: "flex",
    alignItems: "center",
  },
  menuBtn: {
    fontSize: 14,
    color: theme.colors.colorText,
    "&.ant-btn-link:not(:disabled):not(.ant-btn-disabled):hover": {
      color: theme.colors.colorText,
      opacity: 0.8,
    },
  },
  dropdownMenu: {
    fontSize: 14,
    padding: "0 16px",
  },
  dropdownMenuTrigger: {
    height: 32,
    display: "flex",
    alignItems: "center",
    gap: 2,
  },

  logoContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "0 32px",
    cursor: "pointer",
  },
}));

export { useStyles };
