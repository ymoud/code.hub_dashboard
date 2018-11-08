import React from "react";
import Icon from "@material-ui/icons/Warning";
import { Typography } from "@material-ui/core";

const iconStyle = {
  width: 55,
  height: 55,
  display: "block",
  margin: "auto",
  marginTop: "4%",
  position: "relative",
  color: "darkred"
};

const NoDataFound = () => {
  const message = "no data found";
  return (
    <React.Fragment>
      <Icon style={iconStyle} />
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        {message.toLocaleUpperCase()}
      </Typography>
    </React.Fragment>
  );
};

export default NoDataFound;
