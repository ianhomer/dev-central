import React from 'react'
import { connect } from 'react-redux'
import { addService } from '../actions'

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
          dispatch(addService(input.value))
          input.value = ''
        }}
      >
        <div className="form-group row">
          <input className="col-sm-10 form-control" ref={node => input = node}
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