import { all, fork } from 'redux-saga/effects'

import authenticationSaga from './authentication'
import jiraSaga from '../services/jira/saga'
import mockSaga from './mockSaga'

export function* saga() {
  yield all([
    fork(authenticationSaga),
    fork(jiraSaga),
    fork(mockSaga)
  ])
}