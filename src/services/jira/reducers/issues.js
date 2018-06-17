import {
  JIRA_ISSUE_FETCH_SUCCEEDED,
} from '../actions'

const issues = (state = [], action) => {
  switch (action.type) {
    //
    // Commit updated work log entries.
    //
    case JIRA_ISSUE_FETCH_SUCCEEDED:
      return [
        ...state.filter(issue => issue.id !== action.issue.id),
        action.issue
      ]
    default:
      return state
  }
}

export default issues