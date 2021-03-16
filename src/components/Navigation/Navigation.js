import React from 'react';
import PropTypes from 'prop-types';
import './Navigation.css';

const Navigation = ({ children }) => (
  <div className="navigation">
    <div className="navigation__menu-classic">
      {children}
    </div>

  </div>
);

Navigation.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Navigation;
