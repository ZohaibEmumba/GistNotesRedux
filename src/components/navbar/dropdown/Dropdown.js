import  { Component } from "react";
import { Link } from "react-router-dom";
import './style.css'

export default class Dropdown extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       open : false,
//       authRecord : JSON.parse(localStorage.getItem("authData"))
//     };
//   }

//   logOut = () => {
//     localStorage.clear();
//     window.location.replace('/');
//   }
  render() {
    return (
      <section>
          
        {/* <div className="container">
      <div type="button" className="button" onClick={() => this.setState({open:  !this.state.open})}>
        <img src={this.state.authRecord?.avatar_url} alt=" " className="profile-sec" />
      </div>
      {this.state.open && (
        <div className="dropdown-wrapper">
          <ul className="dropdown-menu">
            <li className="dropdown-menu__item">Signed in as <br /> {this.state.authRecord?.login}</li>
            <hr />
            <Link to="/profilePage"><li className="dropdown-menu__item">Your Gists</li></Link>
            <Link to="/get-stared-gists"><li className="dropdown-menu__item">Starred Gists</li></Link>
            <Link to="/create-a-gist"><li className="dropdown-menu__item">Create A Gists</li></Link>
            <li className="dropdown-menu__item">Help</li>
            <hr></hr>
            <Link to="/githubProfile"><li className="dropdown-menu__item">Your Github Profile</li></Link>
            <li className="dropdown-menu__item" onClick={() => this.logOut()}>Signout</li>
          </ul>
        </div>
      )}
    </div> */}
      </section>
    );
  }
}
