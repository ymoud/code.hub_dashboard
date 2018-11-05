import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CourseDetails from "../components/courses/CourseDetails";

const styles = () => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "20%",
    maxHeight: 450,
    backgroundPosition: "top"
  },
  cardContent: {
    flexGrow: 1
  }
});

const Course = ({ classes, match }) => (
  <CourseDetails courseId={match.params.courseId} classes={classes} />
);

Course.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      courseId: PropTypes.node
    }).isRequired
  }).isRequired,
  classes: PropTypes.object,
  data: PropTypes.object
};

export default withStyles(styles)(Course);