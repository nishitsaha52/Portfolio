import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AiOutlineMail, AiOutlineFilePdf, AiOutlineLink } from "react-icons/ai"; // Importing icons

function CTAButton() {
  const buttonStyle = {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#700c86",
    color: "#FFD700",
    transition: "background-color 0.3s, color 0.3s",
    border: "2px solid #FFD700",
    borderRadius: "30px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const buttonHoverStyle = {
    backgroundColor: "#ffd700",
    color: "#700c86",
  };

  const iconStyle = {
    color: "#FFD700",
    marginRight: "8px",
  };

  return (
    <Container>
      <Row className="cta-buttons mt-4 text-center">
        <Col md={4}>
          <Button
            variant="primary"
            href="/contact"
            className="hire-me-btn"
            style={buttonStyle}
            onMouseEnter={(e) => {
              Object.assign(e.target.style, buttonHoverStyle);
            }}
            onMouseLeave={(e) => {
              Object.assign(e.target.style, buttonStyle);
            }}
          >
            <AiOutlineMail style={iconStyle} />
            Hire Me
          </Button>
          <p>Let's discuss your project needs!</p>
        </Col>
        <Col md={4}>
          <Button
            variant="primary"
            href="https://nishitphotoportfolio.netlify.app/"
            className="portfolio-btn"
            style={buttonStyle}
            onMouseEnter={(e) => {
              Object.assign(e.target.style, buttonHoverStyle);
            }}
            onMouseLeave={(e) => {
              Object.assign(e.target.style, buttonStyle);
            }}
          >
            <AiOutlineLink style={iconStyle} />
            View My Portfolio
          </Button>
          <p>Explore my other works and talents!</p>
        </Col>
        <Col md={4}>
          <Button
            variant="primary"
            href={require("../../Assets/Resume.pdf")}
            download="Resume.pdf"
            className="resume-btn"
            style={buttonStyle}
            onMouseEnter={(e) => {
              Object.assign(e.target.style, buttonHoverStyle);
            }}
            onMouseLeave={(e) => {
              Object.assign(e.target.style, buttonStyle);
            }}
          >
            <AiOutlineFilePdf style={iconStyle} />
            Download Resume
          </Button>
          <p>Get to know my professional background!</p>
        </Col>
      </Row>
    </Container>
  );
}

export default CTAButton;
