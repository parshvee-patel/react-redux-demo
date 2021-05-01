import React from "react";
import PropTypes from "prop-types";

const Button = ({ value, type, className, onClick }) => (
  <button className={className} type={type} onClick={onClick}>
    {value}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: "",
  type: "",
};

export default Button;
