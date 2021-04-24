import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UserData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { isLoggedIn, user } = this.props.login;
    return (
      <div>
        <h1>Email: {user.email}</h1>
        <h1>Password: {user.password}</h1>
        <h1>isLogin: {isLoggedIn ? "LoggedIn" : "Logged Out"}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.login,
});

export default connect(mapStateToProps)(UserData);
