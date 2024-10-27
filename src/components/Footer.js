import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AiFillInstagram,
  AiOutlineFacebook,
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineDribbble,
} from "react-icons/ai";
import '../styles/Footer.css';

function Footer() {

  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col className="footer-logo">
          <h2>Nishit Saha</h2>
        </Col>
      </Row>
      <Row>
        <Col className="footer-nav">
          <ul className="footer-links">
            {/* Internal links using react-router-dom Link */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/project">Projects</Link></li>
            <li><Link to="/Certificate">Certificates</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col className="footer-social">
          <p>Stay in touch</p>
          <ul className="footer-social-icons">
            {/* External social media links */}
            <li><a href="https://www.instagram.com/nishitsaha?igsh=MzNteDM3MmRocjRq" className="instagram" target="_blank" rel="noopener noreferrer"><AiFillInstagram /></a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100007266315713&mibextid=ZbWKwL" className="facebook" target="_blank" rel="noopener noreferrer"><AiOutlineFacebook /></a></li>
            <li><a href="https://www.linkedin.com/in/nishit-saha-8208151b9" className="twitter" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a></li>
            <li><a href="https://github.com/nishitsaha52" className="github" target="_blank" rel="noopener noreferrer"><AiOutlineGithub /></a></li>
            <li><a href="https://nishitphotoportfolio.netlify.app/" className="website" target="_blank" rel="noopener noreferrer"><AiOutlineDribbble /></a></li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col className="footer-copywright">
          <p>Copyright© {year} NS. All Rights Reserved.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
