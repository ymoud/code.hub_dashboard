import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const styles = theme => ({
  root: {
    backgroundColor: "#eaeaea"
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  }
});

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
  title: PropTypes.string,
  message: PropTypes.string
};

export default withStyles(styles)(Hero);
