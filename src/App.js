import React, { Component } from 'react';
import AllServices from './containers/AllServices'
import AddService from './containers/AddService'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href=".">Dev Central</a>
        </nav>
        <div className="container">
          <AllServices/>
          <AddService/>
        </div>
      </div>
    );
  }
}

export default App;
