import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import ButtonAppBar from "./page-structure/button-appbar.component";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./dashboard/dashboard.component";
import CoursesList from "./courses/courses-list/courses-list.component";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import PeopleIcon from "@material-ui/icons/People";

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>Dashboard</div>,
    main: () => <Dashboard></Dashboard>
  },
  {
    path: "/courses",
    sidebar: () => <div>Dashboard</div>,
    main: () => <CoursesList></CoursesList>
  },
  {
    path: "/instructors",
    sidebar: () => <div>Instructors</div>,
    main: () => <CoursesList></CoursesList>
  },
  {
    path: "/courses/view",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
];

const menu = [
  {
    text: "Dashboard",
    path: "/",
    iconComponent: <DashboardIcon/>
  },
  {
    text: "Courses",
    path: "/courses",
    iconComponent: <LibraryBooksIcon/>
  },
  {
    text: "Instructors",
    path: "/instructors",
    iconComponent: <PeopleIcon/>
  }
];

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <Router>
        <React.Fragment>
          <ButtonAppBar classes={classes.root} menu={menu}></ButtonAppBar>

          <main className={classes.content}>
            <div style={{ flex: 1, padding: "10px" }}>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
            </div>
          </main>
        </React.Fragment>
      </Router>
    );
  }
}

AppComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(AppComponent));