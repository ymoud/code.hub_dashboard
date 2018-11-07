import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 10
  }
});

const CircularLoader = ({ classes }) => (
  <center>
    <CircularProgress
      className={classes.progress}
      size={80}
      color="secondary"
    />
  </center>
);

CircularLoader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CircularLoader);
