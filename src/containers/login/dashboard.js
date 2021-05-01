import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { user } = this.props.login;
    return (
      <div>
        <h1>Email: {user.email}</h1>
        <h1>Password: {user.password}</h1>
      </div>
    );
  }
}

// <h1>Email: {this.props.login ? this.props.login.user.email : ""}</h1>
// <h1>Password: {this.props.login ? this.props.login.user.password : ""}</h1>

const mapStateToProps = (state) => ({
  login: state.Login,
});

export default connect(mapStateToProps)(Dashboard);
