import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

const Footer = ({ location }) => {
  const [invisible, setInvisible] = useState(false);
  useEffect(() => {
    if (location.pathname === '/profile') {
      setInvisible(true);
      return;
    }
    setInvisible(false);
  }, [location]);
  return (
    <div className={`footer ${invisible && 'footer__invisible'}`}>
      <div className="footer__content">
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
    </div>
  );
};

Footer.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default Footer;
