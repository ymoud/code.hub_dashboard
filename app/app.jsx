import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import PeopleIcon from "@material-ui/icons/People";
import AddIcon from "@material-ui/icons/Add";
import Dashboard from "./containers/Dashboard";
import Courses from "./containers/Courses";
import Course from "./containers/Course";
import Instructors from "./containers/Instructors";
import AddNewCourse from "./containers/AddNewCourse";
import NoMatch from "./components/NoMatch";
import ListItemLink from "./components/page-structure/ListItemLink";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./app-styles";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      title: props.title,
    };
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { open, title } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        <BrowserRouter>
          <React.Fragment>
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader}>
                <Typography variant="h6" color="inherit" noWrap>Select a link</Typography>
                <IconButton onClick={this.handleDrawerClose}>
                  {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
              </div>
              <Divider />
              <List>
                <ListItemLink icon={<DashboardIcon/>} primary="Dashboard" secondary="Dashboard" to="/" afterClick={this.handleDrawerClose}/>
                <ListItemLink icon={<LibraryBooksIcon/>} primary="Courses" secondary="Courses" to="/courses" afterClick={this.handleDrawerClose}/>
                <ListItemLink icon={<PeopleIcon/>} primary="Instructors" secondary="Instructors" to="/instructors" afterClick={this.handleDrawerClose}/>
                <ListItemLink icon={<AddIcon/>} primary="New Course" secondary="Add new course" to="/courses/new" afterClick={this.handleDrawerClose}/>
              </List>
            </Drawer>
        
            <main
              className={classNames(classes.content, {
                [classes.contentShift]: open,
              })}
            >
              <div className={classes.drawerHeader} />
          
              <Switch>
                <Route path="/" exact={true} component={Dashboard}/>
                <Route path="/courses" exact={true} component={Courses}/>
                <Route path="/courses/new" exact={true} component={AddNewCourse}/>
                <Route path="/courses/:courseId" component={Course}/>
                <Route path="/instructors" exact={true} component={Instructors}/>
                <Route component={NoMatch}></Route>
              </Switch>
          
            </main>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);