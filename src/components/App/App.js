import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import UserContext from '../../context/currentUser';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
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
import ArrayLinks from '../../utils/constants';
import MoviesApi from '../../utils/MoviesApi';
import MainApi from '../../utils/MainApi';
import SearchForm from '../SearchForm/SearchForm';

const App = ({ location, history }) => {
  const [currentUserContext, setCurrentUserContext] = useState({});
  const [width, setWith] = useState(window.innerWidth);
  const [valueButton, setValueButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [valueMenuBurger, setValueMenuBurger] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isShort, setIsShort] = useState(false);
  const [foundMovies, setFoundMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const handleCloseBurger = () => {
    setValueButton(!valueButton);
    setValueMenuBurger(!valueMenuBurger);
  };
  const handleSetUserData = (data) => {
    MainApi.setUserData(data)
      .then((res) => setCurrentUserContext((prevState) => ({
        ...prevState,
        name: res.name,
        email: res.email,
      })))
      .catch((err) => console.log(err));
  };
  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    history.push('/');
  };
  const handleLogin = (data) => {
    MainApi.authentication(data)
      .then((res) => {
        setCurrentUserContext(res);
        localStorage.setItem('jwt', res.token);
        setIsLoggedIn(true);
        return history.push('/movies');
      })
      .catch((err) => console.log(err));
  };
  const handleRegister = (data) => {
    MainApi.registration(data)
      .then(() => {
        setIsLoggedIn(true);
        return handleLogin({ email: data.email, password: data.password });
      })
      .catch(() => setIsLoggedIn(false));
  };
  const searchMovies = (movies, value) => {
    const valueLowerCase = value.toLowerCase();
    return new Promise(((resolve) => resolve(movies
      .filter((item) => JSON
        .stringify(item.nameRU)
        .toLowerCase()
        .includes(valueLowerCase)
        || JSON
          .stringify(item.nameEN)
          .toLowerCase()
          .includes(valueLowerCase)))));
  };
  const transformArray = (array) => array.map((card) => {
    if (location.pathname === '/movies') {
      if (!card.image) {
        console.log({ message: `неверные данные ${card.nameRU}` });
        const transformedCards = {
          movieId: 101,
          nameRU: card.nameRU,
          nameEN: card.nameEN,
          country: card.country,
          description: card.description,
          director: card.director,
          year: card.year,
          duration: card.duration,
          trailer: card.trailerLink,
          thumbnail: 'https://api.nomoreparties.co/uploads/thumbnail_zagruzhennoe_53d33dc9df.jpeg',
          image: 'https://api.nomoreparties.co/uploads/thumbnail_zagruzhennoe_53d33dc9df.jpeg',
        };
        return transformedCards;
      }
      const transformedCards = {
        movieId: card.id,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
        country: card.country,
        description: card.description,
        director: card.director,
        year: card.year,
        duration: card.duration,
        trailer: card.trailerLink,
        thumbnail: `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`,
        image: `https://api.nomoreparties.co${card.image.url}`,
      };
      return transformedCards;
    }
    return card;
  });
  const handleCheckShort = (value) => {
    setIsShort(value);
  };

  const handleSearch = (value) => {
    setIsLoading(true);
    if (value) {
      let movies;
      if (location.pathname === '/movies') {
        movies = JSON.parse(localStorage.getItem('movies'));
      } else if (location.pathname === '/saved-movies') {
        movies = JSON.parse(localStorage.getItem('savedMovies'));
        if (movies) {
          setSavedMovies(transformArray(movies));
        }
      }
      if (movies) {
        searchMovies(movies, value)
          .then((res) => {
            if (res) {
              setTimeout(() => {
                setIsLoading(false);
              }, 1000);
              return ((location.pathname === '/movies')
                ? (setFoundMovies(transformArray(res)))
                : (setSavedMovies(transformArray(res))));
            }
            return console.log({ message: 'ничего не найдено' });
          })
          .catch((err) => {
            console.log(err);
            setTimeout(() => {
              setIsLoading(false);
            }, 1000);
          });
        return;
      }
    }
    console.log({ message: 'запрос не может быть пустым' });
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  const handleLike = (card, isLiked) => {
    if (isLiked) {
      return MainApi.deleteCard((savedMovies.find((item) => item.movieId === card.movieId))._id)
        .then(() => {
          const newSavedMovies = savedMovies.filter((item) => card._id !== item._id);
          const newFoundMovies = foundMovies.filter((item) => card.movieId !== item.movieId);
          setSavedMovies(newSavedMovies);
          return setFoundMovies(newFoundMovies);
        })
        .catch((err) => console.log(err));
    }
    return MainApi.addCard(card)
      .then(({ movie }) => (
        setSavedMovies((prevState) => [movie, ...prevState])
      ))
      .catch((err) => console.log(err));
  };
  const resizeWindow = () => {
    setTimeout(() => {
      setWith((prevState) => ({
        ...prevState,
        width: window.innerWidth,
      }));
    }, 1000);
  };
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      MainApi.tokenCheck(token)
        .then((res) => {
          setCurrentUserContext(res);
          setIsLoggedIn(true);
          return history.push('/movies');
        })
        .catch(() => {
          setIsLoggedIn(false);
          history.push('/');
        });
    }
  }, []);
  useEffect(() => {
    MoviesApi.getData()
      .then((res) => localStorage.setItem('movies', JSON.stringify(res)))
      .catch((err) => console.log(err));
    MainApi.getCards()
      .then((res) => {
        localStorage.setItem('savedMomies', JSON.stringify(res));
        return setSavedMovies(res);
      })
      .catch((err) => console.log(err));
  }, []);
  useLayoutEffect(() => {
    setIsShort(false);
    window.addEventListener('resize', resizeWindow);
    resizeWindow();
    return () => window.removeEventListener('resize', resizeWindow);
  }, []);

  return (
    <UserContext.Provider value={currentUserContext}>
      <MenuBurger
        classMenuBurgerValue={valueMenuBurger}
        handleClick={handleCloseBurger}
      />
      <div className="page">
        <Header location={location}>
          {!isLoggedIn
            ? <MenuProfile />
            : (
              <>
                <Navigation>
                  <MenuMovies />
                  <Account />
                </Navigation>
                <BurgerButton
                  handleClickButtonBurger={handleCloseBurger}
                  classBurgerValue={valueButton}
                />
              </>
            )}
        </Header>
        <Switch>
          <ProtectedRoute
            path="/movies"
            component={Movies}
            loggedIn={isLoggedIn}
            arrayFilms={foundMovies}
            savedMovies={savedMovies}
            onLike={handleLike}
            width={width}
            isShort={isShort}
            isLoading={isLoading}
          >
            <SearchForm
              onCheck={handleCheckShort}
              onSubmit={handleSearch}
            />
          </ProtectedRoute>
          <ProtectedRoute
            path="/profile"
            component={Profile}
            onLogout={handleLogout}
            onSubmit={handleSetUserData}
            loggedIn={isLoggedIn}
            arrayFilms={ArrayLinks}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            onLogout={handleLogout}
            loggedIn={isLoggedIn}
            arrayFilms={savedMovies}
            onLike={handleLike}
            width={width}
            isShort={isShort}
            isLoading={isLoading}
          >
            <SearchForm
              onCheck={handleCheckShort}
              onSubmit={handleSearch}
            />
          </ProtectedRoute>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/signup">
            <Register onSubmit={handleRegister} />
          </Route>
          <Route path="/signin">
            <Login onSubmit={handleLogin} />
          </Route>
          <Route path="/*">
            <NotFound history={history} />
          </Route>
        </Switch>
        <Footer location={location} />
      </div>
    </UserContext.Provider>
  );
};

App.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  history: PropTypes.shape({
    action: PropTypes.string.isRequired,
    block: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired,
    listen: PropTypes.func.isRequired,
    location: PropTypes.objectOf(PropTypes.string).isRequired,
    push: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
  }).isRequired,
};
export default withRouter(App);
