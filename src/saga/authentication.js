import { put, takeEvery } from 'redux-saga/effects'

import {
  REQUEST_AUTHENTICATION
} from '../actions'

import {
  JIRA_REQUEST_AUTHENTICATION
} from '../services/jira/actions'


function* triggerAuthentication(action) {
  // TODO : conditionally trigger appropriate service authenticatipm
  yield put({type: JIRA_REQUEST_AUTHENTICATION,
    handle: action.handle, password: action.password})
}

export default function* mockSaga() {
  yield takeEvery(REQUEST_AUTHENTICATION, triggerAuthentication)
}