import React from "react";
import CourseNewForm from "../components/courses/course-new-form/CourseNewForm";

class AddNewCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <CourseNewForm />;
  }
}

export default AddNewCourse;
