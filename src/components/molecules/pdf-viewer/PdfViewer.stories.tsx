import { PdfViewer } from ".";

// assets
import SamplePdf from "@/static/pdf/sample.pdf";

export default {
  component: PdfViewer,
  title: "molecules/PdfViewer",
};

export const Default = () => {
  return (
    <div style={{ width: 600, padding: 20 }}>
      <PdfViewer file={SamplePdf} />
    </div>
  );
};
