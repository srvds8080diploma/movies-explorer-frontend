import React from 'react';
import PropTypes from 'prop-types';
import './ButtonStill.css';

const ButtonStill = ({ title }) => (
  <button type="button" className="button-still">{title}</button>
);

ButtonStill.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ButtonStill;
