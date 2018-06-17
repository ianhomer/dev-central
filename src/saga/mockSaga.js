import { call, put, takeEvery } from 'redux-saga/effects'

import {
  flushData,
  SYSTEM_MOCK_BACKEND
} from '../actions'

import { mockAll, unMockAll } from '../mock'

// Enable or disable mock backend
function* mockBackend(action) {
  yield call(function(action) {
    if (action.enable) {
      mockAll()
    } else {
      unMockAll()
    }
  }, action)
  if (action.flush) {
    yield put(flushData())
  }
}

export default function* mockSaga() {
  yield takeEvery(SYSTEM_MOCK_BACKEND, mockBackend)
}