import {
  ADD_SERVICE,
  REQUEST_SERVICE_INFO,
  RECEIVE_SERVICE_INFO
} from '../actions'

const services = (state = [], action) => {
  switch (action.type) {
    case ADD_SERVICE:
      return [
        ...state, {
          url: action.url
        }
      ]
    case REQUEST_SERVICE_INFO:
      return [
        ...state, {
          isFetching: true,
        }
      ]
    case RECEIVE_SERVICE_INFO:
      return [
        ...state,
        {
          id:'purplepip.com',
          isFetching: false,
          version: action.service.version,
          lastUpdated: action.receivedAt
        }
      ]
    default:
      return state
  }
}

export default services