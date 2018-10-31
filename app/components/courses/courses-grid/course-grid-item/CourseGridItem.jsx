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
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

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
            <Typography gutterBottom="true">
              Price: <span className={classes.boldText}>{course.price.normal}€</span> | Bookable: <span className={classes.boldText}>{course.open ? <CheckIcon></CheckIcon> : <ClearIcon></ClearIcon>}</span>
            </Typography>
            <Typography gutterBottom="true">
                Duration: <span className={classes.boldText}>{course.duration}</span>
            </Typography>
            <Typography gutterBottom="true">
                Dates: <span className={classes.boldText}>{course.dates.start_date} - {course.dates.end_date}</span>
            </Typography>
          </CardContent>
          <CardActions>
            <Button component={Link} to={`/courses/${course.id}`} size="medium" color="primary">
        View
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </React.Fragment>
  );
};

CourseGridItem.propTypes = {
  course: propTypes.object.isRequired,
  classes: propTypes.object
};

export default withStyles(styles)(CourseGridItem);