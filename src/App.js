import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import UserData from "./components/UserData";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/user-data" component={UserData} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
