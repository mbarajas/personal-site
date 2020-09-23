import React from 'react';
import logo from './logo.svg';
import './Home.css';

function Home() {
  return(
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <h1>
          Manuel Jose Barajas
        </h1>
        <div className="columns is-mobile">
          <div className="column">
            <a className="Home-link" href="https://github.com/mbarajas" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
          <div className="column">
            <a className="Home-link" href="https://www.linkedin.com/in/manuel-barajas" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </header>
      <p> This is my website </p>
    </div>
  );

}

export default Home;
