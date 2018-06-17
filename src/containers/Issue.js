import React from 'react'
import { connect } from 'react-redux'

class Issue extends React.Component {
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
