import React from 'react';
import PropTypes from 'prop-types'

const Work = ({ workLog, onRefresh }) => {
  return (
  <div>
    last updated : { workLog.lastUpdated }
    <div>
      <a className="btn btn-primary btn-lg active"
        onClick={onRefresh}>Refresh</a>
    </div>
  </div>
)}

Work.propTypes = {
  workLog: PropTypes.object.isRequired,
  onRefresh: PropTypes.func.isRequired
}

export default Work