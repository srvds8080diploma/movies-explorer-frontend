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
    name, nameValid, email, emailValid, password, passwordValid, errors,
  }, setFormValues] = useState({
    name: '',
    nameValid: false,
    email: '',
    emailValid: false,
    password: '',
    passwordValid: false,
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
    <section className="register">
      <form onSubmit={handleSubmit} noValidate className="register__form">
        <Logo path="/" />
        <h4 className="register__title">{title}</h4>
        <div className="register__input-wraper">
          <InputSign
            name="name"
            lable="Имя"
            placeholder="Виталий"
            type="text"
            textError={errors.name}
            isInvalid={!nameValid}
            value={name}
            onChange={handleOnChange}
            min={2}
            max={30}
          />
          <InputSign
            name="email"
            lable="email"
            placeholder="example@mail.com"
            type="email"
            textError={errors.email}
            isInvalid={!emailValid}
            value={email}
            onChange={handleOnChange}
          />
          <InputSign
            name="password"
            lable="Пароль"
            placeholder="Пароль"
            type="password"
            textError={errors.password}
            isInvalid={!passwordValid}
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
