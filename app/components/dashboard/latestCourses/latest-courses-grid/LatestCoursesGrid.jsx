import React from "react";
import PropTypes from "prop-types";
import LatestCoursesGridData from "./LatestCoursesGridData";

const LatestCoursesGrid = ({ courses }) => {
  courses.sort((a, b) => {
    const startDateA = new Date(a.dates.start_date);
    const startDateB = new Date(b.dates.start_date);
    return startDateA > startDateB ? -1 : startDateA < startDateB ? 1 : 0;
  });
  const grid = <LatestCoursesGridData latestCourses={courses.slice(0, 5)} />;

  return courses && courses.length ? grid : <p>No courses found</p>;
};

LatestCoursesGrid.propTypes = {
  courses: PropTypes.array.isRequired
};

export default LatestCoursesGrid;
