import React from 'react';
import PropTypes from 'prop-types'

const ServiceInfo = ({ version }) => (
  <div>
    <div>Version : { version }</div>
  </div>
)

ServiceInfo.propTypes = {
  version: PropTypes.string.isRequired
}

export default ServiceInfo