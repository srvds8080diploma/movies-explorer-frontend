import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import './Register.css';
import InputSign from '../InputSign/InputSign';
import ButtonSign from '../ButtonSign/ButtonSign';
import LinkSign from '../LinkSign/LinkSign';

const Register = ({ title, titleSubmit, onSubmit }) => {
  const [isFormValid, setIsFormValid] = useState(false);

  const [{
    name, isNameValid, email, isEmailValid, password, isPasswordValid, errors,
  }, setFormValues] = useState({
    name: '',
    isNameValid: false,
    email: '',
    isEmailValid: false,
    password: '',
    isPasswordValid: false,
    errors: {
      name: '',
      email: '',
      password: '',
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      onSubmit({
        name, email, password,
      });
    }
  };

  const handleOnChange = (e) => {
    switch (e.target.name) {
      case 'name':
        setFormValues((prevState) => ({
          ...prevState,
          name: e.target.value,
          isNameValid: e.target.validity.valid,
        }));
        errors.name = e.target.validationMessage;
        break;
      case 'email':
        setFormValues((prevState) => ({
          ...prevState,
          email: e.target.value,
          isEmailValid: e.target.validity.valid,
        }));
        errors.email = e.target.validationMessage;
        break;
      case 'password':
        setFormValues((prevState) => ({
          ...prevState,
          password: e.target.value,
          isPasswordValid: e.target.validity.valid,
        }));
        errors.password = e.target.validationMessage;
        break;
      default:
        break;
    }
    setIsFormValid(Array.from(e.target.form).every((element) => element.validity.valid));
  };
  return (
    <section className="register">
      <form onSubmit={handleSubmit} noValidate className="register__form">
        <Logo path="/signup" />
        <h4 className="register__title">{title}</h4>
        <div className="register__input-wraper">
          <InputSign
            name="name"
            lable="Имя"
            placeholder="Виталий"
            type="text"
            textError={errors.name}
            isInvalid={!isNameValid}
            value={name}
            onChange={handleOnChange}
          />
          <InputSign
            name="email"
            lable="email"
            placeholder="example@mail.com"
            type="email"
            textError={errors.email}
            isInvalid={!isEmailValid}
            value={email}
            onChange={handleOnChange}
          />
          <InputSign
            name="password"
            lable="Пароль"
            placeholder="Пароль"
            type="password"
            textError={errors.password}
            isInvalid={!isPasswordValid}
            value={password}
            onChange={handleOnChange}
          />
        </div>
        <ButtonSign disabled={!isFormValid} titleSubmit={titleSubmit} />
        <LinkSign message="Уже зарегистрированны?" path="/signin" messageLink="Войти" />
      </form>
    </section>
  );
};

Register.defaultProps = {
  title: 'Добро пожаловать!',
  titleSubmit: 'Зарегистрироваться',
};

Register.propTypes = {
  title: PropTypes.string,
  titleSubmit: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

export default Register;
