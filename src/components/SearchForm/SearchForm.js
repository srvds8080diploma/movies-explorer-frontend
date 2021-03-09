import React from 'react';
import ToggleCheckbox from '../ToggleCheckbox/ToggleCheckbox';
import './SearchForm.css';

const SearchForm = () => (
  <form noValidate className="search-form">
    <input
      required
      type="search"
      placeholder="Фильм"
      maxLength="100"
      className="search-form__input"
    />
    <button type="submit" className="search-form__button">Найти</button>
    <ToggleCheckbox />
  </form>
);

export default SearchForm;
