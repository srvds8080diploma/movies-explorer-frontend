import React from 'react';
import ButtonStill from '../ButtonStill/ButtonStill';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = () => (
  <div className="movies-list">
    <ul className="movies-list__content">
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
    </ul>
    <ButtonStill title="Еще" />
  </div>

);

export default MoviesCardList;
