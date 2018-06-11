export const REQUEST_SERVER_INFO = 'REQUEST_SERVER_INFO'

export function requestServerInfo() {
  return {
    type: REQUEST_SERVER_INFO
  }
}

export const RECEIVE_SERVER_INFO = 'RECEIVE_SERVER_INFO'

export function receiveServerInfo(serverInfo) {
  return {
    type: RECEIVE_SERVER_INFO,
    serverInfo
  }
}