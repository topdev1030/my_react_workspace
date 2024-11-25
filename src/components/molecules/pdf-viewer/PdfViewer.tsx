import { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import cx from "clsx";

// import "pdfjs-dist/build/pdf.worker.entry";

// components
import { Button, Typography } from "@/components";

// types
import { PdfViewerProps } from "./PdfViewer.types";

// styles
import { useStyles } from "./PdfViewer.styles";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  // "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

const { Text } = Typography;

const PdfViewer = ({ className, file, ...props }: PdfViewerProps) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [showPagination, setShowPagination] = useState<boolean>(false);

  const styles = useStyles();

  const onDocumentLoadSuccess = ({ numPages: pages }) => {
    setNumPages(pages);
    setPageNumber(1);
  };

  const changePage = (offset: number) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  return (
    <div
      className={cx({
        [styles.root]: true,
        [className || ""]: className,
      })}
      onMouseEnter={() => setShowPagination(true)}
      onMouseLeave={() => setShowPagination(false)}
    >
      <Document
        className={styles.document}
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        options={options}
        {...props}
      >
        <Page className={styles.page} pageNumber={pageNumber} />
      </Document>
      {showPagination && numPages > 0 && (
        <div className={styles.pagination}>
          <Button
            className={styles.paginationBtn}
            type="text"
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            -
          </Button>
          <Text className={styles.paginationText}>
            {pageNumber || (numPages ? 1 : "0")} / {numPages || "0"}
          </Text>
          <Button
            className={styles.paginationBtn}
            type="text"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            +
          </Button>
        </div>
      )}
    </div>
  );
};

export { PdfViewer };
