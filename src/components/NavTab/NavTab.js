import React from 'react';
import './NavTab.css';

const NavTab = () => (
  <nav className="navtab">
    <ul className="navtab__list">
      {[
        { value: 'О проекте', href: '#About' },
        { value: 'Технологии', href: '#2' },
        { value: 'Обо мне', href: '#3' },
        { value: 'Портфолио', href: '#4' },
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
