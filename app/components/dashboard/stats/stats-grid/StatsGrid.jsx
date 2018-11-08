import React from "react";
import PropTypes from "prop-types";
import StatGridItem from "./stat-grid-item/StatGridItem";
import Grid from "@material-ui/core/Grid";

const StatsGrid = ({ stats }) => {
  const grid = (
    <Grid container direction="row" justify="space-between" alignItems="center">
      {stats.map(statItem => (
        <StatGridItem key={statItem.id} statItem={statItem} />
      ))}
    </Grid>
  );

  return stats && stats.length ? grid : <p>No stats found</p>;
};

StatsGrid.propTypes = {
  stats: PropTypes.array.isRequired
};

export default StatsGrid;
