import React from "react";
import Hero from "../components/dashboard/hero/Hero";
import Stats from "../components/dashboard/stats/Stats";
import LatestCourses from "../components/dashboard/latestCourses/LatestCourses";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainTitle: "Welcome to Code.Hub Dashboard!",
      mainMessage: "Manage everything and have fun!"
    };
  }

  render() {
    const { mainTitle, mainMessage } = this.state;

    return (
      <React.Fragment>
        <Hero title={mainTitle} message={mainMessage} />
        <Stats />
        <LatestCourses />
      </React.Fragment>
    );
  }
}

export default Dashboard;
