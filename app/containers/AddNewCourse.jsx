import React from "react";
import FormComponent from "../components/FormComponent";
import Grid from "@material-ui/core/Grid";



class AddNewCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Grid container justify = "center" ><FormComponent/></Grid>;
  }
}

export default AddNewCourse;