import React from 'react';
import './Footer.css';

const Footer = () => (
  <div className="footer">
    <h5 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h5>
    <div className="footer__content-wrapper">
      <span className="footer__copyright">&copy; 2021</span>
      <ul className="footer__list-links">
        <li className="footer__list-links_item">
          <a className="footer__link" target="_blanc" href="https://github.com/srvds8080">Яндекс.Практикум</a>
        </li>
        <li className="footer__list-links_item">
          <a className="footer__link" target="_blanc" href="https://github.com/srvds8080">Github</a>
        </li>
        <li className="footer__list-links_item">
          <a className="footer__link" target="_blanc" href="https://github.com/srvds8080">Facebook</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Footer;
