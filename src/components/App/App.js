import React, { useState } from 'react';
import {
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MenuBurger from '../MenuBurger/MenuBurger';
import MenuProfile from '../MenuProfile/MenuProfile';
import Navigation from '../Navigation/Navigation';
import BurgerButton from '../BurgerButton/BurgerButton';
import Movies from '../Movies/Movies';
import MenuMovies from '../MenuMovies/MenuMovies';
import Account from '../Account/Account';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

const App = ({ location, history }) => {
  const [valueButton, setValueButton] = useState(false);
  const [valueMenuBurger, setValueMenuBurger] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClickButtonBurger = () => {
    setValueButton(!valueButton);
    setValueMenuBurger(!valueMenuBurger);
  };
  // eslint-disable-next-line no-unused-vars
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <MenuBurger
        classMenuBurgerValue={valueMenuBurger}
      />
      <div className="page">
        <Header location={location}>
          {isLoggedIn
            ? <MenuProfile />
            : (
              <Navigation>
                <MenuMovies />
                <Account />
              </Navigation>
            )}
          <BurgerButton
            handleClickButtonBurger={handleClickButtonBurger}
            classBurgerValue={valueButton}
          />
        </Header>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/saved-movies">
            <Movies />
          </Route>
          <Route path="/*">
            <NotFound history={history} />
          </Route>
        </Switch>
        <Footer location={location} />
      </div>
    </>
  );
};

App.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  history: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default withRouter(App);

// TODO сделать saved-movies
// TODO сделать registration
