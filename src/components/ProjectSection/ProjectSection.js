import React from 'react';
import PropTypes from 'prop-types';
import './ProjectSection.css';
import SectionTitle from '../SectionTitle/SectionTitle';

const ProjectSection = ({
  title, id, children, typeBackground,
}) => (
  <section className={`project-section ${typeBackground && 'project-section_backgruond-color_light'}`}>
    <div className="project-section__content">
      <SectionTitle id={id} className="project-section__title" title={title} />
      {children}
    </div>
  </section>
);

ProjectSection.defaultProps = {
  typeBackground: false,
};

ProjectSection.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  typeBackground: PropTypes.bool,
};

export default ProjectSection;
