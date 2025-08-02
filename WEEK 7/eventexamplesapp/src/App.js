// src/App.js

import React, { useState } from 'react';
import './App.css';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [counter, setCounter] = useState(0);

  // Multiple functions on Increment
  const incrementCounter = () => {
    setCounter(prev => prev + 1);
    sayHello();
  };

  const sayHello = () => {
    alert("Hello! This is a static message.");
  };

  const decrementCounter = () => {
    setCounter(prev => prev - 1);
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleOnPress = () => {
    alert("I was clicked");
  };

  return (
    <div className="App">
      <h1>Event Examples App</h1>

      <h2>Counter: {counter}</h2>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>

      <br /><br />
      <button onClick={() => sayWelcome("Welcome!")}>Say Welcome</button>

      <br /><br />
      <button onClick={handleOnPress}>OnPress</button>

      <hr />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
