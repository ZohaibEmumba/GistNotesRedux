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

    // const  privateFiles  = this.props.privateGistsDisplay;
    // console.log(privateFiles)
    //   let privateFilename;
    //   let privateContent;
    //   let myPrivateContentArray;

    // if (privateFiles !== undefined) {
    //   Object.values(privateFiles).map((file) => {
    //     privateFilename = file.filename;
    //     privateContent = file.content
    //   });
    //   console.log(privateContent)
    //   myPrivateContentArray = privateContent.split("\n");
    // }

    //   const  {files} = publicGistsDisplay;
    //      let filename;
    //      let content;
    //      let myContentArray;

    // if (files !== undefined) {
    //   Object.values(files).map((file) => {
    //     filename = file.filename;
    //     content = file.content;
    //   });
    //   // myContentArray = content.split("\n");

    //       console.log(filename , content)

    // }

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
                    {/* {myContentArray !== undefined
                ? myContentArray?.map((content, index) => {
                    return (
                      <span key={index}>
                        {" "}
                        <p>
                          <span
                            style={{ fontWeight: "700", marginRight: "10px" }}
                          >
                            {++index}
                          </span>{" "}
                          {content}{" "}
                        </p>{" "}
                      </span>
                    );
                  })
                : "No Content There......."} */}
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
                    {/* {myPrivateContentArray !== undefined
                ? myPrivateContentArray?.map((content, index) => {
                    return (
                      <span key={index}>
                        {" "}
                        
                        <p>
                        <span style={{fontWeight: '700' , marginRight:'10px'} }>{++index}</span> {content}{" "}
                        </p>{" "}
                      </span>
                    );
                  })
                : "No Content There......."} */}
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
