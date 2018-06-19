import React from 'react';
import PropTypes from 'prop-types'
import WorkLogItem from './WorkLogItem'

const Work = ({ workLog, onRefresh }) => {
  let dayTotal = 0, groupAuthorDisplayName, groupDay, renderTotal = false

  return (
  <div>
    { workLog.records
          .sort( (a,b) =>
              (a.author && b.author && a.author.displayName.localeCompare(b.author.displayName))
              || b.updated - a.updated)
          .map( (it) => {
          if (it.author && groupAuthorDisplayName !== it.author.displayName) {
            if (groupAuthorDisplayName) {
              renderTotal = true
            } else {
              groupAuthorDisplayName = it.author.displayName
            }
          }
          if (it.startedDay && groupDay !== it.startedDay) {
            if (groupDay) {
              renderTotal = true
            } else {
              groupDay = it.startedDay
            }
          }
          const row = (
            <div key={it.id}>
              { renderTotal &&
                <div className="total">
                  <span className="group">{ groupAuthorDisplayName} @ { groupDay }</span>
                  <span className="value">{ (dayTotal /  3600).toFixed(1) }h</span>
                </div>
              }
              <WorkLogItem item={it}
              />
            </div>
          )
          if (renderTotal) {
            dayTotal = 0
            renderTotal = false
            groupDay = it.startedDay
            groupAuthorDisplayName = it.author.displayName
          }
          dayTotal += it.timeSpentSeconds
          return row
        }
      )
    }
    <div className="total">
      <span className="group">{ groupAuthorDisplayName} @ { groupDay }</span>
      <span className="value">{ (dayTotal /  3600).toFixed(1) }h</span>
    </div>
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