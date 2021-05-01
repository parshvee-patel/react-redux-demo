import React, { Component } from "react";
import { connect } from "react-redux";

//Import Custom File
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Validators } from "../../validations/Validations";
import { ActionCreators } from "../../redux/actions/auth";
import handlers from "../../handlers";

// default image
// import UserAvatar from "../../../public/avatars/user";
const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const pwdRegexp = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,50})/;

class StaffRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staff: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        contactNo: "",
        address: "",
        city: "",
        zipCode: "",
        profileImage: "",

        //Validation States
        isLoaderVisible: false,
        successful: false,
        message: "",
      },
      submitted: false,
    };
  }
  
  // componentDidMount() {
  //   this.setState({ isLoaderVisible: false });
  //   console.log("I am in componentdidMount");
  //   if (this.props.match.params.id) {
  //     console.log("i am in if");
  //     console.log(this.props.match.params.id, "id");
  //   } else {
  //     console.log("i am in else");
  //   }
  //   this.setState({ isLoaderVisible: true });
  // }

  //Handle Change for all input fields
  handleChange = (key) => (value) => {
    this.setState({ [key]: value });
  };

  //Staff Details Save Method
  handleOnSave = async (e) => {
    try {
      e.preventDefault();
      let {
        firstName,
        lastName,
        email,
        password,
        contactNo,
        address,
        city,
        zipCode,
        profileImage,
      } = this.state;

      //Blank Validation Check
      if (!firstName || !lastName || !email || !password || !contactNo) {
        alert("Blank field is not allowed");
      } else {
        if (emailRegexp.test(String(this.state.email).toLowerCase())) {
          if (phoneRegexp.test(this.state.contactNo)) {
            if (pwdRegexp.test(this.state.password)) {
              // Staff Details object creation
              let staffData = new FormData();
              staffData.append("firstName", firstName);
              staffData.append("lastName", lastName);
              staffData.append("email", email);
              staffData.append("password", password);
              staffData.append("contactNo", contactNo);
              staffData.append("address", address);
              staffData.append("city", city);
              staffData.append("zipCode", zipCode);
              staffData.append("profileImage", profileImage);

              let response = await handlers.staffRegistration.addStaff(
                staffData
              );
              console.log(response, "staff Data");

              if (response) {
                alert("Staff Details Added Successfully.");
                this.setState({
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                  contactNo: "",
                  address: "",
                  city: "",
                  zipCode: "",
                });
              } else {
                alert("Something is worng! Please try again letter");
              }
            } else {
              alert("The password you have entered is not valid!");
            }
          } else {
            alert("Please put 10  digit mobile number");
          }
        } else {
          alert("Email address is not valid");
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  //Handle on Click for Registration
  HandleClick = async (e) => {
    try {
      this.handleOnSave(e).then(() => {
        this.setState({ isLoaderVisible: true });
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    let {
      firstName,
      lastName,
      email,
      password,
      contactNo,
      address,
      city,
      zipCode,
      profileImage,
      successful,
      message,
    } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
          <div className="card o-hidden border-0 shadow-lg">
            <div className="card-header o-hidden border-0 shadow-lg my-2 text-center">
              <h3>Registration</h3>
            </div>
            <div className="card-body">
              <form className="row">
                <div className="col-md-6">
                  <Input
                    required
                    className="form-control"
                    value={firstName}
                    placeholder="Enter valid name"
                    type="text"
                    label="First Name"
                    onChange={this.handleChange("firstName")}
                    validators={[
                      {
                        check: Validators.required,
                        message: "This Fields is Required",
                      },
                    ]}
                  />
                </div>

                <div className="col-md-6">
                  <Input
                    required
                    className="form-control"
                    value={lastName}
                    placeholder="Enter last name"
                    type="text"
                    label="Last Name"
                    onChange={this.handleChange("lastName")}
                    validators={[
                      {
                        check: Validators.required,
                        message: "This Fields is Required",
                      },
                    ]}
                  />
                </div>

                <div className="col-md-6">
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

                <div className="col-md-6">
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

                <div className="col-md-6">
                  <Input
                    className="form-control"
                    value={address}
                    placeholder="1234 Main St "
                    type="textarea"
                    label="Address"
                    rows="3"
                    onChange={this.handleChange("address")}
                  />
                </div>

                <div className="col-md-6">
                  <Input
                    className="form-control"
                    value={contactNo}
                    placeholder="Enter valid Mobile Number"
                    type="text"
                    label="Contact No."
                    onChange={this.handleChange("contactNo")}
                    validators={[
                      {
                        check: Validators.required,
                        message: "Please put 10 digit Mobile number",
                      },
                    ]}
                  />
                </div>

                <div className="col-md-6">
                  <Input
                    className="form-control"
                    value={city}
                    placeholder="Enter city"
                    type="text"
                    label="City"
                    onChange={this.handleChange("city")}
                  />
                </div>

                <div className="col-md-6">
                  <Input
                    className="form-control"
                    value={zipCode}
                    placeholder="Enter zip code "
                    type="number"
                    label="Zip Code"
                    onChange={this.handleChange("zipCode")}
                  />
                </div>

                <div className="col-md-6">
                  <Input
                    className="form-control"
                    value={profileImage}
                    type="file"
                    label="Profile Image"
                    // onChange={(e) =>
                    //   this.setState({
                    //     profileImage: e.target.files[0],
                    //   })
                    // }
                  />
                </div>

                <div className="col-12  mx-auto">
                  <Button
                    type="submit"
                    className="btn btn-success"
                    value="Sign Up"
                    onClick={this.HandleClick}
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


export default StaffRegistration;
