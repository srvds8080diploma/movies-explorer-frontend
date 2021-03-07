import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ children }) => (
  <header className="header">
    <div className="header__content">
      <Link to="/" className="header__logo" />
      {children}
    </div>
  </header>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
