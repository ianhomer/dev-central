import mockWorkLogList from './workLogList'
import mockWorkLogUpdated from './workLogUpdated'

export default function mockJira(fetchMock) {
  //.*/rest/api/2/worklog/updated
  fetchMock.get('glob:*/rest/api/2/worklog/updated', function(url,opts) {
    return mockWorkLogUpdated()
  })
  fetchMock.post('glob:*/rest/api/2/worklog/list', function(url,opts) {
    return mockWorkLogList(opts)
  })
}