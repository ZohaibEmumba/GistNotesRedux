import React, { Component } from "react";
import "./style.css";

export default class PublicTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date("2021-01-09T14:56:23"),
    };
  }

  render() {
    const { publicGistsDisplay } = this.props;
    const { date } = this.state;
    console.log(publicGistsDisplay);
    return (
      <>
        <section className="body-div">
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
              {publicGistsDisplay.map((gist, index) => (
                <tr key={index}>
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
                          src={gist.owner.avatar_url}
                          alt="Profile Pics"
                        />
                      </span>
                      <span className="username">{gist.owner.login}</span>
                    </div>
                  </td>
                  <td>{date.toLocaleDateString()}</td>
                  <td>{date.toLocaleTimeString()}</td>
                  <td>{Object.keys(gist.files)[0]}</td>
                  <td>{gist.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </>
    );
  }
}
