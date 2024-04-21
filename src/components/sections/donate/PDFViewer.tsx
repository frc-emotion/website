'use client';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();
 
export default function PDFViewer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Document file="Sponsor.pdf">
                <Page pageNumber={1} />
            </Document>
      {children}
    </>
  )
}