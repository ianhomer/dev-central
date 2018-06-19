import React from 'react';
import PropTypes from 'prop-types'
import WorkLogItem from './WorkLogItem'

const Work = ({ handle, workLog, onChangeProperty, onRefresh }) => {
  let dayTotal = 0, groupAuthorDisplayName, groupDay, renderTotal = false
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
              (a && b && a.author && b.author && a.author.displayName.localeCompare(b.author
              .displayName))
              || b.updated - a.updated)
          .map( (it) => {
          if (it.author && groupAuthorDisplayName !== it.author.displayName) {
            if (groupAuthorDisplayName) {
              renderTotal = true
            }
          }
          if (it.startedDay && groupDay !== it.startedDay) {
            if (groupDay) {
              renderTotal = true
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
                groupAuthorDisplayName={groupAuthorDisplayName}
                groupDay={groupDay}
              />
            </div>
          )
          if (!groupAuthorDisplayName) {
            groupAuthorDisplayName = it.author.displayName
          }
          if (!groupDay) {
            groupDay = it.startedDay
          }
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
  handle: PropTypes.object.isRequired,
  workLog: PropTypes.object.isRequired,
  onChangeProperty: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired
}

export default Work