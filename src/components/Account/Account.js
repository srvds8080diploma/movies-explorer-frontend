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

Account.defaultProps = {
  onClick: null,
};
Account.propTypes = {
  onClick: PropTypes.func,
};

export default Account;
