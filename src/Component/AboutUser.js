import { useEffect } from "react";

const AboutUser = () => {

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Use Effect");
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    });

    return (
        <div className="about-user-container">
            <div className="user-card">
                <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="User Avatar"
                    className="user-avatar"
                />
                <h2 className="user-name">Abdullah Khan</h2>
                <h4 className="user-title">Frontend Developer</h4>
                <p className="user-description">
                    Passionate about building beautiful and performant web applications. Loves React, UI/UX, and learning new tech!
                </p>
                <a href="mailto:abdullah@email.com" className="contact-button">Contact</a>
            </div>
        </div>
    );
}

export default AboutUser;