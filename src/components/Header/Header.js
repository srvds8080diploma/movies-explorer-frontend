import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import Logo from '../Logo/Logo';

const Header = ({ children, location }) => {
  const [invisible, setInvisible] = useState(false);
  useEffect(() => {
    if (location.pathname === '/signup'
      || location.pathname === '/signin') {
      setInvisible(true);
      return;
    }
    setInvisible(false);
  }, [location]);
  return (
    <header className={`header ${invisible && 'header__invisible'}`}>
      <div className="header__content">
        <Logo path="/" />
        {children}
      </div>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Header;
