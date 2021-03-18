import React from 'react';
import { Link } from 'react-router-dom';
import './MenuMovies.css';

const MenuMovies = () => (
  <div className="menu-movies">
    <Link to="/movies" className="menu-movies__collection">
      Фильмы
    </Link>
    <Link to="/saved-movies" className="menu-movies__saved-collection">
      Сохраненные фильмы
    </Link>
  </div>
);

export default MenuMovies;
