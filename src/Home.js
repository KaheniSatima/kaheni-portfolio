import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import homepageImage from './assets/IT.jpg'; 
import aiImage from './assets/ai.jpg';
import graphicImage from './assets/graphic.jpg';
import socialImage from './assets/social.jpg';
import backendImage from './assets/backend.jpg';
import seoImage from './assets/seo.jpg';
import digitalMarketingImage from './assets/digitalMarketing.jpg';


import Footer from './Footer';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="home-container">
        <div className="home-content">
          <img src={homepageImage} alt="Kaheni Peter" className="home-image" />
          <h1 className="home-title">Hello, I am <strong>Kaheni Peter</strong></h1>
          <h2 className="home-subtitle">Software Engineer | Data Scientist | Digital Creator</h2>
          <p className="home-tagline">
            High level experience in building intelligent solutions, designing impactful experiences, and turning ideas into reality.
          </p>
          <Link to="/projects">
            <button className="home-btn">View Projects</button>
          </Link>
        </div>
      </div>

      <hr style={{ border: '4px solid red', margin: '2rem 0' }} />


<section className="what-i-do-section">
  <h2 className="section-title">What I Do</h2>
  <p className="section-intro">
    These are the key areas where I apply my skills to deliver value and innovative solutions.
  </p>
  <div className="skills-grid">
    <div className="skill-card">
      <img src={backendImage} alt="Software Development" className="skill-image" />
      <h3>Software Development</h3>
      <p>Designing and developing high-quality software solutions that solve real-world problems, drive business growth, and deliver efficiency, scalability, and long-term value.</p>
    </div>

    <div className="skill-card">
      <img src={aiImage} alt="AI/ML Specialist" className="skill-image" />
      <h3>AI/ML Specialist</h3>
      <p>Developing AI and machine learning solutions that transform data into actionable insights, automate complex processes, and drive smarter business decisions.</p>
    </div>

    <div className="skill-card">
      <img src={seoImage} alt="Web Design & Development" className="skill-image" />
      <h3>Web Design & Development</h3>
      <p>Designing and developing responsive, high-performing websites that blend modern aesthetics with seamless functionality to deliver exceptional user experiences and measurable business results.</p>
    </div>

    <div className="skill-card">
      <img src={graphicImage} alt="Graphic Design" className="skill-image" />
      <h3>Graphic Design</h3>
      <p>Creating impactful visuals and branding materials that capture attention, strengthen brand identity, and communicate ideas with creativity and precision.</p>
    </div>

    <div className="skill-card">
      <img src={socialImage} alt="Social Media Management" className="skill-image" />
      <h3>Social Media Management</h3>
      <p>Strategically managing and growing social media presence by creating engaging content, boosting audience interaction, and driving measurable brand growth.</p>
    </div>

    <div className="skill-card">
      <img src={digitalMarketingImage} alt="Digital Marketing" className="skill-image" />
      <h3>Digital Marketing</h3>
      <p>Planning and executing data-driven digital marketing campaigns through SEO, Google Ads, email, and content marketing to maximize visibility, conversions, and ROI.</p>
    </div>
  </div>
</section>


<hr style={{ border: '4px solid red', margin: '2rem 0' }} />

      <section className="contact-section">
  <h2 className="section-title">Let’s Connect</h2>
  <p className="section-intro">
    I’d love to hear from you! Whether you’re interested in my services, hiring me, 
    collaborating on exciting projects, or simply saying hello — feel free to reach out. 
    Let’s build something impactful together.
  </p>

  <a
    href="https://wa.me/254799090598"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-button"
  >
    💬 Contact Me on WhatsApp
  </a>
</section>


      

      <Footer />
    </>
  );
};

export default Home;
