import React from 'react';
import PropTypes from 'prop-types'

const Service = ({ url }) => (
  <div>
    <div>URL : { url }</div>
  </div>
)

Service.propTypes = {
  url: PropTypes.string.isRequired
}

export default Service