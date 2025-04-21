import React from 'react';
import homepageImage from './assets/homepage.jpg';
import educationImage from './assets/education.jpeg';
import skillsImage from './assets/skills.jpeg';
import secondSkillsImage from './assets/homepage.jpeg';
import experienceImage from './assets/experience.jpeg';
import passionImage from './assets/passion.jpeg';
import goalsImage from './assets/goals.jpeg';
import './About.css';
import Footer from './Footer';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">

        {/* Profile Image Section */}
        <div className="about-profile">
          <img src={homepageImage} alt="Profile" className="about-image" />
          <div className="about-details">
            <p className="about-description">
              Hello! I'm <strong>Peter Kaheni</strong>, a Computer Science graduate (awaiting graduation in September), highly specialized in <strong>Software Development, Website Design & Development, Graphics Design, UI/UX Design, Artificial Intelligence & Machine Learning, Data Science, Search Engine Optimization (SEO), Database Management, Microsoft Office</strong>, and <strong>IT Support</strong>.
            </p>
            <p className="about-description">
              I have a strong foundation in programming and problem-solving, with a focus on creating innovative solutions using modern technologies.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="about-section education-section">
          <h3>EDUCATION</h3>
          <div className="section-row">
            <div className="section-content">
              <p className="about-description">
                I have successfully completed my four-year degree course: <strong>Bachelor of Science in Computer Science</strong> at <strong>Karatina University</strong>. During my academic journey, I have gained extensive knowledge and hands-on experience in <strong>Software Development, Website Design & Development, Graphics Design, UI/UX Design, Artificial Intelligence & Machine Learning, Data Science, Search Engine Optimization (SEO), Database Management, Microsoft Office</strong>, and <strong>IT Support</strong>.
              </p>
            </div>
            <img src={educationImage} alt="Education" className="section-image" />
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-section skills-container">
        <h3 className="skills-title">Technical & Professional Skills</h3>
  <div className="skills-row">
    {/* Left: Images */}
    <div className="image-column">
      <img src={skillsImage} alt="Skills" className="section-image" />
      <img src={secondSkillsImage} alt="Additional Skills" className="section-image" />
    </div>

    {/* Right: Skills content */}
    <div className="skills-content">
      <ul className="skills-list">
        <li><strong>Programming & Development:</strong> OOP, SDLC, Agile, Git, REST APIs</li>
        <li><strong>Web Development:</strong> HTML, CSS, JavaScript, React.js, Node.js, WordPress</li>
        <li><strong>Design & UI/UX:</strong> Figma, Photoshop, Illustrator, Canva, Wireframing, Prototyping</li>
        <li><strong>AI & Machine Learning:</strong> Scikit-learn, TensorFlow, Keras, Pandas</li>
        <li><strong>Data Science & Analytics:</strong> Data Analysis, EDA, Matplotlib, Seaborn, Power BI</li>
        <li><strong>Database Management:</strong> MySQL, MongoDB, ER Modeling, CRUD, Normalization</li>
        <li><strong>SEO & Analytics:</strong> On-Page SEO, Google Analytics, Keyword Research, SEO Tools</li>
        <li><strong>Microsoft Office Tools:</strong> Excel, Word, PowerPoint, Google Workspace</li>
        <li><strong>IT Support:</strong> Troubleshooting, Networking, Software/Hardware Setup, User Support</li>
      </ul>
    </div>
  </div>
</div>


        {/* Professional Experience Section */}
        <div className="about-section">
  <div className="container">
    <h3 className="section-title-left">Professional Experience</h3>
    <div className="section-row">
      {/* Text/Projects on the left */}
      <div className="section-content">
        <div className="projects-grid">
          <div className="project-item">
            <i className="fas fa-user-slash project-icon"></i>
            <p className="project-description">Churn Prediction, Sentiment Analysis & Recommendation System for Finance</p>
          </div>
          <div className="project-item">
            <i className="fas fa-bullhorn project-icon"></i>
            <p className="project-description">Marketing & Sales Automation System</p>
          </div>
          <div className="project-item">
            <i className="fas fa-network-wired project-icon"></i>
            <p className="project-description">ERP System for Business Management</p>
          </div>
        </div>
      </div>

      {/* Image on the right */}
      <img
        src={experienceImage}
        alt="Professional Experience"
        className="section-image"
      />
    </div>
  </div>
</div>


      {/* Passions & Interests Section */}
<div className="about-section passions-section">
  <div className="container">
  <h3 className="section-heading">Passions & Interests</h3>
    <div className="section-row">
      {/* Left: Image */}
      <div className="section-image-wrapper">
        <img src={passionImage} alt="Passions" className="section-image" />
      </div>

      {/* Right: Heading on top, then description */}
      <div className="section-content">
        <p className="about-description">
  In addition to my studies, I am passionate about staying up to date with the latest tech trends, especially in AI, and I enjoy working on side projects in my free time. Exploring how artificial intelligence is transforming industries continues to inspire my learning and creativity.
</p>

<p className="about-description">
  I'm deeply interested in solving real-world problems through technology—whether it's building intelligent systems, optimizing user experiences, or automating repetitive tasks. I often engage in hackathons, online coding challenges, and open-source contributions to grow my skills and connect with like-minded developers.
</p>

<p className="about-description">
  Outside of tech, I have a strong interest in creative design, personal development, and digital content creation. I believe in lifelong learning and continuously seek to expand both my technical and soft skills, aiming to become a well-rounded professional ready to make an impact.
</p>

      </div>
    </div>
  </div>
</div>


        {/* Goals & Vision Section */}
        <div className="about-section goals-section">
  <h3>GOALS & VISION</h3>
  <div className="section-row">
    {/* Left: Description */}
    <div className="section-content">
    <p className="about-description">
  My vision is to leverage AI and data science to create impactful products and technologies that will help shape the future and drive innovation across industries. I aim to contribute to solutions that make life easier, businesses smarter, and systems more efficient.
</p>

<p className="about-description">
  I am particularly motivated to work on projects that intersect with healthcare, education, and sustainability—sectors where technology can have a direct and positive influence on people’s lives. I envision building intelligent systems that support decision-making, enhance accessibility, and deliver real-time insights.
</p>

<p className="about-description">
  In the long term, I aspire to be a thought leader in AI and innovation, continually learning and mentoring others. My goal is not only to advance in my career but also to be part of a community that uses technology as a force for good, empowering others and shaping a more connected and data-driven world.
</p>

    </div>

    {/* Right: Image */}
    <img src={goalsImage} alt="Goals" className="section-image" />
  </div>
</div>

      </div>
      <Footer />
    </div>
  );
};

export default About;
