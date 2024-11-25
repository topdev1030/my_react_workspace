import { createUseStyles } from "react-jss";
import { Theme } from "@/theme";

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: 24,
    backgroundColor: "#1C1C1C",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  title: {
    marginBottom: "0 !important",
  },
  searchContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: "35px",
  },
  panelTitle: {
    display: "flex",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  optionTitle: {
    display: "flex",
    alignSelf: "flex-start",
    marginBottom: "auto !important",
    marginTop: "auto",
  },
  searchOptionContainer: {
    marginTop: 10,
  },
  fieldContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  searchField: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  searchText: {
    marginBottom: 5,
  },
  searchBar: {
    width: "100%",
    height: 60,
    backgroundColor: "#282937",
    borderRadius: 10,
  },
  selectBar: {
    width: "100%",
    height: 60,
    "& .ant-select-selector": {
      border: "1px solid #424242 !important",
      backgroundColor: "#282937 !important",
    },
  },
  searchBtn: {
    width: "100%",
    border: 0,
    height: 60,
    borderRadius: 15,
    backgroundColor: "#498DCE",
  },
  clearBtn: {
    width: "100%",
    border: "1px solid",
    borderColor: "#498DCE",
    height: 60,
    borderRadius: 15,
    backgroundColor: "transparent",
  },
  OptionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  sortContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  sortBar: {
    width: "70%",
    height: 30,

    "& > .ant-select-selector": {
      border: "0 !important",
      backgroundColor: "transparent !important",
    },

    "& > div > div >.ant-select-selection-placeholder": {
      insetInlineEnd: "0 !important",
    },
  },
  sortTitle: {
    marginBottom: "0 !important",
  },
  viewIconContainer: {
    "& .ant-image": { display: "flex", float: "inline-end", marginRight: 10 },
  },
  viewIcon: {},
  createReportBtn: {
    height: 50,
    backgroundColor: "#498DCE",
    border: 0,
    borderRadius: 15,
  },
  createBtn: {
    fontSize: 20,
  },
  content: {
    marginTop: 20,
  },
  reportsTable: {
    flex: 1,
    "& .ant-table": {
      "& th, & td": {
        fontSize: 13,
        color: theme.colors.colorText,
        fontWeight: 400,
        // padding: "16px 0 !important",
      },
      "& th": {
        color: "#8E8E8E !important",
      },
      "& tr > td": {
        borderBottom: "16px solid #1C1C1C",
        borderRed: "16px solid #1C1C1C",
      },
      "& th .ant-dropdown-open": {
        visibility: "hidden",
      },
      "& tr > th": {
        fontSize: 13,
        color: theme.colors.colorText,
        fontWeight: 400,
        backgroundColor: "#1C1C1C",
      },
    },
  },
  tdFirstCell: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },

  tdStyleEven: {
    // padding: "10px 0",
    backgroundColor: "#000000",
  },
  tdStyleOdd: {
    // padding: "10px 0",
    backgroundColor: "#272727",
  },

  tdIconStyle: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  reportPdfCol: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  createReportModal: {
    width: "fit-content !important",
    "& .ant-modal-content": {
      width: 540,
      padding: 40,
      backgroundColor: "#141414 !important",
    },
    "& .ant-modal-header": {
      color: "#8E8E8E",
      backgroundColor: "#141414 !important",
    },
  },
  createReportForm: {
    "& input, & input.form-control": {
      width: "100%",
      height: 50,
    },
    "& .ant-select-single": {
      height: "50px !important",
    },
  },
  formTitle: {
    "&.ant-typography": {
      textAlign: "start",
      fontWeight: 600,
      fontSize: 24,
      textTransform: "none",
      marginBottom: 20,
    },
  },
  reportFileDragger: {
    "& .ant-upload-drag-container": {
      display: "flex",
      flexDirection: "column",
    },
  },
  formActions: {
    marginTop: 36,
    display: "flex",
    alignItems: "center",
    gap: 20,
    "& > button": {
      flex: 1,
      height: 36,
      fontSize: 16,
    },
  },
  pdfPreviewModal: {
    width: "fit-content",
    "& > .ant-modal-content": {
      width: 612,
      padding: 0,
      background: "none",
      border: "none",
      "& > .ant-modal-close": {
        right: -28,
        top: 0,
      },
    },
  },
  invisible: {
    visibility: "hidden",
  },
}));

export { useStyles };
