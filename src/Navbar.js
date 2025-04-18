import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Make sure to create a Navbar.css file and import it

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                <li className="nav-item"><Link to="/projects" className="nav-link">Projects</Link></li>
                <li className="nav-item"><Link to="/skills" className="nav-link">Skills</Link></li>
                <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
