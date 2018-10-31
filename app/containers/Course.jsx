import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import Services from "../services/index";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import DOMPurify from "dompurify";

const styles = () => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "20%",
    maxHeight: 450,
    backgroundPosition: "top"
  },
  cardContent: {
    flexGrow: 1,
  }
});

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseId: props.match.params.courseId,
      isLoaded: false,
      course: undefined,
      styles: props.classes
    };
  }

  componentDidMount() {
    if(!this.state.courseId) return;
    Services.getCourse(this.state.courseId)
      .then(response => {
        if(!response) return;
        this.setState(state => {
          state.course = response.data;
          state.isLoaded = true;
          return state;
        });
      });
  }

  render() {
    if(!this.state.isLoaded) return (<p>Loading...</p>);
    const { course, styles: classes } = this.state;
    if(!course) return (<p>error</p>);
    return (
      <React.Fragment>
        <Typography variant="h5">{course.title} ({course.id})</Typography>
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
                <Grid item xs={6}><Typography variant="h6"> Price: {course.price.normal} €</Typography></Grid>
                <Grid item xs={6}><Typography variant="h6" align="right"> Duration: {course.duration}</Typography></Grid>
              </Grid>

              <Grid container spacing={24}>
                <Grid item xs={6}><Typography variant="h6"> Bookable: {course.open ? <CheckIcon></CheckIcon> : <ClearIcon></ClearIcon>}</Typography></Grid>
                <Grid item xs={6}><Typography variant="h6" align="right"> Dates: {course.dates.start_date} - {course.dates.end_date}</Typography></Grid>
              </Grid>              
              
              <Grid container spacing={24}>
                <Grid item cs={12}><Typography variant="body1" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(course.description)}}></Typography></Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button component={Link} to={`/courses/${course.id}/edit`} size="medium" color="primary">Edit</Button>
              <Button size="medium" color="secondary">Delete</Button>
            </CardActions>
          </Card>
        </Grid>
      </React.Fragment>
    );
  }
}

Course.propTypes = {
  match: PropTypes.shape.isRequired,
  classes: PropTypes.object
};

export default withStyles(styles)(Course);
