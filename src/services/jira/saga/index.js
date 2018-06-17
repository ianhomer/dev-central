import { call, put, takeEvery } from 'redux-saga/effects'

import {
  JIRA_WORK_LOG_UPDATED_FETCH_REQUESTED,
  JIRA_WORK_LOG_UPDATED_FETCH_FAILED,
  JIRA_WORK_LOG_UPDATED_FETCH_SUCCEEDED,
  JIRA_WORK_LOG_LIST_FETCH_REQUESTED,
  JIRA_WORK_LOG_LIST_FETCH_FAILED,
  JIRA_WORK_LOG_LIST_FETCH_SUCCEEDED,
} from '../actions'

const workLogIdsRequiringFetch = {}

function fetchWorkLogUpdatedApi(handle) {
  // TODO : Add since and expand GET arguments
  return fetch(handle.url + '/rest/api/2/worklog/updated', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  .then(response => response.json())
}

function fetchWorkLogListApi(handle) {
  let requiredIds = Object.keys(workLogIdsRequiringFetch)
  console.log("Fetching " + requiredIds)
  return fetch(handle.url + '/rest/api/2/worklog/list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: { 'ids': requiredIds }
    })
  .then(response => response.json())
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
// /rest/api/2/worklog/updated
function* fetchWorkLogUpdated(action) {
   try {
      const workLog = yield call(fetchWorkLogUpdatedApi, action.handle)
      yield put({type: JIRA_WORK_LOG_UPDATED_FETCH_SUCCEEDED, workLog: workLog})
      workLog.values.forEach(it => workLogIdsRequiringFetch[it.worklogId] = true)
      yield put({type: JIRA_WORK_LOG_LIST_FETCH_REQUESTED, handle: action.handle})
   } catch (e) {
      yield put({type: JIRA_WORK_LOG_UPDATED_FETCH_FAILED, message: e.message})
   }
}

function* fetchWorkLogList(action) {
  try {
    const workLogList = yield call(fetchWorkLogListApi, action.handle)
    yield put({type: JIRA_WORK_LOG_LIST_FETCH_SUCCEEDED, workLogList: workLogList})
  } catch (e) {
    yield put({type: JIRA_WORK_LOG_LIST_FETCH_FAILED, message: e.message})
  }
}

export default function* jiraSaga() {
  yield takeEvery(JIRA_WORK_LOG_UPDATED_FETCH_REQUESTED, fetchWorkLogUpdated)
  yield takeEvery(JIRA_WORK_LOG_LIST_FETCH_REQUESTED, fetchWorkLogList)
}