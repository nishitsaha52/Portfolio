import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"; // Importing icons for navigation
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import '../../styles/Resume.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
    console.log("Document loaded successfully. Number of pages:", numPages);
  };

  const goToPrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(prevPageNumber => prevPageNumber - 1);
    }
  };

  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(prevPageNumber => prevPageNumber + 1);
    }
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <br/>
        <h1 className="project-heading">
            My <strong className="purple">Resume </strong>
          </h1>
          <hr className="divider" /> {/* Horizontal line added here */}
        <br/>
        <Row className="resume d-flex justify-content-center">
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            className="d-flex justify-content-center"
          >
            <Page
              pageNumber={pageNumber}
              scale={width > 786 ? 1.7 : 0.6}
            />
          </Document>
          <div className="navigation-buttons">
            <Button
              variant="secondary"
              onClick={goToPrevPage}
              disabled={pageNumber <= 1}
              className="btn-nav btn-nav-left"
            >
              <BsArrowLeft />
            </Button>
            <Button
              variant="secondary"
              onClick={goToNextPage}
              disabled={pageNumber >= numPages}
              className="btn-nav btn-nav-right"
            >
              <BsArrowRight />
            </Button>
          </div>
        </Row>

        <Row className="d-flex justify-content-between mt-3">
          <Col className="page-indicator">
            <p>
              Page {pageNumber} of {numPages}
            </p>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            className="btn-download"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
