import React from 'react';
import './ToggleCheckbox.css';

const ToggleCheckbox = () => (
  <label className="toggle-switch" htmlFor="checkbox">
    <input
      type="checkbox"
      className="toggle-switch__checkbox"
      name="checkbox"
      id="checkbox"
    />
    <span className="toggle-switch__slider" />
  </label>
);

export default ToggleCheckbox;
