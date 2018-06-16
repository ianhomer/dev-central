import {
  JIRA_WORK_LOG_UPDATED_FETCH_SUCCEEDED
} from '../actions'

const workLogs = (state = [], action) => {
  switch (action.type) {
    case JIRA_WORK_LOG_UPDATED_FETCH_SUCCEEDED:
      const newWorkLogs = action.workLogs.default.values
      const newWorkLogsIds = newWorkLogs.map(workLog => workLog.id)
      return [
        ...state.filter(workLog => !newWorkLogsIds.includes(workLog.id)),
        ...newWorkLogs
      ]
    default:
      return state
  }
}

export default workLogs