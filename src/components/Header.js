import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <h2>MSR</h2>
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
            <li><a href="#education" onClick={() => setIsMenuOpen(false)}>Education</a></li>
            <li><a href="#research" onClick={() => setIsMenuOpen(false)}>Research</a></li>
            <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
            <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;