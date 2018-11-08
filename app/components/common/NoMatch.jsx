import React from "react";
import Icon from "@material-ui/icons/HotTub";
import RestoreIcon from "@material-ui/icons/Restore";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  title: {
    fontSize: 40,
    color: "#525050"
  },
  icon: {
    width: 300,
    height: 300,
    display: "block",
    margin: "auto",
    position: "relative",
    color: "grey"
  }
});

class NoMatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Not Found",
      message: "Either you typed a wrong URL, or you followed a bad link."
    };
  }

  handleClick = () => {
    this.props.history.push("/");
  };

  render() {
    const { classes, history } = this.props;

    return (
      <React.Fragment>
        <Icon className={classes.icon} />
        <br />
        <Typography
          className={classes.title}
          align="center"
          color="textPrimary"
          variant="h6"
          gutterBottom
        >
          {this.state.title}
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          {this.state.message}
        </Typography>

        <center>
          {history ? (
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.handleClick}
            >
              <RestoreIcon className={classes.leftIcon} />
              Go Home
            </Button>
          ) : null}
        </center>
      </React.Fragment>
    );
  }
}

NoMatch.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object
};

export default withStyles(styles)(NoMatch);
