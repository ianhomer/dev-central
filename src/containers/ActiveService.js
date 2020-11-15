import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import Service from "../components/Service";
import Welcome from "../components/Welcome";
import { changePropertyValue, removeHandle } from "../actions";
import {
  jiraInfoFetchRequested,
  jiraWorkRefresh,
} from "../services/jira/actions";
import { findActiveHandle } from "../utils/handles";

const ActiveService = ({
  match,
  handle,
  workLog,
  serviceInfo,
  chain,
  onChangeHandleProperty,
  onRemove,
  onRenderIssue,
  onRefreshServiceInfo,
  onRefreshWork,
}) => {
  return (
    <div>
      {handle && (
        <Service
          handle={handle}
          serviceInfo={serviceInfo}
          workLog={workLog}
          onChangeHandleProperty={(propertyName, value) =>
            onChangeHandleProperty(handle, propertyName, value)
          }
          onRemove={() => onRemove(handle.name)}
          onRefreshWork={() => onRefreshWork(handle, chain)}
          onRefreshServiceInfo={() => onRefreshServiceInfo(handle)}
        />
      )}
      {!handle && <Welcome />}
    </div>
  );
};

const mapStateToProps = (state, route) => ({
  handle: findActiveHandle(state, route) || state.handles[0],
  workLog: state.jira.workLog,
  serviceInfo: state.jira.info,
  chain: {
    isIssueStale: (id) => {
      return (
        !state.jira.issues ||
        !state.jira.issues.some((issue) => issue.id === id)
      );
    },
    // Find work log IDs that are required, based on incoming updated work log values
    findWorkLogIdsRequired: (workLogValues) => {
      return workLogValues
        .filter((it) => {
          var existingWorkLogItem = state.jira.workLog.records.find(
            (workLog) => workLog.id === it.worklogId
          );
          return (
            !existingWorkLogItem ||
            !existingWorkLogItem.issueId ||
            existingWorkLogItem.updatedTime < it.updated
          );
        })
        .map((it) => it.worklogId);
    },

    findWorkRefreshSince: () => {
      return state.jira.workLog.lastUpdated || +moment() - 7 * 86400000;
    },
  },
});

const mapDispatchToProps = (dispatch) => ({
  onChangeHandleProperty: (handleName, propertyName, value) =>
    dispatch(changePropertyValue(handleName, propertyName, value)),
  onRemove: (name) => dispatch(removeHandle(name)),
  onRefreshWork: (handle, chain) => dispatch(jiraWorkRefresh(handle, chain)),
  onRefreshServiceInfo: (handle) => dispatch(jiraInfoFetchRequested(handle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActiveService);
