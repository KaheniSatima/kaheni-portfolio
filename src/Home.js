import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import homepageImage from './assets/kaheni.jpg'; // Image inside the container
import prizeImage from './assets/prize.jpg'; // Achievement images
import kcseImage from './assets/kcse.jpg';
import recommendationImage from './assets/letter.jpg';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <div className="home-background">
        <div className="home-container">
          <div className="home-content">
            {/* This image is inside the container */}
            <img src={homepageImage} alt="Profile" className="about-image" />

            <h1 className="home-title">Welcome to My Portfolio</h1>
            <p className="home-description">
              Hello! I'm <strong>Peter Kaheni</strong>, a passionate developer with a focus on AI, Machine Learning, and Data Science.
            </p>
            <p className="home-introduction">
              I specialize in building innovative solutions to complex problems using modern technologies and data-driven insights.
            </p>
            <p className="home-goal">
              My goal is to create impactful and efficient software that drives business success and contributes to technological advancement.
            </p>
            <Link to="/about">
              <button className="home-btn">Learn More About Me</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Thick Red Line */}
      <hr style={{ border: '4px solid red', margin: '2rem 0' }} />

      {/* Achievements Section */}
      <section className="achievements-section">
  <h2 className="section-title">My Achievements & Recognition</h2>
  <p className="section-intro">
    A few milestones that reflect my academic and personal journey.
  </p>

  
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
