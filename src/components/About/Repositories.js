import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import '../../styles/Repositories.css';

function Repositories() {
  const [repos, setRepos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch selected repositories from GitHub
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/nishitsaha52/repos");
        const data = await response.json();

        // Select specific repositories by name or other criteria
        const selectedRepos = data.filter(repo => 
          repo.name === "Photo-Portfolio" || 
          repo.name === "AI-Chatbot" || 
          repo.name === "CommuteX"
        );

        setRepos(selectedRepos);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepos();
  }, []);

  const handleExploreClick = () => {
    navigate("/project"); // Redirect to the Projects page
  };

  return (
    <div className="repo-section">
    <Container>
    <h1 className="project-heading">
          Some Best <strong className="purple">|Project </strong>
        </h1>
        <Row>
        {repos.map((repo) => (
          <Col md={4} key={repo.id} className="repo">
            <div className="about-repo-card">
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <Button 
                variant="primary" 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Read More
              </Button>
            </div>
          </Col>
        ))}
      </Row>
      <Button className="more-btn" onClick={handleExploreClick}>
        Explore
      </Button>
    </Container>
    </div>
  );
}

export default Repositories;
