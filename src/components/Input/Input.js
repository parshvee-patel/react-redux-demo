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
  rows,
  name,
  required
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
            rows={rows}
            onChange={handleChange}
          ></textarea>
        ) : (
          <input
            required={required}
            id={name}
            type={type}
            placeholder={placeholder}
            value={value}
            className={className}
            onChange={handleChange}
          />
        )}
        {error && <span style={{ color: "red" }}>{error.message}</span>}
      </div>
    </React.Fragment>
  );
};

Input.propTypes = {
  value: PropTypes.any,
  type: PropTypes.oneOf([
    "text",
    "number",
    "password",
    "email",
    "file",
    "textarea",
  ]),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  validators: PropTypes.array,
  name: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: "text",
  className: "",
  validators: [],
  placeholder: "",
  label: "",
};

export default Input;
