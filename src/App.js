import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Home'
import Status from './Status'

function App() {
  return (
    <main>
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/status" component = {Status} />
      </Switch>
    </main>
  );
}

export default App;
