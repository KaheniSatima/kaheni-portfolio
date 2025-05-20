import React from 'react';
import './About.css';
import softSkillsImage from './assets/letter.jpg';
import Footer from './Footer';

const About = () => {
  return (
    <>
      <h2 className="about-title">About Me</h2>

      <p className="about-description" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
        Hello! I'm <strong>Peter Kaheni</strong>, a Computer Science undergraduate (awaiting graduation in September) from <strong>Karatina University</strong>.
        I am a diligent individual, consistently demonstrating a strong sense of <strong>responsibility</strong>, the ability to <strong>work independently</strong>, and a commitment to effective <strong>teamwork</strong>.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '2rem 1rem', gap: '2rem' }}>
        <div style={{ flex: '1 1 400px' }}>
          <div style={{ fontSize: '2rem', color: '#fb0c0c', textAlign: 'center' }}>
            <i className="fas fa-lightbulb"></i>
          </div>
          <h3 style={{ textAlign: 'center' }}>Passions & Interests</h3>
          <p className="about-description">
            I stay updated on tech trends, especially AI, and enjoy side projects. I solve real-world problems through technology and participate in hackathons and open-source work.
            Outside tech, I’m interested in creative design, personal growth, and digital content creation, committed to continuous learning.
          </p>
        </div>

        <div style={{ flex: '1 1 400px' }}>
          <div style={{ fontSize: '2rem', color: '#fb0c0c', textAlign: 'center' }}>
            <i className="fas fa-bullseye"></i>
          </div>
          <h3 style={{ textAlign: 'center' }}>Goals & Vision</h3>
          <p className="about-description">
            I leverage technology to build impactful solutions that drive innovation in society.
            I strive to develop intelligent systems that improve decision-making and accessibility, and to grow as a technology leader who mentors and contributes to positive global change.
          </p>
        </div>
      </div>

<hr className="section-divider" />

<section className="soft-skills-section">
  <h2 className="about-title">Soft Skills</h2>
  <div className="soft-skills-container">
    
    {/* Left Column */}
    <div className="skills-column">
      <div className="skill-item">
        <i className="fas fa-brain skill-icon"></i>
        <div>
          <h4>Problem Solving</h4>
          <p>Approach challenges with analytical thinking to find innovative and practical solutions.</p>
        </div>
      </div>

      <div className="skill-item">
        <i className="fas fa-users skill-icon"></i>
        <div>
          <h4>Team Collaboration</h4>
          <p>Work effectively in team environments, contributing ideas and supporting colleagues.</p>
        </div>
      </div>

      <div className="skill-item">
        <i className="fas fa-clock skill-icon"></i>
        <div>
          <h4>Time Management</h4>
          <p>Organize tasks and meet deadlines efficiently in fast-paced environments.</p>
        </div>
      </div>

      <div className="skill-item">
        <i className="fas fa-sync-alt skill-icon"></i>
        <div>
          <h4>Adaptability</h4>
          <p>Adjust to new challenges and environments with a positive attitude.</p>
        </div>
      </div>
    </div>

    {/* Center Image */}
    <div className="skills-image">
      <img src={softSkillsImage} alt="Soft Skills Illustration" />

    </div>

    {/* Right Column */}
    <div className="skills-column">
      <div className="skill-item">
        <i className="fas fa-lightbulb skill-icon"></i>
        <div>
          <h4>Critical Thinking</h4>
          <p>Evaluate information objectively and make reasoned judgments and decisions.</p>
        </div>
      </div>

      <div className="skill-item">
        <i className="fas fa-chess-king skill-icon"></i>
        <div>
          <h4>Leadership & Mentorship</h4>
          <p>Guide teams and mentor peers to achieve shared goals and personal growth.</p>
        </div>
      </div>

      <div className="skill-item">
        <i className="fas fa-comment skill-icon"></i>
        <div>
          <h4>Communication Skills</h4>
          <p>Convey ideas clearly through verbal, written, and visual communication.</p>
        </div>
      </div>

      <div className="skill-item">
        <i className="fas fa-handshake skill-icon"></i>
        <div>
          <h4>Client Relationship Management</h4>
          <p>Build trust with clients through professional interaction and follow-through.</p>
        </div>
      </div>
    </div>

  </div>
</section>

      <Footer />
    </>
  );
};

export default About;
