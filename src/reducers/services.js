import {
  ADD_SERVICE,
  RECEIVE_SERVICE_INFO,
  REQUEST_SERVICE_INFO,
  REMOVE_SERVICE,
} from '../actions'

const services = (state = [], action) => {
  switch (action.type) {
    case ADD_SERVICE:
      if (state.some(service => service.url === action.url)) {
        return state
      }
      return [
        ...state, {
          url: action.url
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
    case REQUEST_SERVICE_INFO:
      return [
        ...state, {
          isFetching: true,
        }
      ]
    case REMOVE_SERVICE:
      return state.filter(service => service.url !== action.url)
    default:
      return state
  }
}

export default services