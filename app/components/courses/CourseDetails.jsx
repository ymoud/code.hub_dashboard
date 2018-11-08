import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";
import EditButton from "../common/EditButton";
import DOMPurify from "dompurify";
import InstructorsGrid from "../instructors/InstructorsGrid";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import withData from "../hocs/withData";
import withLoader from "../hocs/withLoader";

const CourseDetails = ({ data: course, classes, handleDelete }) => (
  <React.Fragment>
    <Typography variant="h5">
      {course.title} ({course.id})
    </Typography>
    <br />
    <Grid item sm={12} md={12} lg={12}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={course.imagePath}
          title={course.title}
        />
        <CardContent className={classes.cardContent}>
          <Grid container spacing={24}>
            <Grid item xs={6}>
              <Typography variant="h6">
                Price: {course.price.normal} €
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" align="right">
                Duration: {course.duration}
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={24}>
            <Grid item xs={6}>
              <Typography variant="h6">
                Bookable: {course.open ? <CheckIcon /> : <ClearIcon />}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" align="right">
                Dates: {course.dates.start_date} - {course.dates.end_date}
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={24}>
            <Grid item cs={12}>
              <Typography
                variant="body1"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(course.description)
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item cs={12}>
              <Typography gutterBottom variant="h4">
                Instructors
              </Typography>
              <InstructorsGrid instructorIds={course.instructors} />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <EditButton
            labelName={"Edit"}
            color={"primary"}
            url={`/courses/${course.id}/edit`}
            size={"medium"}
          />
          <Button
            variant="contained"
            color={"secondary"}
            className={classes.button}
            onClick={handleDelete}
            size={"medium"}
          >
            <DeleteIcon className={classes.iconSmall} />
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  </React.Fragment>
);

CourseDetails.propTypes = {
  courseId: PropTypes.string.isRequired,
  data: PropTypes.object,
  classes: PropTypes.object,
  handleDelete: PropTypes.func
};

const options = {
  methodName: "getCourse",
  paramName: "courseId"
};

export default withData(options)(withLoader(CourseDetails));
