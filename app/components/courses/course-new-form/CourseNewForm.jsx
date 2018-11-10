import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import AddIcon from "@material-ui/icons/AddToQueue";
import Paper from "@material-ui/core/Paper";
import SingleInput from "../../common/SingleInput";
import CheckboxOrRadioGroup from "../../common/CheckboxOrRadioGroup";
import styles from "./styles";
import Services from "../../../services/index";
import DeleteIcon from "@material-ui/icons/Delete";
import AddButtonIcon from "@material-ui/icons/AddBox";
import { withRouter } from "react-router";
import Swal from "sweetalert2";

class CourseNewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      duration: "",
      imagePath: "",
      open: false,
      instructors: [],
      instructorsData: [],
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

  componentDidMount() {
    Services.getInstructors().then(responce => {
      this.setState({
        instructorsData: responce.data.map(({ name, id }) => {
          return (
            { ...name },
            {
              id,
              fullName: name.first + " " + name.last,
              selected: false
            }
          );
        })
      });
    });
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
          this.setState({ [name]: value });
          break;
        }
        case "date": {
          value = target.value;
          let newDates = { ...this.state.dates };
          newDates[name] = value;
          this.setState({ dates: newDates });
          break;
        }
        case "number": {
          value = target.value < 0 ? "0" : target.value;
          let newPrices = { ...this.state.price };
          newPrices[name] = value;
          this.setState({ price: newPrices });
          break;
        }
        default:
          value = target.value;
          this.setState({ [name]: value });
      }
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    let newSelectedInstructor = [];
    this.state.instructorsData.filter(obj => {
      if (obj.selected == true) {
        newSelectedInstructor.push(obj.id);
      }
    });

    this.setState({ instructors: newSelectedInstructor }, () => {
      Services.createCourse(this.state)
        .then(() => {
          Swal(
            "Success",
            `A new course with title: <strong>${
              this.state.title
            }</strong> has been created!`,
            "success"
          );
          this.props.history.push("/courses");
        })
        .catch(error => {
          Swal("Oops...", "Something went wrong!", "error");
          console.log(error);
        });
    });
  };

  handleClearForm = e => {
    e.preventDefault();

    // Uncheck selected instructors
    let defaultInstructors = [...this.state.instructorsData];
    defaultInstructors.forEach(item => {
      item.selected = false;
    });

    this.setState({
      title: "",
      duration: "",
      imagePath: "",
      open: false,
      instructors: defaultInstructors,
      selectedInstructor: [],
      dates: {
        start_date: "",
        end_date: ""
      },
      price: {
        normal: "0",
        early_bird: "0"
      },
      description: ""
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <AddIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Add New Course
            </Typography>
            <form className={classes.form} autoComplete="off">
              <SingleInput
                type={"text"}
                label={"Title"}
                name={"title"}
                value={this.state.title}
                controlFunc={e => this.handleChange(e)}
                required={true}
                placeholder={"Title"}
              />
              <SingleInput
                type={"text"}
                label={"Duration"}
                name={"duration"}
                value={this.state.duration}
                controlFunc={e => this.handleChange(e)}
                required={true}
                placeholder={"Duration"}
              />
              <SingleInput
                type={"text"}
                label={"Image Path"}
                name={"imagePath"}
                value={this.state.imagePath}
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
                checked={this.state.open}
                controlFunc={e => this.handleChange(e)}
              />
              <br />
              <Typography component="h1" variant="h6">
                Instructors
              </Typography>
              {this.state.instructorsData.map((element, index) => {
                return (
                  <CheckboxOrRadioGroup
                    key={element.id}
                    index={index}
                    singleCheckBox={false}
                    label={element.fullName}
                    checked={this.state.instructorsData[index].selected}
                    controlFunc={e => this.handleChange(e)}
                  />
                );
              })}
              <SingleInput
                type={"text"}
                label={"Description"}
                name={"description"}
                value={this.state.description}
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
                value={this.state.dates["start_date"]}
                controlFunc={e => this.handleChange(e)}
                required={true}
                placeholder={"Start Date"}
              />
              <SingleInput
                type={"date"}
                label={"End Date"}
                name={"end_date"}
                value={this.state.dates["end_date"]}
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
                value={this.state.price["early_bird"]}
                controlFunc={e => this.handleChange(e)}
                required={true}
              />
              <SingleInput
                type={"number"}
                label={"Normal"}
                name={"normal"}
                value={this.state.price["normal"]}
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
                  Add Course
                  <AddButtonIcon className={classes.rightIcon} />
                </Button>
                <Button
                  size="large"
                  variant="contained"
                  color="secondary"
                  className={classes.clear}
                  onClick={e => this.handleClearForm(e)}
                >
                  Clear Form
                  <DeleteIcon className={classes.rightIcon} />
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
  push: PropTypes.func
};

export default withRouter(withStyles(styles)(CourseNewForm));
