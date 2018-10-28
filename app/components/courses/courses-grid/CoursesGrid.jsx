import React from "react";
import PropTypes from "prop-types";
import CourseGridItem from "./course-grid-item/CourseGridItem";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

const CoursesGrid = ({ courses }) => {
  
  const grid = (
    <div>
      <Grid container spacing={40}>
        {courses.map(course => <CourseGridItem key={course.id} course={course}></CourseGridItem>)}
      </Grid>
    </div>
  );

  return (
    courses && courses.length 
      ? grid
      : <p>No courses found</p>
  );
};

CoursesGrid.propTypes = {
  courses: PropTypes.array,
};

export default CoursesGrid;