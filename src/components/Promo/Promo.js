import React from 'react';
import './Promo.css';
import NavTab from '../NavTab/NavTab';

const Promo = () => (
  <section className="promo">
    <div className="promo__content">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <NavTab />
    </div>
  </section>
);

export default Promo;
