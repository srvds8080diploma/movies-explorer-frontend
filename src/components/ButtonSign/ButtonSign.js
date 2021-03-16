import React from 'react';
import PropTypes from 'prop-types';
import './ButtonSign.css';

const ButtonSign = ({ titleSubmit }) => (
  <button
    type="submit"
    className="register__button-submit"
  >
    {titleSubmit}
  </button>
);

ButtonSign.defaultProps = {
  titleSubmit: 'Нажать',
};

ButtonSign.propTypes = {
  titleSubmit: PropTypes.string,
};

export default ButtonSign;
