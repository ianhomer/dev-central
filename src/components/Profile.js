import React from 'react';
import PropTypes from 'prop-types'
import Trace from './Trace'

const Profile = ({ handle, onAuthenticate, onChangeProperty, onLogout, onRemove }) => {
  let password, sessionId, username, url

  var onChangeSessionId = function(e) {
    e.preventDefault()
    if (!sessionId.value.trim()) {
      return
    }
    onChangeProperty('sessionId', sessionId.value)
    onChangeProperty('isAuthenticated', true)
  }

  var onChangeUsername = function(e) {
    e.preventDefault()
    if (!username.value.trim()) {
      return
    }
    onChangeProperty('username', username.value)
  }

  var onChangeUrl = function(e) {
    e.preventDefault()
    if (!url.value.trim()) {
      return
    }
    onChangeProperty('url', url.value)
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
        <div className="col-sm-4">Name</div>
        <div className="col-sm-8">{ handle.name }</div>
      </div>
      <div className="row">
        <div className="col-sm-4">isAuthenticated</div>
        <div className="col-sm-8">{ handle.isAuthenticated.toString() }</div>
      </div>
      <div className="row">
        <div className="col-sm-4">session</div>
        <div className="col-sm-8">
          <input key={handle.name} type="text" defaultValue={handle.sessionId}
            ref={node => sessionId = node}
            size={60}
            onChange={onChangeSessionId}/>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">Username</div>
        <div className="col-sm-8">
          <input key={handle.name} type="text" defaultValue={handle.username}
            ref={node => username = node}
            size={60}
            onChange={onChangeUsername}/>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">URL</div>
        <div className="col-sm-8">
          <input key={handle.name} type="text" defaultValue={handle.url}
            ref={node => url = node}
            size={60}
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