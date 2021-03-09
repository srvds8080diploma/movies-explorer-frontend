import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MenuProfile.css';

const MenuProfile = ({ valueButton, valueTitle }) => (
  <div className="menu-profile">
    <Link to="/signup" className="menu-profile__title">
      {valueTitle}
    </Link>
    <Link to="/signin" className="menu-profile__button">
      {valueButton}
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
