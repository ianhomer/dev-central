import { connect } from 'react-redux'
import HandleNavs from '../components/HandleNavs'

const getHandles = (handles) => {
  return handles
}

const mapStateToProps = state => ({
  handles: getHandles(state.handles)
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HandleNavs)