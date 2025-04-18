import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <div className="resume">
            <h2>Resume</h2>
            <p>Download my resume below:</p>
            <a href="/assets/resume.pdf" download className="download-link">Download Resume</a>
        </div>
    );
};

export default Resume;
