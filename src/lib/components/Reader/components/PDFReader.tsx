import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

import workerSrc from "../../../../pdf-worker";
import ErrorView from "../../../../views/ErrorView";
import LoadingView from "../../../../views/LoadingView";

interface PDFReaderProps {
  file: string;
  page: number;
}

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

const PDFReader = ({ file, page }: PDFReaderProps) => {
  const [errors, setErrors] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const adjust = () => {
    setTimeout(() => {
      const container: HTMLDivElement = document
        .getElementsByClassName("react-pdf__Page__svg")
        .item(0) as HTMLDivElement;
      container.style.width = "100%";
      container.style.height = "100%";
      const svg: SVGElement = container!.children.item(0) as SVGElement;
      svg.style.width = "100%";
      svg.style.height = "100%";
    }, 1000);
  };

  const onLoad = () => {
    adjust();
    setTimeout(() => {
      setLoading(false);
      console.log("[PDFReader]: Loaded PDF");
    }, 1000);
  };

  const onLoadError = () => {
    setErrors([...errors, "failed to laod pdf file"]);
    console.log("[PDFReader-Error]: Failed To Load Pdf Document");
  };

  if (errors.length > 0)
    return (
      <ErrorView
        details
        longDescription={"We failed to render the pdf file"}
        errors={errors}
        title={"Failed To Render The Pdf FIle"}
        description={"Please try again"}
      />
    );

  return (
    <Document
      file={file}
      renderMode="svg"
      onLoadSuccess={onLoad}
      onLoadError={onLoadError}
      className="bg-green w-full"
    >
      {loading ? <LoadingView /> : null}
      <Page pageNumber={page} className="bg-blue" />
    </Document>
  );
};

export default PDFReader;
