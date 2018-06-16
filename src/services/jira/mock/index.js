import mockWorkLogUpdated from './workLogUpdated'

export default function mockJira(fetchMock) {
  fetchMock.get('*', function(url,opts) {
    return mockWorkLogUpdated()
  })
}