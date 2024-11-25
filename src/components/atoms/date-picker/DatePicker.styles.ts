import { createUseStyles } from "react-jss";
import { Theme } from "@/theme";

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: "4px 11px 4px",
    fontSize: 14,
  },
  popup: {
    border: `1px solid ${theme.colors.colorBorder}`,
    borderRadius: 8,
    padding: 0,
  },
}));

export { useStyles };
