import moment from 'moment'

import {
  JIRA_WORK_LOG_LIST_FETCH_SUCCEEDED,
  JIRA_WORK_LOG_UPDATED_FETCH_SUCCEEDED
} from '../actions'


import {
  SYSTEM_FLUSH_DATA
} from '../../../actions'

const DEFAULT = {
  lastUpdated : 0,
  records : []
}

const workLog = (state = DEFAULT, action) => {
  switch (action.type) {
    //
    // Commit updated work log entries.
    //
    case JIRA_WORK_LOG_UPDATED_FETCH_SUCCEEDED:
      const newWorkLogs = action.workLog.values.map(workLog => {
        return {
          id: workLog.worklogId,
          updated: workLog.updatedTime
        }
      })
      const newWorkLogsIds = newWorkLogs.map(workLog => workLog.id)
      return {
          lastUpdated : Math.max(state.lastUpdated,action.workLog.until),
          records : [
            ...state.records.filter(
              workLog => !newWorkLogsIds.includes(workLog.id)
            ),
            ...newWorkLogs
          ]
        }
    //
    // Commit work log details from list request
    //
    case JIRA_WORK_LOG_LIST_FETCH_SUCCEEDED:
      const newListWorkLogsIds = action.workLogList.map(workLog => parseInt(workLog.id, 10))
      const newListWorkLogs = action.workLogList.map(item => {
        var started = +moment(item.started)
        var newItem = {
          author : {
            displayName : item.author.displayName
          },
          id : parseInt(item.id, 10),
          issueId : item.issueId,
          updated : +moment(item.updated),
          started : started,
          startedDay : Math.round(started / 86400000),
          startedDate : moment(started).format('YYYY-MM-DD'),
          timeSpentSeconds : item.timeSpentSeconds

        }
        var record = state.records.find(it => it.id === newItem.id)
        return Object.assign({}, record, newItem)
      })
      return Object.assign({},
        state, {
          records: [
            ...state.records.filter(workLog => !newListWorkLogsIds.includes(workLog.id)),
            ...newListWorkLogs
          ]
        })
    case SYSTEM_FLUSH_DATA:
      return DEFAULT
    default:
      return state
  }
}

export default workLog