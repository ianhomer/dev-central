export const JIRA_FIELDS_FETCH_REQUESTED =
  'JIRA_FIELDS_FETCH_REQUESTED'
export const JIRA_FIELDS_FETCH_FAILED =
  'JIRA_FIELDS_FETCH_FAILED'
export const JIRA_FIELDS_FETCH_SUCCEEDED =
  'JIRA_FIELDS_FETCH_SUCCEEDED'

export function jiraRequestFields(handle) {
  return {
    type: JIRA_FIELDS_FETCH_REQUESTED,
    handle
  }
}