import React, { Component } from "react";
import {loginAuthUser} from '../../utils/fetchUtils';
import { connect } from "react-redux";
import "./style.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userName: ""
    };
    this.getLogin = this.getLogin.bind(this);
    this.getUserName = this.getUserName.bind(this);
}
    getUserName = (e) => {
        this.setState({userName : e.target.value})
    }
    getLogin = (e) => {
        e.preventDefault();
        const {userName} = this.state;
        const val = loginAuthUser(userName).then(data =>{  
          const {login} = data ;
          if(login === userName){
               this.props.setUserData(userName)
                // window.location.replace("/profilePage");
          }
          else{
            alert("sorry Wrong username is given to us ..........")
          }
        });

      };

    // axios(
    //   `${process.env.REACT_APP_BASE_URL}/users/${this.state.userName}`
    // ).then((data) => {
    //   if (this.state.userName === data.data.login) {
    //     this.setState({ authUserRecord: data.data });
    //     localStorage.setItem(
    //       "authData",
    //       JSON.stringify(this.state.authUserRecord)
    //     );
    //     localStorage.setItem("userName", JSON.stringify(this.state.userName));
    //     localStorage.setItem("token", JSON.stringify(this.state.PAT));
    //     window.location.replace("/profilePage");
    //   } else {
    //     alert("Wrong Username and Password.......");
    //   }
    // });


  render() {
      const {userName} = this.state;
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

          <button
            type="submit"
            className="login"
            onClick={this.getLogin}
          >
            Login
          </button>
        </form>
      </section>
    );
  }
}

// const mapStateToProps = (state) => {
//     return {
//         userName : state.loginReducer
//     }
// }
const mapDispatchToProps = (dispatch) => {
    return ({
        setUserData : (userName) => {
           dispatch({
             type : "LOGIN",
             payload: userName
           })
         }
    })
}
export default connect(null,mapDispatchToProps)(Login)


