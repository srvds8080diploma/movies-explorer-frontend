import React from 'react';
import PropTypes from 'prop-types';
import './ToggleCheckbox.css';

const ToggleCheckbox = ({ label }) => (
  <label className="toggle-switch" htmlFor="checkbox">
    <input
      type="checkbox"
      className="toggle-switch__checkbox"
      name="checkbox"
      id="checkbox"
    />
    <span className="toggle-switch__slider" />
    <span className="toggle-switch__label">{label}</span>
  </label>
);

ToggleCheckbox.defaultProps = {
  label: 'Короткометражки',
};
ToggleCheckbox.propTypes = {
  label: PropTypes.string,
};
export default ToggleCheckbox;
