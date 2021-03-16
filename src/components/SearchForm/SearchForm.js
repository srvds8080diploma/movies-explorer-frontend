import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ToggleCheckbox from '../ToggleCheckbox/ToggleCheckbox';
import './SearchForm.css';

const SearchForm = ({ onSubmit, onCheck }) => {
  const [isFormValid, setIsFormValid] = useState(false);

  const [{
    name, errors,
  }, setFormValues] = useState({
    name: '',
    errors: {
      name: '',
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
  };
  const handleOnChange = (e) => {
    switch (e.target.name) {
      case e.target.name:
        setFormValues((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
        errors[e.target.name] = e.target.validationMessage;
        break;
      default:
        break;
    }
    setIsFormValid(Array.from(e.target.form).every((element) => element.validity.valid));
  };
  return (
    <form onSubmit={handleSubmit} noValidate className="search-form">
      <input
        required
        name="name"
        type="search"
        placeholder="Фильм"
        maxLength="100"
        className="search-form__input"
        onChange={handleOnChange}
      />
      <span className="search-form__error">{errors.name}</span>
      <button
        disabled={!isFormValid}
        type="submit"
        className={`search-form__button ${!isFormValid && 'search-form__button_disable'}`}
      >
        Найти
      </button>
      <ToggleCheckbox onCheck={onCheck} />
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
};
export default SearchForm;
