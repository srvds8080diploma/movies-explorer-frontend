import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MoviesCard.css';

const MoviesCard = ({ link }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <li className="movies-card">
      <img
        src={link}
        alt={link}
        className="movies-card__image"
      />
      <div className="movies-card__image-description">
        <span className="movies-card__title">33 слова о дизайне</span>
        <span className="movies-card__duration">
          <span className="movies-card__duration-hour">1</span>
          <span className="movies-card__duration-min">37</span>
        </span>
        <button
          type="button"
          onClick={handleLike}
          className={`movies-card__button-like ${isLiked && 'movies-card__button-like-checked'}`}
        />
      </div>
    </li>
  );
};

MoviesCard.propTypes = {
  link: PropTypes.string.isRequired,
};
export default MoviesCard;
