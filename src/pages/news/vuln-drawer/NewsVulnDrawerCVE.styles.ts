import { createUseStyles } from "react-jss";
import { Theme } from "@/theme";

const useStyles = createUseStyles((theme: Theme) => ({
  header: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "start",
  },
  heading: {
    flex: 1,
  },
  features: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },
  feature: {
    "&.ant-typography": {
      fontSize: 12,
      fontWeight: 700,
      color: theme.colors.colorBrandRed100,
    },
  },
  featureSeparator: {
    fontSize: 12,
    color: theme.colors.colorTextTertiary,
  },
  label: {
    "&.ant-typography": {
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: "-0.04em",
      lineHeight: 1.25,
      color: theme.colors.colorText,
    },
  },
  cweInfo: {
    "&.ant-typography": {
      fontWeight: 500,
      fontSize: 16,
      color: theme.colors.colorTextTertiary,
      letterSpacing: "normal",
    },
  },
  metadata: {
    "&.ant-typography": {
      fontSize: 12,
      fontWeight: 500,
      color: theme.colors.colorTextQuaternary,
    },
  },
  actions: {
    marginTop: 24,
    display: "flex",
    alignItems: "center",
    gap: 8,
    "& > button": {},
  },
  dial: {
    marginLeft: 24,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    marginTop: 32,
  },
  description: {
    "&.ant-typography": {
      margin: 0,
      color: theme.colors.colorTextSecondary,
      fontSize: 16,
    },
  },
  vector: {
    "&.ant-typography": {
      marginTop: 12,
      color: theme.colors.colorTextTertiary,
      fontSize: 13,
    },
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    paddingTop: 20,
    "&:first-of-type": {
      paddingTop: 0,
    },
  },
  sectionTitle: {
    "& > h2.ant-typography": {
      margin: 0,
      color: theme.colors.colorText,
      fontSize: 16,
      fontWeight: 700,
    },
    "& > h3.ant-typography": {
      marginTop: 20,
      marginBottom: 0,
      color: theme.colors.colorTextSecondary,
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: 0,
      lineHeight: 1,
      textTransform: "uppercase",
      display: "flex",
      alignItems: "center",
      gap: 16,
      "&:after": {
        content: "''",
        display: "block",
        flex: 1,
        borderTop: `1px solid ${theme.colors.colorBorder}`,
      },
    },
  },
  sectionContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  timeline: {
    marginTop: 12,
  },
  timelineItem: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  timelineTitle: {
    "&.ant-typography": {
      fontSize: 14,
      color: theme.colors.colorText,
      margin: 0,
    },
  },
  timelineDescription: {
    "&.ant-typography": {
      fontSize: 16,
      color: theme.colors.colorTextSecondary,
      margin: 0,
    },
  },
  timelineMetadata: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    "& > span.ant-typography": {
      fontSize: 12,
      color: theme.colors.colorTextTertiary,
    },
    "& > a": {
      padding: 0,
      height: "auto",
      "& > span": {
        fontSize: 12,
        color: theme.colors.colorTextTertiary,
        textDecoration: "underline",
      },
    },
  },
  eventsGraph: {
    width: "100%",
    border: `2px solid ${theme.colors.colorBorderSecondary}`,
    borderRadius: 4,
    "& svg": {
      display: "block",
      margin: "0 auto",
      "& .graph-event": {
        "& > circle": {
          stroke: theme.colors.colorBrandWhite,
          fill: theme.colors.colorBrandBlack,
        },
      },
      "& .graph-event-icon": {
        fill: theme.colors.colorTextSecondary,
      },
      "& text": {
        opacity: 1,
        fill: theme.colors.colorTextTertiary,
        fontSize: 12,
      },
    },
  },
  tags: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 8,
    maxWidth: "100%",
    overflow: "hidden",
  },
  tag: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    gap: 4,
    maxWidth: "100%",
    "& > svg": {
      minWidth: 20,
    },
  },
  tagText: {
    color: theme.colors.colorText,
    fontWeight: 500,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    "& > span": {
      margin: "0 2px",
    },
  },
}));

export { useStyles };
