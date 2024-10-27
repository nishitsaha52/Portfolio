import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PiCertificateDuotone } from "react-icons/pi";
import { FcViewDetails, FcContacts } from "react-icons/fc";
import "../styles/SideNav.css"; // Ensure this path is correct

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </div>
      <ul className="nav-items">
        <li>
          <Link to="/certificate">
            <PiCertificateDuotone />
            {isOpen && <span>Certificates</span>}
          </Link>
        </li>
        <li>
          <Link to="/resume">
            <FcViewDetails />
            {isOpen && <span>Resume</span>}
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <FcContacts />
            {isOpen && <span>Contact</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
