import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

const Movies = () => (
  <div className="movies">
    <div className="movies__content">
      <SearchForm />
      <MoviesCardList />
    </div>
  </div>
);

export default Movies;
