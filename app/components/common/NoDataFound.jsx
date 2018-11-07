import React from "react";
import Icon from "@material-ui/icons/Warning";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

const NoDataFound = props => {
  const message = `No data yet for ${props.text}...`;
  return (
    <React.Fragment>
      <Icon
        style={{
          width: 50,
          height: 50,
          display: "block",
          margin: "auto",
          marginTop: "2%",
          position: "relative",
          color: "darkred"
        }}
      />
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        {message}
      </Typography>
    </React.Fragment>
  );
};

NoDataFound.propTypes = {
  text: PropTypes.string.isRequired
};

export default NoDataFound;
