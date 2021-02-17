import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { ReactComponent as Logo } from '../../images/logo.svg';

const Header = ({ valueButton, valueTitle }) => (
  <header className="header">
    <div className="header__content">
      <Logo id="1" className="header__logo" />
      <div className="header__profile">
        <button type="button" className="header__title">{valueTitle}</button>
        <button type="button" className="header__button">{valueButton}</button>
      </div>
    </div>
  </header>
);

Header.defaultProps = {
  valueButton: 'Войти',
  valueTitle: 'Регистрация',
};
Header.propTypes = {
  valueButton: PropTypes.string,
  valueTitle: PropTypes.string,
};

export default Header;
