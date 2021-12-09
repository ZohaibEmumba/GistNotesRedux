import React, { Component } from "react";
import { checkGistStar } from "../../../utils/fetchUtils";
import "./style.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date("2021-01-09T14:56:23"),
      checkValue : ""
    };
    this.showUniqueGistRecord = this.showUniqueGistRecord.bind(this);
  }

  showUniqueGistRecord(id) {
    window.location = `/getGist?Id=${id}`;
  }
  componentDidMount =  async () => {
    const {privateGistsDisplay} = this.props;
    let val = await privateGistsDisplay;
    if(val.length !== 0){
      // let startOrNot = val.map(item => 
      //   {
      //     let id = item.id;
      //     console.log(id);
           checkGistStar('5a9e2e5433d5819fe3ac7c0453ce418a');
      //   }
      //   );
      // this.setState({checkValue: startOrNot});
      // console.log(this.state.checkValue)
    
  }
  }
  render() {

     const { publicGistsDisplay, privateGistsDisplay } = this.props;
     const { date , checkValue} = this.state;
  

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
                        {/* <i className="fas fa-star" onClick={this.starGist}></i> */}
                        <i className={ checkValue.length === 0 ? "far fa-star" : "fas fa-star "}></i>
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

export default Table;
