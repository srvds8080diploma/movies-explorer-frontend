import React from 'react';
import PropTypes from 'prop-types';
import './InputSign.css';

const InputSign = ({
  name, lable, placeholder, type, isInvalid, textError, value, onChange, required, min, max,
}) => (
  <label htmlFor={name} className="register__input-label">
    <span
      className="register__input-label-description"
    >
      {lable}
    </span>
    <input
      name={name}
      type={type}
      className="register__input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      minLength={min}
      maxLength={max}
    />
    <span
      className={`register__input-error ${isInvalid && 'register__input-error_active'}`}
    >
      {textError}
    </span>
  </label>
);

InputSign.defaultProps = {
  value: '',
  name: 'name',
  lable: 'lable',
  placeholder: 'placeholder',
  type: 'text',
  textError: 'error',
  isInvalid: false,
  required: true,
  min: null,
  max: null,
};

InputSign.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  lable: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  textError: PropTypes.string,
  isInvalid: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default InputSign;
