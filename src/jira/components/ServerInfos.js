import React from 'react';
import PropTypes from 'prop-types'
import ServerInfo from './ServerInfo'

const ServerInfos = ({ serverInfos }) => (
  <div>
    {serverInfos.map((serverInfo, index) => (
      <ServerInfo key={index} {...serverInfo} />
    ))}
  </div>
)

ServerInfos.propTypes = {
  serverInfos: PropTypes.arrayOf(
    PropTypes.shape({
      version: PropTypes.string.isRequired
    })
  ).isRequired
}

export default ServerInfos