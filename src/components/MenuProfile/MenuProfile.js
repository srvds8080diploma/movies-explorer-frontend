import React from 'react';
import PropTypes from 'prop-types';
import './MenuProfile.css';

const MenuProfile = ({ valueButton, valueTitle }) => (
  <div className="menu-profile">
    <button type="button" className="menu-profile__title">{valueTitle}</button>
    <button type="button" className="menu-profile__button">{valueButton}</button>
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
