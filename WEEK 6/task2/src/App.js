import React from 'react';
import './App.css';
import Home from './Component/Home.js';
import About from './Component/About.js';
import Contact from './Component/Contact.js';
import { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div className='container'>
        <Home />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
