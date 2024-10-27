import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo3 from "../Assets/logo3.png";
import { Link } from "react-router-dom";
import { FcCommandLine, FcAbout, FcHome } from "react-icons/fc";
import ThemeToggle from "../Themes/ThemeToggle";
import '../styles/Navbar.css';

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container className="d-flex justify-content-between">
        {/* Logo on the Left */}
        <Navbar.Brand className="d-flex align-items-center">
          <img src={logo3} className="img-fluid logo" alt="brand"/>
        </Navbar.Brand>
        
        {/* Centered Menu Items */}
        <Nav className="mx-auto menu-items">
        <Nav.Item>
            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
              <FcHome style={{ marginBottom: "2px" }} /> Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
              <FcAbout style={{ marginBottom: "2px" }} /> About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
              <FcCommandLine style={{ marginBottom: "2px" }} /> Projects
            </Nav.Link>
          </Nav.Item>
        </Nav>
        
        {/* Slider and Toggle Button on the Right */}
        <div className="d-flex align-items-center">
          <ThemeToggle />
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
