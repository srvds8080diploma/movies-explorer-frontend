import React from 'react';
import PropTypes from 'prop-types';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import Preloader from '../Preloader/Preloader';

const SavedMovies = ({
  arrayFilms, children, onLike, width, isLoading,
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
            width={width}
            isSaved
          />
        )}
    </div>
  </div>
);

SavedMovies.defaultProps = {
  arrayFilms: [],
};
SavedMovies.propTypes = {
  width: PropTypes.number.isRequired,
  arrayFilms: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node.isRequired,
  onLike: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
export default SavedMovies;
