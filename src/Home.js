import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import homepageImage from './assets/homepage.jpg'; // Image inside the container
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
            <Footer />
        </>
    );
};

export default Home;
