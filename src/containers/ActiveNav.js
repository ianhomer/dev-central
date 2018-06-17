import React from 'react'
import { connect } from 'react-redux'
import Nav from '../components/Nav'
import { mockBackend } from '../actions'

const ActiveNav = ({ system, onMock }) => {
  return (
    <Nav system={system} onMock={onMock} />
  )
}


const mapStateToProps = (state) => ({
  system: state.system
})

const mapDispatchToProps = dispatch => ({
  onMock: enable => dispatch(mockBackend(true, enable))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveNav)
