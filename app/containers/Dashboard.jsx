import React from "react";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.displayName = "Dashboard Component";
  }

  render() {
    return (
      <h2>Dashboard</h2>
    );
  }
}

Dashboard.defaultProps = {
  name: "Dashboard",
  displayName: "Dashboard Component"
};

export default Dashboard;