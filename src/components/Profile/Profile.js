import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Profile.css';
import userContext from '../../context/currentUser';

const Profile = ({
  titleSubmit, titleLogoutButton, onSubmit, onLogout,
}) => {
  const user = useContext(userContext);
  const [isFormValid, setIsFormValid] = useState(false);

  const [{
    email, emailValid, name, nameValid, errors,
  }, setFormValues] = useState({
    email: user.email,
    emailValid: false,
    name: user.name,
    nameValid: false,
    errors: {
      name: '',
      email: '',
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      onSubmit({
        email, name,
      });
    }
  };

  const handleOnChange = (e) => {
    switch (e.target.name) {
      case e.target.name:
        setFormValues((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
          [`${e.target.name}Valid`]: e.target.validity.valid,
        }));
        errors[e.target.name] = e.target.validationMessage;
        break;
      default:
        break;
    }
    setIsFormValid(Array.from(e.target.form).every((element) => element.validity.valid));
  };
  return (
    <div className="profile">
      <h4 className="profile__title">Привет, Виталий!</h4>
      <form onSubmit={handleSubmit} noValidate className="profile__form">
        <label
          htmlFor="name"
          className="profile__input-label"
        >
          Имя
          <input
            name="name"
            maxLength="30"
            minLength="2"
            type="text"
            className="profile__input profile__input_type_name"
            placeholder="Имя"
            value={name}
            onChange={handleOnChange}
          />
        </label>
        <span
          className={`profile__input-error ${!nameValid && 'profile__input-error_active'}`}
        >
          {errors.name}
        </span>
        <label
          htmlFor="email"
          className="profile__input-label"
        >
          Email
          <input
            name="email"
            type="email"
            className="profile__input profile__input_type_name"
            placeholder="email"
            value={email}
            onChange={handleOnChange}
          />
        </label>
        <span
          className={`profile__input-error ${!emailValid && 'profile__input-error_active'}`}
        >
          {errors.email}
        </span>
        <button
          type="submit"
          className={`profile__button profile__button_type_edit ${!isFormValid && 'profile__button_type_invalid'}`}
        >
          {titleSubmit}
        </button>
        <Link
          to="/"
          className="profile__button profile__button_type_logout"
          onClick={onLogout}
        >
          {titleLogoutButton}
        </Link>
      </form>
    </div>
  );
};

Profile.defaultProps = {
  titleSubmit: 'Редактировать',
  titleLogoutButton: 'Выйти из аккаунта',
};

Profile.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  titleSubmit: PropTypes.string,
  titleLogoutButton: PropTypes.string,
};

export default Profile;
