import React from 'react'
import { connect } from 'react-redux'
import Nav from '../components/Nav'
import { mockBackend } from '../actions'

const ActiveNav = ({ onMock }) => {
  return (
    <Nav onMock={onMock} />
  )
}


const mapStateToProps = (state) => ({
})

const mapDispatchToProps = dispatch => ({
  onMock: enable => dispatch(mockBackend(enable))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveNav)
