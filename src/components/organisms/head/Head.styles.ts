import { createUseStyles } from "react-jss";
import { Theme } from "@/theme";

const useStyles = createUseStyles((theme: Theme) => ({
  headerStyle: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    height: 70,
    paddingInline: 10,
    lineHeight: "70px",
    backgroundColor: "#1C1C1C",
  },
  title: {
    marginBottom: "0 !important",
    fontFamily: "Poppins",
    fontStyle: "Medium",
    fontSize: 30,
  },
  searchBar: {
    width: 300,
    borderRadius: "10px",
    border: 0,
    height: 55,
    backgroundColor: "#282937",
    color: "#6B6B6B",
  },
}));

export { useStyles };
