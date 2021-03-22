import React from 'react';
import PropTypes from 'prop-types';
import './InfoPopup.css';

const InfoPopup = ({ message }) => (
  <div className="info">
    <p className="info__message">{message}</p>
  </div>
);

InfoPopup.defaultProps = {
  message: '',
};
InfoPopup.propTypes = {
  message: PropTypes.string,
};

export default InfoPopup;
