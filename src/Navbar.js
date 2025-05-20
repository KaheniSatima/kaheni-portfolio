import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './assets/kaheni.jpg'; // Adjust path based on your file location

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <h1 className="navbar-title">KAHENI PETER</h1>
      </div>

      <div className="navbar-toggle" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>

      <ul className={`nav-list ${menuOpen ? 'active' : ''}`}>
        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
        <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
        <li className="nav-item"><Link to="/projects" className="nav-link">Projects</Link></li>
        <li className="nav-item"><Link to="/skills" className="nav-link">Skills</Link></li>

        {/* Contact + Social Icons Grouped */}
        <li className="nav-item contact-group">
          <Link to="/contact" className="nav-link">Contact</Link>
          <div className="nav-icons">
            <a href="https://www.linkedin.com/in/kaheni-peter-8b40032a8" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/KaheniSatima" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://wa.me/254799090598" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://www.facebook.com/kahenisatima" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
