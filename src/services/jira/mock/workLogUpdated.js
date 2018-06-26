import { findWorkLogIdForNow, findUpdatedTimeForId } from './mockUtils'

export default function workLogUpdated() {
  const now = +new Date();
  const since = now - 8640000
  const idStart = findWorkLogIdForNow()

  var values = []
  for (var id = idStart ; id > idStart - 20; id--) {
    values.push({
      'worklogId': id,
      'updatedTime': findUpdatedTimeForId(id),
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