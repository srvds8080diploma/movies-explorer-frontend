import React from 'react';
import PropTypes from 'prop-types';
import ButtonStill from '../ButtonStill/ButtonStill';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = ({ arrayFilms, onLike, savedMovies }) => (
  <div className="movies-list">
    <ul className="movies-list__content">
      {arrayFilms.map((item) => (
        <MoviesCard
          key={item.movieId}
          card={item}
          onLike={onLike}
          savedMovies={savedMovies}
        />
      ))}
    </ul>
    <ButtonStill title="Еще" />
  </div>
);

MoviesCardList.defaultProps = {
  arrayFilms: [],
  savedMovies: [],
};
MoviesCardList.propTypes = {
  arrayFilms: PropTypes.arrayOf(PropTypes.object),
  savedMovies: PropTypes.arrayOf(PropTypes.object),
  onLike: PropTypes.func.isRequired,
};

export default MoviesCardList;
