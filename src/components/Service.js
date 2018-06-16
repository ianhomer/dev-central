import React from 'react';
import PropTypes from 'prop-types'
import { Route, Link } from "react-router-dom";
import Profile from './Profile'
import Work from './Work'

const Service = ({ handle, onRemove }) => {
  return (
  <div>
    <h2>{handle.name}</h2>
    <ul className="nav nav-tabs" id="myTab" role="tablist">
      <li className="nav-item">
        <Link className="nav-link" role="tab"
          to={"/service/" + handle.name + "/work"}>Work</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" role="tab" aria-selected="true"
          to={"/service/" + handle.name + "/profile"}>Profile</Link>
      </li>
    </ul>
    <div className="tab-content" id="myTabContent">
      <Route path="/service/:currentServiceName/work"
        render={props => (<Work {...props}
          handle={handle}/>)}/>
      <Route path="/service/:currentServiceName/profile"
        render={props => (<Profile {...props}
          handle={handle} onRemove={onRemove}/>)}/>
    </div>
  </div>
)}

Service.propTypes = {
  handle: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default Service