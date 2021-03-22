import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import './Login.css';
import InputSign from '../InputSign/InputSign';
import ButtonSign from '../ButtonSign/ButtonSign';
import LinkSign from '../LinkSign/LinkSign';

const Login = ({ title, titleSubmit, onSubmit }) => {
  const [isFormValid, setIsFormValid] = useState(false);

  const [{
    email, emailValid, password, passwordValid, errors,
  }, setFormValues] = useState({
    email: '',
    emailValid: false,
    password: '',
    passwordValid: false,
    errors: {
      email: '',
      password: '',
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      onSubmit({
        email, password,
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
    <section className="login">
      <form onSubmit={handleSubmit} noValidate className="login__form">
        <Logo path="/" />
        <h4 className="login__title">{title}</h4>
        <div className="login__input-wraper">
          <InputSign
            name="email"
            lable="Email"
            placeholder="example@mail.com"
            type="email"
            value={email}
            textError={errors.email}
            isInvalid={!emailValid}
            onChange={handleOnChange}
          />
          <InputSign
            name="password"
            lable="Пароль"
            placeholder="Пароль"
            type="password"
            value={password}
            textError={errors.password}
            isInvalid={!passwordValid}
            onChange={handleOnChange}
          />
        </div>
        <ButtonSign disabled={!isFormValid} titleSubmit={titleSubmit} />
        <LinkSign message="Ещё не зарегистрированы?" path="/signup" messageLink="Регистрация" />
      </form>
    </section>
  );
};

Login.defaultProps = {
  title: 'Рады видеть!',
  titleSubmit: 'Войти',
};

Login.propTypes = {
  title: PropTypes.string,
  titleSubmit: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

export default Login;
