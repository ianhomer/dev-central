import React from 'react';
import PropTypes from 'prop-types'
import Service from './Service'

const Services = ({ services, onRemove }) => (
  <div>
    {services.map((service, index) => (
      <Service key={index} {...service}
        onRemove={() => onRemove(service.url)}
      />
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