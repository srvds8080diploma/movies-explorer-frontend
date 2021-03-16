import React from 'react';
import PropTypes from 'prop-types';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';

const Movies = ({
  arrayFilms, children, onLike, savedMovies,
}) => (
  <div className="movies">
    <div className="movies__content">
      { children }
      <MoviesCardList
        onLike={onLike}
        arrayFilms={arrayFilms}
        savedMovies={savedMovies}
      />
    </div>
  </div>
);

Movies.defaultProps = {
  arrayFilms: [],
  savedMovies: [],
};
Movies.propTypes = {
  arrayFilms: PropTypes.arrayOf(PropTypes.object),
  savedMovies: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node.isRequired,
  onLike: PropTypes.func.isRequired,
};

export default Movies;
