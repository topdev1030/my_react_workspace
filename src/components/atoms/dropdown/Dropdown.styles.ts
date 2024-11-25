import { createUseStyles } from "react-jss";
import { Theme } from "@/theme";

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    color: theme.colors.colorText,
    fontSize: 14,
    transition: "all 0.2s",
    cursor: "pointer",
    "&:hover": {
      color: theme.colors.colorText,
      opacity: 0.8,
    },
  },
  overlay: {
    border: `1px solid ${theme.colors.colorBorder}`,
    borderRadius: 8,
  },
}));

export { useStyles };
