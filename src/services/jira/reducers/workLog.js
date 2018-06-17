import {
  JIRA_WORK_LOG_LIST_FETCH_SUCCEEDED,
  JIRA_WORK_LOG_UPDATED_FETCH_SUCCEEDED
} from '../actions'

const workLog = (state = {
    lastUpdated : 0,
    records : []
  }, action) => {
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
      var newState = Object.assign({}, state, { records: [ ...state.records ] })
      action.workLogList.forEach(item => {
        var newItem = Object.assign({}, item)
        newItem.id = parseInt(item.id, 10)
        var record = newState.records.find(it => it.id === newItem.id)
        if (record) {
          Object.assign(record, newItem)
        }
      })
      return newState
    default:
      return state
  }
}

export default workLog