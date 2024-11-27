import { createUseStyles } from "react-jss";
import { Theme } from "@/theme";

const useStyles = createUseStyles((theme: Theme) => ({
  headerStyle: {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: "#4096ff",
  },
  contentStyle: {
    textAlign: "flex-start",
    minHeight: 120,
    color: "#fff",
    backgroundColor: "#1c1c1c",
  },
  siderStyle: {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#1677ff",
  },
  footerStyle: {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#4096ff",
  },
  layoutStyle: {
    minHeight: "100vh",
    overflow: "hidden",
    width: "100%",
    maxWidth: "100%",
  },
}));

export { useStyles };
