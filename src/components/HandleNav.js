import React from 'react';
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const HandleNav = ({ name, isAuthenticated }) => {
  return (
  <div className="bd-toc-item">
    <Link to={'/service/' + name + '/profile'}>{ name }</Link>
  </div>
)}

HandleNav.propTypes = {
  name: PropTypes.string.isRequired
}

export default HandleNav