import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";

const styles = {
  root: {
    padding: 15,
    margin: 10,
    border: "2px solid #dcdbdb"
  },
  badge: {
    right: "-200px"
  }
};

const StatItem = ({ classes, statItem }) => {
  return (
    <React.Fragment>
      <Grid item sm={6} md={4} lg={3}>
        <Typography className={classes.root} variant="h6" component="h6">
          {statItem.title.toUpperCase()}:
          <Badge
            badgeContent={statItem.amount}
            color="primary"
            classes={{ badge: classes.badge }}
          />
        </Typography>
      </Grid>
    </React.Fragment>
  );
};

StatItem.propTypes = {
  classes: PropTypes.object.isRequired,
  statItem: PropTypes.object
};

export default withStyles(styles)(StatItem);
