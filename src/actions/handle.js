export const ADD_HANDLE = 'ADD_HANDLE'
export function addHandle(name) {
  return {
    type: ADD_HANDLE,
    name
  }
}

export const CHANGE_PROPERTY_VALUE = 'CHANGE_PROPERTY_VALUE'
export function changePropertyValue(handle, propertyName, value) {
  return {
    type: CHANGE_PROPERTY_VALUE,
    handle, propertyName, value
  }
}

export const ENSURE_HANDLES_VALID = 'ENSURE_HANDLES_VALID'
export function ensureHandlesValid() {
  return {
    type: ENSURE_HANDLES_VALID
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
