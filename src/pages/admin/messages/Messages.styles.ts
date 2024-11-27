import { createUseStyles } from "react-jss";
import { Theme } from "@/theme";

const useStyles = createUseStyles((theme: Theme) => ({
  createReportModal: {
    width: 540,
  },
  createReportForm: {
    "& input, & input.form-control": {
      backgroundColor: "#282937",
      width: "100%",
      height: 36,
    },
    "& .ant-input-outlined": {
      backgroundColor: "#282937",
    },
  },
  formTitle: {
    "&.ant-typography": {
      textAlign: "center",
      fontWeight: 600,
      fontSize: 24,
      textTransform: "none",
      marginBottom: 20,
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
  root: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 10px",
  },
  createReportBtn: {
    height: 40,
  },
  createBtn: {
    fontSize: 20,
  },
  content: {
    marginTop: 30,
  },
  reportsTable: {
    flex: 1,
    "& .ant-table": {
      "& th, & td": {
        fontSize: 13,
        color: theme.colors.colorText,
        fontWeight: 400,
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
    "& .ant-pagination": {
      "& .ant-pagination-item": {
        border: "1px solid #325475",
        borderRight: 0,
        borderRadius: 0,
        marginInlineEnd: 0,
        padding: "20px 0",
        alignItems: "center",
        display: "flex",
        backgroundColor: "#1C1C1C",
      },
      "& .ant-pagination-item-active > a": {
        color: "#000",
        backgroundColor: "#498dce",
      },
      "& .ant-pagination-item > a": {
        padding: "5px 13px",
      },
      "& .ant-pagination-prev": {
        display: "flex",
        border: "1px solid #325475",
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRight: 0,
        padding: "20px 10px",
        alignItems: "center",
        marginInlineEnd: 0,
      },
      "& .ant-pagination-jump-next": {
        border: "1px solid #325475",
        borderRight: 0,
        borderRadius: 0,
        marginInlineEnd: 0,
        padding: "20px 0",
        alignItems: "center",
        display: "flex",
        backgroundColor: "#1C1C1C",
      },
      "& .ant-pagination-next": {
        border: "1px solid #325475",
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        padding: "20px 20px",
        alignItems: "center",
        justifyContent: "end",
        display: "flex",
      },
      "& .ant-pagination-item-link-icon": {
        padding: "0 9px",
      },
      "& .ant-pagination-item-ellipsis": {
        padding: "0 5px",
      },
      "& .ant-pagination-jump-prev": {
        border: "1px solid #325475",
        borderRight: 0,
        borderRadius: 0,
        marginInlineEnd: 0,
        padding: "20px 0",
        alignItems: "center",
        display: "flex",
        backgroundColor: "#1C1C1C",
      },
    },
  },
  tdStyleEven: {
    backgroundColor: "#000000",
  },
  tdStyleOdd: {
    backgroundColor: "#272727",
  },
  cardPagination: {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",

    "& .ant-pagination": {
      "& .ant-pagination-item": {
        border: "1px solid #325475",
        borderRight: 0,
        borderRadius: 0,
        marginInlineEnd: 0,
        padding: "20px 0",
        alignItems: "center",
        display: "flex",
        backgroundColor: "#1C1C1C",
      },
      "& .ant-pagination-item-active > a": {
        color: "#000",
        backgroundColor: "#498dce",
      },
      "& .ant-pagination-item > a": {
        padding: "5px 13px",
      },
      "& .ant-pagination-prev": {
        display: "flex",
        border: "1px solid #325475",
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRight: 0,
        padding: "20px 10px",
        alignItems: "center",
        marginInlineEnd: 0,
      },
      "& .ant-pagination-jump-next": {
        border: "1px solid #325475",
        borderRight: 0,
        borderRadius: 0,
        marginInlineEnd: 0,
        padding: "20px 0",
        alignItems: "center",
        display: "flex",
        backgroundColor: "#1C1C1C",
      },
      "& .ant-pagination-next": {
        border: "1px solid #325475",
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        padding: "20px 20px",
        alignItems: "center",
        justifyContent: "end",
        display: "flex",
      },
      "& .ant-pagination-item-link-icon": {
        padding: "0 9px",
      },
      "& .ant-pagination-item-ellipsis": {
        padding: "0 5px",
      },
      "& .ant-pagination-jump-prev": {
        border: "1px solid #325475",
        borderRight: 0,
        borderRadius: 0,
        marginInlineEnd: 0,
        padding: "20px 0",
        alignItems: "center",
        display: "flex",
        backgroundColor: "#1C1C1C",
      },
    },
  },
  cardContainer: {
    backgroundColor: "#1c1c1e",
    color: "#fff",
    borderRadius: 8,

    "& .ant-card-body": {
      padding: "24px 12px",

      "& .ant-divider-horizontal": {
        margin: "12px 0",
      },

      "& .ant-space-gap-row-small": {
        rowGap: 0,
      },
    },
  },
  tdIconStyle: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  subtitle: {
    color: "rgba(255, 255, 255, 0.45)",
    fontWeight: 400,
    fontSize: 14,
  },
  value: {
    color: "#FFF",
    fontWeight: 500,
    fontSize: 16,
  },
  reportPdfCol: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },

  reportFileDragger: {
    "& .ant-upload-drag-container": {
      display: "flex",
      flexDirection: "column",
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
}));

export { useStyles };
