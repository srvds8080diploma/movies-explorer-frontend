import React from 'react';
import './AboutProject.css';
import AboutProjectArticle from '../AboutProjectArticle/AboutProjectArticle';

const AboutProject = () => (
  <div id="About" className="about-project">
    <AboutProjectArticle content="Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки." title="Дипломный проект включал 5 этапов" />
    <AboutProjectArticle content="У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься." title="На выполнение диплома ушло 5 недель" />
  </div>
);

export default AboutProject;
