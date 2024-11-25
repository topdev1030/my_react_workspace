import { createUseStyles } from "react-jss";
import { Theme } from "@/theme";

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  entryHeader: {
    display: "flex",
    flexDirection: "column",
  },
  featured: {
    "&.ant-typography": {
      fontSize: 12,
      fontWeight: 700,
      color: theme.colors.colorBrandRed100,
    },
  },
  title: {
    "&.ant-typography": {
      marginTop: 20,
      marginBottom: 8,
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: "-0.04em",
      lineHeight: 1.25,
      color: theme.colors.colorText,
    },
  },
  metadata: {
    display: "flex",
    alignItems: "center",
    gap: 2,
  },
  metadataItem: {
    "& > span.ant-typography": {
      fontSize: 12,
      fontWeight: 500,
      color: theme.colors.colorTextQuaternary,
    },
  },
  metadataSeparator: {
    margin: "0 8px",
    color: theme.colors.colorTextQuaternary,
  },
  entryContent: {
    marginTop: 40,
    display: "flex",
    borderRadius: 4,
    border: `solid 1px ${theme.colors.colorBorderSecondary}`,
  },
  highlightPanel: {
    flex: 1,
    width: "65%",
    padding: 48,
    wordWrap: "break-word",
  },
  panelTitle: {
    "&.ant-typography": {
      color: theme.colors.colorTextSecondary,
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: 0,
      lineHeight: 1,
      marginTop: 0,
      marginBottom: 24,
      textTransform: "uppercase",
    },
  },
  highlights: {
    marginTop: 12,
    padding: "0 16px",
    "& > li": {
      marginBottom: 16,
      fontSize: 13,
      lineHeight: "18px",
      color: theme.colors.colorTextTertiary,
      "-webkit-box-orient": "vertical",
      "-webkit-line-clamp": 7,
      "&:last-of-type": {
        marginBottom: 0,
      },
    },
  },
  sparklinePanel: {
    borderLeft: `solid 1px ${theme.colors.colorBorderSecondary}`,
    padding: 48,
    width: "35%",
  },
  imgSparkline: {
    width: "100%",
  },
  sparklineDescription: {
    marginTop: 24,
    marginBottom: 0,
    fontSize: 12,
    color: theme.colors.colorTextSecondary,
  },
}));

export { useStyles };
