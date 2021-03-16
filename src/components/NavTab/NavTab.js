import React from 'react';
import './NavTab.css';

const NavTab = () => (
  <nav className="navtab">
    <ul className="navtab__list">
      {[
        { value: 'О проекте', href: '#about' },
        { value: 'Технологии', href: '#stack' },
        { value: 'Обо мне', href: '#me' },
        { value: 'Портфолио', href: '#portfolio' },
      ].map(({ value, href }) => (
        <li key={value} className="navtab__list-item">
          <a href={href} className="navtab__list-link">
            { value }
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavTab;
