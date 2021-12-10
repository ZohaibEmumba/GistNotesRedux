import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { sraechRecord } from "../../../utils/fetchUtils";
import "./style.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date("2021-01-09T14:56:23"),
      checkValue: "",
      BASE_URL: "https://api.github.com",
      PAT: "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",
      userName: "Zohaibkhattak15",
      starGist : ""
    };
    this.showUniqueGistRecord = this.showUniqueGistRecord.bind(this);
    this.checkGistStar = this.checkGistStar.bind(this);
  }

  showUniqueGistRecord(id) {
    window.location = `/getGist?Id=${id}`;
  }

  checkGistStar = async (uniqueId) => {
    const { userName, PAT, BASE_URL } = this.state;
    let val = await axios
      .get(`${BASE_URL}/gists/${uniqueId}/star`, {
        headers: {
          Authorization: `Basic ${btoa(`${userName}:${PAT}`)}`,
        },
      }).then(data => data.data);
    };

  render() {
    const { publicGistsDisplay, privateGistsDisplay } = this.props;
    const { date } = this.state;
    

    return (
      <>
        <section>
          <table className="disp-gists-table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Keyword</th>
                <th>Notebook Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {privateGistsDisplay
                ? privateGistsDisplay.map((gist, index) => (
                    <tr
                      key={index}
                      onClick={() => {
                        this.showUniqueGistRecord(gist?.id);
                      }}
                    >
                      <td>
                        {" "}
                        <input type="checkbox" />{" "}
                      </td>
                      <td>
                        <div className="username-section">
                          <span>
                            {" "}
                            <img
                              className="profile-img"
                              src={gist?.owner?.avatar_url}
                              alt="Profile Pics"
                            />
                          </span>
                          <span className="username">{gist?.owner?.login}</span>
                        </div>
                      </td>
                      <td>{date.toLocaleDateString()}</td>
                      <td>{date.toLocaleTimeString()}</td>
                      <td>{Object.keys(gist?.files)[0]}</td>
                      <td>{gist?.description}</td>
                      <td id="gists-icons">
                        <i
                          className={
                            this.checkGistStar(gist?.id) === ""
                             ? "fas fa-star" : "far fa-star"
                          }
                        ></i>

                        <i className="fas fa-code-branch"></i>
                      </td>
                    </tr>
                  ))
                : publicGistsDisplay.map((gist, index) => (
                    <tr
                      key={index}
                      onClick={() => {
                        this.showUniqueGistRecord(gist?.id);
                      }}
                    >
                      <td>
                        {" "}
                        <input type="checkbox" />{" "}
                      </td>
                      <td>
                        <div className="username-section">
                          <span>
                            {" "}
                            <img
                              className="profile-img"
                              src={gist?.owner?.avatar_url}
                              alt="Profile Pics"
                            />
                          </span>
                          <span className="username">{gist?.owner?.login}</span>
                        </div>
                      </td>
                      <td>{date.toLocaleDateString()}</td>
                      <td>{date.toLocaleTimeString()}</td>
                      <td>{Object.keys(gist?.files)[0]}</td>
                      <td>{gist?.description}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

export default connect(mapStateToProps, null)(Table);
