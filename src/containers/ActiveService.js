import React from 'react'
import { connect } from 'react-redux'
import Service from '../components/Service'
import { removeHandle } from '../actions'

const ActiveService = ({ match, handle, onRemove }) => {
  return (
    <div>
      {handle &&
        <Service handle={handle}
          onRemove={() => onRemove(handle.name)}
        />
      }
    </div>
  )
}


const mapStateToProps = (state,route) => ({
  handle : state.handles.find(it =>
    it.name === route.match.params.currentServiceName
  ) || state.handles[0]
})

const mapDispatchToProps = dispatch => ({
  onRemove: name => dispatch(removeHandle(name))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveService)
