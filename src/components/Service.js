import React from 'react';
import PropTypes from 'prop-types'

const Service = ({ handle, onRemove }) => {
  return (
  <div>
    <h2>{handle.name}</h2>
    <div>
      { !handle.isAuthenticated &&
        <a className="btn btn-primary btn-lg active"
          role="button" aria-pressed="true">authenticate</a>
      }
      <a className="btn btn-primary btn-lg active" onClick={onRemove}>delete</a>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-sm-6">Name</div>
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
  onRemove: PropTypes.func.isRequired
}

export default Service