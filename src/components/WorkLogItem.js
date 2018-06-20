import React from 'react';
import PropTypes from 'prop-types'
import Issue from '../containers/Issue'

const WorkLogItem = ({ groupAuthorDisplayName, groupDate, groupIssueId, item }) => {
  const groupByAuthor = item.author && item.author.displayName !== groupAuthorDisplayName
  const groupByDate = item.startedDate && item.startedDate !== groupDate
  const groupByIssueId = item.issueId && item.issueId !== groupIssueId
  return (
    <div>
      { (groupByAuthor || groupByDate) &&
        <div className="row group">
          <div className="col-sm-2">
            { groupByAuthor && item.author.displayName }
          </div>
          <div className="col-sm-1">
            { groupByDate && item.startedDate }
          </div>
        </div>
      }
      <div className="row">
        <div className="col-sm-1">&nbsp;</div>
        <div className="col-sm-1">{ (item.timeSpentSeconds / 3600).toFixed(1) }h</div>
        <div className="col-sm-6">
          { groupByIssueId && <Issue
              date={ + new Date() }
              id={ parseInt(item.issueId, 10) }
            />
          }
        </div>
        <div className="col-sm-4">{ item.comment }</div>
      </div>
    </div>
  )
}

WorkLogItem.propTypes = {
  item: PropTypes.object.isRequired,
  groupAuthorDisplayName: PropTypes.string,
  groupDate: PropTypes.string,
  groupIssueId: PropTypes.string
}

export default WorkLogItem