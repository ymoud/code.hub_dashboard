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
import ContainedButton from "../common/ContainedButton";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  title: {
    backgroundColor: "#3f51b5",
    color: theme.palette.common.white,
    padding: 20
  },
  smallWidth: {
    width: "1%"
  },
  centerAlign: {
    textAlign: "center"
  },
  rightAligh: {
    textAlign: "right"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

const CustomTableCell = withStyles({
  head: {
    fontSize: 16,
    fontWeight: "bold"
  },
  body: {
    fontSize: 14
  }
})(TableCell);

function CourseTable(props) {
  const { classes, courses } = props;

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
          {courses.map(course => {
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
                  <ContainedButton
                    labelName={"View Details"}
                    color={"primary"}
                    size={"medium"}
                    url={`/course/${course.id}`}
                  />
                </CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div className={classes.rightAligh}>
        <ContainedButton
          labelName={"View All"}
          color={"default"}
          url={"/courses"}
          size={"large"}
        />
      </div>
    </Paper>
  );
}

CourseTable.propTypes = {
  classes: PropTypes.object.isRequired,
  courses: PropTypes.array
};

export default withStyles(styles)(CourseTable);
