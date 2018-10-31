import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 500,
    padding: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 3
  },
  badge: {
    width: 40,
    height: 35
  }
});

const StatItem = ({ classes, statItem }) => {
  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <Grid container>
          <Grid item xs>
            <Typography gutterBottom variant="h6">
              {statItem.title.toUpperCase()}:
            </Typography>
          </Grid>
          <Grid item>
            <Badge
              badgeContent={statItem.amount}
              color="primary"
              classes={{ badge: classes.badge }}
            >
              {""}
            </Badge>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

StatItem.propTypes = {
  classes: PropTypes.object.isRequired,
  statItem: PropTypes.object
};

export default withStyles(styles)(StatItem);
