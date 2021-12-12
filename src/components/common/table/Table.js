import React, { Component } from "react";
import { connect } from "react-redux";
import { checkGistStared } from "../../../utils/fetchUtils";
import "./style.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date("2021-01-09T14:56:23"),
      checkValue: "",
      publicGists: this.props.publicGistsDisplay,
    };
    this.showUniqueGistRecord = this.showUniqueGistRecord.bind(this);
    // this.checkGistStar = this.checkGistStar.bind(this);
  }

  showUniqueGistRecord = (id) => {
    window.location = `/getGist?Id=${id}`;
  };

  componentDidUpdate(prevProps, prevState) {
    const { user } = this.props;
    const { searchVal } = user;
    if (prevProps.user.searchVal !== searchVal) {
      window.location = `/getFilterGists?uName=${searchVal}`;
    }
  }

  componentWillUnmount() {
    
  }
  render() {
    const { privateGistsDisplay } = this.props;
    const { publicGists, date } = this.state;
    const filledStar = <i className="fas fa-star" />;
    const unFilledStart = <i className="far fa-star" />;

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
                        {checkGistStared(gist?.id) === 204
                          ? filledStar
                          : unFilledStart}
                        <i className="fas fa-code-branch"></i>
                      </td>
                    </tr>
                  ))
                : publicGists.map((gist, index) => (
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
