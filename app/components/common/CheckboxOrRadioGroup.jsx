import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import PropTypes from "prop-types";

const CheckboxOrRadioGroup = props => {
  return (
    <React.Fragment>
      {props.singleCheckBox ? (
        // Used when checkbox is single value
        <FormControlLabel
          control={
            <Checkbox
              name={props.name}
              checked={props.checked}
              onChange={props.controlFunc}
            />
          }
          label={props.label}
        />
      ) : (
        // Used when checkbox is array of values
        <FormControlLabel
          control={
            <Checkbox
              index={props.index}
              name={props.name}
              checked={props.checked}
              onChange={() => props.controlFunc(props.index)}
            />
          }
          label={props.label}
        />
      )}
    </React.Fragment>
  );
};

CheckboxOrRadioGroup.propTypes = {
  singleCheckBox: PropTypes.bool.isRequired,
  name: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  index: PropTypes.number,
  controlFunc: PropTypes.func.isRequired
};

export default CheckboxOrRadioGroup;
