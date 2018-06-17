import React from 'react'
import { connect } from 'react-redux'

class Issue extends React.Component {
  componentDidUpdate() {
    // TODO : Read https://hackernoon.com/evil-things-you-do-with-redux-dispatch-in-updating-lifecycle-methods-ad116de882d4
    if (!this.props.issue) {
      this.props.onFetchIssue(this.props.id)
    }
  }

  render() {
    const { issue } = this.props
    return (
      <span>
        { issue && issue.key }
      </span>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    id : parseInt(ownProps.id, 10),
    issue : state.jira.issues && state.jira.issues.find(it => parseInt(it.id, 10) === ownProps.id)
  }
}

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Issue)
