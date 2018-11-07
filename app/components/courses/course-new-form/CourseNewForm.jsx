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

class CourseNewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //isLoaded: false,
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

  componentDidMount() {
    Services.getInstructors().then(responce => {
      this.setState({
        instructors: responce.data.map(({ name, id }) => {
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
      const newInstructors = [...this.state.instructors];
      newInstructors[e].selected = !newInstructors[e].selected;
      this.setState({ instructors: newInstructors });
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
    //e.preventDefault();
    //console.log(this.state);
    //debugger;
    // var selectedInstructor = [];
    // this.state.instructors.filter(function(obj) {
    //   if (obj.selected == true) {
    //     selectedInstructor.push(obj.id);
    //   }
    // });
    //this.setState({ instructors: filteredArray });
    //Services.createCourse(this.state);
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
              {this.state.instructors.map((element, index) => {
                return (
                  <CheckboxOrRadioGroup
                    key={element.id}
                    index={index}
                    singleCheckBox={false}
                    label={element.fullName}
                    checked={this.state.instructors[index].selected}
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
              <br />
              <Button
                type="submit"
                size="large"
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={e => this.handleSubmit(e)}
              >
                Add Course
              </Button>
            </form>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

CourseNewForm.propTypes = {
  classes: PropTypes.object.isRequired,
  isBookable: PropTypes.string
};

export default withStyles(styles)(CourseNewForm);
