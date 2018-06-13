import React from 'react'
import { connect } from 'react-redux'
import Service from '../components/Service'
import { removeHandle } from '../actions'

const ActiveService = ({ dispatch }) => {
  return (
    <div>
      <Service/>
    </div>
  )
}

const mapStateToProps = state => ({
  x: 'x'
})

const mapDispatchToProps = dispatch => ({
  onRemove: name => dispatch(removeHandle(name))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveService)
