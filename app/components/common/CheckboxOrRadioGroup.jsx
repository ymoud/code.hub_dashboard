import React from 'react';
import Checkbox  from "@material-ui/core/Checkbox";
import PropTypes from "prop-types";


const CheckboxOrRadioGroup = (props,classes) => {
		const checkBoxStyle = { display:"block"};
		const labelSize = { fontSize: 13};

	  return (
		<div >
			<label style={labelSize } >{props.title}</label>
					{props.options.map(option => {
						return (
							<label key={option} style={checkBoxStyle }>
								<Checkbox
									name={props.setName}
									onChange={props.controlFunc}
									value={option}
									checked={props.selectedOptions.indexOf(option) > -1}
									type={props.type} /> {option}
							</label>
						);
					})}
				</div>
	);	
};

CheckboxOrRadioGroup.propTypes = {
	options: PropTypes.array.isRequired,
	selectedOptions: PropTypes.array.isRequired,
	title: PropTypes.string.isRequired,
	setName: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	controlFunc:PropTypes.func.isRequired,
  };

export default (CheckboxOrRadioGroup);
