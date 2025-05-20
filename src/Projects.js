import React from 'react';
import './Projects.css';
import Footer from './Footer';

const Projects = () => {
    const projects = [
        {
            icon: 'fas fa-user-slash',
            title: 'Churn, Sentiment & Recommendation System',
            description: 'An AI-driven system for analyzing customer sentiment, predicting churn, and recommending financial services.',
            github: 'https://github.com/KaheniSatima/kaheni-churn-prediction-system'
        },
        {
            icon: 'fas fa-bullhorn',
            title: 'Marketing & Sales Automation System',
            description: 'A smart solution to optimize sales and marketing processes through data-driven insights and automation.',
            github: 'https://github.com/KaheniSatima/kaheni-marketing-sales-system'
        },
        {
            icon: 'fas fa-network-wired',
            title: 'ERP System for Business Management',
            description: 'An integrated platform that manages operations like HR, inventory, and finance to streamline business workflows.',
            github: 'https://github.com/KaheniSatima/kaheni_erp_system'
        },
        {
            icon: 'fas fa-laptop-code',
            title: 'My Flutter Portfolio',
            description: 'A personal portfolio mobile app built using Flutter, showcasing my projects, skills, and contact information.',
            github: 'https://github.com/KaheniSatima/my_flutter_portfolio'
        }
    ];

    return (
        <>
            <div className="projects-page">
                <h2 className="projects-title">My Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <i className={`${project.icon} project-icon`}></i>
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <a
                                href={project.github}
                                className="github-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-github"></i> View on GitHub
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Full-width Footer */}
            <Footer />
        </>
    );
};

export default Projects;
