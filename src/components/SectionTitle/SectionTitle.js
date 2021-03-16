import React from 'react';
import PropTypes from 'prop-types';
import './SectionTitle.css';

const SectionTitle = ({ title, id }) => (
  <>
    <h2 id={id} className="section-title">{title}</h2>
    <div className="section-title__border" />
  </>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default SectionTitle;
