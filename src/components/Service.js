import React from 'react';
import PropTypes from 'prop-types'

const Service = ({ handle }) => {
  return (
  <div>
    <h2>{handle.name}</h2>
    <div className="container">
      <div className="row">
        <div className="col-sm-6">Service Name</div>
        <div className="col-sm-6">{ handle.name }</div>
      </div>
      <div className="row">
        <div className="col-sm-6">isAuthenticated</div>
        <div className="col-sm-6">{ handle.isAuthenticated.toString() }</div>
      </div>
    </div>
    <p>{ JSON.stringify(handle) }</p>
  </div>
)}

Service.propTypes = {
  handle: PropTypes.object.isRequired,
}

export default Service