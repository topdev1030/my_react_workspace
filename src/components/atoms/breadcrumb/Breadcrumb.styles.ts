import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    "& .ant-breadcrumb-separator": {
      marginInline: 16,
    },
    "& .ant-breadcrumb-link, & .ant-breadcrumb-link > a": {
      "& > .anticon + span": {
        marginInlineStart: 8,
      },
    },
  },
});

export { useStyles };
