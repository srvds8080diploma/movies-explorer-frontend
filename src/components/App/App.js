import React from 'react';
import {
  withRouter,
} from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function App() {
  return (
    <div className="page">
      <Header />
      {false && <Main />}
      <Footer />
    </div>
  );
}

export default withRouter(App);
