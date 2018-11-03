import React from "react";
import { Typography } from "@material-ui/core";
import { PropTypes } from "prop-types";
import styles from "./instructors";
import { withStyles } from "@material-ui/core/styles";

const InstructorDetails = ({instructor, classes: styles}) => {
  return(
    <React.Fragment>
      <Typography className={styles.inlineHeading} variant="h6">{instructor.name.first} {instructor.name.last}</Typography>
      <Typography className={styles.inlineHeading} variant="subtitle2">({instructor.dob})</Typography>
      <Typography variant="body2">Email: <a href={`mailto:${instructor.email}`} target="_top">{instructor.email}</a></Typography>
      <Typography gutterBottom variant="body2">{instructor.bio}</Typography>
    </React.Fragment>
  );
};

InstructorDetails.propTypes = {
  instructor: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InstructorDetails);