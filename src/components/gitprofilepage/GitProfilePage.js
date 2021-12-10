import React, { Component } from "react";
import avatar from "../../assets/blank-profile-picture-973460_1280.png";
import { loginAuthUser, privateGistsRecord } from "../../utils/fetchUtils";
import "./style.css";

export default class GithubProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUserRecord: "",
      ownerRec: {},
      gists: "",
    };
    this.getLoginData = this.getLoginData.bind(this);
    this.getGists = this.getGists.bind(this);
  }

  getLoginData = async () => {
    const userName = "Zohaibkhattak15";
    let authData = await loginAuthUser(userName).then((data) =>
      this.setState({ authUserRecord: data })
    );
  };
  getGists = async () => {
    const getAuthGists = await privateGistsRecord().then((data) =>
      this.setState({ gists: data })
    );
  };

  componentDidMount() {
    this.getLoginData();
    this.getGists();
  }
  render() {
    const { gists, authUserRecord } = this.state;
    const { files } = gists;
    let filename;
    let content;
    let myContentArray;

    if (files !== undefined) {
      Object.values(files).map((file) => {
        filename = file.filename;
        content = file.content;
      });
      myContentArray = content.split("\n");
    }

    return (
      <section className="whole-section">
        <div className="profile-left">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              id="profile-pic"
              src={authUserRecord?.avatar_url}
              alt="zohaib"
            />
          </div>
          <div
            id="heading-name"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <h5>{authUserRecord?.login}</h5>
          </div>
          <button id="button">View GitHub Profile</button>
        </div>

        <div className="whole-card-section">
          {gists &&
            gists.map((item, index) => (
              <section key={index} className="card-header">
                <div className="left-sec">
                  <div className="profile-col">
                    <img src={avatar} alt="profile" className="profile-pic" />
                    <div>
                      <span className="">
                        <h4>
                          {item?.owner?.login}/{Object.keys(item?.files)[0]}
                        </h4>
                        <span>Created 7 housrs Ago</span>
                        <br />
                        <span> Broadcast Server</span>
                      </span>
                    </div>
                  </div>
                  <div className="gist-icons">
                    <div className="icons1">
                      <span style={{ color: "lightblue" }}>
                        <i className="far fa-star"></i> Star
                      </span>
                      <span
                        style={{
                          border: "1px solid gray",
                          padding: "0px 15px",
                          borderRadius: "5px",
                        }}
                      >
                        0
                      </span>
                    </div>
                    <div className="icons2">
                      <span style={{ color: "lightblue" }}>
                        <i
                          className="fas fa-code-branch"
                          style={{ color: "lightblue" }}
                        ></i>{" "}
                        Fork
                      </span>
                      <span
                        style={{
                          border: "1px solid gray",
                          padding: "0px 15px",
                          borderRadius: "5px",
                        }}
                      >
                        0
                      </span>
                    </div>
                  </div>
                </div>

                <section id="content-body">
                  <div className="card-body">
                    <i className="fas fa-code"></i>
                    <span className="file-name">
                      {"  "} {Object.keys(item?.files)[0]}
                    </span>
                  </div>
                  <div className="card-body-content">
                    {myContentArray !== undefined
                      ? myContentArray?.map((content, index) => {
                          return (
                            <span key={index}>
                              {" "}
                              <p>
                                <span
                                  style={{
                                    fontWeight: "700",
                                    marginRight: "10px",
                                  }}
                                >
                                  {++index}
                                </span>{" "}
                                {content}{" "}
                              </p>{" "}
                            </span>
                          );
                        })
                      : "No Content There......."}
                  </div>
                </section>
              </section>
            ))}
        </div>
      </section>
    );
  }
}
