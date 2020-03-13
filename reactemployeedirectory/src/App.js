import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main'
import Api from "./utils/Api";

import './App.css';


function App() {
  return (
    <div>
    <Header /> 
    <Main />
    </div>
  );
}

export default App;
