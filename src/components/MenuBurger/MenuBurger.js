import React from 'react';
import PropTypes from 'prop-types';
import './MenuBurger.css';

const MenuBurger = ({ classMenuBurgerValue }) => (
  <nav className={`menu-burger ${classMenuBurgerValue && 'menu-burger_active'}`}>
    <ul className="menu-burger__list">
      <li className="menu-burger__list-item">
        <a href="https://google.com" className="menu-burger__list-link">Главная</a>
      </li>
      <li className="menu-burger__list-item">
        <a href="https://google.com" className="menu-burger__list-link">Фильмы</a>
      </li>
      <li className="menu-burger__list-item">
        <a href="https://google.com" className="menu-burger__list-link">Сохраненные фильмы</a>
      </li>
    </ul>
  </nav>
);

MenuBurger.propTypes = {
  classMenuBurgerValue: PropTypes.bool.isRequired,
};

export default MenuBurger;
