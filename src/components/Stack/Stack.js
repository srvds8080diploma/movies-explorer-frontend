import React from 'react';
import './Stack.css';
import TabsStack from '../TabsStack/TabsStack';

const Stack = () => (
  <div className="Stack">
    <h4 className="Stack__title">7 технологий</h4>
    <p className="Stack__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
    <TabsStack />
  </div>
);

export default Stack;
