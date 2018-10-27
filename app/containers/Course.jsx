import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

class Course extends React.Component {
  constructor({ match }) {
    super(match);
    console.log(match);
    this.state = {
      courseId: match.params.courseId,
      isLoaded: false,
      course: undefined
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/courses/${this.state.courseId}`)
      .then(response => {
        this.setState(state => {
          state.course = response.data;
          state.isLoaded = true;
          return state;
        });
      });
  }

  render() {
    return <p>Course: {this.state.courseId}</p>;
  }
}

// Course.propTypes = {
//  // match: PropTypes.shape.isRequired,
//   // logo: PropTypes.string.isRequired,
//   // data: PropTypes.arrayOf(
//   //   PropTypes.shape({
//   //     title: PropTypes.string.isRequired,
//   //     number: PropTypes.number.isRequired,
//   //     percentage: PropTypes.string.isRequired
//   // })).isRequired
// };

export default Course;