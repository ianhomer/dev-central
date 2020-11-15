import { combineReducers } from "redux";
import handles from "./handles";
import system from "./system";
import jira from "../services/jira/reducers";

export default combineReducers({
  handles,
  system,
  jira,
});
