import React from "react";
import PropTypes from "prop-types";
import { Route, Link } from "react-router-dom";
import Profile from "./Profile";
import Work from "./Work";
import ServiceInfo from "./ServiceInfo";

const Service = ({
  handle,
  workLog,
  serviceInfo,
  onAuthenticate,
  onChangeHandleProperty,
  onLogout,
  onRemove,
  onRefreshServiceInfo,
  onRefreshWork,
}) => {
  return (
    <div>
      <h2>{handle.name}</h2>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item active">
          <Link
            className="nav-link"
            role="tab"
            aria-selected="true"
            to={"/service/" + handle.name + "/profile"}
          >
            Profile
          </Link>
        </li>
        <li className="nav-item active">
          <Link
            className="nav-link"
            role="tab"
            aria-selected="true"
            to={"/service/" + handle.name + "/info"}
          >
            Info
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            role="tab"
            to={"/service/" + handle.name + "/work"}
          >
            Work
          </Link>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <Route
          path="/service/:serviceName/work"
          render={(props) => (
            <Work
              {...props}
              handle={handle}
              workLog={workLog}
              onChangeProperty={onChangeHandleProperty}
              onRefresh={onRefreshWork}
            />
          )}
        />
        <Route
          path="/service/:serviceName/profile"
          render={(props) => (
            <Profile
              {...props}
              handle={handle}
              onAuthenticate={onAuthenticate}
              onChangeProperty={onChangeHandleProperty}
              onLogout={onLogout}
              onRemove={onRemove}
            />
          )}
        />
        <Route
          path="/service/:serviceName/info"
          render={(props) => (
            <ServiceInfo
              serviceInfo={serviceInfo}
              onRefresh={onRefreshServiceInfo}
            />
          )}
        />
      </div>
    </div>
  );
};

Service.propTypes = {
  handle: PropTypes.object.isRequired,
  serviceInfo: PropTypes.object.isRequired,
  workLog: PropTypes.object.isRequired,
  onChangeHandleProperty: PropTypes.func.isRequired,
  onRefreshWork: PropTypes.func.isRequired,
  onRefreshServiceInfo: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Service;
