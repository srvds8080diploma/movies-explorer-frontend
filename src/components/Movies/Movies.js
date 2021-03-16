import React from 'react';
import PropTypes from 'prop-types';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

const Movies = ({ arrayFilms }) => (
  <div className="movies">
    <div className="movies__content">
      <SearchForm />
      <MoviesCardList arrayFilms={arrayFilms} />
    </div>
  </div>
);

Movies.propTypes = {
  arrayFilms: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movies;
