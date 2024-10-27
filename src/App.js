import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Particle from "./components/Particle";
import SideNav from "./components/SideNav";
import Intro from "./components/Intro";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Certificate from "./components/Certificate/Certificate";
import Footer from "./components/Footer";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, setLoad] = useState(true);
  const [nameSubmitted, setNameSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleNameSubmit = () => {
    setNameSubmitted(true);
  };

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        {nameSubmitted ? (
          <>
            <Navbar />
            <Particle />
            <SideNav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/certificate" element={<Certificate />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
            <Footer />
          </>
        ) : (
          <Intro onNameSubmit={handleNameSubmit} />
        )}
      </div>
    </Router>
  );
}

export default App;
