import moment from 'moment'
import { findUpdatedTimeForId } from './mockUtils'

export default function workLogList(opts) {
  let base = 'http://www.example.com/'
  return JSON.parse(opts.body).ids.map(id => {
    let updatedTime = findUpdatedTimeForId(id)
    return {
      'self': base + '/jira/rest/api/2/issue/10010/worklog/' + id,
      'author': {
        'self': base + '/jira/rest/api/2/user?username=bob',
        'name': 'bob',
        'displayName': 'Bob McFace ' + Math.floor(Math.random() * Math.floor(5)),
        'active': false
      },
      'updateAuthor': {
        'self': base + '/jira/rest/api/2/user?username=bob',
        'name': 'bob',
        'displayName': 'Bob McFace',
        'active': false
      },
      'comment': 'Completed task.',
      // JIRA returns local ISO string, not UTC
      'updated': moment(updatedTime).toISOString(true),
      'visibility': {
        'type': 'group',
        'value': 'jira-developers'
      },
      'started': moment(updatedTime - 60000).toISOString(true),
      'timeSpent': '1h',
      'timeSpentSeconds': 3600 - Math.floor(Math.random() * 1000),
      'id': id,
      'issueId': (10001 + Math.floor(Math.random() * 1000)).toString()
    }
  })
}