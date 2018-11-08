import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CourseDetails from "../components/courses/CourseDetails";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Services from "../services/index";
import { Redirect } from "react-router";

const MySwal = withReactContent(Swal);

const styles = () => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "20%",
    maxHeight: 450,
    backgroundPosition: "top"
  },
  cardContent: {
    flexGrow: 1
  }
});

class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toCoursesList: false
    };
  }

  deleteClicked = () => {
    MySwal.fire({
      type: "warning",
      title: <p>Are you sure you want to delete this course?</p>,
      showCancelButton: true,
      confirmButtonText: "Yes, Delete",
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !MySwal.isLoading(),
      preConfirm: () => {
        Services.deleteCourse(this.props.match.params.courseId).then(() =>
          this.setState(() => ({
            toList: true
          }))
        );
      }
    });
  };

  render() {
    const { toList } = this.state;

    if (toList === true) {
      return <Redirect to="/courses" />;
    }

    const { match, classes } = this.props;
    return (
      <CourseDetails
        courseId={match.params.courseId}
        classes={classes}
        handleDelete={this.deleteClicked}
      />
    );
  }
}

Course.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      courseId: PropTypes.node
    }).isRequired
  }).isRequired,
  classes: PropTypes.object,
  data: PropTypes.object
};

export default withStyles(styles)(Course);
