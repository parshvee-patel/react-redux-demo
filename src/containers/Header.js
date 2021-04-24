import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>Shop</h2>
        <Link to="/">Login Page</Link>
        <Link to="/user-data">View Data</Link>
        <Link to="/product-listing">Product Listing</Link>
      </div>
    </div>
  );
};

export default Header;
