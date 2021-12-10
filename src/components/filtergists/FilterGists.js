import React, { Component } from 'react'
import { searchRecords } from "../../utils/fetchUtils";

export default class FilterGists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchRecords : [],
            date: new Date("2021-01-09T14:56:23"),
        }
        this.getFilterData = this.getFilterData.bind(this);
        this.showUniqueGistRecord = this.showUniqueGistRecord.bind(this);
    }

    showUniqueGistRecord(id) {
        window.location = `/getGist?Id=${id}`;
      }


    getFilterData = () => {
        const queryParams = new URLSearchParams(window.location.search);
        const userName = queryParams.get("uName");
        searchRecords(userName).then(data => {
             this.setState({searchRecords : data });
           });
    }
    componentDidMount () {
       this.getFilterData();
    }
    render() {
        const{searchRecords , date} = this.state;
        return (
            <section style={{marginTop: '120px'}}>
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
              {searchRecords
                ? searchRecords.map((gist, index) => (
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
                  ))
                : <h1>No record foound for that user.......</h1>
                }
            </tbody>
          </table>
        </section>
        )
    }
}
