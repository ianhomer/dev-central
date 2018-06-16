import React from 'react';
import PropTypes from 'prop-types'
import WorkLogItem from './WorkLogItem'

const Work = ({ workLog, onRefresh }) => {
  return (
  <div>
    { workLog.records.map( (it) => (
        <WorkLogItem key={it.worklogId} item={it}/>
      ))
    }
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