import { connect } from 'react-redux'
import ServerInfos from '../components/ServerInfos'

const getServerInfos = (serverInfos) => {
  return serverInfos
}

const mapStateToProps = state => ({
  serverInfos: getServerInfos(state.serverInfos)
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerInfos)