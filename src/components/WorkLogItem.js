import React from 'react';
import PropTypes from 'prop-types'
import Issue from '../containers/Issue'
import trimStart from 'lodash/trimStart'
import moment from 'moment'

const WorkLogItem = ({ lastAuthorDisplayName, lastDate, lastIssueId, item }) => {
  const groupByAuthor = item.author && item.author.displayName !== lastAuthorDisplayName
  const groupByDate = item.startedDate && item.startedDate !== lastDate
  const groupByIssueId = item.issueId && item.issueId !== lastIssueId
  return (
    <div>
      { (groupByAuthor || groupByDate) &&
        <div className="row group">
          <div className="col-sm-2">
            { groupByDate && moment(item.started).format("ddd Do MMM") }
          </div>
          <div className="col-sm-2">
            { groupByAuthor && item.author.displayName }
          </div>
        </div>
      }
      <div className="row">
        <div className="col-sm-6">
          { groupByIssueId && <Issue
              date={ + new Date() }
              id={ parseInt(item.issueId, 10) }
            />
          }
        </div>
        <div className="col-sm-1 time">{
          trimStart((item.timeSpentSeconds / 3600).toFixed(1),'0')
        }<span className="unit">h</span></div>
        <div className="col-sm-5 comment">{ item.comment }</div>
      </div>
    </div>
  )
}

WorkLogItem.propTypes = {
  item: PropTypes.object.isRequired,
  lastAuthorDisplayName: PropTypes.string,
  lastDate: PropTypes.string,
  lastIssueId: PropTypes.string
}

export default WorkLogItem