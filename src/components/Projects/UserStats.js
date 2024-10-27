import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import "../../styles/UserStats.css";

function UserStats() {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);
  const username = "nishitsaha52";

  useEffect(() => {
    const fetchLanguages = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        const langData = {};
        response.data.forEach((repo) => {
          if (repo.language) {
            langData[repo.language] = (langData[repo.language] || 0) + 1;
          }
        });
        // Sort by usage and limit to top 3 languages
        const sortedLanguages = Object.entries(langData).sort((a, b) => b[1] - a[1]).slice(0, 3);
        setLanguages(sortedLanguages); // Only set top 3 languages
      } catch (error) {
        console.error("Error fetching language data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLanguages();
  }, [username]);

  // Calculate total repos for percentage
  const totalRepos = languages.reduce((acc, [, count]) => acc + count, 0);

  return (
    <Container fluid className="user-stats-section">
      <Row>
        {/* Language Stats */}
        <Col className={"col-span-full md:col-span-7 !p-0"}>
          <Card className="user-stats-card">
            <Card.Body>
              <Card.Title className="user-stats-card-title">Top 3 Languages</Card.Title>
              {loading ? (
                <Spinner animation="border" variant="primary" />
              ) : (
                <div className="language-bar-container">
                  {languages.map(([language, count]) => {
                    const percentage = ((count / totalRepos) * 100).toFixed(2);
                    return (
                      <div key={language} className="language-bar">
                        <span className="language-name">
                          {language}
                        </span>
                        <div className="language-percentage-container">
                          <div
                            className="language-percentage"
                            style={{ width: `${percentage}%` }}
                          />
                          <span className="percentage-label">{percentage}%</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>

        {/* GitHub Stats */}
        <Col className={"col-span-full md:col-span-5 !p-0"}>
          <Card className="user-stats-card">
            <Card.Body>
              <Card.Title className="user-stats-card-title">GitHub Stats</Card.Title>
              <img
                src={`https://github-readme-stats.vercel.app/api?username=nishitsaha52&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
                alt="GitHub Stats"
                className="stats-image"
              />
            </Card.Body>
          </Card>
        </Col>

        {/* Streak Stats */}
        <Col className={"col-span-full md:col-span-5 !p-0"}>
          <Card className="user-stats-card">
            <Card.Body>
              <Card.Title className="user-stats-card-title">Current Streak</Card.Title>
              <img
                src={`https://github-readme-streak-stats.herokuapp.com?user=${username}&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
                alt="GitHub Streak"
                className="streak-image"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default UserStats;
