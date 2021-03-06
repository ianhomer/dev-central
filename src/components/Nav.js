import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Nav = ({ system, onMock }) => {
  var onMockDisable = function (e) {
    e.preventDefault();
    onMock(false);
  };

  var onMockEnable = function (e) {
    e.preventDefault();
    onMock(true);
  };

  return (
    <header className="navbar navbar-dark bg-dark navbar-fixed-left">
      <Link className="navbar-brand" to="/">
        Dev Central
      </Link>
      <form className="form-inline">
        <button
          className="btn btn-outline-success"
          type="button"
          onClick={system.mock ? onMockDisable : onMockEnable}
        >
          {system.mock ? "Mock" : "Live"}
        </button>
      </form>
    </header>
  );
};

Nav.propTypes = {
  system: PropTypes.object.isRequired,
  onMock: PropTypes.func.isRequired,
};

export default Nav;
