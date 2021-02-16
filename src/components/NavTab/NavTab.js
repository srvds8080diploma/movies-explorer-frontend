import React from 'react';
import './NavTab.css';

const NavTab = () => (
  <nav className="navtab">
    <ul className="navtab__list">
      {[
        { value: 'О проекте', href: '#1' },
        { value: 'Технологии', href: '#2' },
        { value: 'Обо мне', href: '#3' },
        { value: 'Портфолио', href: '#4' },
      ].map((value) => (
        <li key={value} className="navtab__list-item">
          <a href={value.href} className="navtab__list-link">
            { value.value }
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavTab;
