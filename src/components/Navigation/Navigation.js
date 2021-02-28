import React, { useState } from 'react';
import BurgerButton from '../BurgerButton/BurgerButton';
import MenuBurger from '../MenuBurger/MenuBurger';
import MenuMovies from '../MenuMovies/MenuMovies';
import './Navigation.css';

const Navigation = () => {
  const [classBurgerValue, setClassburger] = useState(false);
  const [classMenuBurgerValue, setClassMenuBurger] = useState(false);
  const handleClickButtonBurger = () => {
    setClassburger(!classBurgerValue);
    setClassMenuBurger(!classMenuBurgerValue);
  };

  return (
    <div className="navigation">
      <div className="navigation__menu-classic">
        <MenuMovies />
      </div>
      <div className="navigation__menu-burger">
        <MenuBurger classMenuBurgerValue={classMenuBurgerValue} />
        <BurgerButton
          handleClickButtonBurger={handleClickButtonBurger}
          classBurgerValue={classBurgerValue}
        />
      </div>
    </div>
  );
};

export default Navigation;
