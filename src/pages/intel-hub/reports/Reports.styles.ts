import { createUseStyles } from "react-jss";
import { Theme } from "@/theme";

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
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
      },
    },
  },
  reportPdfCol: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  fileUploadModal: {
    width: "fit-content !important",
    "& > .ant-modal-content": {
      width: 540,
      padding: 40,
    },
  },
  fileUploadForm: {
    "& input, & input.form-control": {
      width: "100%",
      height: 36,
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
  fileDragger: {
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
}));

export { useStyles };
