import React from 'react'
import { connect } from 'react-redux'
import Service from '../components/Service'
import { authenticate, changePropertyValue, removeHandle } from '../actions'
import { jiraWorkRefresh } from '../services/jira/actions'

const ActiveService = ({ match, handle, workLog,
    onAuthenticate, onChangeHandleProperty, onRemove, onRefreshWork }) => {
  return (
    <div>
      {handle &&
        <Service
          handle={handle}
          workLog={workLog}
          onAuthenticate={(password) => onAuthenticate(handle.name, password)}
          onChangeHandleProperty={onChangeHandleProperty}
          onRemove={() => onRemove(handle.name)}
          onRefreshWork={() => onRefreshWork(handle)}
        />
      }
    </div>
  )
}


const mapStateToProps = (state,route) => ({
  handle : state.handles.find(it =>
    it.name === route.match.params.currentServiceName
  ) || state.handles[0],
  workLog : state.jira.workLog
})

const mapDispatchToProps = dispatch => ({
  onAuthenticate: (handleName, password) => dispatch(authenticate(handleName, password)),
  onChangeHandleProperty: (handleName, propertyName, value) =>
    dispatch(changePropertyValue(handleName, propertyName, value)),
  onRemove: name => dispatch(removeHandle(name)),
  onRefreshWork: (handle) => dispatch(jiraWorkRefresh(handle))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveService)
