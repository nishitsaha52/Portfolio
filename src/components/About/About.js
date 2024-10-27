import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Education from "./Education";
import Experience from "./Experience";
import Repositories from "./Repositories";
import CTAButton from "./Button";
import HobbiesAndFunFacts from "./HobbiesAndFunFacts"; // Import the new component
import "../../styles/About.css";
import "../../styles/Home.css";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.jpg";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am <i><b className="purple">Nishit Ranjan Saha</b></i> deeply
              passionate about programming and have dedicated myself to
              mastering various languages and technologies.
              <br />
              <br />I am fluent in classics like
              <i><b className="purple"> C++, Python, Java and Javascript.</b></i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products</b> and
                also in areas related to <b className="purple">IT-sectors.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing
              products with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        {/* Hobbies and Fun Facts Component */}
        <HobbiesAndFunFacts />

        <Education />
        <Experience />
        <Repositories />
        <CTAButton />

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/nishit52"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100007266315713&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nishit-saha-8208151b9"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/nishitsaha?igsh=MzNteDM3MmRocjRq"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
