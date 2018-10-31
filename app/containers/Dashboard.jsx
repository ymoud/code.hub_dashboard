import React from "react";
import Services from "../services/index";
import {Typography} from "@material-ui/core";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      stats: [],
      courses: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    Services.getStats()
      .then(response => {
        this.setState(state => {
          state.stats = response.data;
          return state;
        });
      });

    Services.getCourses()
      .then(response => {
        this.setState(state => {
          //TODO: sort by dates.start_date DESC, then filter first 5
          state.courses = response.data;
          return state;
        });
      });
  }

  render() {
    const {stats, courses} = this.state;

    return (
      <React.Fragment>
        <Typography variant="h5">Dashboard</Typography>
        <br/>
        {/* {
          stats && stats.length 
            ? stats.map(statItem => <p key={statItem.id}>{statItem.title}</p>)
            : <p>No data found</p>
        }
        {
          courses && courses.length 
            ? courses.map(course => <p key={courses.id}>{course.title}</p>)
            : <p>No courses found</p>
        } */}
      </React.Fragment>
    );
  }
}

export default Dashboard;