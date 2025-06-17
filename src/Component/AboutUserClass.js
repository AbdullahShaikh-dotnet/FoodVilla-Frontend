import React from "react";

class AboutUserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userInfo: {},
      projectDetails: {}
    };
  }

  async componentDidMount() {
    const Data = await fetch("https://api.github.com/users/AbdullahShaikh-dotnet");
    const Json = await Data.json();
    
    const RepositoryData = await fetch(Json.repos_url);
    const ReposJson = await RepositoryData.json();

    this.setState({
      userInfo: Json,
      projectDetails: ReposJson
    })

  }


  render() {
    const { name, login, avatar_url, html_url, location } = this.state.userInfo;
    return (
      <div className="about-user-container">
        <div className="user-card">
          <img
            src={avatar_url}
            alt="User Avatar"
            className="user-avatar"
          />
          <h2 className="user-name">{name}</h2>
          <p>{location}</p>
          <h4 className="user-title">Software Developer {login}</h4>
          <p className="user-description">
            Passionate about building beautiful and performant web applications.
            Loves React, UI/UX, and learning new tech!
          </p>
          <a className="contact-button" style={{ backgroundColor: "white" }} href={html_url} target="_blank">
            <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width="25px" height="25px"></img>
          </a>
          <a href={`mailto:shaikhabdullah299@gmail.com`} className="contact-button">
            Contact</a>
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
