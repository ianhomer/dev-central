import React from 'react';
import PropTypes from 'prop-types'

const Work = ({ handle, onRefresh }) => {
  return (
  <div>
    work
    <div>
      <a className="btn btn-primary btn-lg active"
        onClick={onRefresh}>Refresh</a>
    </div>
  </div>
)}

Work.propTypes = {
  handle: PropTypes.object.isRequired,
  onRefresh: PropTypes.func.isRequired
}

export default Work