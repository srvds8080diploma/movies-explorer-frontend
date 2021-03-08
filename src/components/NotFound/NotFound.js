import React from 'react';
import PropTypes from 'prop-types';
import './NotFound.css';

const NotFound = ({ history }) => {
  const goBack = function () {
    console.log('history.goBack()');
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
  history: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default NotFound;
