import React from 'react';
import PropTypes from 'prop-types'

const ServerInfo = ({ version }) => (
  <div>
    <div>Version : { version }</div>
  </div>
)

ServerInfo.propTypes = {
  version: PropTypes.string.isRequired
}

export default ServerInfo