import axios from "axios";
import React, { Component } from "react";
// import { checkGistStar } from "../../../utils/fetchUtils";
import "./style.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date("2021-01-09T14:56:23"),
      checkValue : "",
       BASE_URL : "https://api.github.com",
       PAT : "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",
       userName : "Zohaibkhattak15"
    };
    this.showUniqueGistRecord = this.showUniqueGistRecord.bind(this);
    // this.checkGistStar = this.checkGistStar.bind(this);
  }

  showUniqueGistRecord(id) {
    window.location = `/getGist?Id=${id}`;
  }

  // checkGistStar = (uniqueId) => {
   
    // const {status} = this.state;

    //   axios.get(`${BASE_URL}/gists/${uniqueId}/star` , 
    //   {
    //      headers: {
    //                  Authorization: `Basic ${btoa(
    //                    `${userName}:${PAT}`
    //                  )}`,
    //                },
    //    }).then(data => status.push(data?.status));
    //   console.log(status)

      // }
  
  // componentDidMount =  () => {
  //   const {privateGistsDisplay } = this.props;
  //   const getId = privateGistsDisplay.map(uniqueId => {
  //     uniqueId = uniqueId.id;
  //     // console.log(uniqueId);
  //     this.checkGistStar(uniqueId)
  //   })
  //   const checkGistStar = async () => {
  //     console.log(gist_id);
  //     const checkGistStared = await axios.get(`${BASE_URL}/gists/${gist_id}/star` ,
  //       {
  //         headers: {
  //           Authorization: `Basic ${btoa(
  //             `${userName}:${PAT}`
  //           )}`,
  //         },
  //       }
  //       ).then(data => data.status);
  //     return checkGistStared;
  // }


  //   let val = await privateGistsDisplay;
    
  //   if(val.length !== 0){
  //     const getId = val.map(id => checkGistStar(id.id));
  //     console.log(getId)
      // this.setState({checkValue : getId})
      // console.log(this.state.checkValue);
    // }
  //     // let startOrNot = val.map(item => 

  //     //   {
  //     //     let id = item.id;
  //     //     console.log(id);
  //     //   }
  //     //   );
  //     // this.setState({checkValue: startOrNot});
  //     // console.log(this.state.checkValue)
  //  }
  // }
  render() {

     const { publicGistsDisplay, privateGistsDisplay } = this.props;
     const { date , status} = this.state;
  

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
                  console.log(gist.id),
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
                       
                         <i className=
                        { 
                           true 
                        ? "fas fa-star"  
                        : "far fa-star"
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

export default Table;
