import React from "react";
import { Typography } from "@material-ui/core";
import { PropTypes } from "prop-types";
import styles from "./instructors";
import { withStyles } from "@material-ui/core/styles";
import withData from "../hocs/withData";
import withLoader from "../hocs/withLoader";

const InstructorDetails = ({ data: instructor, classes: styles }) => (
  <React.Fragment>
    <Typography className={styles.inlineHeading} variant="h6">
      {instructor.name.first} {instructor.name.last}
    </Typography>
    <Typography className={styles.inlineHeading} variant="subtitle2">
      ({instructor.dob})
    </Typography>
    <Typography variant="body2">
      Email:{" "}
      <a href={`mailto:${instructor.email}`} target="_top">
        {instructor.email}
      </a>
      {" | "}
      <a href={instructor.linkedin} target="new">
        LinkedIn
      </a>
    </Typography>
    <Typography gutterBottom variant="body2">
      {instructor.bio}
    </Typography>
  </React.Fragment>
);

InstructorDetails.propTypes = {
  instructorId: PropTypes.string.isRequired,
  data: PropTypes.object,
  classes: PropTypes.object.isRequired,
  isLoading: PropTypes.bool
};

const options = {
  methodName: "getInstructor",
  paramName: "instructorId"
};

export default withData(options)(
  withLoader(withStyles(styles)(InstructorDetails))
);
