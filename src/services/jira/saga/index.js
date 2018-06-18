import { call, put, takeEvery } from 'redux-saga/effects'

import {
  AUTHENTICATION_FAILED,
  AUTHENTICATION_SUCCEEDED,
} from '../../../actions'

import {
  JIRA_REQUEST_AUTHENTICATION,
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
  return {
    'Content-Type': 'application/json',
    'Cookie': handle.session.name + '=' + handle.session.value,
    'Access-Control-Request-Method': 'GET',
    'User-Agent': 'curl/7.54.0'
  }
}

function authenticateApi(handle, password) {
  // TODO : Note that cookie based authentication will be deprecated soon
  // https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-basic-auth-and-cookie-based-auth/
  return fetch(handle.url + '/rest/auth/1/session', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'User-Agent': 'curl/7.54.0'
        //'Authorization': 'Basic ' + btoa(handle.username + ":" + password)
      },
      referrer: 'no-referrer',
      body: JSON.stringify({ 'username': handle.username, 'password': password })
    })
  .then(response => response.json())
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
      body: { 'ids': requiredIds }
    })
  .then(response => response.json())
}

function fetchIssueApi(handle, action, id) {
  let requiredIds = Object.keys(workLogIdsRequiringFetch)
  return fetch(handle.url + '/rest/api/2/issue/' + id, {
      method: 'GET',
      headers: createRequestHeaders(handle),
      body: { 'ids': requiredIds }
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

function* authenticate(action) {
  try {
    const authentication = yield call(authenticateApi, action.handle, action.password)
    yield put({type: AUTHENTICATION_SUCCEEDED,
      name: action.handle.name,
      authentication})
  } catch (e) {
    yield put({type: AUTHENTICATION_FAILED, message: e.message})
  }
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
// /rest/api/2/worklog/updated
function* fetchWorkLogUpdated(action) {
   try {
      const workLog = yield call(fetchWorkLogUpdatedApi, action.handle, action.chain)
      yield put({type: JIRA_WORK_LOG_UPDATED_FETCH_SUCCEEDED, chain: action.chain, workLog})
      workLog.values.forEach(it => workLogIdsRequiringFetch[it.worklogId] = true)
      yield put({type: JIRA_WORK_LOG_LIST_FETCH_REQUESTED, chain: action.chain, handle: action
      .handle})
   } catch (e) {
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
    yield put({type: JIRA_WORK_LOG_LIST_FETCH_FAILED, message: e.message})
  }
}

function* fetchIssue(action) {
  try {
    const issue = yield call(fetchIssueApi, action.handle, action.id)
    yield put({type: JIRA_ISSUE_FETCH_SUCCEEDED, issue})
  } catch (e) {
    yield put({type: JIRA_ISSUE_FETCH_FAILED, message: e.message})
  }
}

function* fetchInfo(action) {
  try {
    const info = yield call(fetchInfoApi, action.handle)
    yield put({type: JIRA_INFO_FETCH_SUCCEEDED, info})
  } catch (e) {
    yield put({type: JIRA_INFO_FETCH_FAILED, message: e.message})
  }
}

export default function* jiraSaga() {
  yield takeEvery(JIRA_REQUEST_AUTHENTICATION, authenticate)
  yield takeEvery(JIRA_WORK_LOG_UPDATED_FETCH_REQUESTED, fetchWorkLogUpdated)
  yield takeEvery(JIRA_WORK_LOG_LIST_FETCH_REQUESTED, fetchWorkLogList)
  yield takeEvery(JIRA_ISSUE_FETCH_REQUESTED, fetchIssue)
  yield takeEvery(JIRA_INFO_FETCH_REQUESTED, fetchInfo)
}