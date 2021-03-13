import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Account.css';

const Account = ({ onClick }) => (
  <div className="account">
    <Link onClick={onClick} to="/profile" className="account__link">
      Аккаунт
    </Link>
    <Link onClick={onClick} to="/profile" className="account__image" />
  </div>
);

Account.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Account;
