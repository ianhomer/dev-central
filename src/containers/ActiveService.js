import React from 'react'
import { connect } from 'react-redux'
import Service from '../components/Service'
import { removeHandle } from '../actions'
import { jiraWorkRefresh } from '../services/jira/actions'


const ActiveService = ({ match, handle, workLog, onRemove, onRefreshWork }) => {
  return (
    <div>
      {handle &&
        <Service
          handle={handle}
          workLog={workLog}
          onRemove={() => onRemove(handle.name)}
          onRefreshWork={onRefreshWork}
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
  onRemove: name => dispatch(removeHandle(name)),
  onRefreshWork: () => dispatch(jiraWorkRefresh())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveService)
