import React from 'react';
import MenuMovies from '../MenuMovies/MenuMovies';
import Account from '../Account/Account';
import './Navigation.css';

const Navigation = () => (
  <div className="navigation">
    <div className="navigation__menu-classic">
      <MenuMovies />
      <Account />
    </div>

  </div>
);

export default Navigation;
