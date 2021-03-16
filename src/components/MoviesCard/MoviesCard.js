import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './MoviesCard.css';
import userContext from '../../context/currentUser';

const MoviesCard = ({ card, onLike, savedMovies }) => {
  const user = useContext(userContext);
  const {
    image, nameRU, duration, trailer, owner, movieId,
  } = card;
  const isLiked = (savedMovies.find((item) => item.movieId === movieId) || owner === user._id);
  const translateDuration = (time) => ({
    hour: Math.floor(time / 60),
    min: (time % 60),
  });
  const handleLike = () => {
    onLike(card, isLiked);
  };
  return (
    <li className="movies-card">
      <a className="movies__card_trailer-link" href={trailer} target="_blank" rel="noreferrer">
        <img
          src={image}
          alt={nameRU}
          className="movies-card__image"
        />
      </a>
      <div className="movies-card__image-description">
        <div className="movies-card__title-wrapper">
          <span className="movies-card__title">{nameRU}</span>
          <button
            type="button"
            onClick={handleLike}
            className={`movies-card__button movies-card__button_type_like ${isLiked && 'movies-card__button_type_like_checked'} `}
          />
        </div>
        <span className="movies-card__duration">
          <span className="movies-card__duration-hour">{translateDuration(duration).hour}</span>
          <span className="movies-card__duration-min">{translateDuration(duration).min}</span>
        </span>

      </div>
    </li>
  );
};
MoviesCard.defaultProps = {
  savedMovies: [],
};
MoviesCard.propTypes = {
  card: PropTypes.shape({
    movieId: PropTypes.number,
    image: PropTypes.string,
    owner: PropTypes.string,
    nameRU: PropTypes.string,
    duration: PropTypes.number,
    trailer: PropTypes.string,
  }).isRequired,
  onLike: PropTypes.func.isRequired,
  savedMovies: PropTypes.arrayOf(PropTypes.object),
};
export default MoviesCard;
