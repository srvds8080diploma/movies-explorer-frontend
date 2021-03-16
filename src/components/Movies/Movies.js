import React from 'react';
import PropTypes from 'prop-types';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';

const Movies = ({
  arrayFilms, children, onLike, savedMovies, width, isShort,
}) => (
  <div className="movies">
    <div className="movies__content">
      { children }
      <MoviesCardList
        onLike={onLike}
        arrayFilms={arrayFilms}
        savedMovies={savedMovies}
        width={width}
        isShort={isShort}
      />
    </div>
  </div>
);

Movies.defaultProps = {
  arrayFilms: [],
  savedMovies: [],
};
Movies.propTypes = {
  width: PropTypes.shape({
    width: PropTypes.number.isRequired,
  }).isRequired,
  arrayFilms: PropTypes.arrayOf(PropTypes.object),
  savedMovies: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node.isRequired,
  onLike: PropTypes.func.isRequired,
  isShort: PropTypes.bool.isRequired,
};

export default Movies;
