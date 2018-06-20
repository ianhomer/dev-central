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
      var issue = action.issue
      var fields = issue.fields
      return [
        ...state.filter(it => it.id !== issue.id),
        {
          id : issue.id,
          key : issue.key,
          fields : {
            issuetype : {
              name : fields.issuetype && fields.issuetype.name,
              subtask : fields.issuetype && fields.issuetype.subtask
            },
            timespent : fields.timespent,
            aggregatetimespent : fields.aggregatetimespent,
            workratio : fields.workratio,
            timeoriginalestimate : fields.timeoriginalestimate,
            timetracking : fields.timetracking,
            aggregatetimeestimate : fields.aggregatetimeestimate,
            summary : fields.summary,
            subtasks : fields.subtasks,
            aggregateprogress : fields.aggregateprogress,
            progress : fields.progress
          }
        }
      ]
    case SYSTEM_FLUSH_DATA:
      return DEFAULT
    default:
      return state
  }
}

export default issues