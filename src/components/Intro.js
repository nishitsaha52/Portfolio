import React, { useState, useEffect } from 'react';
import Lottie from "lottie-react";
import welcomeAnimation from '../Assets/welcomeAnimation.json'; // Assuming you have this JSON animation

function Intro({ onNameSubmit }) {
  const [name, setName] = useState('');
  const [savedName, setSavedName] = useState('');

  useEffect(() => {
    const storedName = sessionStorage.getItem('name');
    if (storedName) {
      setSavedName(storedName);
      onNameSubmit(); // If name already exists, skip intro
    }
  }, [onNameSubmit]);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (name) {
      sessionStorage.setItem('name', name);
      setSavedName(name);
      onNameSubmit(); // Notify App that name has been submitted
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div style={styles.container}>
      {/* Lottie animation as background */}
      <Lottie 
        animationData={welcomeAnimation} 
        loop={true} 
        autoplay={true} 
        style={styles.background} 
      />

      {/* Content layered on top */}
      <div style={styles.content}>
        <h1 style={styles.title}>Nishit Saha Welcomes You</h1>
        {savedName ? (
          <h2 style={styles.welcome}>
            Welcome back, <span style={styles.highlight}>{savedName}</span>!
          </h2>
        ) : (
          <form onSubmit={handleNameSubmit} style={styles.form}>
            <label style={styles.label}>
              Enter your name:
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                style={styles.input}
                placeholder="Your Name"
              />
            </label>
            <button
              type="submit"
              style={styles.button}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#ffd700';
                e.target.style.color = '#700c86';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#700c86';
                e.target.style.color = 'white';
              }}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    height: '100vh', // Full viewport height
    width: '100vw',  // Full viewport width
    overflow: 'hidden',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: -1, // Ensure it stays in the background
  },
  content: {
    position: 'absolute',
    top: '50%',   // Center vertically
    left: '50%',  // Center horizontally
    transform: 'translate(-50%, -50%)',  // Actual centering using transform
    textAlign: 'center',
    zIndex: 1,  // Ensure content is on top of background
    color: 'white',
    padding: '20px',
    maxWidth: '90%', // Prevent overflow on smaller screens
  },
  title: {
    fontSize: '36px',
    color: '#ffffff', // White text for contrast
    fontWeight: 'bold',
  },
  welcome: {
    fontSize: '24px',
    color: '#ffffff', // White text for contrast
    marginTop: '20px',
  },
  highlight: {
    color: '#ffd700',
    fontWeight: 'bold',
  },
  form: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column', // Stack elements on smaller screens
    alignItems: 'center',
  },
  label: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '10px', // Add space between label and input
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '2px solid #ffffff',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Slightly transparent background for the input
    color: '#ffffff', // White text inside input
    outline: 'none',
    marginBottom: '10px', // Space between input and button
    width: '80%', // Reduce width on smaller screens
    maxWidth: '300px', // Prevent it from being too wide
  },
  button: {
    padding: '8px 15px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '20px',
    backgroundColor: '#700c86',
    color: 'white',
    border: 'none',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  },
  '@media (max-width: 768px)': {
    title: {
      fontSize: '28px',
    },
    welcome: {
      fontSize: '20px',
    },
    button: {
      padding: '6px 12px',
      fontSize: '14px',
    },
  },
  '@media (max-width: 480px)': {
    title: {
      fontSize: '24px',
    },
    welcome: {
      fontSize: '18px',
    },
    button: {
      padding: '5px 10px',
      fontSize: '12px',
    },
    input: {
      width: '90%',
    },
  }
};

export default Intro;
