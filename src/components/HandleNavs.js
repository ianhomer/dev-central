import React from 'react';
import PropTypes from 'prop-types'
import HandleNav from './HandleNav'

const HandleNavs = ({ handles }) => (
  <nav className="bd-toc-item">
    {handles.map((handle, index) => (
      <HandleNav key={index} {...handle}/>
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