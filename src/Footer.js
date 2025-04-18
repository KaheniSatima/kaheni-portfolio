import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <a href="/RESUME.pdf" download target="_blank" rel="noopener noreferrer">
        Download Resume
      </a>
        <div className="social-icons">
        <a 
            href="https://www.linkedin.com/in/kaheni-peter-8b40032a8" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a href="https://github.com/KaheniSatima" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:pk2532625@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://wa.me/254799090598" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://www.facebook.com/Kaheni Satima" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
        </div>

        <div className="contact-info">
          <p>Phone: +254 799 090 598</p>
          <p>Email: pk2532625@gmail.com</p>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Peter Kaheni. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
