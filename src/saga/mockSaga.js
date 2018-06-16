import { call, takeEvery } from 'redux-saga/effects'

import {
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
}

export default function* mockSaga() {
  yield takeEvery(SYSTEM_MOCK_BACKEND, mockBackend)
}