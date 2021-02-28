import React from 'react';
// import PropTypes from 'prop-types';
import './Header.css';
import MenuProfile from '../MenuProfile/MenuProfile';
import Navigation from '../Navigation/Navigation';

const Header = () => (
  <header className="header">
    <div className="header__content">
      <button type="button" className="header__logo" />
      {true && <Navigation /> }
      {false && <MenuProfile />}
    </div>
  </header>
);

// Header.defaultProps = {
//   valueButton: 'Войти',
//   valueTitle: 'Регистрация',
//   isLogged: true,
// };
// Header.propTypes = {
//   isLogged: PropTypes.bool,
//   valueButton: PropTypes.string,
//   valueTitle: PropTypes.string,
// };

export default Header;
