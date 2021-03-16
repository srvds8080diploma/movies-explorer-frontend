import React from 'react';
import PropTypes from 'prop-types';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

const SavedMovies = ({
  arrayFilms, children, onLike, width, isShort,
}) => (
  <div className="movies">
    <div className="movies__content">
      { children }
      <MoviesCardList
        onLike={onLike}
        arrayFilms={arrayFilms}
        width={width}
        isShort={isShort}
      />
    </div>
  </div>
);

SavedMovies.defaultProps = {
  arrayFilms: [],
};
SavedMovies.propTypes = {
  width: PropTypes.shape({
    width: PropTypes.number.isRequired,
  }).isRequired,
  arrayFilms: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node.isRequired,
  onLike: PropTypes.func.isRequired,
  isShort: PropTypes.bool.isRequired,
};
export default SavedMovies;
