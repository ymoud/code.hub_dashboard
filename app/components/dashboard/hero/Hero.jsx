import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import styles from "./styles";

const Hero = ({ classes, title, message }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <div className={classes.heroContent}>
          <Typography
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {title}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            {message}
          </Typography>
        </div>
      </div>
    </React.Fragment>
  );
};

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default withStyles(styles)(Hero);
