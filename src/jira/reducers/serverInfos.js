import {
  REQUEST_SERVER_INFO,
  RECEIVE_SERVER_INFO
} from '../actions'


const serverInfos = (state = [], action) => {
  switch (action.type) {
    case REQUEST_SERVER_INFO:
      return [
        ...state, {
          isFetching: true,
        }
      ]
    case RECEIVE_SERVER_INFO:
      return [
        ...state,
        {
          id:'purplepip.com',
          isFetching: false,
          version: action.serverInfo.version,
          lastUpdated: action.receivedAt
        }
      ]
    default:
      return state
  }
}

export default serverInfos