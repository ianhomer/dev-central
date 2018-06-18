import {
  AUTHENTICATION_SUCCEEDED,
  ADD_HANDLE,
  CHANGE_PROPERTY_VALUE,
  ENSURE_HANDLES_VALID,
  RECEIVE_HANDLE_INFO,
  REQUEST_HANDLE_INFO,
  REQUEST_LOGOUT,
  REMOVE_HANDLE
} from '../actions'

const handles = (state = [], action) => {
  switch (action.type) {
    case AUTHENTICATION_SUCCEEDED:
      var changedSessionHandle = Object.assign({},
        state.find(handle => handle.name === action.name))
      changedSessionHandle.session = action.authentication.session
      changedSessionHandle.isAuthenticated = true
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
      var changedHandle = Object.assign({}, state.find(
        handle => handle.name === action.handle.name))
      changedHandle[action.propertyName] = action.value
      return [
        ...state.filter(handle => handle.name !== action.handle.name),
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
    case REQUEST_LOGOUT:
      var changedLogoutHandle = Object.assign({}, state.find(handle => handle.name === action.name))
      changedLogoutHandle["sessionId"] = null
      changedLogoutHandle.isAuthenticated = false
      return [
        ...state.filter(handle => handle.name !== action.name),
        changedLogoutHandle
      ]
    case REMOVE_HANDLE:
      return state.filter(handle => handle.name !== action.name)
    default:
      return state
  }
}

export default handles