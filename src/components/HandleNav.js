import React from 'react';
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const HandleNav = ({ name, isAuthenticated, onRemove }) => {
  return (
  <div className="bd-toc-item">
    <Link to={'/service/' + name }>{ name }</Link>
    <span onClick={onRemove}>x</span>
  </div>
)}

HandleNav.propTypes = {
  name: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default HandleNav