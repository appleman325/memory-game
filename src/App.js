import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader.js';
import AppBody from './components/AppBody.js';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppBody />
    </div>
  );
}

export default App;
