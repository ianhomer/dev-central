import mockAuthentication from './authentication'
import mockWorkLogList from './workLogList'
import mockWorkLogUpdated from './workLogUpdated'
import mockIssue from './mockIssue'

export default function mockJira(fetchMock) {
  fetchMock.post('glob:*/jira/rest/auth/1/session', function(url,opts) {
    return mockAuthentication(opts)
  })
  //.*/rest/api/2/worklog/updated
  fetchMock.get('glob:*/rest/api/2/worklog/updated', function(url,opts) {
    return mockWorkLogUpdated()
  })
  fetchMock.post('glob:*/rest/api/2/worklog/list', function(url,opts) {
    return mockWorkLogList(opts)
  })
  fetchMock.get('glob:*/rest/api/2/issue/*', function(url,opts) {
    return mockIssue(url)
  })
}