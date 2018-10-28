import React from "react";
import PropTypes from "prop-types";
import CourseGridItem from "./course-grid-item/CourseGridItem";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";

const CoursesGrid = ({courses}) => {

  const styles = (theme) => ({
    layout: {
      width: "auto",
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
        width: 1100,
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
  });

  const grid = (
    <div className={classNames(styles.layout, styles.cardGrid)}>
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