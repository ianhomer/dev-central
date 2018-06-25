import React from 'react'
import { connect } from 'react-redux'

import IssueTime from '../components/IssueTime'

const IssueTimeByRef = ({ issue }) => {
  return issue ? (
      <IssueTime issue={issue} />
  ) : ( <div>n/a</div> )
}

const mapStateToProps = (state, ownProps) => {
  return {
    issue : state.jira.issues && state.jira.issues.find(it => it.id === ownProps.id)
  }
}

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueTimeByRef)
