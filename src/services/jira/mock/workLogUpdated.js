const workLogSeparation = 60000
// zero is the time that IDs start for the mock data
const zero = 1529173500000

export default function workLogUpdated() {
  const now = +new Date();
  const since = now - 8640000
  const idStart = Math.floor((now - zero) / workLogSeparation)

  var values = []
  for (var i = 0; i < 5; i++) {
    values.push({
      'worklogId': idStart + i,
      'updatedTime': now - i * workLogSeparation,
      'properties': []
    })
  }

  return {
    'values': values,
    'since': since,
    'until': now,
    'self': 'http://www.example.com/jira/worklog/updated?since=' + since,
    'nextPage': 'http://www.example.com/jira/worklog/updated/updated?since='
      + since + '&since=' + since,
    'lastPage': true
  }
}