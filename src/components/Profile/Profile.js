import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Profile.css';

const Profile = ({ name, titleSubmit, titleLogoutButton }) => (
  <div className="profile">
    <h4 className="profile__title">{`Привет, ${name}`}</h4>
    <form noValidate className="profile__form">
      <label
        htmlFor="name"
        className="profile__input-label"
      >
        Имя
        <input
          name="name"
          maxLength="50"
          type="text"
          className="profile__input profile__input_type_name"
          placeholder="Виталий"
        />
      </label>
      <label
        htmlFor="name"
        className="profile__input-label"
      >
        Email
        <input
          name="email"
          maxLength="50"
          type="email  "
          className="profile__input profile__input_type_email"
          placeholder="example@email.com"
        />
      </label>
      <button
        type="submit"
        className="profile__button profile__button_type_edit"
      >
        {titleSubmit}
      </button>
      <Link
        to="/signup"
        className="profile__button profile__button_type_logout"
      >
        {titleLogoutButton}
      </Link>
    </form>
  </div>
);

Profile.defaultProps = {
  name: 'Друг',
  titleSubmit: 'Редактировать',
  titleLogoutButton: 'Выйти из аккаунта',
};

Profile.propTypes = {
  name: PropTypes.string,
  titleSubmit: PropTypes.string,
  titleLogoutButton: PropTypes.string,
};

export default Profile;
