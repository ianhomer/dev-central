import React from 'react'
import { connect } from 'react-redux'
import Service from '../components/Service'
import { removeHandle } from '../actions'

const ActiveService = ({ match, handle }) => {
  return (
    <div>
      <Service handle={handle}/>
    </div>
  )
}


const mapStateToProps = (state,route) => ({
  handle : state.handles.find(it =>
    it.name === route.match.params.currentServiceName
  )
})

const mapDispatchToProps = dispatch => ({
  onRemove: name => dispatch(removeHandle(name))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveService)
