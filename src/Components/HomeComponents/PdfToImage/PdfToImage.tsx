import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

type Props = {
    file: string;
}

const PdfToImage:React.FC<Props> = ({ file }) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <Document
      file={file}
    >
      <Page pageNumber={1} />
    </Document>
  );
};

export default PdfToImage;
