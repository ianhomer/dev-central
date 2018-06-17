import React from 'react'
import { connect } from 'react-redux'
import Service from '../components/Service'
import { authenticate, changePropertyValue, logout, removeHandle } from '../actions'
import { jiraWorkRefresh } from '../services/jira/actions'

const ActiveService = ({ match, handle, workLog,
    chain,
    onAuthenticate, onChangeHandleProperty, onLogout, onRemove, onRenderIssue,
    onRefreshWork }) => {
  return (
    <div>
      {handle &&
        <Service
          handle={handle}
          workLog={workLog}
          onAuthenticate={(password) => onAuthenticate(handle, password)}
          onChangeHandleProperty={(propertyName, value) =>
            onChangeHandleProperty(handle, propertyName, value)}
          onLogout={() => onLogout(handle)}
          onRemove={() => onRemove(handle.name)}
          onRefreshWork={() => onRefreshWork(handle, chain)}
        />
      }
    </div>
  )
}


const mapStateToProps = (state,route) => ({
  handle : state.handles.find(it =>
    it.name === route.match.params.currentServiceName
  ) || state.handles[0],
  workLog : state.jira.workLog,
  chain : {
    isIssueStale : (id) => {
      return !state.jira.issues || !state.jira.issues.some(issue => issue.id === id)
    }
  }

})

const mapDispatchToProps = dispatch => ({
  onAuthenticate: (handle, password) => dispatch(authenticate(handle, password)),
  onChangeHandleProperty: (handleName, propertyName, value) =>
    dispatch(changePropertyValue(handleName, propertyName, value)),
  onLogout: (handle) => dispatch(logout(handle)),
  onRemove: name => dispatch(removeHandle(name)),
  onRefreshWork: (handle, chain) => dispatch(jiraWorkRefresh(handle, chain))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveService)
