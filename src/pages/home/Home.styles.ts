import { createUseStyles } from "react-jss";
import alpha from "color-alpha";
import { Theme } from "@/theme";

const useStyles = createUseStyles((theme: Theme) => ({
  layout: {
    minHeight: "100vh",
  },
  header: {
    backgroundColor: theme.colors.colorBrandBlack,
    height: 85,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    maxWidth: 1140,
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imgLogo: {
    cursor: "pointer",
    "& > img": {
      width: 208,
      height: "auto",
      objectFit: "contain",
    },
  },
  menuContainer: {
    display: "flex",
    alignItems: "center",
    gap: 24,
    padding: 10,
  },
  menuBtn: {
    width: 110,
    height: 40,
    borderRadius: 40,
    borderColor: theme.colors.colorBrandWhite,
    backgroundColor: "transparent",
    fontSize: 15,
    lineHeight: "unset",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.colors.colorBgContainer,
    position: "relative",
    "&:before": {
      content: "''",
      display: "block",
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0,
      backgroundColor: "transparent",
      backgroundImage: `radial-gradient(
        at top left,
        ${alpha(theme.colors.colorBrandBlue100, 0.37)} 0%,
        ${alpha(theme.colors.colorBrandWhite, 0)} 25%
      )`,
    },
    "& > *": {
      position: "relative",
    },
  },
  contentContainer: {
    paddingTop: 190,
    paddingBottom: 150,
    display: "flex",
    flexDirection: "column",
  },
  banner: {
    padding: 10,
  },
  heading: {
    "&.ant-typography": {
      color: theme.colors.colorBrandWhite,
      fontSize: 78,
      fontWeight: 600,
      lineHeight: 1.15,
    },
  },
  getIntelBtn: {
    "&.ant-btn-primary:not(:disabled)": {
      height: 76,
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: 1,
      textTransform: "uppercase",
      color: theme.colors.colorBrandBlack,
      backgroundColor: theme.colors.colorBrandBlue200,
      borderStyle: "solid",
      borderWidth: 8,
      borderColor: alpha(theme.colors.colorBrandBlack, 0.77),
      borderRadius: "50px 50px 50px 50px",
      padding: "23px 36px 21px 36px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:hover": {
        color: theme.colors.colorBrandBlack,
        filter: "brightness(1.2)",
      },
    },
  },
  solutions: {
    marginTop: 190,
    rowGap: 36,
    display: "flex",
    alignItems: "stretch",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  headingCard: {
    width: 356,
    height: "auto",
    border: "none",
    "& > .ant-card-body": {
      padding: "10px 35px 10px 10px",
    },
  },
  headingCardTitle: {
    "&.ant-typography": {
      marginBottom: 20,
      fontSize: 50,
      fontWeight: 600,
      lineHeight: "1.1em",
      color: theme.colors.colorBrandWhite,
    },
  },
  headingCardDesc: {
    "&.ant-typography": {
      color: alpha(theme.colors.colorBrandWhite, 0.59),
      fontSize: 18,
      lineHeight: "1.3em",
      fontWeight: 400,
    },
  },
  solutionCard: {
    width: 356,
    height: "auto",
    backgroundColor: "transparent",
    backgroundImage: `linear-gradient(
      180deg,
      ${theme.colors.colorBrandBlack100} 0%,
      ${alpha(theme.colors.colorBrandBlack100, 0)}
      100%
    )`,
    border: "none",
    transition: "background 1s",
    "& > .ant-card-body": {
      padding: 50,
      display: "flex",
      flexDirection: "column",
    },
    "&:hover": {
      backgroundColor: alpha(theme.colors.colorBrandBlack100, 0.49),
    },
  },
  solutionIcon: {
    "& > svg": {
      width: "auto",
      height: 50,
      color: theme.colors.colorBrandBlue200,
    },
  },
  solutionTitle: {
    "&.ant-typography": {
      marginTop: 20,
      marginBottom: 0,
      fontSize: 22,
      fontWeight: 600,
      lineHeight: 1.25,
    },
  },
  solutionDesc: {
    "&.ant-typography": {
      marginTop: 20,
      fontSize: 15,
      lineHeight: 1.3,
      color: alpha(theme.colors.colorBrandWhite, 0.59),
    },
  },
  learnMoreBtn: {
    marginTop: 20,
    width: "fit-content",
    padding: 0,
    fontSize: 15,
    color: theme.colors.colorBrandBlue200,
    "&:hover > span": {
      textDecoration: "underline",
    },
  },
  learnMoreTooltip: {
    maxWidth: 540,
  },
  footer: {
    height: 40,
    fontSize: 12,
    color: theme.colors.colorText,
    backgroundColor: theme.colors.colorBrandBlack,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  backTop: {
    bottom: 20,
    borderRadius: 5,
    "& > .ant-float-btn-body": {
      borderRadius: 5,
    },
  },
  contactUsModal: {
    width: "fit-content !important",
    "& > .ant-modal-content": {
      width: 640,
      padding: 40,
      "& > .ant-modal-close": {
        right: -28,
        top: 0,
      },
    },
  },
  contactUsForm: {
    "& input, & input.form-control": {
      width: "100%",
      height: 36,
    },
  },
  formTitle: {
    "&.ant-typography": {
      textAlign: "center",
      fontWeight: 600,
      fontSize: 24,
      textTransform: "none",
      marginBottom: 20,
    },
  },
  formActions: {
    marginTop: 36,
    display: "flex",
    alignItems: "center",
    gap: 20,
    "& > button": {
      flex: 1,
      height: 36,
      fontSize: 16,
    },
  },
}));

export { useStyles };
