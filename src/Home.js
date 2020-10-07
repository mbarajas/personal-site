import React from 'react';
import './Home.css';

function Home() {
  return(
    <div className="Home content">
      <div className="section">
        <div className="container">
          <h1>
            Manuel Jose Barajas
          </h1>
          <p>
            Personal Website and Sandbox
          </p>
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
      </div>
      <div className="section">
        <div className="container">
          <h1> About Me </h1>
          <p> My name is Manuel Jose Barajas. I'm a Software Engineer specializing in System Architecture and DevOps. I'm currently based in Atlanta, Georgia.</p>
        </div>
      </div>
    </div>
  );

}

export default Home;
