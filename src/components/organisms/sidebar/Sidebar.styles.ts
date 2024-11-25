import { createUseStyles } from "react-jss";
import { Theme } from "@/theme";

const useStyles = createUseStyles((theme: Theme) => ({
  siderStyle: {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#1677ff",
    height: "100vh",
  },
  logoContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "0 28px",
    cursor: "pointer",
    marginTop: 20,
  },
  logoTitle: {
    marginTop: 5,
    fontSize: "18px !important",
  },
  imgLogo: {
    margin: 0,
    border: 0,
    borderRadius: 100,
  },
  profileCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "transparent",
    color: "#fff",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
    marginTop: 10,
    marginBottom: 30,
  },
  cardImage: {
    border: 0,
    bortherRadius: "50%",
  },
  cardDescription: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  profileName: {
    marginTop: "10px !important",
    marginBottom: "0px !important",
  },
  menuItem: {
    "& > .ant-menu-item": {
      display: "flex",
      height: "55px",
      alignIems: "center",
    },
    "& > a": {
      fontSize: "12px",
    },
    "& .ant-menu-title-content": {
      textAlign: "start",
      marginLeft: 25,
    },
  },
  logoutButton: {
    padding: "20px !important",
  },
  logoutIcon: {
    cursor: "pointer",
    height: "65px !important",
    display: "flex",
    alignItems: "center",
    position: "fixed",
    paddingLeft: "30px",
    bottom: 0,
    marginBottom: 20,
  },
  logoutTitle: {
    marginLeft: 25,
  },
}));

export { useStyles };
