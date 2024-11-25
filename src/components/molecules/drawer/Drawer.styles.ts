import { createUseStyles } from "react-jss";
import { Theme } from "@/theme";

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    "& .ant-drawer-content-wrapper": {
      boxShadow: `0 1px 15px ${theme.colors.colorFillSecondary}`,
    },
    "& .ant-drawer-header": {
      minHeight: 56,
    },
    "& .ant-drawer-close": {
      position: "absolute",
      margin: 0,
      padding: 0,
      zIndex: -1,
    },
    "& .ant-drawer-content": {
      background: theme.colors.colorBgElevated,
    },
  },
  rootBottom: {
    "& .ant-drawer-close": {
      top: 0,
      right: 0,
      transform: "rotate(90deg)",
      transformOrigin: "top right",
    },
  },
  rootTop: {
    "& .ant-drawer-close": {
      bottom: 0,
      right: 0,
      transform: "rotate(-90deg)",
      transformOrigin: "bottom right",
    },
  },
  rootLeft: {
    "& .ant-drawer-close": {
      top: 0,
      right: 0,
      transform: "translateX(100%) rotate(180deg)",
    },
  },
  rootRight: {
    "& .ant-drawer-close": {
      top: 0,
      left: 0,
      transform: "translateX(-100%)",
    },
  },
  tabShapeIcon: {
    width: 28,
    height: 52,
    color: theme.colors.colorBgElevated,
    filter: `drop-shadow(0 1px 15px ${theme.colors.colorFillSecondary})`,
  },
  closeIcon: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  sbText: {
    color: theme.colors.colorTextSecondary,
  },
}));

export { useStyles };
