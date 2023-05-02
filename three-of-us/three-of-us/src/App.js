
import './App.css';
import React from 'react';
import Card from './Card.js';
import cars from './db.json';

const App = () => {
  return (
    <div className="container">
      {cars['ULTRA-RARE SUPERCARS'].map((car) => (
        <Card car={car} key={car.Id} />
      ))}
    </div>
  );
};




function App() {
  return (
    <div className="App">
      <header className="App-header">
        
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
