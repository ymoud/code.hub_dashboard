import React from "react";
import PropTypes from "prop-types";
import Services from "../services/index";
import Hero from "../components/dashboard/Hero";
import StatItem from "../components/dashboard/StatItem";
import CourseTable from "../components/dashboard/CourseTable";
import Grid from "@material-ui/core/Grid";
import NoDataFound from "../components/common/NoDataFound";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainTitle: "Welcome to Code.Hub Dashboard!",
      mainMessage: "Manage everything and have fun!",
      stats: [],
      courses: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    Services.getStats().then(response => {
      this.setState({
        stats: response.data
      });
    });

    Services.getCourses().then(response => {
      this.setState({
        //TODO: sort by dates.start_date DESC, then filter first 5
        courses: response.data
      });
    });
  }

  render() {
    const { stats, courses, mainTitle, mainMessage } = this.state;

    const statItemsGrid = (
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        {stats.map(statItem => (
          <StatItem key={statItem.id} statItem={statItem} />
        ))}
      </Grid>
    );

    const coursesTable = <CourseTable courses={courses} />;

    return (
      <React.Fragment>
        <Hero title={mainTitle} message={mainMessage} />
        {stats && stats.length ? (
          statItemsGrid
        ) : (
          <NoDataFound text={"Stats Items"} />
        )}
        {courses && courses.length ? (
          coursesTable
        ) : (
          <NoDataFound text={"Courses"} />
        )}
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  stats: PropTypes.array,
  course: PropTypes.array,
  isLoaded: PropTypes.bool,
  mainTitle: PropTypes.string,
  mainMessage: PropTypes.string
};

export default Dashboard;
