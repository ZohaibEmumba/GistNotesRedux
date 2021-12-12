import React, { Component } from "react";
import { getStaredGists } from "../../utils/fetchUtils";
import Loader from '../common/loader/Loader'

class StaredGists extends Component {
  constructor() {
    super();
    this.state = {
      staredGists: [],
      date: new Date("2021-01-09T14:56:23"),
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({loading : true})
    getStaredGists().then((data) => this.setState({ staredGists: data , loading : false }));
  }
  render() {
    const { staredGists, date , loading } = this.state;
    return (
      <>
        { loading ?   <Loader />  :  <section style={{ marginTop: "100px" }}>
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
              {staredGists
                ? staredGists.map((gist, index) => (
                    // console.log(gist.id),
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
                            // this.checkGistStar(gist?.id)
                            true ? "fas fa-star" : "far fa-star"
                          }
                        ></i>

                        <i className="fas fa-code-branch"></i>
                      </td>
                    </tr>
                  ))
                : "No Stared Gists Found there"}
            </tbody>
          </table>
        </section>}
      </>
    );
  }
}

export default StaredGists;
