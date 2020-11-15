import React from "react";

const Welcome = () => {
  return (
    <div className="tip">
      <p>
        Welcome. This is a React web app that interacts with the JIRA API. It's
        been structure so that other provider APIs could be slotted in, but for
        now it's just JIRA. And all it does at the moment is provide a report
        and work logged recently by users. It's useful to keep a track of what
        you've been up to recently, this is especially with lots of context
        switching, so you can jump back on work that needs to be done.
      </p>
      <p>
        <strong>
          Enter a name for your service in the box to the left of here and hit
          return to get started.
        </strong>
        .
      </p>
      <p>This welcome message will self-destruct when you do this ...</p>
      <p>
        This app is also a demonstration React app, and helps me learn React,
        Redux, Saga etc.
      </p>
    </div>
  );
};

export default Welcome;
