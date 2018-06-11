import { connect } from 'react-redux'
import Handles from '../components/Handles'
import { removeHandle } from '../actions'

const getHandles = (handles) => {
  return handles
}

const mapStateToProps = state => ({
  handles: getHandles(state.handles)
})

const mapDispatchToProps = dispatch => ({
  onRemove: url => dispatch(removeHandle(url))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Handles)