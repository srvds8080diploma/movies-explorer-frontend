import React from 'react';
import './Main.css';
import Promo from '../Promo/Promo';
import ProjectSection from '../ProjectSection/ProjectSection';
import AboutProject from '../AboutProject/AboutProject';
import Progressbar from '../Progressbar/Progressbar';
import Stack from '../Stack/Stack';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

const Main = () => (
  <div className="main">
    <Promo />
    <ProjectSection id="about" title="О проекте">
      <AboutProject />
      <Progressbar />
    </ProjectSection>
    <ProjectSection typeBackground id="stack" title="Технологии">
      <Stack />
    </ProjectSection>
    <ProjectSection id="me" title="Студент">
      <AboutMe />
      <Portfolio />
    </ProjectSection>
  </div>
);

export default Main;
