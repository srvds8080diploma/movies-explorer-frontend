import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonStill from '../ButtonStill/ButtonStill';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { initialCount } from '../../utils/constants';

const MoviesCardList = ({
  arrayFilms, onLike, savedMovies, width,
}) => {
  const row = initialCount(width);
  const [count, setCount] = useState(row);
  const handleStillMovie = () => {
    setCount(count + row);
  };
  const isMovies = () => (arrayFilms
    .slice(0, count)
    .map((item) => (
      <MoviesCard
        key={item.movieId}
        card={item}
        onLike={onLike}
        savedMovies={savedMovies}
      />
    )));

  return (
    <div className="movies-list">
      <ul className="movies-list__content">
        {isMovies()}
      </ul>
      {((arrayFilms.length > 0) && (arrayFilms.length > count)) && <ButtonStill onClick={handleStillMovie} title="Еще" />}
    </div>
  );
};

MoviesCardList.defaultProps = {
  arrayFilms: [],
  savedMovies: [],
};
MoviesCardList.propTypes = {
  width: PropTypes.number.isRequired,
  arrayFilms: PropTypes.arrayOf(PropTypes.object),
  savedMovies: PropTypes.arrayOf(PropTypes.object),
  onLike: PropTypes.func.isRequired,
};

export default MoviesCardList;
