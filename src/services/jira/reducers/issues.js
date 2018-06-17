import {
  JIRA_ISSUE_FETCH_SUCCEEDED,
} from '../actions'

import {
  SYSTEM_FLUSH_DATA
} from '../../../actions'

const DEFAULT = []

const issues = (state = DEFAULT, action) => {
  switch (action.type) {
    //
    // Commit updated work log entries.
    //
    case JIRA_ISSUE_FETCH_SUCCEEDED:
      return [
        ...state.filter(issue => issue.id !== action.issue.id),
        action.issue
      ]
    case SYSTEM_FLUSH_DATA:
      return DEFAULT
    default:
      return state
  }
}

export default issues