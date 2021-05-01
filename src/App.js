import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import dashboard from "./containers/login/dashboard";
// import Header from "./containers/Header";
import Login from "./containers/login/login";
import StaffRegistration from "./containers/staffDetails/staffRegistartion";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navheader">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/staff-registration"} className="nav-link">
                  Registration
                </Link>
              </li>
            </ul>
          </div>
        </nav>{" "}
        <br />
        <Switch>
          <Route exact path="/dashboard" component={dashboard} />
          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/staff-registration"
            component={StaffRegistration}
          />
          <Route> 404 Not Found!</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
