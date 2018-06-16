import {
  SYSTEM_MOCK_BACKEND
} from '../actions'

const system = (state = [], action) => {
  switch (action.type) {
    case SYSTEM_MOCK_BACKEND:
      return Object.assign({}, state,
        {
          mock: action.enable
        })
    default:
      return state
  }
}

export default system