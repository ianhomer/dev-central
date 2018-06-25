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
      const newIssueId = parseInt(issue.id, 10)
      return [
        ...state.filter(it => it.id !== newIssueId),
        {
          id : newIssueId,
          key : issue.key,
          root : {
            key : fields.parent ? fields.parent.key : issue.key,
          },
          parent : {
            id : fields.parent && parseInt(fields.parent.id, 10),
            key : fields.parent && fields.parent.key,
            summary : fields.parent && fields.parent.fields.summary
          },
          subtask : fields.issuetype && fields.issuetype.subtask,
          type : fields.issuetype && fields.issuetype.name,
          fields : {
            aggregateprogress : fields.aggregateprogress,
            aggregatetimespent : fields.aggregatetimespent,
            aggregatetimeestimate : fields.aggregatetimeestimate,
            progress : fields.progress,
            subtasks : fields.subtasks,
            summary : fields.summary,
            timeoriginalestimate : fields.timeoriginalestimate,
            timespent : fields.timespent,
            timetracking : fields.timetracking,
            workratio : fields.workratio
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