import { fork } from 'redux-saga/effects'

import jiraSaga from '../services/jira/saga'
import mockSaga from './mockSaga'

export function* saga() {
  yield [
    fork(jiraSaga),
    fork(mockSaga)
  ]
}