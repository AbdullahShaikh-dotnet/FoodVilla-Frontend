import React from "react";

class AboutUserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, title, description, email } = this.props;
    return (
      <div className="about-user-container">
        <div className="user-card">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User Avatar"
            className="user-avatar"
          />
          <h2 className="user-name">{name}</h2>
          <h4 className="user-title">{title}</h4>
          <p className="user-description">
            Passionate about building beautiful and performant web applications.
            Loves React, UI/UX, and learning new tech!
          </p>
          <a href={`mailto:${email}`} className="contact-button">Contact</a>
          <a
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
            className="contact-button"
          >
            Count : {this.state.count}
          </a>
        </div>
      </div>
    );
  }
}

export default AboutUserClass;
