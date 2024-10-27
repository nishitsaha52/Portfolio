import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiJava,
  DiCss3,
} from "react-icons/di";
import { 
  FaHtml5, 
  FaDatabase, 
  FaCloud, 
  FaAws 
} from 'react-icons/fa';
import { 
  SiMysql, 
  SiMongodb, 
  SiNextdotjs, 
  SiMicrosoftazure,  
} from 'react-icons/si';
import Lottie from "lottie-react";
import animationData from "../../Assets/Animation1.json"; // Replace with the actual path to your animation file

function Techstack() {
  const techIconStyle = {
    textAlign: "center",
    margin: "5px 0",
    fontSize: "1em",
    color: "#ffd700",
  };

  const techNameStyle = {
    fontSize: "0.5em",
    marginTop: "3px",
    color: "#ffd700",
  };

  const containerStyle = {
    position: "relative",
    justifyContent: "center",
    paddingBottom: "30px",
    overflow: "hidden", // Hide overflow to keep animation within bounds
  };

  const lottieStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1, // Ensure it stays behind the tech icons
    opacity: 1, // Adjust opacity for a subtle effect
  };

  return (
    <div style={containerStyle}>
      {/* Lottie Animation as Background */}
      <Lottie animationData={animationData} style={lottieStyle} loop={true} />
      
      {/* First Row - 5 items */}
      <Row className="justify-content-center">
        <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
          <CgCPlusPlus />
          <p style={techNameStyle}>C++</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
          <DiJavascript1 />
          <p style={techNameStyle}>JavaScript</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
          <FaHtml5 />
          <p style={techNameStyle}>HTML</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
          <DiCss3 />
          <p style={techNameStyle}>CSS</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
          <DiJava />
          <p style={techNameStyle}>Java</p>
        </Col>
      </Row>

      {/* Second Row - 4 items */}
      <Row className="justify-content-center">
        <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
          <DiPython />
          <p style={techNameStyle}>Python</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
          <DiNodejs />
          <p style={techNameStyle}>Node.js</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
          <DiReact />
          <p style={techNameStyle}>React.js</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
          <SiNextdotjs />
          <p style={techNameStyle}>Next.js</p>
        </Col>
      </Row>

      {/* Third Row - 3 items */}
      <Row className="justify-content-center">
        <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
          <FaDatabase />
          <p style={techNameStyle}>SQL</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
          <SiMysql />
          <p style={techNameStyle}>MySQL</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
          <SiMongodb />
          <p style={techNameStyle}>MongoDB</p>
        </Col>
      </Row>

      {/* Fourth Row - 2 items */}
      <Row className="justify-content-center">
        <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
          <FaCloud />
          <p style={techNameStyle}>Cloud</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
          <FaAws />
          <p style={techNameStyle}>AWS</p>
        </Col>
      </Row>

      {/* Fifth Row - 1 item */}
      <Row className="justify-content-center">
        <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
          <SiMicrosoftazure />
          <p style={techNameStyle}>MS Azure</p>
        </Col>
      </Row>
    </div>
  );
}

export default Techstack;
