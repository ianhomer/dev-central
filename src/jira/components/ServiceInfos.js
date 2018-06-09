import React from 'react';
import PropTypes from 'prop-types'
import ServiceInfo from './ServiceInfo'

const ServiceInfos = ({ serviceInfos }) => (
  <div>
    {serviceInfos.map((serviceInfo, index) => (
      <ServiceInfo key={index} {...serviceInfo} />
    ))}
  </div>
)

ServiceInfos.propTypes = {
  serviceInfos: PropTypes.arrayOf(
    PropTypes.shape(
      ServiceInfo.propTypes
    )
  ).isRequired
}

export default ServiceInfos