import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ToggleCheckbox from '../ToggleCheckbox/ToggleCheckbox';
import './SearchForm.css';

const SearchForm = ({ onSubmit }) => {
  const [formValue, setFormValue] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValue);
  };
  const handleOnChange = (e) => {
    setFormValue(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} noValidate className="search-form">
      <input
        required
        type="search"
        placeholder="Фильм"
        maxLength="100"
        className="search-form__input"
        onChange={handleOnChange}
      />
      <button type="submit" className="search-form__button">Найти</button>
      <ToggleCheckbox />
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchForm;
