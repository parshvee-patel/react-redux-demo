import React from "react";
import PropTypes from "prop-types";

const Button = ({ value, type, variant, className, onClick }) => (
  <button className={className} type={type} variant={variant} onClick={onClick}>
    {value}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  variant: "primary",
  className: "",
  type: "",
};

export default Button;
