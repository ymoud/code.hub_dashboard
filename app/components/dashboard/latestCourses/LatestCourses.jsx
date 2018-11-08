import React from "react";
import withLoader from "../../hocs/withLoader";
import propTypes from "prop-types";
import withData from "../../hocs/withData";
import LatestCoursesGrid from "./latest-courses-grid/LatestCoursesGrid";

const LatestCourses = ({ data, isLoading }) => (
  <React.Fragment>
    {!isLoading && <LatestCoursesGrid latestCourses={data} />}
  </React.Fragment>
);

LatestCourses.propTypes = {
  data: propTypes.array,
  isLoading: propTypes.bool
};

const options = {
  methodName: "getCourses",
  methodParameter: undefined
};

export default withData(options)(withLoader(LatestCourses));
