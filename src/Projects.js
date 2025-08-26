import React from 'react';
import './Projects.css';
import Footer from './Footer';
import { FaBroom, FaHospital } from 'react-icons/fa'; // Icons
import companyPoster from "./assets/company-poster.jpg";
import healthPoster from "./assets/health-poster.jpg";
import churchPoster from "./assets/church-poster.jpg";
import companyLogo from "./assets/company-logo.png"; 

const Projects = () => {
  return (
    <>
   <section id="aiml" className="aiml-section">
  <h1 className="main-title">My Projects</h1>

  <h2 className="section-title">
    <i className="fas fa-brain section-icon"></i> AI & ML Projects
  </h2>

  <div className="projects-row">
    {/* Universal Mini Translator */}
    <div className="project-card">
      <h3 className="project-title">Universal Mini Translator</h3>
      <p className="project-description">
        An AI-powered mini translator that supports multiple languages with fast and accurate translations.
      </p>
      <p className="project-subtitle"><strong> Tools & Tech Stack:</strong> Python, Transformers, Hugging Face, Gradio, Sentencepiece, Sacremoses, Accelerate, Langdetect, Torch</p>
      <div className="project-features">
        <strong>Key Features:</strong>
        <ul>
          <li>Supports multiple languages</li>
          <li>Fast and accurate translations</li>
          <li>User-friendly interface</li>
        </ul>
      </div>
      <p className="project-description">
         <strong>Problem Solved:</strong> Language barriers in communication across diverse audiences.
      </p>
      <a
    href="https://huggingface.co/spaces/KaheniPeter/universal-mini-translator"
    className="project-btn"
    target="_blank"
    rel="noopener noreferrer"
  >
     View Project
  </a>
</div>
    

    {/* HireLens */}
    <div className="project-card">
      <h3 className="project-title">HireLens</h3>
      <p className="project-description">
        A smart AI tool that analyzes resumes and job descriptions to match candidates with opportunities effectively.
      </p>
      <p className="project-subtitle"><strong> Tools & Tech Stack:</strong> Python, NLTK, Sentence-Transformers, Scikit-Learn, Gradio, Torch</p>
      <div className="project-features">
        <strong> Key Features:</strong>
        <ul>
          <li>Analyzes resumes & job descriptions</li>
          <li>Suggests candidate-job matches</li>
          <li>Improves recruitment efficiency</li>
        </ul>
      </div>
      <p className="project-description">
         <strong>Problem Solved:</strong> Difficulty in matching candidates with the right job opportunities.
      </p>
      <a
    href="https://huggingface.co/spaces/KaheniPeter/Hirelens"
    className="project-btn"
    target="_blank"
    rel="noopener noreferrer"
  >
     View Project
  </a>
    </div>

    {/* AI Career Advisor */}
    <div className="project-card">
      <h3 className="project-title">AI Career Advisor</h3>
      <p className="project-description">
        An AI-based career advisor that guides individuals in choosing career paths based on their skills and interests.
      </p>
      <p className="project-subtitle"><strong>Tools & Tech Stack:</strong> Python, Streamlit, Sentence-Transformers, Scikit-Learn, Torch</p>
      <div className="project-features">
        <strong> Key Features:</strong>
        <ul>
          <li>Analyzes skills & interests</li>
          <li>Recommends suitable career paths</li>
          <li>Provides personalized career guidance</li>
        </ul>
      </div>
      <p className="project-description">
         <strong>Problem Solved:</strong> Uncertainty in choosing suitable career paths for individuals.
      </p>
      <a
    href="https://huggingface.co/spaces/KaheniPeter/AI-Career-Advisor"
    className="project-btn"
    target="_blank"
    rel="noopener noreferrer"
  >
     View Project
  </a>
    </div>

    {/* Magnate AI Demo */}
<div className="project-card">
  <h3 className="project-title">Magnate AI Demo</h3>
  <p className="project-description">
    An AI-powered system that optimizes advertising campaigns and automates operational workflows by integrating Dynamic Creative Selection, AI-Driven Scheduling, and Automated OCR Processing.
  </p>
  <p className="project-subtitle">
    <strong>Tools & Tech Stack:</strong> Python, Streamlit, Pillow, Pytesseract, Python-dateutil, Opencv-python-headless
  </p>
  <div className="project-features">
    <strong>Key Features:</strong>
    <ul>
      <li>Dynamic Creative Selector to optimize ad engagement</li>
      <li>Greedy Scheduler for efficient campaign planning</li>
      <li>OCR Automation for extracting key information from invoices & purchase orders</li>
      <li>Modular design with scalable backend APIs</li>
    </ul>
  </div>
  <p className="project-description">
    <strong>Problem Solved:</strong> Reduces manual effort in ad management, improves campaign efficiency, and automates document processing to save time and reduce errors.
  </p>
  <a
    href="https://huggingface.co/spaces/KaheniPeter/Magnate-AI-Demo"
    className="project-btn"
    target="_blank"
    rel="noopener noreferrer"
  >
     View Project
  </a>
</div>


<div className="project-card">
  <h3 className="project-title">Predictive Analytics Dashboard</h3>
  <p className="project-description">
    An interactive dashboard that enables data visualization, trend exploration, and predictive modeling.
    Built with Streamlit and Docker, it provides real-time insights for better decision-making.
  </p>
  <p className="project-subtitle">
    <strong>Tools & Tech Stack:</strong> Python, Streamlit, Pandas, Scikit-learn, Altair, Plotly, Docker
  </p>
  <div className="project-features">
    <strong>Key Features:</strong>
    <ul>
      <li>Interactive data visualization with charts and graphs</li>
      <li>Predictive modeling using machine learning algorithms</li>
      <li>Trend forecasting with customizable filters</li>
      <li>Dockerized for seamless deployment on Hugging Face Spaces</li>
    </ul>
  </div>
  <p className="project-description">
    <strong>Problem Solved:</strong> Simplifies predictive analytics by combining data exploration,
    visualization, and machine learning into one easy-to-use tool for analysts and business decision-makers.
  </p>
  <a
    href="https://huggingface.co/spaces/KaheniPeter/predictive_analytics_dashboard"
    className="project-btn"
    target="_blank"
    rel="noopener noreferrer"
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


<hr style={{ border: '4px solid red', margin: '2rem 0' }} />

{/* ================= Data Science & Analytics Section ================= */}
<section id="datascience" className="datascience-section">
  <h2 className="section-title">
    <i className="fas fa-chart-line section-icon"></i> Data Science & Analytics Projects
  </h2>

  <div className="project-card">
    <h3 className="project-title">1. Marketing Dashboard</h3>

    <p className="project-description">
      A Streamlit-powered dashboard that tracks and analyzes marketing campaign
      performance across platforms with interactive filters, KPIs, and visualizations.
    </p>

    <p className="project-subtitle">
      <strong> Tools & Tech Stack:</strong> Python, Streamlit, Pandas, Plotly, Hugging Face Spaces
    </p>

    <div className="project-features">
      <strong> Key Features:</strong>
      <ul>
        <li>KPI tracking (Impressions, Clicks, CTR, ROAS)</li>
        <li>Campaign analysis with interactive charts</li>
        <li>Downloadable reports (CSV & Excel)</li>
      </ul>
    </div>

    <p className="problem-solved">
       <strong>Problem Solved:</strong> Businesses struggle to track campaign ROI across multiple platforms.
    </p>

    <a
      href="https://huggingface.co/spaces/KaheniPeter/marketing_dashboard"
      className="project-btn"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Project
    </a>
  </div>
</section>








      {/* Full-width Footer */}
      <Footer />
    </>
  );
};

export default Projects;
