import React from 'react';
import PropTypes from 'prop-types'
import Issue from '../containers/Issue'

const WorkLogItem = ({ groupAuthorDisplayName, groupDay, item }) => {
  const groupByAuthor = item.author && item.author.displayName !== groupAuthorDisplayName
  const groupByDay = item.startedDay && item.startedDay !== groupDay
  return (
    <div>
      { (groupByAuthor || groupByDay) &&
        <div className="row group">
          <div className="col-sm-2">
            { groupByAuthor && item.author.displayName }
          </div>
          <div className="col-sm-1">
            { groupByDay && item.startedDay }
          </div>
        </div>
      }
      <div className="row">
        <div className="col-sm-1">&nbsp;</div>
        <div className="col-sm-1">{ (item.timeSpentSeconds / 3600).toFixed(1) }h</div>
        <div className="col-sm-8"><Issue
          date={ + new Date() }
          id={ parseInt(item.issueId, 10) }
        /></div>
      </div>
    </div>
  )
}

WorkLogItem.propTypes = {
  item: PropTypes.object.isRequired,
  groupAuthorDisplayName: PropTypes.string,
  groupDay: PropTypes.string
}

export default WorkLogItem