import React from 'react';
import PropTypes from 'prop-types'

const Handle = ({ url, isAuthenticated, onRemove }) => {
  let username

  return (
  <div className="row">
    <div className="col-sm-2">URL</div>
    <div className="col-sm-3">{ url }</div>
    { !isAuthenticated &&
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!username.value.trim()) {
            return
          }
          console.log(e)
        }}
      >
        <div className="form-group row">
          <input className="col-sm-5 form-control"
            ref={node => username = node}
          />
          <button className="col-sm-3 btn btn-primary" type="submit">
            Auth
          </button>
        </div>
      </form>
    }
    <div className="col-sm-1" onClick={onRemove}>x</div>
  </div>
)}

Handle.propTypes = {
  url: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default Handle