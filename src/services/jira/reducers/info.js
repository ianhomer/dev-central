import { JIRA_INFO_FETCH_SUCCEEDED } from "../actions";

import { SYSTEM_FLUSH_DATA } from "../../../actions";

const DEFAULT = {};

const info = (state = {}, action) => {
  switch (action.type) {
    case JIRA_INFO_FETCH_SUCCEEDED:
      return action.info;
    case SYSTEM_FLUSH_DATA:
      return DEFAULT;
    default:
      return state;
  }
};

export default info;
