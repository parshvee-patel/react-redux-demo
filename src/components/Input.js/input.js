import React, { useState } from "react";
import PropTypes from "prop-types";

//Import Local Files
import { validateInput } from "../../validations/Validations";

const Input = ({
  value,
  label,
  placeholder,
  type,
  onChange,
  validators,
  className,
  row,
  name,
}) => {
  const [error, setError] = useState();
  const handleChange = (e) => {
    const { value } = e.target;
    setError(validateInput(validators, value));
    onChange(value);
  };

  return (
    <React.Fragment>
      <div className="form-group">
        {label && <label htmlFor={name}>{label}</label>}

        {type === "textarea" ? (
          <textarea
            className={className}
            placeholder={placeholder}
            value={value}
            row={row}
            onChange={handleChange}
          ></textarea>
        ) : (
          <input
            id={name}
            type={type}
            placeholder={placeholder}
            value={value}
            className={className}
            onChange={handleChange}
            style={error.message && { border: "solid 1px red" }}
          />
        )}
        {error && <span>{error.message}</span>}
      </div>
    </React.Fragment>
  );
};

Input.propTypes = {
  value: PropTypes.any,
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  validators: PropTypes.array,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["text", "number", "password","textarea"]),
};

Input.defaultProps = {
  type: "text",
  className: "",
  validators: [],
  placeholder: "",
  label: "",
};

export default Input;
