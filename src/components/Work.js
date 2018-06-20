import React from 'react';
import PropTypes from 'prop-types'
import WorkLogItem from './WorkLogItem'

const Work = ({ handle, workLog, onChangeProperty, onRefresh }) => {
  let dayTotal = 0, groupAuthorDisplayName, groupDate, groupIssueId, renderTotal = false
  let filter

  var onChangeFilter = function(e) {
    e.preventDefault()
    if (!filter.value.trim()) {
      return
    }
    onChangeProperty('filter', filter.value)
    return
  }

  return (
    <div className="work">
      <input key="filter" type="text" defaultValue={handle.filter}
        ref={node => filter = node}
        size={60}
        onChange={onChangeFilter}/>
    { workLog.records
          .filter(it =>
            handle.filter == null ||
            (it.author && it.author.displayName && it.author.displayName.toLowerCase()
              .includes(handle.filter.toLowerCase())))
          .sort( (a,b) =>
              (a && b && a.author && b.author &&
                a.author.displayName.localeCompare(b.author.displayName))
              || b.startedDay - a.startedDay
              || a.issueId - b.issueId)
          .map( (it) => {
          if (it.author && groupAuthorDisplayName !== it.author.displayName) {
            if (groupAuthorDisplayName) renderTotal = true
          }
          if (it.startedDate && groupDate !== it.startedDate) {
            if (groupDate) renderTotal = true
          }
          var totalCell
          if (renderTotal) {
            totalCell = (<div className="row total">
                <div className="col-sm-12">{ (dayTotal / 3600).toFixed(1) }h</div>
              </div>
            )
          }
          const row = (
            <div key={it.id}>
              { renderTotal && totalCell }
              <WorkLogItem item={it}
                groupAuthorDisplayName={groupAuthorDisplayName}
                groupDate={groupDate}
                groupIssueId={groupIssueId}
              />
            </div>
          )
          if (!groupAuthorDisplayName) {
            groupAuthorDisplayName = it.author && it.author.displayName
          }
          if (!groupDate) {
            groupDate = it.startedDate
          }
          groupIssueId = it.issueId
          if (renderTotal) {
            dayTotal = 0
            renderTotal = false
            groupDate = it.startedDate
            groupAuthorDisplayName = it.author.displayName
            groupIssueId = it.issueId
          }
          dayTotal += it.timeSpentSeconds
          return row
        }
      )
    }
    <div className="row total">
      <div className="col-sm-12">{ (dayTotal / 3600).toFixed(1) }h</div>
    </div>
    <div>
      <a className="btn btn-primary btn-lg active"
        onClick={onRefresh}>Refresh</a>
    </div>
  </div>
)}

Work.propTypes = {
  handle: PropTypes.object.isRequired,
  workLog: PropTypes.object.isRequired,
  onChangeProperty: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired
}

export default Work