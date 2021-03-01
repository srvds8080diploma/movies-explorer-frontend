import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ children }) => (
  <header className="header">
    <div className="header__content">
      <button type="button" className="header__logo" />
      {children}
    </div>
  </header>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
