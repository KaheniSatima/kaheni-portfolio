import React from 'react';
import homepageImage from './assets/homepage.jpg'; // Image import
import educationImage from './assets/education.jpeg'; // Sample image for education
import skillsImage from './assets/skills.jpeg'; // Sample image for skills
import experienceImage from './assets/experience.jpeg'; // Sample image for professional experience
import passionImage from './assets/passion.jpeg'; // Sample image for passions
import goalsImage from './assets/goals.jpeg'; // Sample image for goals
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
                <div className="about-section">
                    <h3>Education</h3>
                    <img src={educationImage} alt="Education" className="section-image" />
                    <div className="section-content">
                        <p className="about-description">
                            I have successfully completed my four-year degree course: <strong>Bachelor of Science in Computer Science</strong> at <strong>Karatina University</strong>. During my academic journey, I have gained extensive knowledge and hands-on experience in <strong>Software Development, Website Design & Development, Graphics Design, UI/UX Design, Artificial Intelligence & Machine Learning, Data Science, Search Engine Optimization (SEO), Database Management, Microsoft Office</strong>, and <strong>IT Support</strong>.
                        </p>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="about-section">
                    <h3>Technical & Professional Skills</h3>
                    <img src={skillsImage} alt="Skills" className="section-image" />
                    <div className="section-content">
                        <ul>
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

                {/* Professional Experience Section */}
                <div className="about-section">
                    <h3>Professional Experience</h3>
                    <img src={experienceImage} alt="Professional Experience" className="section-image" />
                    <div className="section-content">
                        <div className="projects-grid">
                            <div className="project-item">
                                <i className="fas fa-user-slash project-icon"></i>
                                <p>Churn Prediction, Sentiment Analysis & Recommendation System for Finance</p>
                            </div>
                            <div className="project-item">
                                <i className="fas fa-bullhorn project-icon"></i>
                                <p>Marketing & Sales Automation System</p>
                            </div>
                            <div className="project-item">
                                <i className="fas fa-network-wired project-icon"></i>
                                <p>ERP System for Business Management</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Passions & Interests Section */}
                <div className="about-section">
                    <h3>Passions & Interests</h3>
                    <img src={passionImage} alt="Passions" className="section-image" />
                    <div className="section-content">
                        <p className="about-description">
                            In addition to my studies, I am passionate about staying up to date with the latest tech trends, especially in AI, and I enjoy working on side projects in my free time.
                        </p>
                    </div>
                </div>

                {/* Goals & Vision Section */}
                <div className="about-section">
                    <h3>Goals & Vision</h3>
                    <img src={goalsImage} alt="Goals" className="section-image" />
                    <div className="section-content">
                        <p className="about-description">
                            My vision is to leverage AI and data science to create impactful products and technologies that will help shape the future and drive innovation across industries.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default About;
