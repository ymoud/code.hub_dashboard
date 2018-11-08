import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CheckIcon from "@material-ui/icons/Check";
import PriorityIcon from "@material-ui/icons/PriorityHigh";
import Typography from "@material-ui/core/Typography";
import ViewButton from "../../../common/ViewButton";
import styles from "./style";

const CustomTableCell = withStyles({
  head: {
    fontSize: 16,
    fontWeight: "bold"
  },
  body: {
    fontSize: 14
  }
})(TableCell);

function LatestCoursesGridData(props) {
  const { classes, latestCourses } = props;

  return (
    <Paper className={classes.root}>
      <div className={classes.title}>
        <Typography color="inherit" variant="h5">
          Last 5 Courses
        </Typography>
      </div>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell className={classes.smallWidth} />
            <CustomTableCell>Title</CustomTableCell>
            <CustomTableCell>Bookable</CustomTableCell>
            <CustomTableCell>Price</CustomTableCell>
            <CustomTableCell>Date</CustomTableCell>
            <CustomTableCell className={classes.centerAlign}>
              Actions
            </CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {latestCourses.map(course => {
            return (
              <TableRow className={classes.row} key={course.id}>
                <CustomTableCell>
                  <PriorityIcon />
                </CustomTableCell>
                <CustomTableCell>{course.title}</CustomTableCell>
                <CustomTableCell>
                  {course.open ? <CheckIcon /> : ""}
                </CustomTableCell>
                <CustomTableCell>{course.price.normal} €</CustomTableCell>
                <CustomTableCell>
                  {course.dates.start_date} - {course.dates.end_date}
                </CustomTableCell>
                <CustomTableCell className={classes.centerAlign}>
                  <ViewButton
                    labelName={"View Details"}
                    color={"primary"}
                    size={"medium"}
                    url={`/courses/${course.id}`}
                  />
                </CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <br />
      <div className={classes.rightAligh}>
        <ViewButton
          labelName={"View All"}
          color={"default"}
          url={"/courses"}
          size={"large"}
        />
      </div>
    </Paper>
  );
}

LatestCoursesGridData.propTypes = {
  classes: PropTypes.object.isRequired,
  latestCourses: PropTypes.array.isRequired
};

export default withStyles(styles)(LatestCoursesGridData);
