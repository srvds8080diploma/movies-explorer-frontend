import React from 'react';
import PropTypes from 'prop-types';
import './AboutProjectArticle.css';

const AboutProjectArticle = ({ title, content }) => (
  <div className="about-project-article">
    <h6 className="about-project-article__title">{title}</h6>
    <p className="about-project-article__desription">
      {content}
    </p>
  </div>
);
AboutProjectArticle.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default AboutProjectArticle;
