import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(() => ({
  root: {
    display: "block",
  },
  editFormItem: {
    margin: 0,
  },
  filterDropdown: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 6,
  },
  filterSelect: {
    minWidth: 360,
    height: 40,
  },
  filterMultiSelect: {
    width: 320,
    "& > .ant-select-selector": {
      minHeight: 40,
    },
    "& > .ant-select-arrow": {
      marginTop: 0,
      transform: "translateY(-50%)",
    },
  },
  filterInput: {
    width: 320,
    height: 40,
  },
  filterDatePicker: {
    height: 40,
  },
  filterRangePicker: {
    height: 40,
  },
  resetBtn: {
    marginTop: 8,
  },
}));

export { useStyles };
