import React from 'react';
import PropTypes from 'prop-types';
import './ButtonSign.css';

const ButtonSign = ({ disabled, titleSubmit }) => (
  <button
    type="submit"
    className={`register__button-submit ${disabled && 'register__button-submit_type_disable'}`}
    disabled={disabled}
  >
    {titleSubmit}
  </button>
);

ButtonSign.defaultProps = {
  titleSubmit: 'Нажать',
  disabled: false,
};

ButtonSign.propTypes = {
  titleSubmit: PropTypes.string,
  disabled: PropTypes.bool,
};

export default ButtonSign;
