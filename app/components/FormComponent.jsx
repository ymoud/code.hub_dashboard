import React, {Component} from "react";
import CheckboxOrRadioGroup from "./common/CheckboxOrRadioGroup";
import SingleInput from "./common/SingleInput";
 
import Services from "../services/index";
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

 const styles =(theme) => ({
		container: {		 
	borderRadius: 4,
    backgroundColor: "#ECF0F1",
    border: '1px solid #ced4da',
	padding: '5px 12px', 
    width: 'calc(50% - 24px)',
		},
  });

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      duration: "",
      imagePath: "",
      bookableSelections: ["Bookable"],
      selectedBookables: [],
      selectedInstructors:[],
      instuctorSelections:[],
      instructors:[],
	  description: "",
	  startDate:"",
	  endDate:"",
	  earlyBird:"",
	  normalPrice:""

    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDurationChange = this.handleDurationChange.bind(this);
    this.handleImagePathChange = this.handleImagePathChange.bind(this);
    this.handleBookableSelection = this.handleBookableSelection.bind(this);
	this.handleInstructorsSelection = this.handleInstructorsSelection.bind(this);
	this.handleDescriptionChange = this.handleDescriptionChange.bind(this);

	this.handleStartDateChange = this.handleStartDateChange.bind(this);
	this.handleEndDateChange = this.handleEndDateChange.bind(this);
	this.handleEarlyBirdChange = this.handleEarlyBirdChange.bind(this);
    this.handleNormalPriceChange = this.handleNormalPriceChange.bind(this);


    this.handleClearForm = this.handleClearForm.bind(this);
  }
  componentDidMount() {
    Services.getInstructors().then(responce => {
      this.setState({
        instuctorSelections: responce.data.map( ( { name }) => {
          return ({...name},(name.first +" "+ name.last));
        }),		 
      });
    });
  }

  extractInstructors(data)  {
    this.setState({ instuctorSelections:  data.instructors.map( ( { name }) => {
      return ({...name},(name.first +" "+ name.last));
    }) }, () => console.log("instructors:", this.state.instuctorSelections));
  }
	

  handleTitleChange(e) {
    this.setState({ title: e.target.value }, () => console.log("title:", this.state.title));
  }
  handleDurationChange(e) {
    this.setState({ duration: e.target.value }, () => console.log("duration:", this.state.duration));
  }
  handleImagePathChange(e) {
    this.setState({ imagePath: e.target.value }, () => console.log("imagePath:", this.state.imagePath));
  }
	
  handleBookableSelection(e) {
    const newSelection = e.target.value;
    let newSelectionArray;
    if(this.state.selectedBookables.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.selectedBookables.filter(s => s !== newSelection);
    } else {
      newSelectionArray = [...this.state.selectedBookables, newSelection];
    }
    this.setState({ selectedBookables: newSelectionArray }, () => console.log("bookable selection", this.state.selectedBookables));
  }

  handleInstructorsSelection(e) {
    const newSelection = e.target.value;
    let newSelectionArray;
    if(this.state.selectedInstructors.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.selectedInstructors.filter(s => s !== newSelection);
    } else {
      newSelectionArray = [...this.state.selectedInstructors, newSelection];
    }
    this.setState({ selectedInstructors: newSelectionArray }, () => console.log("selected instructors", this.state.selectedInstructors));
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value }, () => console.log("description", this.state.description));
  }

  handleStartDateChange(e) {
    this.setState({ startDate: e.target.value }, () => console.log("startDate", this.state.startDate));
  }

  handleEndDateChange(e) {
    this.setState({ endDate: e.target.value }, () => console.log("endDate", this.state.endDate));
  }
  handleEarlyBirdChange(e) {
    this.setState({ earlyBird: e.target.value }, () => console.log("earlyBird", this.state.earlyBird));
  }
  handleNormalPriceChange(e) {
    this.setState({ normalPrice: e.target.value }, () => console.log("normalPrice", this.state.normalPrice));
  }


  handleClearForm(e) {
    e.preventDefault();
    this.setState({
	  title: "",
	  duration:"",
	  imagePath:"",
	  selectedBookables:[], 
      selectedInstructors:[],
	  description: "",
	  startDate:"",
	  endDate:"",
	  earlyBird:"",
	  normalPrice:""
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const formToSubmit = {
      title: this.state.title,
      duration:this.state.duration, 
      imagePath: this.state.imagePath,
      selectedBookables: this.state.selectedBookables,
      selectedInstructors: this.state.selectedInstructors,
	  description: this.state.description,
	  startDate: this.state.startDate,
	  endDate :this.state.endDate,
	  earlyBird:this.state.earlyBird,
	  normalPrice:this.state.normalPrice
    };

    console.log("Send this in a POST request:", formToSubmit);
    this.handleClearForm(e);
  }
  render() {
      const {classes} = this.props;
    return (
      <form className={classes.container}  onSubmit={this.handleFormSubmit}>
        <h3>Add Course</h3>
        <SingleInput 
          inputType={"text"}
          title={"Title"}
          name={"Title"}
          controlFunc={this.handleTitleChange}
          content={this.state.title}
		  placeholder={"Title"} 
		  required={true}
		  
		  className={classes.input}/>
        <SingleInput
          inputType={"text"}
          title={"Duration"}
          name={"Duration"}
          controlFunc={this.handleDurationChange}
          content={this.state.duration}
		  placeholder={"Duration"}
		  
		  required={true} />
        <SingleInput
          inputType={"text"}
          title={"ImagePath"}
          name={"ImagePath"}
          controlFunc={this.handleImagePathChange}
          content={this.state.imagePath}
		  placeholder={"ImagePath"} 
		  required={true}/>
    <CheckboxOrRadioGroup
          title={"Bookable"}
          setName={"Bookable"}
          type={"checkbox"}
          controlFunc={this.handleBookableSelection}
          options={this.state.bookableSelections}
          selectedOptions={this.state.selectedBookables} />
    <CheckboxOrRadioGroup
          title={"Instructors"}
          setName={"Instructors"}
          type={"checkbox"}
          controlFunc={this.handleInstructorsSelection}
          options={this.state.instuctorSelections}
          selectedOptions={this.state.selectedInstructors} />
	<SingleInput
          inputType={"text"}
          title={"Description"}
          name={"Description"}
          controlFunc={this.handleDescriptionChange}
          content={this.state.description}
		  placeholder={"Description"} 
		  multiline={true}
		  rows={2}
		  required={true}/>
          
		   <h4>Dates</h4>
	<SingleInput
          inputType={"date"}
          title={"Start Date"}
          controlFunc={this.handleStartDateChange}
		  content={this.state.startDate}
		  
		  required={true}/>
		<SingleInput
          inputType={"date"}
          title={"End Date"}
          controlFunc={this.handleEndDateChange}
          content={this.state.endDate}
		  required={true}/>

           <h4>Price</h4>

		 <SingleInput
          inputType={"number"}
          title={"Early Bird"}
          name={"Early Bird"}
          controlFunc={this.handleEarlyBirdChange}
          content={this.state.earlyBird}
		  placeholder={"Early Bird"} 
		  required={true}/>
		  <SingleInput
          inputType={"number"}
          title={"Normal"}
          name={"Normal"}
          controlFunc={this.handleNormalPriceChange}
          content={this.state.normalPrice}
		  placeholder={"Normal"} 
		  required={true}/>
        <Button
          type="submit"
		  variant="contained"
		  color="primary"
             >Submit</Button>
        <Button
          variant="contained" 
          onClick={this.handleClearForm}>Clear form</Button>
      </form>
    );
  }
}

export default withStyles(styles)(FormComponent);
