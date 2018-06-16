import React from 'react';
import PropTypes from 'prop-types'

const WorkLogItem = ({ item }) => {
  let updatedDate =new Date(item.updatedTime)
  return (
    <div>
      <div className="row">
        <div className="col-sm-2">{ item.worklogId }</div>
        <div className="col-sm-4">{
          updatedDate.toLocaleDateString()
        }</div>
        <div className="col-sm-4">{
          updatedDate.toLocaleTimeString()
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