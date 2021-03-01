import React, { useState } from 'react';
import {
  withRouter,
} from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MenuBurger from '../MenuBurger/MenuBurger';
import MenuProfile from '../MenuProfile/MenuProfile';
import Navigation from '../Navigation/Navigation';
import BurgerButton from '../BurgerButton/BurgerButton';

const App = () => {
  const [valueButton, setValueButton] = useState(false);
  const [valueMenuBurger, setValueMenuBurger] = useState(false);

  const handleClickButtonBurger = () => {
    setValueButton(!valueButton);
    setValueMenuBurger(!valueMenuBurger);
  };
  return (
    <>
      <MenuBurger
        classMenuBurgerValue={valueMenuBurger}
      />
      <div className="page">
        <Header>
          {false
            ? <MenuProfile />
            : <Navigation />}
          <BurgerButton
            handleClickButtonBurger={handleClickButtonBurger}
            classBurgerValue={valueButton}
          />
        </Header>
        {true && <Main />}
        <Footer />
      </div>
    </>
  );
};

export default withRouter(App);
