import React from 'react';
import './Skills.css';
import {
  FaCode,
  FaLaptopCode,
  FaPaintBrush,
  FaBrain,
  FaChartBar,
  FaDatabase,
  FaSearch,
  FaLaptop,
  FaMobileAlt,
  FaDraftingCompass
} from 'react-icons/fa';
import { MdSupportAgent } from 'react-icons/md';
import Footer from './Footer';

const skillsData = [
  {
    title: 'Programming & Development',
    icon: <FaCode />,
    description: 'Proficient in writing clean, efficient, and maintainable code using modern programming languages and development practices.',
    skills: ['Python', 'JavaScript', 'OOP', 'SDLC', 'Agile', 'Git', 'REST APIs']
  },
  {
    title: 'AI & Machine Learning',
    icon: <FaBrain />,
    description: 'Hands-on experience in building intelligent systems using ML libraries and model evaluation techniques.',
    skills: ['Scikit-learn', 'TensorFlow', 'Keras', 'Model Evaluation', 'Pandas']
  },
  {
    title: 'Web Development',
    icon: <FaLaptopCode />,
    description: 'Skilled in building responsive and interactive websites using modern front-end and back-end technologies.',
    skills: ['HTML', 'CSS', 'React.js', 'Node.js', 'Responsive Design']
  },
  {
    title: 'Data Science & Analytics',
    icon: <FaChartBar />,
    description: 'Strong analytical skills with expertise in data visualization, exploration, and business intelligence.',
    skills: ['Data Cleaning', 'EDA', 'Matplotlib', 'Seaborn', 'Power BI']
  },
  {
    title: 'Mobile App Development',
    icon: <FaMobileAlt />,
    description: 'Ability to build cross-platform mobile apps with intuitive interfaces using modern tools.',
    skills: ['Flutter', 'Dart', 'Cross-Platform Apps', 'UI Widgets', 'Firebase Integration']
  },
  {
    title: 'Software Development',
    icon: <FaCode />,
    description: 'In-depth understanding of the software development lifecycle and principles of robust application design.',
    skills: ['Requirement Analysis', 'Version Control', 'Debugging', 'Documentation', 'Code Reviews']
  },
  {
    title: 'UI & UX Design',
    icon: <FaDraftingCompass />,
    description: 'Experienced in designing user-friendly interfaces and optimizing user experience through research and prototyping.',
    skills: ['Figma', 'Adobe XD', 'Wireframing', 'User Research', 'Prototyping', 'Responsive Design']
  },
  {
    title: 'Graphic Design',
    icon: <FaPaintBrush />,
    description: 'Creative design skills for developing branding materials, social media posts, and marketing visuals.',
    skills: ['Adobe Photoshop', 'Illustrator', 'Canva', 'Branding', 'Posters', 'Social Media Design']
  },
  
  
  {
    title: 'Database Management',
    icon: <FaDatabase />,
    description: 'Skilled in designing and managing relational and NoSQL databases for scalable applications.',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'ER Modeling', 'CRUD', 'Normalization']
  },
  
  {
    title: 'Search Engine Optimization & Analytics',
    icon: <FaSearch />,
    description: 'Knowledge of SEO strategies and tools to improve online visibility and performance metrics.',
    skills: ['Google Analytics', 'On-Page SEO', 'Keyword Research', 'SEO Tools']
  },
  {
    title: 'Microsoft Office Tools',
    icon: <MdSupportAgent />,
    description: 'Proficient in productivity tools used for document creation, data analysis, and presentations.',
    skills: ['Excel', 'Word', 'PowerPoint', 'Google Workspace']
  },
  {
    title: 'IT Support',
    icon: <FaLaptop />,
    description: 'Experienced in diagnosing and resolving technical issues in software and hardware systems.',
    skills: ['Troubleshooting', 'Networking', 'Software/Hardware Setup', 'User Support']
  }
  
];

const Skills = () => {
  return (
    <>
      <div className="skills-section">
  <h2 className="skills-title">Technical & Professional Skills</h2>
  <p className="skills-subtitle">
    A diverse set of technical and professional competencies developed through hands-on experience, academic training, and industry practices.
  </p>
  <div className="skills-grid">

          {skillsData.map((category, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <p className="skill-description">{category.description}</p>
              <ul>
                {category.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Skills;
