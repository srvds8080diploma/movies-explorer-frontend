import React, {
  useState,
  useEffect,
  useLayoutEffect,
} from 'react';
import {
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import { ShortDurationValue } from '../../utils/constants';
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
import MoviesApi from '../../utils/MoviesApi';
import MainApi from '../../utils/MainApi';
import SearchForm from '../SearchForm/SearchForm';
import InfoPopup from '../InfoPopup/InfoPopup';

const App = ({ location, history }) => {
  const [currentUserContext, setCurrentUserContext] = useState({});
  const [size, setSize] = useState(window.innerWidth);
  const [valueButton, setValueButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [valueMenuBurger, setValueMenuBurger] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isShort, setIsShort] = useState(false);
  const [foundMovies, setFoundMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [infoValues, setInfoMessage] = useState({
    message: '',
    value: false,
  });
  const handlePopupInfo = (message) => {
    setTimeout(() => {
      setInfoMessage((prevState) => ({
        ...prevState,
        message: '',
        value: false,
      }));
    }, 5000);
    setTimeout(() => {
      setInfoMessage((prevState) => ({
        ...prevState,
        message,
        value: true,
      }));
    }, 1000);
  };
  const handleCloseBurger = () => {
    setValueButton(!valueButton);
    setValueMenuBurger(!valueMenuBurger);
  };
  const handleSetUserData = (data) => {
    MainApi.setUserData(data)
      .then((res) => {
        setCurrentUserContext((prevState) => ({
          ...prevState,
          name: res.name,
          email: res.email,
        }));
        handlePopupInfo('данные изменены');
        return Promise.resolve();
      })
      .catch(() => handlePopupInfo('что-то пошло не так'));
  };
  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    history.push('/');
    handlePopupInfo('Вы свободны');
  };
  const handleLogin = (data) => {
    MainApi.authentication(data)
      .then((res) => {
        setCurrentUserContext(res);
        localStorage.setItem('jwt', res.token);
        setIsLoggedIn(true);
        handlePopupInfo('Велкам');
        return history.push('/movies');
      })
      .catch(() => {
        handlePopupInfo('что-то пошло не так');
      });
  };
  const handleRegister = (data) => {
    MainApi.registration(data)
      .then(() => {
        setIsLoggedIn(true);
        return handleLogin({ email: data.email, password: data.password });
      })
      .catch(() => {
        setIsLoggedIn(false);
        handlePopupInfo('что-то пошло не так');
      });
  };
  const handleCheckShort = (value) => {
    setIsShort(value);
  };
  const transformArray = (array) => array.map((card) => {
    const { url } = card.image
      ? card.image
      : 'https://api.nomoreparties.co/uploads/zagruzhennoe_1_fd5faff237.jpeg';
    const transformedCard = {
      image: `https://api.nomoreparties.co${url}`,
      movieId: card.id,
      nameRU: card.nameRU,
      nameEN: card.nameEN,
      country: card.country,
      description: card.description,
      director: card.director,
      year: card.director,
      duration: card.duration,
      trailer: card.trailerLink,
      thumbnail: `https://api.nomoreparties.co${url}`,
    };
    return transformedCard;
  });
  const searchMovies = (movies, value) => {
    const list = movies.filter((item) => JSON
      .stringify(item.nameRU)
      .toLowerCase()
      .includes(value.toLowerCase()));
    const shortList = list.filter((item) => item.duration <= ShortDurationValue);
    return new Promise((resolve) => resolve({ list, shortList }));
  };
  const handleSearch = (value) => {
    setIsLoading(true);
    if (value) {
      let movies;
      if (location.pathname === '/movies') {
        movies = JSON.parse(localStorage.getItem('movies'));
        if (movies) {
          searchMovies(movies, value)
            .then(({ list, shortList }) => {
              switch (true) {
                case isShort:
                  handlePopupInfo(`найдено фильмов: ${shortList.length}`);
                  setFoundMovies(transformArray(shortList));
                  break;
                case !isShort:
                  handlePopupInfo(`найдено фильмов: ${list.length}`);
                  setFoundMovies(transformArray(list));
                  break;
                default: handlePopupInfo('По запросу ничего не найдено');
              }
              return setTimeout(() => {
                setIsLoading(false);
              }, 1000);
            })
            .catch(() => {
              handlePopupInfo('что-то пошло не так');
              setTimeout(() => {
                setIsLoading(false);
              }, 1000);
            });
          return;
        }
      } else if (location.pathname === '/saved-movies') {
        movies = JSON.parse(localStorage.getItem('savedMovies'));
        if (movies) {
          searchMovies(movies, value)
            .then(({ list, shortList }) => {
              switch (true) {
                case isShort:
                  handlePopupInfo(`найдено фильмов: ${shortList.length}`);
                  setSavedMovies(shortList);
                  break;
                case !isShort:
                  handlePopupInfo(`найдено фильмов: ${list.length}`);
                  setSavedMovies(list);
                  break;
                default: handlePopupInfo('По запросу ничего не найдено');
              }
              return setTimeout(() => {
                setIsLoading(false);
              }, 1000);
            })
            .catch((err) => {
              handlePopupInfo(`что-то пошло не так ${err.statusText}`);
              setTimeout(() => {
                setIsLoading(false);
              }, 1000);
            });
        }
      }
      if (movies) {
        searchMovies(movies, value)
          .then(({ list, shortList }) => {
            switch (true) {
              case isShort:
                handlePopupInfo(`найдено фильмов: ${shortList.length}`);
                setSavedMovies(shortList);
                break;
              case !isShort:
                handlePopupInfo(`найдено фильмов: ${list.length}`);
                setSavedMovies(list);
                break;
              default: handlePopupInfo('По запросу ничего не найдено');
            }
            return setTimeout(() => {
              setIsLoading(false);
            }, 1000);
          })
          .catch(() => {
            handlePopupInfo('что-то пошло не так');
            setTimeout(() => {
              setIsLoading(false);
            }, 1000);
          });
        return;
      }
    }
    handlePopupInfo('запрос не может быть пустым');
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  const handleLike = (card, isLiked) => {
    if (isLiked) {
      return MainApi.deleteCard((savedMovies.find((item) => item.movieId === card.movieId))._id)
        .then(() => {
          const newSavedMovies = savedMovies.filter((item) => card.movieId !== item.movieId);
          return setSavedMovies(newSavedMovies);
        })
        .catch((err) => {
          handlePopupInfo(`что-то пошло не так ${err.statusText}`);
        });
    }
    return MainApi.addCard(card)
      .then(({ movie }) => (
        setSavedMovies((prevState) => [movie, ...prevState])
      ))
      .catch((err) => {
        handlePopupInfo(`что-то пошло не так ${err.statusText}`);
      });
  };
  const resizeWindow = () => {
    setTimeout(() => {
      setSize(window.innerWidth);
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
      .catch((err) => {
        handlePopupInfo(`что-то пошло не так ${err.statusText}`);
      });
    MainApi.getCards()
      .then((res) => {
        localStorage.setItem('savedMovies', JSON.stringify(res));
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
        {infoValues.value && <InfoPopup message={infoValues.message} />}
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
            width={size}
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
          />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            onLogout={handleLogout}
            loggedIn={isLoggedIn}
            arrayFilms={savedMovies}
            onLike={handleLike}
            width={size}
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
