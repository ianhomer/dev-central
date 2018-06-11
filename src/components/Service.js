import React from 'react';
import PropTypes from 'prop-types'

const Service = ({ url }) => (
  <div className="row">
    <div className="col-sm-2">URL</div>
    <div className="col-sm-5">{ url }</div>
  </div>
)

Service.propTypes = {
  url: PropTypes.string.isRequired
}

export default Service