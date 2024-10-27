import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Lottie from "lottie-react";
import homeAnimation from "../../Assets/homeAnimation.json"; // Assuming you have a Lottie animation JSON file
import Particle from "../Particle";
import Type from "./Type";
import About from "../About/About";
import '../../styles/Home.css';

function Home() {
  const [storedName, setStoredName] = useState('');

  // Retrieve the stored name when the component mounts
  useEffect(() => {
    const name = sessionStorage.getItem('name');
    if (name) {
      setStoredName(name);
    }
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi {storedName ? `, ${storedName}` : ''}!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> NISHIT RANJAN SAHA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              {/* Lottie animation in place of the GIF */}
              <Lottie 
                animationData={homeAnimation} 
                loop={true} 
                autoplay={true} 
                style={{ maxHeight: "450px" }} // Similar height to your previous GIF
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
}

export default Home;
