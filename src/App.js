import React from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <input>grams</input>
          <input>kCal</input>
          <input>Carbohydrates(g)</input>
          <input>Fat(g)</input>
          <input>Protein(g)</input>
          <input>Fiber(g)</input>
          <input>Price(DKK)</input>
        </form>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
