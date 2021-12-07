import React, { Component } from "react";
import "./style.css";
import { getPublicGist } from "../../../utils/fetchUtils";

export default class UniqueGist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uniqueData: {},
      loading: false,
    };
    this.getGistData = this.getGistData.bind(this);
  }

  getGistData = async () => {
    const queryParams = new URLSearchParams(window.location.search);
    const gist_Id = queryParams.get("Id");
    this.setState({ loading: true });
    const getGistObj = await getPublicGist(gist_Id).then((data) =>
      this.setState({
        loading: false,
        uniqueData: data,
      })
    );
  };

  componentDidMount = () => {
    this.getGistData();
  };

  render() {
    const { uniqueData } = this.state;
    const { files } = uniqueData;
    let filename;
    let content;
    let myContentArray;

    if (files !== undefined) {
      Object.values(files).map((file) => {
        filename = file.filename;
        content = file.content
      });
      myContentArray = content.split("\n");
    }

    return (
      <>
        <div className="whole-card-section">
          <section className="card-header-public">
            <div className="profile-section">
              <div>
                <img
                  src={uniqueData?.owner?.avatar_url}
                  alt="profile"
                  className="profile-pic"
                />
              </div>
              <div className="">
                <span className="">
                  <h4 id="headings">
                    {uniqueData?.owner?.login}/{filename}{" "}
                  </h4>
                  <span>Created 7 housrs Ago</span>
                  <br />
                  <span> Broadcast Server</span>
                </span>
              </div>
            </div>

            <div className="gist-icons">
              <div className="icons1">
                <span style={{ color: "blue" }}>
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
                <span style={{ color: "blue" }}>
                  <i
                    className="fas fa-code-branch"
                    style={{ color: "blue" }}
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
          </section>
          <section className="body">
            <div className="card-body">
              <i className="fas fa-code"></i>
              <span className="file-name">
                {"  "} {filename}{" "}
              </span>
            </div>
            <div className="card-body-content">
              {myContentArray !== undefined
                ? myContentArray?.map((content, index) => {
                    return (
                      <span key={index}>
                        {" "}
                        
                        <p>
                        <span style={{fontWeight: '700' , marginRight:'10px'} }>{++index}</span> {content}{" "}
                        </p>{" "}
                      </span>
                    );
                  })
                : "No Content There......."}
            </div>
          </section>
        </div>
      </>
    );
  }
}
