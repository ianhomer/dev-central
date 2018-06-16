export default function workLogList() {
  return [
    {
      'self': 'http://www.example.com/jira/rest/api/2/issue/10010/worklog/10000',
      'author': {
        'self': 'http://www.example.com/jira/rest/api/2/user?username=fred',
        'name': 'fred',
        'displayName': 'Fred F. User',
        'active': false
      },
      'updateAuthor': {
        'self': 'http://www.example.com/jira/rest/api/2/user?username=fred',
        'name': 'fred',
        'displayName': 'Fred F. User',
        'active': false
      },
      'comment': 'I did some work here.',
      'updated': '2018-06-07T05:42:08.018+0000',
      'visibility': {
        'type': 'group',
        'value': 'jira-developers'
      },
      'started': '2018-06-07T05:42:08.018+0000',
      'timeSpent': '3h 20m',
      'timeSpentSeconds': 12000,
      'id': '100028',
      'issueId': '10002'
    }
  ]
}