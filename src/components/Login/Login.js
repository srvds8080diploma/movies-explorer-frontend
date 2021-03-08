import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import './Login.css';
import InputSign from '../InputSign/InputSign';
import ButtonSign from '../ButtonSign/ButtonSign';
import LinkSign from '../LinkSign/LinkSign';

const Login = ({ title, titleSubmit }) => (
  <section className="login">
    <form noValidate className="login__form">
      <Logo path="/signin" />
      <h4 className="login__title">{title}</h4>
      <div className="login__input-wraper">
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
      <LinkSign message="Ещё не зарегистрированы?" path="/signup" messageLink="Регистрация" />
    </form>
  </section>
);

Login.defaultProps = {
  title: 'Рады видеть!',
  titleSubmit: 'Войти',
};

Login.propTypes = {
  title: PropTypes.string,
  titleSubmit: PropTypes.string,
};

export default Login;
