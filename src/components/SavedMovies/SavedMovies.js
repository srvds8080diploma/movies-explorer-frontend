import React from 'react';
import PropTypes from 'prop-types';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

const SavedMovies = ({ arrayFilms, children, onLike }) => (
  <div className="movies">
    <div className="movies__content">
      { children }
      <MoviesCardList onLike={onLike} arrayFilms={arrayFilms} />
    </div>
  </div>
);

SavedMovies.defaultProps = {
  arrayFilms: [],
};
SavedMovies.propTypes = {
  arrayFilms: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node.isRequired,
  onLike: PropTypes.func.isRequired,
};
export default SavedMovies;
