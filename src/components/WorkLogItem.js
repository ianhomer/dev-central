import React from 'react';
import PropTypes from 'prop-types'
import Issue from '../containers/Issue'

const WorkLogItem = ({ groupAuthorDisplayName, item }) => {
  let started = new Date(item.started)
  return (
    <div>
      <div className="row">
        <div className="col-sm-2">
          { item.author && item.author.displayName !== groupAuthorDisplayName &&
            item.author.displayName
          }
        </div>
        <div className="col-sm-2">{ started.toLocaleDateString() }</div>
        <div className="col-sm-1">{ (item.timeSpentSeconds / 3600).toFixed(1) }h</div>
        <div className="col-sm-7"><Issue
          date={ + new Date() }
          id={ parseInt(item.issueId, 10) }
        /></div>
      </div>
    </div>
  )
}

WorkLogItem.propTypes = {
  item: PropTypes.object.isRequired,
  groupAuthorDisplayName: PropTypes.string
}

export default WorkLogItem