import { createUseStyles } from "react-jss";
import { Theme } from "@/theme";

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    display: "inline-block",
  },
  popup: {
    border: `1px solid ${theme.colors.colorBorder}`,
    borderRadius: 8,
  },
}));

export { useStyles };