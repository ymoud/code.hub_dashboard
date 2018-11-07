import React from "react";
import CourseNewForm from "../components/courses/course-new-form/CourseNewForm";
// import FormComponent from "../components/FormComponent";
// import Grid from "@material-ui/core/Grid";

class AddNewCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //isLoaded: false,
      fields: {}
    };
  }

  render() {
    // return (
    //   <Grid container justify="center">
    //     <FormComponent />
    //   </Grid>
    // );
    return <CourseNewForm />;
  }
}

export default AddNewCourse;
