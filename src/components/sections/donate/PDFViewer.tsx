"use client";
import { Document, Page, pdfjs } from "react-pdf";
import { FiChevronLeft, FiChevronRight, FiZoomIn, FiZoomOut } from "react-icons/fi";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useEffect, useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

let filename = "Sponsorship Packet 2024-25.pdf";

export default function PDFViewer() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);

  // Dynamically set scale based on screen size (mobile vs. desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // Mobile view - start zoomed out
        setScale(0.6);
      } else {
        // Desktop view - larger zoom
        setScale(0.99);
      }
    };

    handleResize(); // Set initial scale based on current window size
    window.addEventListener("resize", handleResize); // Update on resize

    return () => window.removeEventListener("resize", handleResize); // Clean up event listener
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  function goToPrevPage() {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  }

  function goToNextPage() {
    if (pageNumber < (numPages ?? 1)) setPageNumber(pageNumber + 1);
  }

  function zoomIn() {
    setScale((prevScale) => prevScale + 0.2);
  }

  function zoomOut() {
    if (scale > 0.6) setScale((prevScale) => prevScale - 0.2);
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto p-4 sm:p-6 flex flex-col items-center overflow-hidden">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full">
        {/* PDF Document */}
        <div className="relative flex justify-center items-center w-full mx-auto transition-opacity duration-500 ease-in-out">
          <Document
            className="relative max-h-[500px] sm:max-h-[720px] w-auto overflow-scroll border-2 border-gray-200 rounded-lg transition-transform duration-500"
            file={filename}
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

        {/* Pagination and Zoom Controls */}
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
              disabled={pageNumber >= (numPages ?? 1)}
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

      {/* Thumbnails for Page Navigation */}
      {numPages && (
        <div className="mt-4 flex justify-center overflow-x-auto space-x-6">
          {Array.from(new Array(numPages), (_, index) => (
            <div
              key={index}
              className={`cursor-pointer border-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                pageNumber === index + 1 ? "border-blue-500" : "border-transparent"
              }`}
              onClick={() => setPageNumber(index + 1)}
            >
              <Document file={filename}>
                <Page
                  pageNumber={index + 1}
                  width={100}
                  className="rounded-md shadow-lg"
                />
              </Document>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}