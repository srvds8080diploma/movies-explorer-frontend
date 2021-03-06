import React from 'react';
import './MoviesCard.css';
import picture from '../../images/picture.png';

const MoviesCard = () => (
  <li className="movies-card">
    <img
      src={picture}
      alt={picture}
      className="movies-card__image"
    />
    <div className="movies-card__image-description">
      <span className="movies-card__title">33 слова о дизайне</span>
      <span className="movies-card__duration">
        <span className="movies-card__duration-hour">1</span>
        <span className="movies-card__duration-min">37</span>
      </span>
      <button type="button" className={`movies-card__button-like ${false && 'movies-card__button-like-checked'}`} />
    </div>
  </li>
);

export default MoviesCard;
