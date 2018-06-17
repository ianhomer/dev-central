import React from 'react';
import PropTypes from 'prop-types'
import Trace from './Trace'

const Profile = ({ handle, onAuthenticate, onChangeProperty, onLogout, onRemove }) => {
  let password, username, url

  var onChangeUsername = function(e) {
    e.preventDefault()
    if (!username.value.trim()) {
      return
    }
    onChangeProperty(handle.name, 'username', username.value)
  }

  var onChangeUrl = function(e) {
    e.preventDefault()
    if (!url.value.trim()) {
      return
    }
    onChangeProperty(handle.name, 'url', url.value)
  }

  var onAuthenticateSubmit = function(e) {
    e.preventDefault()
    if (!password.value.trim()) {
      return
    }
    onAuthenticate(password.value)
  }

  return (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-sm-6">Name</div>
        <div className="col-sm-6">{ handle.name }</div>
      </div>
      <div className="row">
        <div className="col-sm-6">isAuthenticated</div>
        <div className="col-sm-6">{ handle.isAuthenticated.toString() }</div>
      </div>
      <div className="row">
        <div className="col-sm-6">session</div>
        <div className="col-sm-6">{ handle.sessionId }</div>
      </div>
      <div className="row">
        <div className="col-sm-6">Username</div>
        <div className="col-sm-6">
          <input type="text" defaultValue={handle.username}
            ref={node => username = node}
            onChange={onChangeUsername}/>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">URL</div>
        <div className="col-sm-6">
          <input type="text" defaultValue={handle.url}
            ref={node => url = node}
            onChange={onChangeUrl}/>
        </div>
      </div>

    { !handle.isAuthenticated &&
      <div>
        <form>
          <input type="text" name="username" autoComplete="username" value={handle.username}
            readOnly="true"/>
          <input type="password" ref={node => password = node} autoComplete="new-password"/>
          <button className="btn btn-primary btn-lg active" aria-pressed="true"
            onClick={onAuthenticateSubmit}>authenticate</button>
        </form>
        <div>
          <a className="btn btn-primary btn-lg active" onClick={onRemove}>delete</a>
        </div>
      </div>
    }
    { handle.isAuthenticated &&
      <div>
        <button className="btn btn-primary btn-lg active" aria-pressed="true"
          onClick={onLogout}>log out</button>
      </div>
    }
    </div>
    <Trace o={handle}/>
  </div>
)}

Profile.propTypes = {
  handle: PropTypes.object.isRequired,
  onAuthenticate: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default Profile