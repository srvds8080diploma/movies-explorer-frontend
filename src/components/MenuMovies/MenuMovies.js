import React from 'react';
import './MenuMovies.css';

const MenuMovies = () => (
  <>
    <div className="menu-movies">
      <a href="https://github.com" className="menu-movies__collection">
        Фильмы
      </a>
      <a href="https://github.com" className="menu-movies__saved-collection">
        Сохраненные фильмы
      </a>
    </div>
    <div className="menu-movies__account">
      <a href="https://github.com" className="menu-movies__account-link">
        Аккаунт
      </a>
      <button type="button" className="menu-movies__account-image" />
    </div>
  </>
);

export default MenuMovies;
