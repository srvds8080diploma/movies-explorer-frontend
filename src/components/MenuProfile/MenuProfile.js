import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MenuProfile.css';

const MenuProfile = ({ valueButton, valueTitle }) => (
  <div className="menu-profile">
    <Link to="/signup">
      <button type="button" className="menu-profile__title">{valueTitle}</button>
    </Link>
    <Link to="/signin">
      <button type="button" className="menu-profile__button">{valueButton}</button>
    </Link>
  </div>
);

MenuProfile.defaultProps = {
  valueButton: 'Войти',
  valueTitle: 'Регистрация',
};
MenuProfile.propTypes = {
  valueButton: PropTypes.string,
  valueTitle: PropTypes.string,
};

export default MenuProfile;
