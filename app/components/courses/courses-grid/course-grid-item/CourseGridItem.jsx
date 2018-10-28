import React from "react";
import propTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    maxWidth: 345,
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  }
});

const CourseGridItem = ({ course, classes }) => {
  return (
    <React.Fragment>
      <Grid item sm={6} md={4} lg={3}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={course.imagePath}
            title={course.title}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5">
              {course.title}
            </Typography>
            <Typography>
              Price: {course.price.normal} € | Bookable: {course.open ? <CheckIcon></CheckIcon> : <ClearIcon></ClearIcon>}
            </Typography>
            <Typography>
                Duration: {course.duration}
            </Typography>
            <Typography>
                Dates: {course.dates.start_date} - {course.dates.end_date}
            </Typography>
          </CardContent>
          <CardActions>
            <Button component={Link} to={`/course/${course.id}`} size="medium" color="primary">
        View
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </React.Fragment>
  );
}

CourseGridItem.propTypes = {
  course: propTypes.object,
};

export default withStyles(styles)(CourseGridItem);