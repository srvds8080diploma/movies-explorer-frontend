import React from 'react';
import PropTypes from 'prop-types';
import './BurgerButton.css';

const BurgerButton = ({ classBurgerValue, handleClickButtonBurger }) => (
  <button onClick={handleClickButtonBurger} type="button" className={`burger-button ${classBurgerValue && 'burger-button_active'}`}>
    <span className={`burger-button__base-line ${classBurgerValue && 'burger-button__base-line_active'}`} />
  </button>
);

BurgerButton.propTypes = {
  classBurgerValue: PropTypes.bool.isRequired,
  handleClickButtonBurger: PropTypes.func.isRequired,
};

export default BurgerButton;
