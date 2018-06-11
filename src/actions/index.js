export const ADD_SERVICE = 'ADD_SERVICE'

export function addService(url) {
  return {
    type: ADD_SERVICE,
    url
  }
}

export const RECEIVE_SERVICE_INFO = 'RECEIVE_SERVER_INFO'

export function receiveServiceInfo(serviceInfo) {
  return {
    type: RECEIVE_SERVICE_INFO,
    serviceInfo
  }
}

export const REQUEST_SERVICE_INFO = 'REQUEST_SERVICE_INFO'

export function requestServiceInfo() {
  return {
    type: REQUEST_SERVICE_INFO
  }
}

export const REMOVE_SERVICE = 'REMOVE_SERVICE'

export function removeService(url) {
  return {
    type: REMOVE_SERVICE,
    url
  }
}
