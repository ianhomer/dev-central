import React from "react";
import PropTypes from "prop-types";

const Profile = ({ handle, onChangeProperty, onLogout, onRemove }) => {
  let apiKey, username, url;

  var onChangeApiKey = function (e) {
    e.preventDefault();
    if (!apiKey.value.trim()) {
      return;
    }
    onChangeProperty("apiKey", apiKey.value);
  };

  var onChangeUsername = function (e) {
    e.preventDefault();
    if (!username.value.trim()) {
      return;
    }
    onChangeProperty("username", username.value);
  };

  var onChangeUrl = function (e) {
    e.preventDefault();
    if (!url.value.trim()) {
      return;
    }
    onChangeProperty("url", url.value);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">Name</div>
          <div className="col-sm-8">{handle.name}</div>
        </div>
        <div className="row">
          <div className="col-sm-4">URL</div>
          <div className="col-sm-8">
            <input
              key={handle.name}
              type="text"
              defaultValue={handle.url}
              ref={(node) => (url = node)}
              size={60}
              onChange={onChangeUrl}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">Username</div>
          <div className="col-sm-8">
            <input
              key={handle.name}
              type="text"
              defaultValue={handle.username}
              ref={(node) => (username = node)}
              size={60}
              onChange={onChangeUsername}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">API Key</div>
          <div className="col-sm-8">
            <input
              key={handle.apiKey}
              type="text"
              defaultValue={handle.apiKey}
              ref={(node) => (apiKey = node)}
              size={60}
              onChange={onChangeApiKey}
            />
          </div>
        </div>
        <div className="tip">
          <p>
            Enter above, your JIRA URL, username and API key (generated from
            your Atlassian Profile).
          </p>
          <p>
            JIRA will not by default allow web applications on a different URL
            to access the JIRA API. You may be able to configure it do so if you
            are using JIRA server and have administrator rights. Read more about
            CORS to find out why. For developer purposes you can disable the
            CORS check in your browser. Again read more about CORS to decide
            whether you want to do this. I'd like to one day release this as a
            JIRA app which is the correct way to address this, but for now, it's
            an experimental app and I haven't had the priority to release this
            as a JIRA app.
          </p>
          <p>
            The app has a mock mode. Enable the mock mode by toggling the Live /
            Mock button in the top right of the nav bar. In mock mode you can
            test the interactions with no network connections and no need for
            authentication with a service.
          </p>
        </div>
        <div>
          <a
            href="#remove"
            className="btn btn-primary btn-lg active"
            onClick={onRemove}
          >
            Remove
          </a>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  handle: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Profile;
