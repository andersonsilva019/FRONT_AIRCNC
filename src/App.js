import React from 'react';
import './App.css';

import Router from './routes'



import logo from './assets/logo.svg'

function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnc"/>  

      <div className="content">
        <Router/>
      </div>  
    </div>
  );
}

export default App;
