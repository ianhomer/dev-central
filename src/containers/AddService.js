import React from 'react'
import { connect } from 'react-redux'
import { addHandle } from '../actions'

const AddService = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addHandle(input.value))
          input.value = ''
        }}
      >
        <div className="form-group row">
          <div className="col-sm-2">&nbsp;</div>
          <input className="col-sm-5 form-control" ref={node => input = node}
          />
          <button className="col-sm-2 btn btn-primary" type="submit">
            Add Service
          </button>
        </div>
      </form>
    </div>
  )
}

export default connect()(AddService)