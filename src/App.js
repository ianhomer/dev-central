import React, { Component } from 'react';
import AllServices from './containers/AllServices'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href=".">Dev Central</a>
        </nav>
        <AllServices/>
      </div>
    );
  }
}

export default App;
