import { createUseStyles } from "react-jss";
import { Theme } from "@/theme";

const useStyles = createUseStyles((theme: Theme) => ({
  siderStyle: {
    position: "fixed",
    left: 0,
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#000000 !important",
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
    marginLeft: 5,
    fontSize: "19px !important",
    textAlign: "start",
    fontWeight: "400 !important",
  },
  imgLogo: {
    margin: 0,
    border: 0,
    borderRadius: 100,
    textAlign: "start",
  },
  profileCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "transparent",
    color: "#fff",
    justifyContent: "center",
    fontFamily: "Poppins",
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
    backgroundColor: "transparent",
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
    "& .ant-menu-item-selected": {
      "& a": {
        color: "#9f702e",
      },
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
    marginLeft: 20,
  },
}));

export { useStyles };
