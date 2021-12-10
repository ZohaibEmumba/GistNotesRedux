import  { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/emumba-logo.png";
import Dropdown from "./dropdown/Dropdown";
import SearchBar from "./searchBar/Searchbar";
import "./style.css";

export default class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName : "Zohaibkhattak15"
    }
  }
  
  render() {
    const {userName} = this.state;
    const myUserName = JSON.parse(localStorage.getItem("userName"));
    return (
      <>
        <section>
          <nav className="navBar">
            <div className="left-Section">
              <Link to="/"> 
                {" "}
                <img src={Logo} alt="Emumba" className="navbar-logo-styling" onClick={() => {
                  localStorage.clear();
                  }}  />{" "}
              </Link> 
            </div>
            <div className="navbar-search-section">
              <SearchBar />
              {
                userName === myUserName ? (
                <Dropdown />
              ) : (
                 <Link to="/login">
                    <button className="navbar-login-button" >Login</button>
                 </Link>
              )}
            </div>
          </nav>
        </section>
      </>
    );
  }
}
