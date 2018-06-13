import React from 'react';
import PropTypes from 'prop-types'
import HandleNav from './HandleNav'

const HandleNavs = ({ handles, onRemove }) => (
  <nav className="bd-toc-item">
    {handles.map((handle, index) => (
      <HandleNav key={index} {...handle}
        onRemove={() => onRemove(handle.name)}
      />
    ))}
  </nav>
)

HandleNavs.propTypes = {
  handles: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired
}

export default HandleNavs