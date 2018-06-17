import { combineReducers } from 'redux'
import workLog from './workLog'
import issues from './issues'

export default combineReducers({
  issues, workLog
})