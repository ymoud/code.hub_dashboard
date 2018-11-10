import React from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

const SingleInput = props => {
  return (
    <div>
      <TextField
        type={props.type}
        label={props.label}
        name={props.name}
        value={props.value}
        onChange={props.controlFunc}
        required={props.required}
        placeholder={props.placeholder}
        multiline={props.multiline}
        rows={props.rows}
        margin="normal"
        fullWidth
        InputLabelProps={{
          shrink: true
        }}
      />
    </div>
  );
};

SingleInput.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
  controlFunc: PropTypes.func.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number
};

export default SingleInput;
