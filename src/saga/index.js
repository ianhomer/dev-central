import { call, put, takeEvery } from 'redux-saga/effects'
import {
  JIRA_WORK_LOG_UPDATED_FETCH_SUCCEEDED,
  JIRA_WORK_LOG_UPDATED_FETCH_FAILED,
  JIRA_WORK_LOG_UPDATED_FETCH_REQUESTED
} from '../services/jira/actions'
import mockWorkLogUpdated from '../services/jira/mock/workLogUpdated'

function fetchWorkLogApi() {
  return mockWorkLogUpdated()
    //return fetch(restRoot + '/' + path, {
    //  method: 'POST',
    //  headers: {
    //    'Content-Type': 'application/json'
    //  }, body: JSON.stringify(entity)
    //})
    //  .then(response => response.json())
    //  .catch(reason => console.error(reason))
}


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
// /rest/api/2/worklog/updated
function* fetchWorkLogUpdated(action) {
   try {
      const workLog = yield call(fetchWorkLogApi);
      yield put(
        {type: JIRA_WORK_LOG_UPDATED_FETCH_SUCCEEDED, workLog: workLog});
   } catch (e) {
      yield put({type: JIRA_WORK_LOG_UPDATED_FETCH_FAILED, message: e.message});
   }
}

export function* saga() {
  yield takeEvery(JIRA_WORK_LOG_UPDATED_FETCH_REQUESTED, fetchWorkLogUpdated);
}