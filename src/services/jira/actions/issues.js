export const JIRA_ISSUE_FETCH_REQUESTED =
  'JIRA_ISSUE_FETCH_REQUESTED'
export const JIRA_ISSUE_FETCH_FAILED =
  'JIRA_ISSUE_FETCH_FAILED'
export const JIRA_ISSUE_FETCH_SUCCEEDED =
  'JIRA_ISSUE_FETCH_SUCCEEDED'

export function jiraRequestIssue(handle, id) {
  return {
    type: JIRA_ISSUE_FETCH_REQUESTED,
    handle,
    id
  }
}