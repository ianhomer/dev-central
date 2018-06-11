export const ADD_HANDLE = 'ADD_HANDLE'

export function addHandle(url) {
  return {
    type: ADD_HANDLE,
    url
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

export function removeHandle(url) {
  return {
    type: REMOVE_HANDLE,
    url
  }
}
