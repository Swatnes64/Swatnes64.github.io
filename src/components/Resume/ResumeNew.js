import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/SOLUTEC.pdf";
import { AiOutlineDownload, AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import ScrollToTop from "../ScrollToTop";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [page, setPage] = useState(1);
  const [numPages, setNumPages] = useState(1);
  
  function onDocumentLoadSuccess(pdf)  {
    console.log('Document',pdf);
    setNumPages(pdf?.numPages);
}

  function handleClickLeft() {
    console.log("page acctuelle" + page + "num" + numPages);
    if (1 < page) {
      setPage(page-1);
      ScrollToTop();
    }
  }

  function handleClickRight() {
    if (page < numPages) {
      setPage(page+1);
      ScrollToTop();
    }
  }

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Télécharger
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center" onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={page} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", paddingBottom: "10px", margin: "10px" }}>
        <Button className="btn" style={{   height: "50px",  width: "50px",  borderRadius: "50%", marginRight: "25px" }} onClick={handleClickLeft}>
            <AiFillCaretLeft /> 
          </Button>

          <Button className="btn" style={{   height: "50px",  width: "50px",  borderRadius: "50%", marginLeft: "25px" }}onClick={handleClickRight}>
            <AiFillCaretRight />
          </Button>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Télécharger
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
