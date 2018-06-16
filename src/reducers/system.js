import {
  MOCK_BACKEND
} from '../actions'

const system = (state = [], action) => {
  switch (action.type) {
    case MOCK_BACKEND:
      return [
        ...state, {
          mock: action.enable
        }
      ]
    default:
      return state
  }
}

export default system