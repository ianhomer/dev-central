import React from 'react';
import PropTypes from 'prop-types'
import Trace from './Trace'

const Profile = ({ handle, onChangeProperty, onLogout, onRemove }) => {
  let apiKey, username, url

  var onChangeApiKey = function(e) {
    e.preventDefault()
    if (!apiKey.value.trim()) {
      return
    }
    onChangeProperty('apiKey', apiKey.value)
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

  return (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-sm-4">Name</div>
        <div className="col-sm-8">{ handle.name }</div>
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
        <div className="col-sm-4">API Key</div>
        <div className="col-sm-8">
          <input key={handle.apiKey} type="text" defaultValue={handle.apiKey}
            ref={node => apiKey = node}
            size={60}
            onChange={onChangeApiKey}/>
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
    </div>
    <Trace o={handle}/>
  </div>
)}

Profile.propTypes = {
  handle: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default Profile