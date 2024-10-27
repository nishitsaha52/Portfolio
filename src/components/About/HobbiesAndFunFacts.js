// src/components/About/HobbiesAndFunFacts.js
import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "../../styles/HobbiesAndFunFacts.css";

function HobbiesAndFunFacts() {
  return (
    <div className="hobbies-and-fun-facts">
    <Row className="mt-4">
      {/* Hobbies Section */}
      <Col md={6} className="home-about-hobbies">
        <Card className="hobbies-fun-facts-card">
          <Card.Body>
            <h2 className="purple">Hobbies & Interests</h2>
            <p>Beyond coding, I enjoy:</p>
            <ul>
              <li>📷 Photography</li>
              <li>📖 Reading</li>
              <li>🏞️ Hiking</li>
              <li>🎸 Playing guitar</li>
              
              <li>🎮 Playing Games</li>
              <li>🏞️ Hiking</li>
              <li>🌍 Traveling & Exploring New Places</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>

      {/* Fun Facts Section */}
      <Col md={6} className="fun-facts">
        <Card className="hobbies-fun-facts-card">
          <Card.Body>
            <h2 className="purple">Fun Facts</h2>
            <p>Some fun facts about me:</p>
            <ul>
              <li>Favourite Language: JavaScript ⚛️</li>
              <li>Most Proud of: AI Chatbot Project 🤖</li>
              <li>Most Challenging Project: Web Development Project 🚀</li>
              <li>Most Fun Project: Machine Learning Project 🤓</li>
              <li>Working Style: Late Coffee and Night Coding ☕💻</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </div>
  );
}

export default HobbiesAndFunFacts;
