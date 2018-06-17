import React from 'react';
import PropTypes from 'prop-types'
import Trace from './Trace'

const WorkLogItem = ({ item }) => {
  let updated = new Date(item.updated)
  return (
    <div>
      <Trace o={item}/>
      <div className="row">
        <div className="col-sm-1">{ item.id }</div>
        <div className="col-sm-2">{ item.author && item.author.name }</div>
        <div className="col-sm-2">{ updated.toLocaleDateString() }</div>
        <div className="col-sm-2">{ (item.timeSpentSeconds / 3600).toFixed(1) }h</div>
        <div className="col-sm-2">{ item.issueId }</div>
      </div>
    </div>
  )
}

WorkLogItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default WorkLogItem