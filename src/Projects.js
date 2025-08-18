import React from 'react';
import './Projects.css';
import Footer from './Footer';
import { FaLanguage, FaUserTie, FaLightbulb, FaBroom, FaHospital } from 'react-icons/fa'; // Icons
import companyPoster from "./assets/company-poster.jpg";
import healthPoster from "./assets/health-poster.jpg";
import churchPoster from "./assets/church-poster.jpg";
import companyLogo from "./assets/company-logo.png"; 

const Projects = () => {
  return (
    <>
      <section className="projects-section">
        <h1 className="main-heading">My Projects</h1>
        <h2 className="sub-heading">AI/ML Projects</h2>

        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <FaLanguage className="project-icon" />
            <h3>Universal Mini Translator</h3>
            <p>
              An AI-powered mini translator that supports multiple languages with 
              fast and accurate translations.
            </p>
            <a 
              href="https://huggingface.co/spaces/KaheniPeter/universal-mini-translator" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <FaUserTie className="project-icon" />
            <h3>HireLens</h3>
            <p>
              A smart AI tool that analyzes resumes and job descriptions to 
              match candidates with opportunities effectively.
            </p>
            <a 
              href="https://huggingface.co/spaces/KaheniPeter/hirelens" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <FaLightbulb className="project-icon" />
            <h3>AI Career Advisor</h3>
            <p>
              An AI-based career advisor that guides individuals in choosing 
              career paths based on their skills and interests.
            </p>
            <a 
              href="https://huggingface.co/spaces/KaheniPeter/ai-career-advisor" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        </div>
      </section>

<hr style={{ border: '4px solid red', margin: '2rem 0' }} />

{/* Web Design & Development Projects Section */}
      <section className="project-section">
  <h2 className="section-heading">Web Design & Development Projects</h2>
  <div className="project-grid two-columns">
    <div className="project-card">
      <FaBroom className="project-icon" />
      <h3>Telaco Cleaning Services Website</h3>
      <p>
        A modern and responsive website for Telaco Cleaning Services,
        designed for client engagement and service promotion.
      </p>
      <a
        href="https://kahenisatima.github.io/telaco-frontend/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>View on GitHub</button>
      </a>
    </div>

    <div className="project-card">
      <FaHospital className="project-icon" />
      <h3>Mwangaza Wellness & Medical Centre Website</h3>
      <p>
        A professional website for a wellness and medical centre, built to
        inform and serve patients with essential health content.
      </p>
      <a
        href="http://www.mwangazawellness.co.ke"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>View Project</button>
      </a>
    </div>
  </div>
</section>

<hr style={{ border: '4px solid red', margin: '2rem 0' }} />

<section className="graphic-section">
  <h2 className="section-heading">Graphic Design Services</h2>
  <div className="poster-grid">
    <div className="poster-card">
      <img src={companyPoster} alt="Company Poster" />
      <h3>Company Poster</h3>
    </div>
    <div className="poster-card">
      <img src={healthPoster} alt="Health Facility Poster" />
      <h3>Health Facility Poster</h3>
    </div>
    <div className="poster-card">
      <img src={churchPoster} alt="Church Poster" />
      <h3>Church Poster</h3>
    </div>
  </div>

  <div className="logo-section">
  <div className="logo-card">
    <img src={companyLogo} alt="Company Logo" className="company-logo" />
    <h3>Company Logo Design</h3>
  </div>
</div>

</section>


      {/* Full-width Footer */}
      <Footer />
    </>
  );
};

export default Projects;
