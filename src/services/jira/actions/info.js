export const JIRA_INFO_FETCH_REQUESTED = "JIRA_INFO_FETCH_REQUESTED";
export const JIRA_INFO_FETCH_FAILED = "JIRA_INFO_FETCH_FAILED";
export const JIRA_INFO_FETCH_SUCCEEDED = "JIRA_INFO_FETCH_SUCCEEDED";

export function jiraInfoFetchRequested(handle) {
  return {
    type: JIRA_INFO_FETCH_REQUESTED,
    handle,
  };
}
