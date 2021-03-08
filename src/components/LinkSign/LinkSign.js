import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './LinkSign.css';

const LinkSign = ({ message, path, messageLink }) => (
  <p className="links">
    <span className="links__message">{message}</span>
    <Link to={path}><span className="links__message-link">{messageLink}</span></Link>
  </p>
);

LinkSign.defaultProps = {
  message: '',
  path: '',
  messageLink: '',
};

LinkSign.propTypes = {
  message: PropTypes.string,
  path: PropTypes.string,
  messageLink: PropTypes.string,
};

export default LinkSign;
