import React from 'react';
import './TabsStack.css';

const TabsStack = () => (
  <div className="tabs-stack">
    {
      ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express', 'MongoDB']
        .map((value) => (
          <span key={value} className="tabs-stack__tab">{ value }</span>
        ))
    }
  </div>
);

export default TabsStack;
