import React from 'react';
import PropTypes from 'prop-types';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

const SavedMovies = ({ arrayFilms }) => (
  <div className="movies">
    <div className="movies__content">
      <SearchForm />
      <MoviesCardList arrayFilms={arrayFilms} />
    </div>
  </div>
);

SavedMovies.propTypes = {
  arrayFilms: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SavedMovies;
