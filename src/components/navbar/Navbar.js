import  { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/emumba-logo.png";
import Dropdown from "./dropdown/Dropdown";
import SearchBar from "./searchBar/Searchbar";
import "./style.css";

export default class Navbar extends Component {
  
  render() {
    return (
      <>
        <section>
          <nav className="navBar">
            <div className="left-Section">
              <Link to="/"> 
                {" "}
                <img src={Logo} alt="Emumba" className="navbar-logo-styling"  />{" "}
              </Link> 
            </div>
            <div className="navbar-search-section">
              <SearchBar />
              {
                JSON.parse(localStorage.getItem("userName")) ===
              "Zohaibkhattak15" ? (
                <Dropdown />
              ) : (
                 <Link to="/login">
                    <button className="navbar-login-button">Login</button>
                 </Link>
              )}
            </div>
          </nav>
        </section>
      </>
    );
  }
}
