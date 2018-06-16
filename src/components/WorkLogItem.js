import React from 'react';
import PropTypes from 'prop-types'

const WorkLogItem = ({ item }) => {
  let updated =new Date(item.updated)
  return (
    <div>
      <div className="row">
        <div className="col-sm-2">{ item.id }</div>
        <div className="col-sm-4">{
          updated.toLocaleDateString()
        }</div>
        <div className="col-sm-4">{
          updated.toLocaleTimeString()
        }</div>
      </div>
      <div className="row trace">{ JSON.stringify(item) }</div>
    </div>
  )
}

WorkLogItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default WorkLogItem