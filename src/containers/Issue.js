import React from 'react'
import { connect } from 'react-redux'

class Issue extends React.Component {
  componentDidMount() {
    this.props.onFetchIssue(this.props.id)
    console.log("DID MOUNT ")
    console.log(this.props)
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
  return state.jira.issues.find(it => it.id === id);
}

const mapStateToProps = (state, ownProps) => {
  console.log("OWN PROPS")
  console.log(ownProps)
  return {
    id : ownProps.id,
    issue : ownProps && fetchItem(state, ownProps.id)
  }
}

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Issue)
