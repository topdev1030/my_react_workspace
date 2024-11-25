import { useState, useEffect } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "./PdfViewerV2.styles.css";
import cx from "clsx";
import { Button, Typography } from "@/components";
import { PdfViewerV2Props } from "./PdfViewerV2.types";
import { useStyles } from "./PdfViewerV2.styles";

const { Text } = Typography;

const PdfViewerV2 = ({ className, file, ...props }: PdfViewerV2Props) => {
  const [pageCount, setPageCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showPagination, setShowPagination] = useState<boolean>(false);
  const styles = useStyles();
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  useEffect(() => {
    // Reset page number when a new file is loaded
    setCurrentPage(1);
  }, [file]);

  const handleDocumentLoad = (e: { doc: { numPages: number } }) => {
    setPageCount(e.doc.numPages);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => {
      let previousPage = prevPage;
      if (prevPage < pageCount) {
        previousPage = prevPage + 1;
      }
      return previousPage;
    });
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
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <Viewer
          fileUrl={file}
          onDocumentLoad={handleDocumentLoad}
          initialPage={currentPage - 1}
          {...props}
        />
      </Worker>

      {showPagination && pageCount > 0 && (
        <div className={styles.pagination}>
          <Button
            className={styles.paginationBtn}
            type="text"
            disabled={currentPage <= 1}
            onClick={goToPreviousPage}
          >
            Prev
          </Button>
          <Text className={styles.paginationText}>
            Page {currentPage} of {pageCount}
          </Text>
          <Button
            className={styles.paginationBtn}
            type="text"
            disabled={currentPage >= pageCount}
            onClick={goToNextPage}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export { PdfViewerV2 };
