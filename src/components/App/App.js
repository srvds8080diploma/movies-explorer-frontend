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
import SavedMovies from '../SavedMovies/SavedMovies';

const App = ({ location, history }) => {
  const [valueButton, setValueButton] = useState(false);
  const [valueMenuBurger, setValueMenuBurger] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleClickButtonBurger = () => {
    setValueButton(!valueButton);
    setValueMenuBurger(!valueMenuBurger);
  };
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    history.push('/movies');
  };
  const ArrayLinks = [
    'https://api.nomoreparties.co/uploads/stones_in_exile_b2f1b8f4b7.jpeg',
    'https://api.nomoreparties.co/uploads/taqwacore2_2f487d2e74.jpeg',
    'https://api.nomoreparties.co/uploads/zagruzhennoe_113f557116.jpeg',
    'https://api.nomoreparties.co/uploads/blur_a43fcf463d.jpeg',
    'https://api.nomoreparties.co/uploads/all_tommoros_parties_33a125248d.jpeg',
    'https://api.nomoreparties.co/uploads/stones_in_exile_b2f1b8f4b7.jpeg',
    'https://api.nomoreparties.co/uploads/posters_came_from_the_walls_2009_001_posters_180fe1a19f.jpeg',
    'https://api.nomoreparties.co/uploads/all_tommoros_parties_33a125248d.jpeg',
    'https://api.nomoreparties.co/uploads/stones_in_exile_b2f1b8f4b7.jpeg',
    'https://api.nomoreparties.co/uploads/stones_in_exile_b2f1b8f4b7.jpeg',
    'https://api.nomoreparties.co/uploads/taqwacore2_2f487d2e74.jpeg',
    'https://api.nomoreparties.co/uploads/zagruzhennoe_113f557116.jpeg',
  ];

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
            <Login handleAction={handleLogin} />
          </Route>
          <Route path="/movies">
            <Movies arrayFilms={ArrayLinks} />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies arrayFilms={ArrayLinks} />
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
