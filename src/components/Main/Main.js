import React from 'react';
import './Main.css';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import ProjectSection from '../ProjectSection/ProjectSection';
import AboutProject from '../AboutProject/AboutProject';
import Progressbar from '../Progressbar/Progressbar';

const Main = () => (
  <div className="main">
    <Header />
    <Promo />
    <ProjectSection id="About" title="О проекте">
      <AboutProject />
      <Progressbar />
    </ProjectSection>
  </div>
);

export default Main;
