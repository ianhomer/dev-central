import mockJira from '../services/jira/mock'
import fetchMock from 'fetch-mock'

export function mockAll() {
  mockJira(fetchMock)
  console.log("Backend is mocked")
}

export function unMockAll() {
  fetchMock.restore();
  console.log("Backend is NOT mocked")
}