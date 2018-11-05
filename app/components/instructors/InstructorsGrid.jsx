import React from "react";
import InstructorDetails from "./InstructorDetails";

const InstructorsGrid = ({ instructorIds }) =>
  instructorIds.map(iId => <InstructorDetails key={iId} instructorId={iId} />);

export default InstructorsGrid;
