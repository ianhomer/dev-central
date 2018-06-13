import {
  ADD_HANDLE,
  RECEIVE_HANDLE_INFO,
  REQUEST_HANDLE_INFO,
  REMOVE_HANDLE
} from '../actions'

const handles = (state = [], action) => {
  switch (action.type) {
    case ADD_HANDLE:
      if (state.some(handle => handle.name === action.name)) {
        return state
      }
      return [
        ...state, {
          name: action.name,
          isAuthenticated: false
        }
      ]
    case RECEIVE_HANDLE_INFO:
      return [
        ...state,
        {
          id:'purplepip.com',
          isFetching: false,
          version: action.handle.version,
          lastUpdated: action.receivedAt
        }
      ]
    case REQUEST_HANDLE_INFO:
      return [
        ...state, {
          isFetching: true,
        }
      ]
    case REMOVE_HANDLE:
      return state.filter(handle => handle.name !== action.name)
    default:
      return state
  }
}

export default handles