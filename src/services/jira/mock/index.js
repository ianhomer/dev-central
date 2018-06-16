import { fetchMock } from 'fetch-mock'
import mockWorkLogUpdated from './workLogUpdated'

export default function mock(callback) {
  fetchMock('*', mockWorkLogUpdated())
  const result = callback()
  console.log(result)
  fetchMock.restore()
  return result
}