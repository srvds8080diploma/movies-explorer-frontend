import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

const Movies = () => (
  <div className="movies">
    <div className="movies__content">
      <SearchForm />
    </div>
  </div>
);

export default Movies;
