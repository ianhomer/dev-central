import { call, put, takeEvery } from 'redux-saga/effects'
import {
  JIRA_WORK_LOG_UPDATED_FETCH_SUCCEEDED,
  JIRA_WORK_LOG_UPDATED_FETCH_FAILED,
  JIRA_WORK_LOG_UPDATED_FETCH_REQUESTED,
} from '../services/jira/actions'
import {
  SYSTEM_MOCK_BACKEND
} from '../actions'

import { mockAll, unMockAll } from '../mock'

function fetchWorkLogApi(handle) {
  return fetch(handle.url + '/rest/api/2/worklog/updated', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  .then(response => {
    const json = response.json()
    json.then(it => {
      if (!it.values) {
        console.log(it)
        throw "No JSON response"
      }
    })
    return json
  })
}


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
// /rest/api/2/worklog/updated
function* fetchWorkLogUpdated(action) {
   try {
      const workLog = yield call(fetchWorkLogApi, action.handle);
      yield put(
        {type: JIRA_WORK_LOG_UPDATED_FETCH_SUCCEEDED, workLog: workLog});
   } catch (e) {
      yield put({type: JIRA_WORK_LOG_UPDATED_FETCH_FAILED, message: e.message});
   }
}

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

export function* saga() {
  yield takeEvery(JIRA_WORK_LOG_UPDATED_FETCH_REQUESTED, fetchWorkLogUpdated);
  yield takeEvery(SYSTEM_MOCK_BACKEND, mockBackend)
}