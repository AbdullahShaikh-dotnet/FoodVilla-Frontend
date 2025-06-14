import React from 'react';
import AboutUser from './AboutUser';
import AboutUserClass from './AboutUserClass';

const About = () => {
    return (
        <div className="about-page">
            <section className="about-hero">
                <h1>React Learning Project</h1>
                <p className="about-hero-desc">
                    A personal journey into mastering React.js and modern web development.
                </p>
            </section>
            <div className="about-main-content">
                <div className="about-cards">
                    <div className="about-card">
                        <h2>What I'm Learning</h2>
                        <ul>
                            <li>React Components & Props</li>
                            <li>React Router for Navigation</li>
                            <li>State Management</li>
                            <li>Modern React Practices</li>
                        </ul>
                    </div>
                    <div className="about-card">
                        <h2>Technologies Used</h2>
                        <ul>
                            <li>React.js</li>
                            <li>React Router DOM</li>
                            <li>Parcel Bundler</li>
                            <li>Modern JavaScript (ES6+)</li>
                        </ul>
                    </div>
                </div>
                <div className="about-author-section">
                    <h2>About the Author</h2>
                    <AboutUser />
                    <AboutUserClass name="Abdullah Khan" title="Frontend Developer" email="abdullah@email.com" />
                </div>
            </div>
        </div>
    );
};

export default About;