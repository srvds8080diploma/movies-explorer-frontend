import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import './Register.css';
import InputSign from '../InputSign/InputSign';
import ButtonSign from '../ButtonSign/ButtonSign';
import LinkSign from '../LinkSign/LinkSign';

const Register = ({ title, titleSubmit }) => (
  <section className="register">
    <form noValidate className="register__form">
      <Logo path="/signup" />
      <h4 className="register__title">{title}</h4>
      <div className="register__input-wraper">
        <InputSign
          name="name"
          lable="Имя"
          placeholder="Виталий"
          type="text"
          textError="Что-то пошло не так"
          isInvalid={false}
        />
        <InputSign
          name="email"
          lable="Имя"
          placeholder="example@mail.com"
          type="email"
          textError="Что-то пошло не так"
          isInvalid={false}
        />
        <InputSign
          name="password"
          lable="Пароль"
          placeholder="Пароль"
          type="password"
          textError="Что-то пошло не так"
          isInvalid
        />
      </div>
      <ButtonSign titleSubmit={titleSubmit} />
      <LinkSign message="Уже зарегистрированны?" path="/signin" messageLink="Войти" />
    </form>
  </section>
);

Register.defaultProps = {
  title: 'Добро пожаловать!',
  titleSubmit: 'Зарегистрироваться',
};

Register.propTypes = {
  title: PropTypes.string,
  titleSubmit: PropTypes.string,
};

export default Register;
