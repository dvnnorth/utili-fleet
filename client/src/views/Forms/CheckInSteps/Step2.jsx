import React from "react";

// @material-ui/icons
import DirectionsCar from "@material-ui/icons/DirectionsCar";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import API from "utils/API";

const style = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center"
  },
  inputAdornmentIcon: {
    color: "#555"
  },
  inputAdornment: {
    position: "relative"
  }
};

class Step2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Mileage: "",
      MileageState: "",
      currentMileage: ""
    };
  }
  sendState() {
    return { Mileage: this.state.Mileage };
  }

  change(event, stateName, type) {
    switch (type) {
      case "Mileage":
        console.log(event.target.value);
        console.log(parseInt(event.target.value));
        if (parseInt(event.target.value) >= this.state.currentMileage) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      default:
        break;
    }
    this.setState({ [stateName]: event.target.value });
  }
  isValidated() {
    if (this.state.MileageState === "success") {
      return true;
    } else {
      if (this.state.MileageState !== "success") {
        this.setState({ MileageState: "error" });
      }
    }
    return false;
  }
  componentDidUpdate() {
    function isEmpty(obj) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) return false;
      }
      return true;
    }
    if (
      !isEmpty(this.props.getAllStates()) &&
      this.state.currentMileage === ""
    ) {
      let UnitNumber = this.props.getAllStates()[0].vehicle.UnitNumber;
      console.log("UnitNumber: ", UnitNumber);
      API.getUnitMileage(UnitNumber)
        .then(res => {
          this.setState({ currentMileage: res.data[0].Mileage });
        })
        .catch(err => console.error(err));
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12}>
          <h4 className={classes.infoText}>Input Updated Mileage</h4>
        </GridItem>
        <GridItem xs={12} sm={12}>
          <h5 className={classes.infoText}>
            Current Mileage: {this.state.currentMileage}
          </h5>
        </GridItem>
        <GridItem xs={12} sm={6}>
          <CustomInput
            success={this.state.MileageState === "success"}
            error={this.state.MileageState === "error"}
            labelText={
              <span>
                Updated Mileage <small>(required)</small>
              </span>
            }
            id="Mileage"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event => this.change(event, "Mileage", "Mileage"),
              endAdornment: (
                <InputAdornment
                  position="end"
                  className={classes.inputAdornment}
                >
                  <DirectionsCar className={classes.inputAdornmentIcon} />
                </InputAdornment>
              )
            }}
          />
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(style)(Step2);
