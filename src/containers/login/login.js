import React, { Component } from "react";
import { connect } from "react-redux";

//Local File Import
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
// import { loginUser } from "../../redux/actions/loginActions";
import { loginSuccessful } from "../../store/login/action";
import { getUser } from "../../store/dashboard/action";
import { Validators } from "../../validations/Validations";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (key) => (value) => {
    this.setState({ [key]: value });
  };


  handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let { history } = this.props;
      // this.getUserDetails(user)
      const user = this.state;
      this.props.loginSuccessful(user);
      setTimeout(() => {
        history.push("/dashboard");
      }, 500);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    let { email, password } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="card w-75 o-hidden border-0 shadow-lg">
            <div className="card-title o-hidden my-2 text-center">
              <h3>Login</h3>
            </div>
            <div className="card-body">
              <form className="row">
                <div className="col-sm-7">
                  <Input
                    required
                    className="form-control"
                    value={email}
                    placeholder="Enter valid email Id"
                    type="email"
                    label="Email"
                    onChange={this.handleChange("email")}
                    validators={[
                      {
                        check: Validators.required,
                        message: "Your email address is not valid",
                      },
                    ]}
                  />
                </div>

                <div className="col-sm-7">
                  <Input
                    required
                    className="form-control"
                    value={password}
                    placeholder="Enter strong password"
                    type="password"
                    label="Password"
                    onChange={this.handleChange("password")}
                    validators={[
                      {
                        check: Validators.required,
                        message:
                          "Must contain at least one number (0-9) and one uppercase (A-Z) and lowercase letter (a-z),and Special character (@, $, !, &, etc) and at least 6 or more",
                      },
                    ]}
                  />
                </div>

                <div className="col-12 mx-auto">
                  <Button
                    type="submit"
                    className="btn btn-success"
                    value="Login"
                    onClick={this.handleSubmit}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.Login,
});
const mapDispatchToProps = {
  loginSuccessful,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
