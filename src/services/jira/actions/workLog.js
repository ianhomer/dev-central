export const JIRA_WORK_LOG_LIST_FETCH_REQUESTED =
  'JIRA_WORK_LOG_LIST_FETCH_REQUESTED'
export const JIRA_WORK_LOG_LIST_FETCH_FAILED =
  'JIRA_WORK_LOG_LIST_FETCH_FAILED'
export const JIRA_WORK_LOG_LIST_FETCH_SUCCEEDED =
  'JIRA_WORK_LOG_LIST_FETCH_SUCCEEDED'
export const JIRA_WORK_LOG_UPDATED_FETCH_FAILED =
  'JIRA_WORK_LOG_UPDATED_FETCH_FAILED'
export const JIRA_WORK_LOG_UPDATED_FETCH_SUCCEEDED =
  'JIRA_WORK_LOG_UPDATED_FETCH_SUCCEEDED'

// Refresh the work (log)
export const JIRA_WORK_REFRESH_REQUESTED = 'JIRA_WORK_REFRESH_REQUESTED'
export function jiraWorkRefresh(handle, chain, since) {
  // for now we'll just get the work log updated, but we'll need to change
  // this to update all that is required to refresh to work log view
  return jiraWorkLogUpdatedFetchRequested(handle, chain, since)
}

// Fetch updated work logs
export const JIRA_WORK_LOG_UPDATED_FETCH_REQUESTED =
  'JIRA_WORK_LOG_UPDATED_FETCH_REQUESTED'
export function jiraWorkLogUpdatedFetchRequested(handle, chain, since) {
  return {
    type: JIRA_WORK_LOG_UPDATED_FETCH_REQUESTED,
    handle,
    chain,
    since
  }
}