import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
import Paper from "@material-ui/core/Paper";
import styles from "./styles";

const StatGridItem = ({ classes, statItem }) => {
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

StatGridItem.propTypes = {
  classes: PropTypes.object.isRequired,
  statItem: PropTypes.object.isRequired
};

export default withStyles(styles)(StatGridItem);
