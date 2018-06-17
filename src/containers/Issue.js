import React from 'react'
import { connect } from 'react-redux'

class Issue extends React.Component {
  componentDidUpdate() {
    this.props.onFetchIssue(this.props.id)
  }

  render() {
    const { issue } = this.props
    return (
      <div>
        issue : { JSON.stringify(issue) }
      </div>
    )
  }
}

function fetchItem(state, id) {
  if (!state.jira.issues || !state.jira.issues.some(it => it.id === id)) {
    console.log("FETCH ITEM : " + id)
    return null
  }
  return ;
}

const mapStateToProps = (state, ownProps) => {
  console.log("OWN PROPS")
  console.log(ownProps)
  return {
    id : parseInt(ownProps.id, 10),
    issue : state.jira.issues && state.jira.issues.find(it => it.id === ownProps.id)
  }
}

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Issue)
