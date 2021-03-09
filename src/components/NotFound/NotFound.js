import React from 'react';
import PropTypes from 'prop-types';
import './NotFound.css';

const NotFound = ({ history }) => {
  const goBack = function () {
    history.goBack();
  };

  return (
    <section className="not-found">
      <div className="not-found__wrapper">
        <span className="not-found__value">404</span>
        <button type="button" onClick={() => goBack()} className="not-found__back">назад</button>
      </div>
    </section>
  );
};
NotFound.propTypes = {
  history: PropTypes.shape({
    action: PropTypes.string.isRequired,
    block: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired,
    listen: PropTypes.func.isRequired,
    location: PropTypes.objectOf(PropTypes.string).isRequired,
    push: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default NotFound;
