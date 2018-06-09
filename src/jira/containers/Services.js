import { connect } from 'react-redux'
import ServiceInfos from '../components/ServiceInfos'

const getServiceInfos = (serviceInfos) => {
  return serviceInfos
}

const mapStateToProps = state => ({
  serviceInfos: getServiceInfos(state.serviceInfos)
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceInfos)