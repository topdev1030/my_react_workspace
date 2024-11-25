import { createUseStyles } from "react-jss";
import { Theme } from "@/theme";

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    position: "relative",
    border: `1px solid ${theme.colors.colorBorder}`,
    height: 38,
    "&:before": {
      zIndex: 2,
      content: "''",
      width: 40,
      height: "calc(100% - 4px)",
      pointerEvents: "none",
      position: "absolute",
      top: 2,
      left: 0,
      background: `linear-gradient(
        90deg, ${theme.colors.colorPrimaryBg}
        20%, transparent
      )`,
    },
    "&:after": {
      zIndex: 2,
      content: "''",
      width: 40,
      height: "calc(100% - 4px)",
      pointerEvents: "none",
      position: "absolute",
      top: 2,
      right: 0,
      background: `linear-gradient(
        90deg, transparent,
        ${theme.colors.colorPrimaryBg} 80%
      )`,
    },
  },
  slider: {
    height: "100%",
    "& .slick-list, & .slick-track, & .slick-slide > div": {
      height: "100%",
    },
  },
  sliderCardWrapper: {
    padding: "0 12px",
    height: "100%",
  },
  sliderCard: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  sliderTitle: {
    color: theme.colors.colorTextSecondary,
    fontSize: 14,
    fontWeight: 400,
    cursor: "pointer",
    "&:hover, &:active": {
      color: theme.colors.colorSuccessText,
      opacity: 0.8,
    },
  },
  sliderCategoryTitle: {
    fontSize: 14,
    fontWeight: 500,
    color: theme.colors.colorSuccessText,
  },
  newsTooltipRoot: {
    maxWidth: 360,
    "& .ant-tooltip-inner": {
      marginTop: 8,
      borderRadius: 0,
      background: theme.colors.colorBgElevated,
      padding: "15px 20px",
      boxShadow: `0 0 12px 0 ${theme.colors.colorBgMask}`,
      zIndex: 10,
    },
  },
  newsTooltip: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  newTooltipHeader: {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
  },
  newsTooltipTitle: {
    padding: 0,
    color: theme.colors.colorSuccessText,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    "&:hover, &:active": {
      color: theme.colors.colorSuccessText,
    },
  },
  newsTooltipLink: {
    marginTop: 4,
    "& > svg": {
      minWidth: 14,
      height: 14,
      color: theme.colors.colorBrandWhite,
    },
  },
  newsTooltipSummary: {
    margin: 0,
    fontSize: 12,
    color: theme.colors.colorTextSecondary,
  },
  newsTooltipMeta: {
    fontSize: 10,
    fontStyle: "italic",
    color: theme.colors.colorTextTertiary,
  },
}));

export { useStyles };
