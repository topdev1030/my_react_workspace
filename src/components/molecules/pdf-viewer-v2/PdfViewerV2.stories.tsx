import { PdfViewerV2 } from "./PdfViewerV2";

// assets
import SamplePdf from "@/static/pdf/sample.pdf";

export default {
  component: PdfViewerV2,
  title: "molecules/PdfViewerV2",
};

export const Default = () => {
  return (
    <div style={{ width: 700, height: 700, padding: 30 }}>
      <PdfViewerV2 file={SamplePdf} />
    </div>
  );
};
