import React from 'react';
import { Link } from 'react-router-dom';
import './Account.css';

const Account = () => (
  <div className="account">
    <Link to="/profile" className="account__link">
      Аккаунт
    </Link>
    <Link to="/profile" className="account__image" />
  </div>
);

export default Account;
