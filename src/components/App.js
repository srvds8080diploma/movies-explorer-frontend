import React from 'react';
import {
  withRouter,
} from 'react-router-dom';

function App() {
  return (
    <div className="page">
      <div className="page__content">
        Page-content
      </div>
    </div>
  );
}

export default withRouter(App);
