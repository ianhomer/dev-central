import React from 'react'
import PropTypes from 'prop-types'

const ServerInfo = ({ serverInfo }) => (
  <div>
    <div>Server Info : { JSON.stringify(serverInfo) } </div>
    <div>Version : { JSON.stringify(serverInfo[0]) } </div>
  </div>
)

ServerInfo.propTypes = {
  serverInfo: PropTypes.array.isRequired
}

export default ServerInfo