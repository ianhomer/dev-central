import { connect } from 'react-redux'
import Services from '../components/Services'
import { removeService } from '../actions'

const getServices = (services) => {
  return services
}

const mapStateToProps = state => ({
  services: getServices(state.services)
})

const mapDispatchToProps = dispatch => ({
  onRemove: url => dispatch(removeService(url))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Services)