import { createUseStyles } from "react-jss";
import { Theme } from "@/theme";

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    width: 276,
    padding: 12,
    borderRadius: 4,
    position: "relative",
    transition: "background .3s linear",
    cursor: "pointer",
    "&:hover": {
      "& $thumbnailOverlay": {
        opacity: 1,
      },
      "& $toolbar": {
        // display: "flex",
        // alignItems: "flex-end",
      },
    },
  },
  rootSelected: {
    background: theme.colors.colorBgElevated,
  },
  thumbnail: {
    height: 182,
    position: "relative",
    "& > img": {
      objectFit: "cover",
      width: "100%",
      height: "100%",
    },
  },
  thumbnailOverlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: theme.colors.colorBgMask,
    transition: "opacity .3s linear",
    opacity: 0,
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  toolbar: {
    display: "none",
    position: "absolute",
    top: 20,
    right: 20,
    gap: 6,
    animation: "$fadeIn .3s linear",
  },
  title: {
    "&.ant-typography": {
      fontSize: 16,
      letterSpacing: "-0.04",
      lineHeight: 1.25,
      margin: "4px 0",
      overflow: "hidden",
      textOverflow: "ellipsis",
      color: theme.colors.colorText,
    },
  },
  metadata: {
    display: "flex",
    flexDirection: "column",
  },
  feature: {
    display: "inline-block",
    "& > svg": {
      backgroundSize: "16px 16px",
      verticalAlign: "middle",
      width: 16,
      height: 16,
      marginRight: 4,
      marginTop: -3,
    },
    "& > span": {
      fontSize: 13,
      color: theme.colors.colorSuccess,
    },
  },
  sourceInfo: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    columnGap: 4,
  },
  sourceOriginBtn: {
    padding: 0,
    height: "auto",
    fontSize: 14,
    color: theme.colors.colorTextSecondary,
    "& > span": {
      whiteSpace: "break-spaces",
      textAlign: "left",
    },
    "&:not(:disabled):not(.ant-btn-disabled):hover": {
      color: theme.colors.colorTextSecondary,
      "& > span": {
        textDecoration: "underline",
      },
    },
  },
  sourceSeparator: {
    color: theme.colors.colorTextSecondary,
    fontSize: 14,
  },
  ago: {
    color: theme.colors.colorTextSecondary,
    fontSize: 14,
  },
  abstract: {
    marginTop: "0.25rem",
    marginBottom: 0,
    display: "-webkit-box",
    overflow: "hidden",
    wordBreak: "break-word",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 3,
    fontSize: 13,
    lineHeight: 1.2,
    color: theme.colors.colorTextTertiary,
    "& img": {
      display: "none",
    },
  },
  ...theme.animations,
}));

export { useStyles };
