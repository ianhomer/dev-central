import { connect } from 'react-redux'
import Services from '../components/Services'

const getServices = (services) => {
  return services
}

const mapStateToProps = state => ({
  services: getServices(state.services)
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Services)