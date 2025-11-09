"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "../styles/naviguation.css";

export default function Naviguation() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => setShowNav(!showNav);

  return (
    <div className="naviguation-container">
      <section className="naviguation">
      <h1>Mon Portfolio</h1>
        <FontAwesomeIcon 
          icon={faBars} 
          className="nav-icon" 
          onClick={toggleNav} 
          style={{cursor: "pointer"}}
        />
        {showNav && (
          <nav className="nav-links">
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </nav>
        )}
      </section>
    </div>
  );
}
