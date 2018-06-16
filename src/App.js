import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home'
import ActiveNav from './containers/ActiveNav'
import ActiveService from './containers/ActiveService'
import AllServices from './containers/AllServices'
import AddService from './containers/AddService'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ActiveNav/>
          <div className="container-fluid">
            <div className="row flex-xl-nowrap">
              <div className="col-12 col-md-3 col-xl-2 bd-sidebar">
                <AllServices/>
                <AddService/>
              </div>
              <div>
                <Route exact path="/" component={Home} />
                <Route path="/service/:currentServiceName"
                   component={ActiveService} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
