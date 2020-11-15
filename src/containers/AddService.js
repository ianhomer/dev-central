import React from "react";
import { connect } from "react-redux";
import { addHandle } from "../actions";

const AddService = ({ dispatch }) => {
  let input;

  var onAddHandle = function (e) {
    e.preventDefault();
    if (e.nativeEvent.type === "submit") {
      if (!input.value.trim()) {
        return;
      }
      dispatch(addHandle(input.value));
      input.value = "";
    }
  };

  return (
    <div>
      <form onSubmit={onAddHandle}>
        <div className="form-group row">
          <input
            className="form-control"
            ref={(node) => (input = node)}
            onChange={onAddHandle}
          />
        </div>
      </form>
    </div>
  );
};

export default connect()(AddService);
