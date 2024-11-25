import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "inline-block",
  },
  clickable: {
    transition: "all 0.2s",
    cursor: "pointer",
    "&:hover": {
      opacity: 0.8,
    },
  },
});

export { useStyles };
