import React from 'react';
import PropTypes from 'prop-types';
import ButtonStill from '../ButtonStill/ButtonStill';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = ({ arrayFilms }) => (
  <div className="movies-list">
    <ul className="movies-list__content">
      {arrayFilms.map((item) => (<MoviesCard key={item} link={item} />))}
    </ul>
    <ButtonStill title="Еще" />
  </div>

);

MoviesCardList.propTypes = {
  arrayFilms: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MoviesCardList;
