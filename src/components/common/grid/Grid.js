import React, { Component } from "react";
import "./style.css";

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.showUniqueGistRecord = this.showUniqueGistRecord.bind(this);
  }
  showUniqueGistRecord(id) {
    window.location = `/getGist?Id=${id}`;
  }

  render() {
    const { publicGistsDisplay, privateGistsDisplay } = this.props;
    let publicFiles;
    let privateFiles;
    if (publicGistsDisplay) {
      publicFiles = publicGistsDisplay.map(
        (files) => Object.keys(files.files)[0]
      );
    } else
      privateFiles = privateGistsDisplay.map(
        (files) => Object.keys(files.files)[0]
      );

    return (
      <>
        <section className="card">
          {publicGistsDisplay
            ? publicGistsDisplay.map((gist, index) => (
                <section
                  key={index}
                  onClick={() => {
                    this.showUniqueGistRecord(gist?.id);
                  }}
                  className="grid-display"
                >
                  <div>
                    {publicFiles &&
                      publicFiles?.map((content, index) => {
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
                      })}
                  </div>
                  <div className="card-footer">
                    <div>
                      <img
                        src={gist.owner.avatar_url}
                        alt="profile"
                        className="profile-pic"
                      />
                    </div>
                    <div className="profile-main">
                      <span className="profile-footer">
                        <h4>
                          {gist.owner.login} / {Object.keys(gist.files)[0]}{" "}
                        </h4>
                        <span>Created 7 housrs Ago</span>
                        <br />
                        <span> Broadcast Server</span>
                      </span>
                    </div>
                  </div>
                </section>
              ))
            : privateGistsDisplay.map((gist, index) => (
                <section
                  key={index}
                  onClick={() => {
                    this.showUniqueGistRecord(gist?.id);
                  }}
                  className="grid-display"
                >
                  <div>
                    {privateFiles &&
                      privateFiles?.map((content, index) => {
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
                      })}
                  </div>
                  <div className="card-footer">
                    <div>
                      <img
                        src={gist.owner.avatar_url}
                        alt="profile"
                        className="profile-pic"
                      />
                    </div>
                    <div className="profile-main">
                      <span className="profile-footer">
                        <h4>
                          {gist.owner.login} / {Object.keys(gist.files)[0]}{" "}
                        </h4>
                        <span>Created 7 housrs Ago</span>
                        <br />
                        <span> Broadcast Server</span>
                      </span>
                    </div>
                  </div>
                </section>
              ))}
        </section>
      </>
    );
  }
}
