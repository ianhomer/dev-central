import moment from "moment";

import {
  JIRA_WORK_LOG_LIST_FETCH_SUCCEEDED,
  JIRA_WORK_LOG_UPDATED_FETCH_SUCCEEDED,
} from "../actions";

import { SYSTEM_FLUSH_DATA } from "../../../actions";

const DEFAULT = {
  lastUpdated: 0,
  records: [],
};

const workLog = (state = DEFAULT, action) => {
  switch (action.type) {
    //
    // Commit updated work log entries.
    //
    case JIRA_WORK_LOG_UPDATED_FETCH_SUCCEEDED:
      const newWorkLogs = action.workLog.values.map((workLog) => {
        var workLogIdAsString = workLog.worklogId.toString();
        return Object.assign(
          {},
          {
            id: workLogIdAsString,
            updated: workLog.updatedTime,
          },
          state.records.find((it) => it.id === workLogIdAsString)
        );
      });
      const newWorkLogsIds = newWorkLogs.map((workLog) => workLog.id);
      return {
        lastUpdated: Math.max(state.lastUpdated, action.workLog.until),
        records: [
          ...state.records.filter(
            (workLog) => !newWorkLogsIds.includes(workLog.id)
          ),
          ...newWorkLogs,
        ],
      };
    //
    // Commit work log details from list request
    //
    case JIRA_WORK_LOG_LIST_FETCH_SUCCEEDED:
      const newListWorkLogsIds = action.workLogList.map((workLog) =>
        workLog.id.toString()
      );
      const newListWorkLogs = action.workLogList.map((item) => {
        var started = moment(item.started);
        var newItem = {
          author: {
            displayName: item.author.displayName,
          },
          id: item.id.toString(),
          comment: item.comment,
          issueId: item.issueId,
          rootIssueId: item.issueId,
          updated: +moment(item.updated),
          started: +started,
          startedDay: parseInt(started.format("YYYYMMDD"), 10),
          startedDate: started.format("YYYY-MM-DD"),
          timeSpentSeconds: item.timeSpentSeconds,
        };
        var record = state.records.find((it) => it.id === newItem.id);
        return Object.assign({}, record, newItem);
      });
      return Object.assign({}, state, {
        records: [
          ...state.records.filter(
            (workLog) => !newListWorkLogsIds.includes(workLog.id)
          ),
          ...newListWorkLogs,
        ],
      });
    case SYSTEM_FLUSH_DATA:
      return DEFAULT;
    default:
      return state;
  }
};

export default workLog;
