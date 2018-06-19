import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { findActiveHandle } from '../utils/handles'

class Issue extends React.Component {
  render() {
    const { issue, handle } = this.props
    return (
      <span>
        { issue &&
          <a href={handle.url + '/browse/' + issue.key } target="_blank">{ issue.key }</a>
        }
      </span>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    handle : findActiveHandle(state, ownProps),
    id : parseInt(ownProps.id, 10),
    issue : state.jira.issues && state.jira.issues.find(it => parseInt(it.id, 10) === ownProps.id)
  }
}

const mapDispatchToProps = dispatch => ({
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Issue))
