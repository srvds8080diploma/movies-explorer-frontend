import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Logo.css';

const Logo = ({ path }) => (
  <Link to={path} className="logo" />
);
Logo.defaultProps = {
  path: '/',
};
Logo.propTypes = {
  path: PropTypes.string,
};
export default Logo;
