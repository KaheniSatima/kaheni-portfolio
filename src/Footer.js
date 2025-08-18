import React from 'react';
import './Footer.css';
import kaheniImage from './assets/IT.jpg';


const Footer = () => {
  return (
    <>
      {/* Top border line */}
      <div className="footer-top-line"></div>

      <footer className="footer">
        <div className="footer-content-grid">
          
          {/* Left: Image + Name */}
          <div className="footer-brand">
            <img src={kaheniImage} alt="Kaheni Peter" className="footer-logo" />
            <h3>KAHENI PETER</h3>
          </div>

          {/* MY VISION */}
          <div className="footer-vision">
            <h4>MY VISION</h4>
            <p>To leverage technology and creativity to deliver innovative digital solutions that inspire, empower, and create a positive impact in the world.</p>
          </div>

          {/* CONTACT ME */}
          <div className="footer-contact">
            <h4>CONTACT ME</h4>
            <p><i className="fas fa-phone-alt"></i> +254 799 090 598</p>
            <p><i className="fas fa-envelope"></i> pk2532625@gmail.com</p>
            <p><i className="fas fa-map-marker-alt"></i> Nairobi, Kenya</p>
          </div>

          {/* Connect With Me */}
          <div className="footer-social">
            <h4>CONNECT WITH ME</h4>
            <div className="social-icons">
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
          </div>
        </div>

        {/* Bottom line */}
        <div className="footer-bottom">
          <p>© 2025 | <strong>KAHENI PETER</strong> | All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
