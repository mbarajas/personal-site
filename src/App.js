import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Manuel Jose Barajas
        </h1>
        <div className="columns is-mobile">
          <div className="column">
            <a className="App-link" href="https://github.com/mbarajas" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
          <div className="column">
            <a className="App-link" href="https://www.linkedin.com/in/manuel-barajas" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </header>
      <p> This is my website </p>
    </div>
  );
}

export default App;
