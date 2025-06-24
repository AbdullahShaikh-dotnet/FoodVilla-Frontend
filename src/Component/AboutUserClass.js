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
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center w-full max-w-md">
          <img
            src={avatar_url}
            alt="User Avatar"
            className="w-32 h-32 rounded-full border-4 border-gray-300 mb-4 object-cover shadow"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{name}</h2>
          <p className="text-gray-500 mb-2">{location}</p>
          <h4 className="text-lg font-semibold text-orange-600 mb-3">Software Developer {login}</h4>
          <p className="text-center text-gray-600 mb-4">
            Passionate about building beautiful and performant web applications.<br/>
            Loves React, UI/UX, and learning new tech!
          </p>
          <div className="flex gap-4 mb-4">
            <a className="bg-white border border-gray-200 rounded-full p-2 hover:bg-gray-100 transition" href={html_url} target="_blank" rel="noopener noreferrer">
              <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width="25px" height="25px" alt="GitHub" />
            </a>
            <a href={`mailto:shaikhabdullah299@gmail.com`} className="bg-orange-500 text-white rounded-full px-4 py-2 font-medium hover:bg-orange-600 transition">
              Contact
            </a>
            {/* <button
              onClick={() => {
                this.setState({
                  count: this.state.count + 1,
                });
              }}
              className="bg-gray-200 text-gray-700 rounded-full px-4 py-2 font-medium hover:bg-gray-300 transition"
            >
              Count : {this.state.count}
            </button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUserClass;
