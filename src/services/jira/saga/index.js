import { call, put, takeEvery } from 'redux-saga/effects'

import {
  JIRA_INFO_FETCH_REQUESTED,
  JIRA_INFO_FETCH_SUCCEEDED,
  JIRA_INFO_FETCH_FAILED,
  JIRA_WORK_LOG_UPDATED_FETCH_REQUESTED,
  JIRA_WORK_LOG_UPDATED_FETCH_FAILED,
  JIRA_WORK_LOG_UPDATED_FETCH_SUCCEEDED,
  JIRA_WORK_LOG_LIST_FETCH_REQUESTED,
  JIRA_WORK_LOG_LIST_FETCH_FAILED,
  JIRA_WORK_LOG_LIST_FETCH_SUCCEEDED,
  jiraRequestIssue,
  JIRA_ISSUE_FETCH_REQUESTED,
  JIRA_ISSUE_FETCH_FAILED,
  JIRA_ISSUE_FETCH_SUCCEEDED,
} from '../actions'

const workLogIdsRequiringFetch = {}

function createRequestHeaders(handle) {
  var headers = {
    'Content-Type': 'application/json',
    'User-Agent': 'react/16.4.0',
    'Authorization': 'Basic ' + btoa(handle.username + ":" + handle.apiKey)
  }
  return headers
}

function fetchWorkLogUpdatedApi(handle) {
  // TODO : Add since and expand GET arguments
  return fetch(handle.url + '/rest/api/2/worklog/updated', {
      method: 'GET',
      headers: createRequestHeaders(handle)
    })
  .then(response => response.json())
}

function fetchWorkLogListApi(handle) {
  let requiredIds = Object.keys(workLogIdsRequiringFetch)
  return fetch(handle.url + '/rest/api/2/worklog/list', {
      method: 'POST',
      headers: createRequestHeaders(handle),
      body: JSON.stringify({ 'ids': requiredIds })
    })
  .then(response => response.json())
}

function fetchIssueApi(handle, id) {
  return fetch(handle.url + '/rest/api/2/issue/' + id, {
      method: 'GET',
      headers: createRequestHeaders(handle),
    })
  .then(response => response.json())
}

function fetchInfoApi(handle, action) {
  return fetch(handle.url + '/rest/api/2/serverInfo', {
      method: 'GET',
      headers: createRequestHeaders(handle)
    })
  .then(response => response.json())
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
// /rest/api/2/worklog/updated
function* fetchWorkLogUpdated(action) {
  try {
    const workLog = yield call(fetchWorkLogUpdatedApi, action.handle, action.chain)
    yield put({type: JIRA_WORK_LOG_UPDATED_FETCH_SUCCEEDED, chain: action.chain, workLog})
    workLog.values.forEach(it => workLogIdsRequiringFetch[it.worklogId] = true)
    yield put({type: JIRA_WORK_LOG_LIST_FETCH_REQUESTED, chain: action.chain,
      handle: action.handle})
  } catch (e) {
    console.log(e)
    yield put({type: JIRA_WORK_LOG_UPDATED_FETCH_FAILED, message: e.message})
  }
}

function* fetchWorkLogList(action) {
  try {
    const workLogList = yield call(fetchWorkLogListApi, action.handle)
    yield put({type: JIRA_WORK_LOG_LIST_FETCH_SUCCEEDED, workLogList: workLogList})

    for (var i in workLogList) {
      var workLog = workLogList[i]
      if (workLog.issueId && action.chain.isIssueStale(workLog.issueId)) {
        yield put(jiraRequestIssue(action.handle, workLog.issueId))
      }
    }
  } catch (e) {
    console.log(e)
    yield put({type: JIRA_WORK_LOG_LIST_FETCH_FAILED, message: e.message})
  }
}

function* fetchIssue(action) {
  try {
    const issue = yield call(fetchIssueApi, action.handle, action.id)
    yield put({type: JIRA_ISSUE_FETCH_SUCCEEDED, issue})
  } catch (e) {
    console.log(e)
    yield put({type: JIRA_ISSUE_FETCH_FAILED, message: e.message})
  }
}

function* fetchInfo(action) {
  try {
    const info = yield call(fetchInfoApi, action.handle)
    yield put({type: JIRA_INFO_FETCH_SUCCEEDED, info})
  } catch (e) {
    console.log(e)
    yield put({type: JIRA_INFO_FETCH_FAILED, message: e.message})
  }
}

export default function* jiraSaga() {
  yield takeEvery(JIRA_WORK_LOG_UPDATED_FETCH_REQUESTED, fetchWorkLogUpdated)
  yield takeEvery(JIRA_WORK_LOG_LIST_FETCH_REQUESTED, fetchWorkLogList)
  yield takeEvery(JIRA_ISSUE_FETCH_REQUESTED, fetchIssue)
  yield takeEvery(JIRA_INFO_FETCH_REQUESTED, fetchInfo)
}