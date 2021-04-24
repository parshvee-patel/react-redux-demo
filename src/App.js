import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./containers/Header";
import LoginForm from "./containers/LoginForm";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";
import UserData from "./containers/UserData";

function App() {
  return (
    <Router>
      <div>
      <Header />
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/user-data" component={UserData} />
          <Route exact path="/product-listing" component={ProductListing} />
          <Route exact path="/product/:productID" component={ProductDetails} />
          <Route> 404 Not Found!</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
