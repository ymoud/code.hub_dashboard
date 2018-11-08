import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  iconSmall: {
    fontSize: 20,
    marginRight: 5
  }
});

class ViewButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, labelName, color, url, size } = this.props;

    return (
      <React.Fragment>
        <Button
          variant="contained"
          color={color}
          className={classes.button}
          component={Link}
          to={url}
          size={size}
        >
          <SearchIcon className={classes.iconSmall} />
          {labelName}
        </Button>
      </React.Fragment>
    );
  }
}

ViewButton.propTypes = {
  classes: PropTypes.object.isRequired,
  labelName: PropTypes.string,
  color: PropTypes.string,
  url: PropTypes.string,
  size: PropTypes.string
};

export default withStyles(styles)(ViewButton);
