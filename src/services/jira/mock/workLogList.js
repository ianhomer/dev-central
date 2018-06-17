import { findUpdatedTimeForId } from './mockUtils'

export default function workLogList(opts) {
  //const now = +new Date();
  console.log()
  let base = 'http://www.example.com/'
  return opts.body.ids.map(id => {
    let updatedTime = findUpdatedTimeForId(id)
    return {
      'self': base + '/jira/rest/api/2/issue/10010/worklog/' + id,
      'author': {
        'self': base + '/jira/rest/api/2/user?username=fred',
        'name': 'bob',
        'displayName': 'Bob McFace',
        'active': false
      },
      'updateAuthor': {
        'self': base + '/jira/rest/api/2/user?username=fred',
        'name': 'bob',
        'displayName': 'Bob McFace',
        'active': false
      },
      'comment': 'Completed task.',
      'updated': new Date(updatedTime).toISOString(),
      'visibility': {
        'type': 'group',
        'value': 'jira-developers'
      },
      'started': new Date(updatedTime - 60000).toISOString(),
      'timeSpent': '1h',
      'timeSpentSeconds': 3600,
      'id': id,
      'issueId': '10002'
    }
  })
}