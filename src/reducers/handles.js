import {
  AUTHENTICATION_SUCCEEDED,
  ADD_HANDLE,
  CHANGE_PROPERTY_VALUE,
  ENSURE_HANDLES_VALID,
  RECEIVE_HANDLE_INFO,
  REQUEST_HANDLE_INFO,
  REMOVE_HANDLE
} from '../actions'

const handles = (state = [], action) => {
  switch (action.type) {
    case AUTHENTICATION_SUCCEEDED:
      var changedSessionHandle = state.find(handle => handle.name === action.name)
      changedSessionHandle["sessionId"] = action.authentication.session.value
      return [
        ...state.filter(handle => handle.name !== action.name),
        changedSessionHandle
      ]
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
    case CHANGE_PROPERTY_VALUE:
      var changedHandle = state.find(handle => handle.name === action.name)
      changedHandle[action.propertyName] = action.value
      return [
        ...state.filter(handle => handle.name !== action.name),
        changedHandle
      ]
    case ENSURE_HANDLES_VALID:
      // Fix any corruptions in the store
      // 1) Remove any handles with no name
      return state.filter(handle =>
        typeof handle === 'object'  && handle.name)
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