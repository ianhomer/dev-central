import React from 'react';
import PropTypes from 'prop-types'
import Handle from './Handle'

const Handles = ({ handles, onRemove }) => (
  <div>
    {handles.map((handle, index) => (
      <Handle key={index} {...handle}
        onRemove={() => onRemove(handle.url)}
      />
    ))}
  </div>
)

Handles.propTypes = {
  handles: PropTypes.arrayOf(
    PropTypes.shape(
      Handle.propTypes
    )
  ).isRequired
}

export default Handles