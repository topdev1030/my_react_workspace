import { createUseStyles } from "react-jss";
import { Theme } from "@/theme";
import alpha from "color-alpha";

// types
import { SeverityDialProps } from "./SeverityDial.types";

// assets
import SVGNeedle from "@/static/images/needle.svg";

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
  },
  meter: {
    position: "relative",
    width: 232,
    height: 116,
  },
  graduation: {
    background: ({ severity }: SeverityDialProps) => {
      if (severity === "HIGH") {
        return `conic-gradient(
          from -90deg at 50% 100%,
          ${alpha(theme.colors.colorBgMask, 0.25)} 0deg,
          ${alpha(theme.colors.colorBgMask, 0.25)} 59deg,
          transparent 59deg,
          transparent 60deg,
          ${alpha(theme.colors.colorBgMask, 0.25)} 60deg,
          ${alpha(theme.colors.colorBgMask, 0.25)} 120deg,
          transparent 120deg,
          transparent 121deg,
          ${theme.colors.colorBrandRed100} 121deg,
          ${theme.colors.colorBrandRed100} 180deg
        )`;
      }
      if (severity === "MEDIUM") {
        return `conic-gradient(
          from -90deg at 50% 100%,
          ${alpha(theme.colors.colorBgMask, 0.25)} 0deg,
          ${alpha(theme.colors.colorBgMask, 0.25)} 59deg,
          transparent 59deg,
          transparent 60deg,
          ${theme.colors.colorBrandYellow200} 60deg,
          ${theme.colors.colorBrandYellow200} 120deg,
          transparent 120deg,
          transparent 121deg,
          ${alpha(theme.colors.colorBgMask, 0.25)} 121deg,
          ${alpha(theme.colors.colorBgMask, 0.25)} 180deg
        )`;
      }
      return `conic-gradient(
        from -90deg at 50% 100%,
        ${theme.colors.colorBrandYellow100} 0deg,
        ${theme.colors.colorBrandYellow100} 59deg,
        transparent 59deg,
        transparent 60deg,
        ${alpha(theme.colors.colorBgMask, 0.25)} 60deg,
        ${alpha(theme.colors.colorBgMask, 0.25)} 120deg,
        transparent 120deg,
        transparent 121deg,
        ${alpha(theme.colors.colorBgMask, 0.25)} 121deg,
        ${alpha(theme.colors.colorBgMask, 0.25)} 180deg
      )`;
    },
    backgroundClip: "padding-box",
    borderTopLeftRadius: "100% 200%",
    borderTopRightRadius: "100% 200%",
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    "&:after": {
      background: ({ bgColor }) => bgColor || theme.colors.colorBgElevated,
      borderRadius: "50%",
      content: "''",
      height: "150%",
      position: "absolute",
      left: "50%",
      top: "100%",
      transform: "translate(-50%, -50%)",
      width: "75%",
    },
  },
  indicator: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "50%",
  },
  needle: {
    backgroundImage: `url(${SVGNeedle})`,
    backgroundPosition: "6px 50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "calc(50% + 12px)",
    position: "absolute",
    width: "100%",
    height: "100%",
    "&:after": {
      background: ({ bgColor }) => bgColor || theme.colors.colorBgElevated,
      content: "''",
      borderRadius: "50%",
      position: "absolute",
      left: "50%",
      bottom: "50%",
      transform: "translate(-50%, calc(50% - 1px))",
      width: 12,
      height: 12,
    },
  },
  labels: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    top: "calc(50% + 8px)",
    "& > span.ant-typography": {
      fontSize: 14,
      color: theme.colors.colorTextSecondary,
    },
  },
  metrics: {
    marginTop: 24,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    "& > span.ant-typography": {
      fontSize: 14,
    },
  },
  cvss: {
    "&.ant-typography": {
      color: theme.colors.colorText,
      textTransform: "capitalize",
      textAlign: "center",
    },
  },
  epss: {
    "&.ant-typography": {
      color: theme.colors.colorTextSecondary,
    },
  },
}));

export { useStyles };
