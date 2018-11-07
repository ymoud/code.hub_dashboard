import React from "react";
import CourseGird from "../components/courses/courses-grid/CoursesGrid";
import { Typography } from "@material-ui/core";
import withLoader from "../components/hocs/withLoader";
import propTypes from "prop-types";
import withData from "../components/hocs/withData";

const Courses = ({ data, isLoading }) => (
  <React.Fragment>
    <Typography variant="h5">Courses</Typography>
    <br />
    {!isLoading && <CourseGird courses={data} />}
  </React.Fragment>
);

Courses.propTypes = {
  data: propTypes.array,
  isLoading: propTypes.bool
};

const options = {
  methodName: "getCourses",
  methodParameter: undefined
};

export default withData(options)(withLoader(Courses));
