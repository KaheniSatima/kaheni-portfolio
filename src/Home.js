import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Home.css'; // Make sure you have a separate CSS file for better organization
import homepageImage from './assets/homepage.jpg'; // Adjust the path according to your file structure
import Footer from './Footer'; // Import the Footer component

const Home = () => {
    return (
        <>
            <div className="home-container">
                <div className="home-content">
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
                    {/* Wrap the button with Link to navigate to the About page */}
                    <Link to="/about">
                        <button className="home-btn">Learn More About Me</button>
                    </Link>
                </div>
            </div>
            {/* Footer section positioned below the main container */}
            <Footer />
        </>
    );
};

export default Home;
