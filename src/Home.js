import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import homepageImage from './assets/IT.jpg'; 
import frontendImage from './assets/frontend.jpg';
import aiImage from './assets/ai.jpg';
import dataImage from './assets/data.jpg';
import uiuxImage from './assets/uiux.jpg';
import graphicImage from './assets/graphic.jpg';
import socialImage from './assets/social.jpg';
import backendImage from './assets/backend.jpg';
import seoImage from './assets/seo.jpg';
import digitalMarketingImage from './assets/digitalMarketing.jpg';


import prizeImage from './assets/prize.jpg';
import kcseImage from './assets/kcse.jpg';
import recommendationImage from './assets/letter.jpg';
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

      {/* What I Do Section */}
      <section className="what-i-do-section">
        <h2 className="section-title">What I Do</h2>
        <p className="section-intro">
          These are the key areas where I apply my skills to deliver value and innovative solutions.
        </p>
        <div className="skills-grid">
          <div className="skill-card">
            <img src={frontendImage} alt="Frontend Development" className="skill-image" />
            <h3>Frontend Development</h3>
            <p>Building responsive, modern, and interactive web interfaces using React, HTML, CSS, and JavaScript.</p>
          </div>
          <div className="skill-card">
  <img src={backendImage} alt="Backend Development" className="skill-image" />
  <h3>Backend Development</h3>
  <p>Building robust server-side applications using Python, Flask, and Django RestAPI to handle data and business logic efficiently.</p>
</div>
          <div className="skill-card">
            <img src={aiImage} alt="AI/ML" className="skill-image" />
            <h3>AI/ML</h3>
            <p>Creating intelligent models that solve real-world problems and provide actionable insights.</p>
          </div>
          <div className="skill-card">
            <img src={dataImage} alt="Data Science & Analytics" className="skill-image" />
            <h3>Data Science & Analytics</h3>
            <p>Analyzing complex data to discover trends, forecast outcomes, and support strategic decisions.</p>
          </div>
          <div className="skill-card">
            <img src={uiuxImage} alt="UI/UX Design" className="skill-image" />
            <h3>UI/UX Design</h3>
            <p>Designing intuitive and visually appealing user interfaces to enhance user experience.</p>
          </div>
          <div className="skill-card">
            <img src={graphicImage} alt="Graphic Design" className="skill-image" />
            <h3>Graphic Design</h3>
            <p>Creating compelling visuals and graphics to communicate messages effectively and creatively.</p>
          </div>
          <div className="skill-card">
            <img src={socialImage} alt="Social Media Management" className="skill-image" />
            <h3>Social Media Management</h3>
            <p>Planning, creating, and managing content to grow engagement and brand presence online.</p>
          </div>
          

<div className="skill-card">
  <img src={seoImage} alt="Search Engine Optimization" className="skill-image" />
  <h3>Search Engine Optimization (SEO)</h3>
  <p>Improving website visibility and ranking on search engines through keyword research, on-page SEO, backlinking, and analytics.</p>
</div>

<div className="skill-card">
  <img src={digitalMarketingImage} alt="Digital Marketing" className="skill-image" />
  <h3>Digital Marketing</h3>
  <p>Planning and executing online marketing campaigns using Google Ads, email marketing, content marketing, and analytics for optimized results.</p>
</div>

        </div>
      </section>

      <hr style={{ border: '4px solid red', margin: '2rem 0' }} />

      {/* Achievements Section */}
      <section className="achievements-section">
        <h2 className="section-title">My Achievements & Recognition</h2>
        <p className="section-intro">A few milestones that reflect my academic and personal journey.</p>
        <div className="image-grid">
          <div className="image-card">
            <img src={recommendationImage} alt="University Recommendation" />
            <h3>University Recommendation</h3>
            <p>A recommendation letter from my university showcasing my skills and integrity.</p>
          </div>
          <div className="image-card">
            <img src={prizeImage} alt="Prize Award" />
            <h3>Prize Giving Award</h3>
            <p>Received in recognition of outstanding academic excellence and leadership.</p>
          </div>
          <div className="image-card">
            <img src={kcseImage} alt="KCSE Certificate" />
            <h3>KCSE Certificate</h3>
            <p>My official Kenya Certificate of Secondary Education results.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
