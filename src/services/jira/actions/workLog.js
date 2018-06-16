export const JIRA_WORK_LOG_UPDATED_FETCH_SUCCEEDED =
  'JIRA_WORK_LOG_UPDATED_FETCH_SUCCEEDED'
export const JIRA_WORK_LOG_UPDATED_FETCH_FAILED =
  'JIRA_WORK_LOG_UPDATED_FETCH_FAILED'

// Refresh the work (log)
export const JIRA_WORK_REFRESH_REQUESTED = 'JIRA_WORK_REFRESH_REQUESTED'
export function jiraWorkRefresh() {
  // for now we'll just get the work log updated, but we'll need to change
  // this to update all that is required to refresh to work log view
  return jiraWorkLogUpdatedFetchRequested()
}

// Fetch updated work logs
export const JIRA_WORK_LOG_UPDATED_FETCH_REQUESTED =
  'JIRA_WORK_LOG_UPDATED_FETCH_REQUESTED'
export function jiraWorkLogUpdatedFetchRequested() {
  return {
    type: JIRA_WORK_LOG_UPDATED_FETCH_REQUESTED
  }
}