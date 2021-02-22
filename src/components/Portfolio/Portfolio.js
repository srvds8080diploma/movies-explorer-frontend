import React from 'react';
import './Portfolio.css';

const Portfolio = () => (
  <div className="portfolio">
    <h5 className="portfolio__title">Портфолио</h5>
    <ul className="portfolio__list">
      <li className="portfolio__list-item">
        <a className="portfolio__link" target="_blanc" href="https://github.com/srvds8080">Статичный сайт</a>
      </li>
      <li className="portfolio__list-item">
        <a className="portfolio__link" target="_blanc" href="https://github.com/srvds8080">Адаптивный сайт</a>
      </li>
      <li className="portfolio__list-item">
        <a className="portfolio__link" target="_blanc" href="https://github.com/srvds8080">Одностраничное приложение</a>
      </li>
    </ul>
  </div>
);

export default Portfolio;
