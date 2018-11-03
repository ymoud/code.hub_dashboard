import React from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";


const SingleInput = (props ) =>{
	const labelSize = { fontSize: 13};
 	return (	
  <div >
    <legend style={labelSize} >{props.title}</legend>
    <TextField
	  required={props.required}
      name={props.name}
	  type={props.inputType}
	  className={props.className}
      value={props.content}
      onChange={props.controlFunc}
	  placeholder={props.placeholder} 
	  multiline={props.multiline}
	  rows={props.rows}
	  margin="normal"
	  fullWidth 
	  margin="none"
	  variant="outlined"
	  />
  </div>
);
};

SingleInput.propTypes = {
	title: PropTypes.string.isRequired,
	inputType: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	required: PropTypes.bool,
	placeholder: PropTypes.string,
	multiline:PropTypes.bool,
	rows:PropTypes.number,
	controlFunc:PropTypes.func.isRequired,
  };

export default   (SingleInput);