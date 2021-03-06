import React from 'react';
import PropTypes from 'prop-types';
import './InputSign.css';

const InputSign = ({
  name, lable, placeholder, type, textError, isInvalid,
}) => (
  <label htmlFor={name} className="register__input-label">
    <span
      className="register__input-label-description"
    >
      {lable}
    </span>
    <input
      name="name"
      maxLength="50"
      type={type}
      className={`register__input ${isInvalid && 'register__input_invalid'}`}
      placeholder={placeholder}
    />
    <span
      className={`register__input-error ${isInvalid && 'register__input-error_active'}`}
    >
      {textError}
    </span>
  </label>
);

InputSign.defaultProps = {
  name: 'name',
  lable: 'lable',
  placeholder: 'placeholder',
  type: 'text',
  textError: 'error',
  isInvalid: false,
};

InputSign.propTypes = {
  name: PropTypes.string,
  lable: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  textError: PropTypes.string,
  isInvalid: PropTypes.bool,
};

export default InputSign;
