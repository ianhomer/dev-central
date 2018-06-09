import React, { Component } from 'react';
import Server from './jira/containers/Server'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dev Central</h1>
        </header>
        <p className="App-intro">
          Dev Central.
        </p>
        <Server/>
      </div>
    );
  }
}

export default App;
