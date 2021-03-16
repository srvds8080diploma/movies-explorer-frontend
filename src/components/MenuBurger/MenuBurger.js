import React from 'react';
import PropTypes from 'prop-types';
import './MenuBurger.css';
import Account from '../Account/Account';

const MenuBurger = ({ classMenuBurgerValue }) => (
  <nav className={`menu-burger ${classMenuBurgerValue && 'menu-burger_active'}`}>
    <div className={`menu-burger__container ${classMenuBurgerValue && 'menu-burger__container_active'}`}>
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
        <li className="menu-burger__list-item">
          <Account />
        </li>
      </ul>
    </div>
  </nav>
);

MenuBurger.propTypes = {
  classMenuBurgerValue: PropTypes.bool.isRequired,
};

export default MenuBurger;
