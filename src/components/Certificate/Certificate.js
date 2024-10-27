import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Lottie from "lottie-react";
import backgroundAnimation from "../../Assets/backgroundAnimation.json"; // Your Lottie background JSON
import "../../styles/Certificate.css";

const certificates = [
  {
    title: "Certificate in Web Development",
    institution: "Online Academy",
    year: "2023",
    link: "https://www.example.com/certificate-web-development", // Link for the certificate
  },
  {
    title: "Advanced JavaScript Certification",
    institution: "Tech Institute",
    year: "2023",
    link: "https://www.example.com/advanced-javascript", // Link for the certificate
  },
  {
    title: "React Developer Certification",
    institution: "Coursera",
    year: "2024",
    link: "https://www.example.com/react-developer", // Link for the certificate
  },
  {
    title: "Certificate in Web Development",
    institution: "Online Academy",
    year: "2023",
    link: "https://www.example.com/certificate-web-development", // Link for the certificate
  },
  {
    title: "Advanced JavaScript Certification",
    institution: "Tech Institute",
    year: "2023",
    link: "https://www.example.com/advanced-javascript", // Link for the certificate
  },
  {
    title: "React Developer Certification",
    institution: "Coursera",
    year: "2024",
    link: "https://www.example.com/react-developer", // Link for the certificate
  },
  {
    title: "Advanced JavaScript Certification",
    institution: "Tech Institute",
    year: "2023",
    link: "https://www.example.com/advanced-javascript", // Link for the certificate
  },
  {
    title: "React Developer Certification",
    institution: "Coursera",
    year: "2024",
    link: "https://www.example.com/react-developer", // Link for the certificate
  },
];

const Certificate = () => {
  return (
    <Container fluid className="certificate-section">
      {/* Lottie animation as background */}
      <Lottie 
        animationData={backgroundAnimation} 
        loop={true} 
        autoplay={true} 
        style={styles.lottieBackground} 
      />

      {/* Certificate content on top */}
      <div style={styles.content}>
        <h1 className="certificate-title">My Certificates</h1>
        <hr className="divider" /> {/* Horizontal line added here */ }
        <br />
        <Row className="certificate-grid">
          {certificates.map((cert, index) => (
            <Col sm={12} md={6} lg={4} key={index} className="certificate-col">
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="certificate-card">
                <h2 className="certificate-card-title">{cert.title}</h2>
                <p className="certificate-card-text">
                  Issued by {cert.institution} ({cert.year})
                </p>
              </a>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

const styles = {
  lottieBackground: {
    position: 'absolute',
    top: '50px',
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,  // Ensure the Lottie background stays behind the content
    opacity: 1,  // You can adjust the opacity if you want it less prominent
  },
  content: {
    position: 'relative',
    zIndex: 1,  // Ensure the content is on top of the background
  },
};

export default Certificate;
