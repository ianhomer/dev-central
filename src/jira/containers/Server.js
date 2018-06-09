import { connect } from 'react-redux'
import ServerInfo from '../components/ServerInfo'

const getServerInfo = (serverInfo) => {
  return serverInfo
}

const mapStateToProps = state => ({
  serverInfo: getServerInfo(state.serverInfo)
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerInfo)