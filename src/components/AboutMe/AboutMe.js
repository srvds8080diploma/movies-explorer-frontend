import React from 'react';
import './AboutMe.css';
import me from '../../images/me.png';

const AboutMe = () => (
  <div className="about-me">
    <h3 className="about-me__title">Виталий</h3>
    <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
    <p className="about-me__description">
      { 'Я родился и живу в Саратове, закончил факультет экономики СГУ.'
      + ' У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.'
      + ' Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».'
      + ' После того, как прошёл курс по веб-разработке, начал заниматься'
      + ' фриланс-заказами и ушёл с постоянной работы.'}
    </p>
    <div className="about-me__links">
      <a href="https://github.com/srvds8080" rel="noreferrer" target="_blank" alt="facebook" className="about-me__links_item">Facebook</a>
      <a href="https://github.com/srvds8080" rel="noreferrer" target="_blank" alt="facebook" className="about-me__link-item">Github</a>
    </div>
    <img src={me} alt={me} className="about-me__image" />
  </div>
);

export default AboutMe;
