import React from 'react';
import PropTypes from 'prop-types';
import './ButtonStill.css';

const ButtonStill = ({ title, onClick }) => (
  <button type="button" onClick={onClick} className="button-still">{title}</button>
);

ButtonStill.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonStill;
