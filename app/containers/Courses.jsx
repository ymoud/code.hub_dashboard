import React from "react";
import Services from "../services/index";
import CourseGird from "../components/courses/courses-grid/CoursesGrid";
import { Typography } from "@material-ui/core";
import withLoader from "../components/hocs/withLoader";

class Courses extends React.Component {
  constructor({isLoading}) {
    super(isLoading);
    this.state = {
      isLoading: true,
      courses: []
    };
  }
  
  componentDidMount() {
    Services.getCourses()
      .then(response => {
        this.setState(state => {
          state.courses = response.data;
          state.isLoading = false;
          return state;
        });
      });
  }

  render() {
    const { courses, isLoading } = this.state;

    return (
      <React.Fragment>
        <Typography variant="h5">Courses</Typography>
        <br/>
        {
          !isLoading && <CourseGird courses={courses}></CourseGird>
        }
      </React.Fragment>
    );
  }
}

export default withLoader()(Courses);