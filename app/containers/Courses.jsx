import React from "react";
import Services from "../services/index";
import CourseGird from "../components/courses/courses-grid/CoursesGrid";

class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      courses: []
    };
  }
  
  componentDidMount() {
    // const service = new Services();
    Services.getCourses()
      .then(response => {
        this.setState(state => {
          state.courses = response.data;
          state.isLoaded = true;
          return state;
        });
      });
  }

  render() {
    const { courses, isLoaded } = this.state;

    return (
      <React.Fragment>
        <p>Courses:</p>
        {isLoaded 
          ? <CourseGird courses={courses}></CourseGird>
          : <p>Loading courses</p>
        }
      </React.Fragment>
    );
  }
}

export default Courses;