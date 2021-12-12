import React, { Component } from "react";
import { loginAuthUser } from "../../utils/fetchUtils";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login } from "../../redux/actions/actions";
import "./style.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
    };
    this.getLogin = this.getLogin.bind(this);
    this.getUserName = this.getUserName.bind(this);
  }
  getUserName = (e) => {
    this.setState({ userName: e.target.value });
  };
  getLogin = (e) => {
    e.preventDefault();

    const { userName } = this.state;
    this.props.login(userName);
    const val = loginAuthUser(userName).then((data) => {
      const { login } = data;
      if (login === userName) {
        window.location = `/newsfeed`;
      } else {
        alert("sorry Wrong username....");
      }
    });
  };
  render() {
    const { userName } = this.state;
    return (
      <section>
        <form className="login-form">
          <input
            type="text"
            className="inputBox"
            placeholder="Enter username"
            onChange={this.getUserName}
            value={userName}
          />

          <button type="submit" className="login" onClick={this.getLogin}>
            Login
          </button>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ login: login }, dispatch);
};
export default connect(null, mapDispatchToProps)(Login);
