import React from "react";
import withLoader from "../../hocs/withLoader";
import propTypes from "prop-types";
import withData from "../../hocs/withData";
import StatsGrid from "./stats-grid/StatsGrid";

const Stats = ({ data, isLoading }) => (
  <React.Fragment>{!isLoading && <StatsGrid stats={data} />}</React.Fragment>
);

Stats.propTypes = {
  data: propTypes.array,
  isLoading: propTypes.bool
};

const options = {
  methodName: "getStats",
  methodParameter: undefined
};

export default withData(options)(withLoader(Stats));
