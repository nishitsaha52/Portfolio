import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Lottie from "lottie-react";
import backgroundAnimation from "../../Assets/backgroundAnimation.json"; // Your Lottie background JSON
import "../../styles/Certificate.css";

const certificates = [
  {
    title: "Java Programming Fundamentals",
    institution: "Infosys Springboard",
    year: "2024",
    link: "https://drive.google.com/file/d/10y-ZNVCFqC3pHISPvcm8lM5v_LUUwOZv/view", // Replace with actual certificate URL
  },
  {
    title: "Accenture Innovation Challenge 2023",
    institution: "Unstop",
    year: "2023",
    link: "https://unstop.com/certificate-preview/f0fa244e-6863-4dc2-b362-bc53071eec71", // Replace with actual certificate URL
  },
  {
    title: "Tata Imagination Challenge 2023",
    institution: "Unstop",
    year: "2023",
    link: "https://unstop.com/certificate-preview/390bc869-251a-4704-8224-463325f16f99", // Replace with actual certificate URL
  },
  {
    title: "EY Techathon 4.0",
    institution: "Unstop",
    year: "2023",
    link: "https://unstop.com/certificate-preview/1d55b727-c156-4739-acff-f2a0f4d6c265", // Replace with actual certificate URL
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    institution: "Microsoft",
    year: "2023",
    link: "https://learn.microsoft.com/en-us/users/nishitranjansaha-7394/credentials/25995804acb54aa5?ref=https%3A%2F%2Fwww.linkedin.com%2F", // Replace with actual certificate URL
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    institution: "Microsoft",
    year: "2023",
    link: "https://learn.microsoft.com/en-us/users/NISHITRANJANSAHA-7394/credentials/9A3207DC02DF8CE3?ref=https%3A%2F%2Fwww.linkedin.com%2F", // Replace with actual certificate URL
  },
  {
    title: "AWS Certified Security-Special",
    institution: "Infosys Springboard",
    year: "2023",
    link: "https://drive.google.com/file/d/1amsPUZm7vWGecxjBWeue9Du_MpFFagzU/view", // Replace with actual certificate URL
  },
  {
    title: "KPMG AU - Data Analytics Job Simulation",
    institution: "Forage",
    year: "2023",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/KPMG%20AU/m7W4GMqeT3bh9Nb2c_KPMG%20AU_2J8u6e2LF8ukqS9HQ_1676390013313_completion_certificate.pdf", // Replace with actual certificate URL
  },
  {
    title: "Cognizant - Artificial Intelligence Job Simulation",
    institution: "Forage",
    year: "2022",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Cognizant/5N2ygyhzMWjKQmgCK_Cognizant_2J8u6e2LF8ukqS9HQ_1670658839481_completion_certificate.pdf", // Replace with actual certificate URL
  },
  {
    title: "Deloitte Australia - Technology Job Simulation",
    institution: "Forage",
    year: "2022",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Deloitte%20Australia/YPWCiGNTkr6QxcpEu_Deloitte%20Australia_2J8u6e2LF8ukqS9HQ_1670585750889_completion_certificate.pdf", // Replace with actual certificate URL
  },
  {
    title: "Introduction to Machine Learning",
    institution: "Infosys Springboard",
    year: "2022",
    link: "https://drive.google.com/file/d/1emckYb0d7bRaBiEVnKJwfcqzjMG9CabT/view", // Replace with actual certificate URL
  },
  {
    title: "Mastercard - Cybersecurity Job Simulation",
    institution: "Forage",
    year: "2022",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/mastercard/vcKAB5yYAgvemepGQ_Mastercard_2J8u6e2LF8ukqS9HQ_1668327582779_completion_certificate.pdf", // Replace with actual certificate URL
  },
  {
    title: "Introduction to HTML5",
    institution: "University of Michigan",
    year: "2021",
    link: "https://www.coursera.org/account/accomplishments/verify/MTFNS2DT9YKQ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course", // Replace with actual certificate URL
  },
  {
    title: "Web Development",
    institution: "Nullclasses",
    year: "2024",
    link: "https://drive.google.com/file/d/12P0f2Rn2wJHbk2djKbvp2I9irvX7dBxG/view?usp=drive_link", // Replace with actual certificate URL
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
