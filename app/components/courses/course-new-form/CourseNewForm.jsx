import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import AddIcon from "@material-ui/icons/AddToQueue";
import AirPlayIcon from "@material-ui/icons/AirPlay";
import SaveIcon from "@material-ui/icons/Save";
import Paper from "@material-ui/core/Paper";
import SingleInput from "../../common/SingleInput";
import CheckboxOrRadioGroup from "../../common/CheckboxOrRadioGroup";
import styles from "./styles";
import Services from "../../../services/index";
import DeleteIcon from "@material-ui/icons/Delete";
import RestoreIcon from "@material-ui/icons/SettingsBackUpRestore";
import AddButtonIcon from "@material-ui/icons/AddBox";
import { withRouter } from "react-router";
import Swal from "sweetalert2";

class CourseNewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: this.getCleanCourseData(),
      instructorsData: [],
      isNew: true,
      courseId: "",
      courseTitle: "",
      initialCourse: {}
    };
  }

  getCleanCourseData() {
    return {
      title: "",
      duration: "",
      imagePath: "",
      open: false,
      instructors: [],
      dates: {
        start_date: "",
        end_date: ""
      },
      price: {
        normal: "0",
        early_bird: "0"
      },
      description: ""
    };
  }
  tryLoadCourse() {
    const { match } = this.props;
    const isNew = !match || !match.params.courseId;

    if (isNew) {
      this.loadInstructors();
      return;
    }

    this.setState(state => {
      state.isNew = false;
      state.courseId = courseId;
      return state;
    });

    const courseId = match.params.courseId;
    Services.getCourse(courseId).then(res =>
      this.setState(state => {
        state.course = res.data;
        state.initialCourse = res.data;
        state.courseTitle = res.data.title;
        return state;
      }, this.loadInstructors())
    );
  }

  loadInstructors() {
    Services.getInstructors().then(responce => {
      this.setState(state => {
        state.instructorsData = responce.data.map(({ name, id }) => {
          return (
            { ...name },
            {
              id,
              fullName: name.first + " " + name.last,
              selected: state.course.instructors.indexOf(id) > -1
            }
          );
        });
        return state;
      });
    });
  }

  componentDidMount() {
    this.tryLoadCourse();
  }

  handleChange = e => {
    let name, value;

    if (!isNaN(e)) {
      const newInstructors = [...this.state.instructorsData];
      newInstructors[e].selected = !newInstructors[e].selected;
      this.setState({ instructorsData: newInstructors });
    } else {
      const target = e.target;
      name = target.name;

      switch (target.type) {
        case "checkbox": {
          value = target.checked;
          this.setState(state => {
            state.course[name] = value;
            return state;
          });
          break;
        }
        case "date": {
          value = target.value;
          let newDates = { ...this.state.course.dates };
          newDates[name] = value;
          this.setState(state => {
            state.course.dates = newDates;
            return state;
          });
          break;
        }
        case "number": {
          value = target.value < 0 ? "0" : target.value;
          let newPrices = { ...this.state.course.price };
          newPrices[name] = value;
          this.setState(state => {
            state.course.price = newPrices;
            return state;
          });
          break;
        }
        default:
          value = target.value;
          this.setState(state => {
            state.course[name] = value;
            return state;
          });
      }
    }
  };

  saveCourse() {
    const { course } = this.state;
    Services.createCourse(course)
      .catch(() => Swal("Oops...", "Something went wrong!", "error"))
      .then(() => {
        Swal(
          "Success",
          `A new course with title: <strong>${
            this.state.course.title
          }</strong> has been created!`,
          "success"
        );
        this.props.history.push("/courses");
      });
  }

  updateCourse() {
    const { course, courseId } = this.state;
    Services.updateCourse(courseId, course)
      .then(() => {
        Swal("Success", `the course ${course.title} was updated!`, "success");
        this.props.history.push("/courses");
      })
      .catch(() => Swal("Oops...", "Something went wrong!", "error"));
  }

  handleSubmit = e => {
    const { isNew } = this.state;
    e.preventDefault();

    let newSelectedInstructors = [];
    this.state.instructorsData.filter(obj => {
      if (obj.selected == true) {
        newSelectedInstructors.push(obj.id);
      }
    });

    this.setState(
      state => {
        state.course.instructors = newSelectedInstructors;
        return state;
      },
      () => {
        isNew
          ? this.saveCourse(newSelectedInstructors)
          : this.updateCourse(newSelectedInstructors);
      }
    );
  };

  handleClearForm = e => {
    const { isNew } = this.state;
    e.preventDefault();

    // Uncheck selected instructors
    let defaultInstructors = [...this.state.instructorsData];
    defaultInstructors.forEach(item => {
      item.selected = false;
    });

    if (isNew) {
      this.setState(state => {
        state.course = this.getCleanCourseData();
        return state;
      });
    } else {
      this.setState(state => {
        state.course = Object.assign({}, state.initialCourse);
        return state;
      });
    }
  };

  render() {
    const { classes } = this.props;
    const { course, instructorsData, isNew, courseTitle } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              {isNew ? <AddIcon /> : <AirPlayIcon />}
            </Avatar>
            <Typography component="h1" variant="h5">
              {isNew ? "Add New Course" : `Update Course: ${courseTitle}`}
            </Typography>
            <form className={classes.form} autoComplete="off">
              <SingleInput
                type={"text"}
                label={"Title"}
                name={"title"}
                value={course.title}
                controlFunc={e => this.handleChange(e)}
                required={true}
                placeholder={"Title"}
              />
              <SingleInput
                type={"text"}
                label={"Duration"}
                name={"duration"}
                value={course.duration}
                controlFunc={e => this.handleChange(e)}
                required={true}
                placeholder={"Duration"}
              />
              <SingleInput
                type={"text"}
                label={"Image Path"}
                name={"imagePath"}
                value={course.imagePath}
                controlFunc={e => this.handleChange(e)}
                required={true}
                placeholder={"Image Path"}
              />
              <br />
              <Typography component="h1" variant="h6">
                Bookable
              </Typography>
              <CheckboxOrRadioGroup
                singleCheckBox={true}
                label={"Bookable"}
                name={"open"}
                checked={course.open}
                controlFunc={e => this.handleChange(e)}
              />
              <br />
              <Typography component="h1" variant="h6">
                Instructors
              </Typography>
              {instructorsData.map((element, index) => {
                return (
                  <CheckboxOrRadioGroup
                    key={element.id}
                    index={index}
                    singleCheckBox={false}
                    label={element.fullName}
                    checked={instructorsData[index].selected}
                    controlFunc={e => this.handleChange(e)}
                  />
                );
              })}
              <SingleInput
                type={"text"}
                label={"Description"}
                name={"description"}
                value={course.description}
                controlFunc={e => this.handleChange(e)}
                required={true}
                multiline={true}
                rows={2}
                placeholder={"Description"}
              />
              <br />
              <Typography variant="h5">Dates</Typography>
              <SingleInput
                type={"date"}
                label={"Start Date"}
                name={"start_date"}
                value={course.dates["start_date"]}
                controlFunc={e => this.handleChange(e)}
                required={true}
                placeholder={"Start Date"}
              />
              <SingleInput
                type={"date"}
                label={"End Date"}
                name={"end_date"}
                value={course.dates["end_date"]}
                controlFunc={e => this.handleChange(e)}
                required={true}
                placeholder={"Start Date"}
              />
              <br />
              <Typography component="h1" variant="h6">
                Price
              </Typography>
              <SingleInput
                type={"number"}
                label={"Early Bird"}
                name={"early_bird"}
                value={course.price["early_bird"]}
                controlFunc={e => this.handleChange(e)}
                required={true}
              />
              <SingleInput
                type={"number"}
                label={"Normal"}
                name={"normal"}
                value={course.price["normal"]}
                controlFunc={e => this.handleChange(e)}
                required={true}
              />
              <br />
              <center>
                <Button
                  type="submit"
                  size="large"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={e => this.handleSubmit(e)}
                >
                  {isNew ? "Add Course" : "Update Course"}
                  {isNew ? (
                    <AddButtonIcon className={classes.rightIcon} />
                  ) : (
                    <SaveIcon className={classes.rightIcon} />
                  )}
                </Button>
                <Button
                  size="large"
                  variant="contained"
                  color="secondary"
                  className={classes.clear}
                  onClick={e => this.handleClearForm(e)}
                >
                  {isNew ? "Clear Form" : "Restore Form"}
                  {isNew ? (
                    <DeleteIcon className={classes.rightIcon} />
                  ) : (
                    <RestoreIcon className={classes.rightIcon} />
                  )}
                </Button>
              </center>
            </form>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

CourseNewForm.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object,
  push: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      courseId: PropTypes.node
    })
  })
};

export default withRouter(withStyles(styles)(CourseNewForm));
