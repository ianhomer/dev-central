import { combineReducers } from "redux";
import info from "./info";
import issues from "./issues";
import workLog from "./workLog";

export default combineReducers({
  info,
  issues,
  workLog,
});
