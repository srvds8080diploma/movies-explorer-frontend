import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MenuBurger.css';
import Account from '../Account/Account';

const MenuBurger = ({ classMenuBurgerValue, handleClick }) => {
  const handleClickLinck = () => {
    handleClick();
  };
  return (
    <nav className={`menu-burger ${classMenuBurgerValue && 'menu-burger_active'}`}>
      <div className={`menu-burger__container ${classMenuBurgerValue && 'menu-burger__container_active'}`}>
        <ul className="menu-burger__list">
          <li className="menu-burger__list-item">
            <Link onClick={handleClickLinck} to="/" className="menu-burger__list-link">Главная</Link>
          </li>
          <li className="menu-burger__list-item">
            <Link onClick={handleClickLinck} to="/movies" className="menu-burger__list-link">Фильмы</Link>
          </li>
          <li className="menu-burger__list-item">
            <Link onClick={handleClickLinck} to="saved-movies" className="menu-burger__list-link">Сохраненные фильмы</Link>
          </li>
          <li className="menu-burger__list-item">
            <Account />
          </li>
        </ul>
      </div>
    </nav>
  );
};

MenuBurger.propTypes = {
  classMenuBurgerValue: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default MenuBurger;
