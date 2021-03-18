import React from 'react';
import PropTypes from 'prop-types';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';
import Preloader from '../Preloader/Preloader';

const Movies = ({
  arrayFilms, children, onLike, savedMovies, width, isShort, isLoading,
}) => (
  <div className="movies">
    <div className="movies__content">
      { children }
      {isLoading
        ? <Preloader />
        : (
          <MoviesCardList
            onLike={onLike}
            arrayFilms={arrayFilms}
            savedMovies={savedMovies}
            width={width}
            isShort={isShort}
          />
        )}
    </div>
  </div>
);

Movies.defaultProps = {
  arrayFilms: [],
  savedMovies: [],
};
Movies.propTypes = {
  width: PropTypes.number.isRequired,
  arrayFilms: PropTypes.arrayOf(PropTypes.object),
  savedMovies: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node.isRequired,
  onLike: PropTypes.func.isRequired,
  isShort: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Movies;
