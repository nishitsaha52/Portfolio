import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgress, Chip, Card, CardContent, Typography, Container, Button } from '@mui/material';
import { green, amber, indigo, red, blue, deepOrange, orange, purple, teal } from '@mui/material/colors';
import { FaGithub, FaCircle } from 'react-icons/fa';
import { BsStar } from 'react-icons/bs';
import { AiOutlineEye, AiOutlineFork } from 'react-icons/ai';
import Lottie from "lottie-react";
import projectBackgroundAnimation from "../../Assets/Animation.json"; // Lottie background JSON
import { fetchRepositories } from '../../store/repositoriesSlice';
import ToolStack from './Toolstack';
import UserStats from './UserStats';
import Github from './Github';
import Techstack from "./Techstack";
import '../../styles/Project.css';

const Project = () => {
  const dispatch = useDispatch();
  const ui = useSelector((state) => state.ui);
  const { repositories, message } = useSelector((state) => state.repositories);

  useEffect(() => {
    dispatch(fetchRepositories());
  }, [dispatch]);

  return (
    <div className="project-section">
      <Container className="repo-section">
        {/* First Lottie instance */}
        <Lottie 
          animationData={projectBackgroundAnimation} 
          loop={true} 
          autoplay={true} 
          style={styles.lottieBackgroundTop} 
        />
        {/* Second Lottie instance */}
        <Lottie 
          animationData={projectBackgroundAnimation} 
          loop={true} 
          autoplay={true} 
          style={styles.lottieBackgroundMiddle} 
        />
        {/* Last Lottie instance */}
        <Lottie 
          animationData={projectBackgroundAnimation} 
          loop={true} 
          autoplay={true} 
          style={styles.lottieBackgroundBottom} 
        />
        <div style={styles.content}>
          {message && (
            <div className="loading-container">
              <Typography variant="h4">{message}</Typography>
              <CircularProgress color="success" />
            </div>
          )}
          
          <h1 className="project-heading">
            My <strong className="purple">Projects </strong>
          </h1>
          <hr className="divider" /> {/* Horizontal line added here */}
          <div className="cards-container">
            {repositories && repositories.map((repo) => (
              <Card
                key={repo.id}
                className={`repo-card ${ui.theme}`}
              >
                <CardContent>
                  <div className="repo-header">
                    <Typography variant="h5" gutterBottom>{repo.name}</Typography>
                    <Chip
                      label={repo.visibility}
                      className="repo-chip"
                    />
                  </div>
                  <Typography variant="body2" className="repo-description">
                    {repo.description}
                  </Typography>
                  <div className="repo-stats">
                    <Typography variant="caption">
                      <FaCircle
                        className="language-icon"
                        style={{
                          color: 
                            repo.language === 'JavaScript' ? amber[500] :
                            repo.language === 'TypeScript' ? indigo[500] :
                            repo.language === 'Python' ? green[500] :
                            repo.language === 'Ruby' ? red[500] :
                            repo.language === 'Java' ? deepOrange[500] :
                            repo.language === 'C++' ? blue[500] :
                            repo.language === 'C#' ? purple[500] :
                            repo.language === 'HTML' ? orange[500] :
                            repo.language === 'CSS' ? blue[700] :
                            repo.language === 'PHP' ? indigo[700] :
                            repo.language === 'Vue' ? green[700] :
                            repo.language === 'Go' ? teal[500] :
                            repo.language === 'Swift' ? red[600] :
                            repo.language === 'Kotlin' ? purple[600] :
                            'gray'
                        }}
                      /> {repo.language}
                    </Typography>
                    <Typography variant="caption"><BsStar /> Stars: {repo.stars}</Typography>
                    <Typography variant="caption"><AiOutlineFork /> Forks: {repo.forks}</Typography>
                    <Typography variant="caption"><AiOutlineEye /> Watchers: {repo.watchers}</Typography>
                  </div>
                  <Button
                    href={repo.url}
                    target="_blank"
                    variant="outlined"
                    endIcon={<FaGithub />}
                    sx={{
                      marginTop: '15px',
                      fontWeight: 'bold',
                      fontSize: '16px',
                      border: '2px solid #ffd700',
                      borderRadius:'25px',
                      color: '#ffd700', // Button text color
                      borderColor: '#ffd700', // Button border color
                      transition: 'color 0.3s ease, background-color 0.3s ease', // Smooth transition
                      '&:hover': {
                        color: '#282c34', // Hover text color
                        backgroundColor: '#ffd700', // Hover background color
                        borderColor: '#ffd700', // Hover border color
                      },
                    }}
                  >
                    View on Github
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
      <UserStats/>
      <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
      </h1>
      <Techstack/>
      <h1 className="project-heading">
          <strong className="purple">Tools</strong> I Used
      </h1>
      <ToolStack/>
      <Github/>
    </div>
  );
};

const styles = {
  lottieBackgroundTop: {
    position: 'absolute',
    top: '75px', // Start at the top of the viewport
    left: 0,
    width: '100%',
    height: '100vh', // Full viewport height for top animation
    zIndex: -1,
    opacity: 2,
  },
  lottieBackgroundMiddle: {
    position: 'absolute',
    top: '125vh', // Positioned directly below the first Lottie instance
    left: 0,
    width: '100%',
    height: '100vh', // Full viewport height for middle animation
    zIndex: -1,
    opacity: 2,
  },
  lottieBackgroundBottom: {
    position: 'absolute',
    top: '250vh', // Positioned directly below the middle Lottie instance
    left: 0,
    width: '100%',
    height: '100vh', // Full viewport height for bottom animation
    zIndex: -1,
    opacity: 2,
  },
  content: {
    position: 'relative',
    zIndex: 1,  // Ensure the content is on top of the background
  },
};

export default Project;
