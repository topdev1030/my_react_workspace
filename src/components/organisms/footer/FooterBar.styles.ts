import { createUseStyles } from "react-jss";
import { Theme } from "@/theme";

const useStyles = createUseStyles((theme: Theme) => ({
  footerStyle: {
    textAlign: "center",
    color: "#6B6B6B",
    backgroundColor: "transparent",
    marginTop: "15px",
  },
}));

export { useStyles };
