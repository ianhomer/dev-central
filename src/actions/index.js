export const ADD_HANDLE = 'ADD_HANDLE'

export function addHandle(name) {
  return {
    type: ADD_HANDLE,
    name
  }
}

export const AUTHENTICATE = 'AUTHENTICATE'

export function authenticate(username) {
  return {
    type: AUTHENTICATE,
    username
  }
}

export const RECEIVE_HANDLE_INFO = 'RECEIVE_HANDLE_INFO'

export function receiveServiceInfo(handleInfo) {
  return {
    type: RECEIVE_HANDLE_INFO,
    handleInfo
  }
}

export const REQUEST_HANDLE_INFO = 'REQUEST_HANDLE_INFO'

export function requestHandleInfo() {
  return {
    type: REQUEST_HANDLE_INFO
  }
}

export const REMOVE_HANDLE = 'REMOVE_HANDLE'

export function removeHandle(name) {
  return {
    type: REMOVE_HANDLE,
    name
  }
}
