import React from 'react';

const About = () => {
    return (
        <div className="about-container">
            <h1>About This Project</h1>
            <div className="about-content">
                <section>
                    <h2>Welcome to My React Learning Journey</h2>
                    <p>
                        This is a personal project where I'm exploring and learning React.js, 
                        one of the most popular JavaScript libraries for building user interfaces.
                    </p>
                </section>

                <section>
                    <h2>What I'm Learning</h2>
                    <ul>
                        <li>React Components and Props</li>
                        <li>React Router for Navigation</li>
                        <li>State Management</li>
                        <li>Modern React Practices</li>
                    </ul>
                </section>

                <section>
                    <h2>Technologies Used</h2>
                    <ul>
                        <li>React.js</li>
                        <li>React Router DOM</li>
                        <li>Parcel Bundler</li>
                        <li>Modern JavaScript (ES6+)</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default About;