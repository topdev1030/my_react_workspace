import { createUseStyles } from "react-jss";
import alpha from "color-alpha";
import { Theme } from "@/theme";

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    color: theme.colors.colorText,
  },
  mainContainer: {
    padding: 20,
    backgroundColor: "#1C1C1C",
  },
  lineCardContainer: {
    marginBottom: 15,
    marginTop: 15,
  },
  statsPanel: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    gap: 40,
    marginLeft: 20,
    marginRight: 20,
  },
  headingCard: {
    width: 360,
    height: "auto",
    border: "none",
    "& > .ant-card-body": {
      padding: "20px 10px",
    },
  },
  headingCardDesc: {
    "&.ant-typography": {
      color: alpha(theme.colors.colorBrandWhite, 0.59),
      fontSize: 16,
      lineHeight: "1.3em",
      fontWeight: 400,
    },
  },
  headingCardTitle: {
    "&.ant-typography": {
      fontSize: 32,
      fontWeight: 600,
      lineHeight: "1.1em",
      color: theme.colors.colorBrandWhite,
    },
  },
  statsContainer: {
    marginTop: "15px",
    "& .ant-card": {
      height: 250,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      transition: "transform 0.3s ease-in-out",
    },
    "& .ant-card:hover": {
      transform: "scale(1.05)",
    },
    "& .ant-card-body": {
      width: "100%",
      padding: "0 40px",
    },
  },
  statsCard: {
    borderRadius: 60,
    textAlign: "start",
  },
  chatterStatsCard: {
    "& h1": {
      textTransform: "capitalize",
    },
  },
  statsIcon: {
    "& > svg": {
      width: "auto",
      height: 42,
    },
  },
  statsValue: {
    "&.ant-typography": {
      fontFamily: "Poppins",
      marginTop: 5,
      marginBottom: 5,
      fontSize: 60,
      fontWeight: 700,
      lineHeight: 1.4,
      color: "FFFFFF",
    },
  },
  statsTitle: {
    "&.ant-typography": {
      fontFamily: "Poppins",
      marginTop: 15,
      marginLeft: 10,
      fontSize: 20,
      textAlign: "start",
      fontWeight: 500,
      lineHeight: 1.4,
      color: "#6B6B6B",
    },
  },
  statsSup: {
    paddingLeft: 8,
    fontWeight: 400,
    fontSize: 24,
  },
  statsTextSuccess: {
    color: theme.colors.colorSuccess,
  },
  statsTextDanger: {
    color: theme.colors.colorError,
  },
  statsTextInfo: {
    color: theme.colors.colorBrandBlue200,
  },
  statsTextOrange: {
    color: "#F7FF5F",
  },
  statsTextWarning: {
    color: theme.colors.colorBrandYellow200,
  },
  ...theme.animations,
  chatterContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  galanceContainer: {
    marginTop: 30,
  },
  galanceCard: {
    borderRadius: "30px",
    width: "100%",
    height: 170,
    "& .ant-card-body": {
      padding: "15px 24px 10px 24px",
    },
  },
  galanceSubTitle: {
    marginBottom: 8,
    color: "#000",
  },
  galanceValue: {
    fontSize: 40,
    color: "#000",
  },
  galanceViewAll: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  galanceTitle: {
    color: "#6B6B6B",
    marginLeft: 5,
  },
  galanceCardTitle: {
    "&.ant-typography": {
      fontFamily: "sans-serif",
      textAlign: "start",
      marginTop: 5,
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 1.3,
      color: "#1C1C1C",
    },
  },
  rightBar: {
    display: "block",
    padding: 20,
    alignItems: "center",
    backgroundColor: "#141414",
  },
  feedContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: "20px !important",
    marginTop: 10,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 15,
  },
  newsContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
  newsCard: {
    "& > .ant-card-body": {
      padding: 10,
    },
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 20,
    marginBottom: 15,
    backgroundColor: "#282937",
  },
  newsCardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  newsDescription: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    alignSelf: "start",
    marginLeft: 5,
    marginTop: 10,
  },
  cardContainer: {
    display: "flex",
  },
  newsImage: {
    border: 0,
    borderRadius: 20,
  },
  newsTitle: {
    textAlign: "start",
  },
}));

export { useStyles };
