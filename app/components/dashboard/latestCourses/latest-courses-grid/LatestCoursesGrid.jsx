import React from "react";
import PropTypes from "prop-types";
import LatestCoursesGridData from "./LatestCoursesGridData";

const LatestCoursesGrid = ({ latestCourses }) => {
  const grid = <LatestCoursesGridData latestCourses={latestCourses} />;

  return latestCourses && latestCourses.length ? grid : <p>No courses found</p>;
};

LatestCoursesGrid.propTypes = {
  latestCourses: PropTypes.array.isRequired
};

export default LatestCoursesGrid;
