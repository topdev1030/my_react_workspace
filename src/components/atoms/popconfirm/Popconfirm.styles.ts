import { createUseStyles } from "react-jss";
import { Theme } from "@/theme";

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    border: `1px solid ${theme.colors.colorBorder}`,
    borderRadius: 8,
    "& > .ant-popover-arrow::after": {
      border: `1px solid ${theme.colors.colorBorder}`,
    },
  },
}));

export { useStyles };
