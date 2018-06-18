import React from 'react';
import PropTypes from 'prop-types'
import Trace from './Trace'

const ServiceInfo = ({serviceInfo, onRefresh}) => {
  return (
  <div className="container">
    <div className="row">
      <div className="col-sm-4">Name</div>
      <div className="col-sm-8">{ serviceInfo.serverTitle }</div>
    </div>
    <div className="row">
      <div className="col-sm-4">Version</div>
      <div className="col-sm-8">{ serviceInfo.version }</div>
    </div>
    <Trace o={serviceInfo}/>
    <div>
      <a className="btn btn-primary btn-lg active"
        onClick={onRefresh}>Refresh</a>
    </div>
  </div>
)}

ServiceInfo.propTypes = {
  serviceInfo: PropTypes.object.isRequired,
  onRefresh: PropTypes.func.isRequired
}

export default ServiceInfo