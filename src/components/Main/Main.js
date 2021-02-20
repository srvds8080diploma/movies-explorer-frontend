import React from 'react';
import './Main.css';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import ProjectSection from '../ProjectSection/ProjectSection';
import AboutProject from '../AboutProject/AboutProject';
import Progressbar from '../Progressbar/Progressbar';
import Stack from '../Stack/Stack';
import AboutMe from '../AboutMe/AboutMe';

const Main = () => (
  <div className="main">
    <Header />
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
    </ProjectSection>
  </div>
);

export default Main;
