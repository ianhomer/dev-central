import React from 'react';
import PropTypes from 'prop-types'
import Service from './Service'

const Services = ({ services }) => (
  <div>
    {services.map((service, index) => (
      <Service key={index} {...service} />
    ))}
  </div>
)

Services.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape(
      Service.propTypes
    )
  ).isRequired
}

export default Services