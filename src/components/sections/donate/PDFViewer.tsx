"use client"

import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';
import 'react-pdf/dist/esm/Page/TextLayer.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

export default function PDFViewer() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <>
        <div className="m-2 flex flex-row justify-around items-center">
          
          <button className="bg-red-800 ml-16 outline-dashed outline-2 outline-offset-2"></button>
        </div>

        {/* <Document className="" file="Sponsor.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document> */}
      <div className="flex flex-col justify-around items-center bg-gray-600">

      <Document
      className="flex flex-row justify-around items-center mb-8"
      file="Sponsor.pdf"
      onLoadSuccess={onDocumentLoadSuccess}
    >
      <div className="relative overflow-y-auto overflow-x-hidden max-h-[720px] rounded-xl">
        {numPages &&
          Array.from({ length: numPages }, (_, index) => index + 1).map(
            (pageNumber) => <Page pageNumber={pageNumber} />
          )}
      </div>
      </Document>

          <div className='absolute h-16 bg-red-500'>
            <h1>hsadhajs</h1> 
          </div>
    </div>
    
    
    </>
  )
}