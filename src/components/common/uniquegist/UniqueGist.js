import React, { Component } from "react";
import "./style.css";
import {
  getPublicGist,
  delAGist,
  staredAGist,
  forkedGist,
  unStaredAGist,
} from "../../../utils/fetchUtils";
import { connect } from "react-redux";

class UniqueGist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uniqueData: {},
      loading: false,
      gistStarValue: 0,
      gistForkValue: 0,
    };
    this.getGistData = this.getGistData.bind(this);
    this.delGist = this.delGist.bind(this);
    this.updateGist = this.updateGist.bind(this);
    this.starGist = this.starGist.bind(this);
    this.forkGist = this.forkGist.bind(this);
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

  starGist = async () => {
    const { uniqueData, gistStarValue } = this.state;
    const gistId = uniqueData?.id;
    let alreadyStared = 0;
    if (gistStarValue === 0) {
      const star = await staredAGist(gistId)
        .then(data => alreadyStared = 1)
        .catch(err => alreadyStared);
      this.setState({
        gistStarValue: this.state.gistStarValue + 1,
      });
    } else {
      const unStar = await unStaredAGist(gistId)
        .then(data => (alreadyStared = 1))
        .catch(err => alreadyStared);
      {
        this.setState({
          gistStarValue: this.state.gistStarValue - 1,
        });
      }
    }
  };

  forkGist = async () => {
    const { uniqueData , gistForkValue} = this.state;
    const gistId = uniqueData?.id;
    let alreadyFork = 0;
    let fork = await forkedGist(gistId)
      .then(data => alreadyFork = 1)
      .catch(err => alreadyFork);
    if (alreadyFork) {
      this.setState({
        gistStarValue: gistForkValue + 1,
      });
    }
  };

  delGist = async () => {
    const { uniqueData } = this.state;
    let gist_id = uniqueData?.id;
    let delGist = await delAGist(gist_id).then((data) => console.log(data));
    window.location = `/newsfeed`;
  };

  updateGist = (e) => {
    e.preventDefault();
    const { uniqueData } = this.state;
    let gist_Id = uniqueData?.id;
    window.location = `/editGist?gist_Id=${gist_Id}`;
  };

  componentDidMount = () => {
    this.getGistData();
  };

  render() {
    const { uniqueData, gistStarValue, gistForkValue } = this.state;
    const { files } = uniqueData;
    const myUserName = this.props.user.LoginReducer.userName;
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
              {uniqueData?.owner?.login === myUserName ? (
                <>
                  <span style={{ color: "blue" }}>
                    <i className="far fa-edit" onClick={this.updateGist}></i>{" "}
                    Edit
                  </span>
                  <span style={{ color: "blue" }}>
                    <i className="far fa-trash-alt" onClick={this.delGist}></i>{" "}
                    Delete
                  </span>
                </>
              ) : null}
              <div className="icons1">
                <span style={{ color: "blue" }}>
                  <i
                    className={
                      gistStarValue === 0 ? "far fa-star" : "fas fa-star"
                    }
                    onClick={this.starGist}
                  ></i>{" "}
                  Star
                </span>
                <span
                  style={{
                    border: "1px solid gray",
                    padding: "0px 15px",
                    borderRadius: "5px",
                  }}
                >
                  {gistStarValue}
                </span>
              </div>
              <div className="icons2">
                <span style={{ color: "blue" }}>
                  <i
                    className="fas fa-code-branch"
                    style={{ color: "blue" }}
                    onClick={this.forkGist}
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
                  {gistForkValue}
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
                : "No Content There......."}
            </div>
          </section>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

export default connect(mapStateToProps)(UniqueGist);
