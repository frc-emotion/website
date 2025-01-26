"use client";

import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { FiChevronLeft, FiChevronRight, FiZoomIn, FiZoomOut } from "react-icons/fi";

import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

const FILENAME = "/Sponsorship Packet 2024-25.pdf";

type PDFViewerProps = {
  page: number; // initial page number
};

export default function PDFViewer({ page }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0); 
  const [pageNumber, setPageNumber] = useState<number>(page);
  const [scale, setScale] = useState<number>(1.0);

  // Dynamically adjust zoom for mobile vs. desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // Mobile
        setScale(0.6);
      } else {
        // Desktop
        setScale(0.99);
      }
    };
    handleResize(); // On mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Called after PDF loads
  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  // Pagination
  function goToPrevPage() {
    setPageNumber((prev) => (prev > 1 ? prev - 1 : prev));
  }
  function goToNextPage() {
    setPageNumber((prev) => (prev < numPages ? prev + 1 : prev));
  }

  // Zoom
  function zoomIn() {
    setScale((prev) => prev + 0.2);
  }
  function zoomOut() {
    setScale((prev) => (prev > 0.6 ? prev - 0.2 : prev));
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto p-4 sm:p-6 flex flex-col items-center overflow-hidden">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full">
        
        {/* PDF Document */}
        <div className="relative flex justify-center items-center w-full mx-auto transition-opacity duration-500 ease-in-out">
          <Document
            className="relative max-h-[500px] sm:max-h-[720px] w-auto overflow-scroll border-2 border-gray-200 rounded-lg transition-transform duration-500"
            file={FILENAME}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<div className="text-center py-4">Loading PDF...</div>}
          >
            <Page
              pageNumber={pageNumber}
              scale={scale}
              className="shadow-lg mb-0 transition-transform duration-500"
            />
          </Document>
        </div>

        {/* Pagination + Zoom Controls */}
        <div className="flex justify-between items-center bg-gray-100 p-2 sm:p-3 flex-wrap space-y-2 sm:space-y-0">
          
          {/* Pagination Controls */}
          <div className="flex items-center space-x-2">
            <button
              className="p-2 bg-blue-500 text-white rounded-full disabled:bg-gray-300 transition-all duration-300 hover:bg-blue-600 transform hover:scale-105"
              onClick={goToPrevPage}
              disabled={pageNumber <= 1}
            >
              <FiChevronLeft size={20} />
            </button>
            <span className="text-gray-700 text-sm sm:text-base">
              Page {pageNumber} of {numPages}
            </span>
            <button
              className="p-2 bg-blue-500 text-white rounded-full disabled:bg-gray-300 transition-all duration-300 hover:bg-blue-600 transform hover:scale-105"
              onClick={goToNextPage}
              disabled={pageNumber >= numPages}
            >
              <FiChevronRight size={20} />
            </button>
          </div>

          {/* Zoom Controls */}
          <div className="flex items-center space-x-2">
            <button
              className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={zoomOut}
            >
              <FiZoomOut size={20} />
            </button>
            <button
              className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={zoomIn}
            >
              <FiZoomIn size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      {numPages > 0 && (
        <div className="mt-4 flex justify-center overflow-x-auto space-x-6">
          {Array.from({ length: numPages }, (_, index) => {
            const pageIndex = index + 1;
            return (
              <div
                key={pageIndex}
                className={`cursor-pointer border-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                  pageNumber === pageIndex ? "border-blue-500" : "border-transparent"
                }`}
                onClick={() => setPageNumber(pageIndex)}
              >
                <Document file={FILENAME}>
                  <Page pageNumber={pageIndex} width={100} className="rounded-md shadow-lg" />
                </Document>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}