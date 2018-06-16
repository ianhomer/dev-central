import {
  JIRA_WORK_LOG_UPDATED_FETCH_SUCCEEDED
} from '../actions'

const workLog = (state = {
    lastUpdated : 0,
    records : []
  }, action) => {
  switch (action.type) {
    case JIRA_WORK_LOG_UPDATED_FETCH_SUCCEEDED:
      const newWorkLogs = action.workLog.values.map(workLog => {
        return {
          id: workLog.worklogId,
          updated: workLog.updatedTime
        }
      })
      const newWorkLogsIds = newWorkLogs.map(workLog => workLog.id)
      return {
          lastUpdated : Math.max(
            state.lastUpdated,action.workLog.until),
          records : [
            ...state.records.filter(
              workLog => !newWorkLogsIds.includes(workLog.id)
            ),
            ...newWorkLogs
          ]
        }
    default:
      return state
  }
}

export default workLog