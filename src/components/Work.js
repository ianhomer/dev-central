import React from 'react';
import PropTypes from 'prop-types'
import WorkLogItem from './WorkLogItem'

const Work = ({ handle, workLog, onChangeProperty, onRefresh }) => {
  let dayTotal = 0, groupAuthorDisplayName, groupDate, groupIssueId, renderTotal = false
  let filter
  let runningTotal = 0

  var onChangeFilter = function(e) {
    e.preventDefault()
    onChangeProperty('filter', filter.value)
    return
  }

  return (
    <div className="work">
      <input key="filter" type="text" defaultValue={handle.filter}
        ref={node => filter = node}
        size={60}
        onChange={onChangeFilter}/>
      <a className="btn btn-primary btn-lg active"
        onClick={onRefresh}>Refresh</a>
    { workLog.records
          .filter(it =>
            handle.filter == null ||
            (it.author && it.author.displayName && it.author.displayName.toLowerCase()
              .includes(handle.filter.toLowerCase())))
          .sort( (a,b) =>
              (a && b && a.author && b.author &&
                a.author.displayName.localeCompare(b.author.displayName))
              || b.startedDay - a.startedDay
              || a.issueId && a.issueId.localeCompare(b.issueId))
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
                <div className="col-sm-6">&nbsp;</div>
                <div className="col-sm-1 value">{ (dayTotal / 3600).toFixed(1) }h</div>
                <div className="col-sm-5">&nbsp;</div>
              </div>
            )
          }
          const row = (
            <div key={it.id}>
              { renderTotal && totalCell }
              <WorkLogItem item={it}
                lastAuthorDisplayName={groupAuthorDisplayName}
                lastDate={groupDate}
                lastIssueId={groupIssueId}
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
            runningTotal += dayTotal
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
      <div className="col-sm-6">&nbsp;</div>
      <div className="col-sm-1 value">{ (dayTotal / 3600).toFixed(1) }h</div>
      <div className="col-sm-5">&nbsp;</div>
    </div>
    <div className="row total">
      <div className="col-sm-5">&nbsp;</div>
      <div className="col-sm-1 value">{ (runningTotal / 3600).toFixed(1) }h</div>
      <div className="col-sm-6">&nbsp;</div>
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