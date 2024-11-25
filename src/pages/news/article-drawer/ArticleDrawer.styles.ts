import { createUseStyles } from "react-jss";
import { Theme } from "@/theme";

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    zIndex: 99,
    "& .ant-drawer-body": {
      padding: 0,
    },
  },
  entryContainer: {
    width: 647,
    margin: "48px auto 48px",
  },
  entryHeader: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    marginBottom: 8,
    fontSize: 32,
    fontWeight: 700,
    color: theme.colors.colorText,
    letterSpacing: "-0.04em",
    lineHeight: "2.3rem",
  },
  features: {
    display: "flex",
    alignItems: "center",
    gap: 2,
  },
  feature: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    "& > span": {
      fontSize: 13,
      color: theme.colors.colorSuccess,
    },
  },
  featureSeparator: {
    margin: "0 8px",
    color: theme.colors.colorTextTertiary,
  },
  metadata: {
    marginTop: 4,
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    "& > span": {
      "&.ant-typography": {
        display: "flex",
        alignItems: "center",
        fontSize: 13,
        fontWeight: 400,
        color: theme.colors.colorTextQuaternary,
        "&:not(:first-of-type)": {
          "&::before": {
            content: "'//'",
            padding: "0 8px",
            display: "block",
            fontSize: 13,
            fontWeight: 400,
            color: theme.colors.colorTextQuaternary,
          },
        },
      },
    },
  },
  entryContent: {
    marginTop: 40,
    "&, & *": {
      fontSize: 15,
      fontWeight: 400,
      lineHeight: 1.5,
      color: theme.colors.colorTextSecondary,
    },
    "& img": {
      width: "100%",
      height: "auto",
      margin: "24px 0",
    },
    "& a": {
      color: theme.colors.colorSuccess,
      textDecoration: "underline",
    },
    "& ul": {
      margin: "12px 0",
    },
    "& hr": {
      margin: "12px 0",
      borderColor: theme.colors.colorBorderSecondary,
    },
    "& sup, & sub": {
      fontSize: 12,
    },
    "& figure img:not([src])": {
      display: "none",
    },
  },
  entryFooter: {
    display: "block",
  },
  visitBtn: {
    marginTop: 40,
    width: "100%",
    height: 40,
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "uppercase",
  },
}));

export { useStyles };
