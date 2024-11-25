import { createUseStyles } from "react-jss";
import { Theme } from "@/theme";

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    color: theme.colors.colorTextQuaternary,
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
  },
  menuItems: {
    borderRadius: 8,
    background: theme.colors.colorBgContainer,
    "& > .ant-dropdown-menu": {
      boxShadow: "none",
    },
  },
  dropdownAvatar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
  },
  profile: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 12px",
    minWidth: 160,
  },
  profileAvatar: {
    fontSize: 18,
  },
  profileName: {
    fontWeight: 500,
    fontSize: 14,
  },
  divider: {
    margin: 0,
  },
}));

export { useStyles };
