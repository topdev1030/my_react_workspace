import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    zIndex: 99,
    "& .ant-drawer-body": {
      padding: 0,
    },
  },
  entryContainer: {
    width: 840,
    margin: "48px auto 48px",
  },
});

export { useStyles };
