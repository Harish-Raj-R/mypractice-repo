// src/App.js

import React from 'react';
import './App.css';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App() {
  const flag = true; // Toggle to false to switch component

  return (
    <div className="App">
      <h1>🏏 Welcome to Cricket App 🏏</h1>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
