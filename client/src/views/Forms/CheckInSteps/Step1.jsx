import React from "react";

import vinValidator from "vin-validator";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import RecordVoiceOver from "@material-ui/icons/RecordVoiceOver";
import Email from "@material-ui/icons/Email";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// import PictureUpload from "components/CustomUpload/PictureUpload.jsx";
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

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UnitNumber: "",
      UnitNumberGood: false,
      VIN: "",
      VINGood: false,
      LicensePlate: "",
      LicensePlateGood: false
    };
  }
  sendState() {
    let filledState = {};
    for (let key in this.state) {
      if (this.state[key] !== "" && !key.includes("Good")) {
        filledState[key] = this.state[key];
      }
    }
    return filledState;
  }
  // function that returns true if value is email, false otherwise
  verifyEmail(value) {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  }
  // function that verifies if a string has a given length or not
  verifyLength(value, length) {
    if (value.length >= length) {
      return true;
    }
    return false;
  }
  change(event) {
    let makeGood = id => this.setState({ [id + "Good"]: true });
    let value = event.target.value;
    let id = event.target.getAttribute("id");
    this.setState({ [id]: value });
    switch (id) {
      case "UnitNumber":
        let numeric = /^[0-9]+$/;
        if (numeric.test(value) && value.length > 0) {
          makeGood();
        }
        break;
      case "VIN":
        if (vinValidator.validate(value)) {
          makeGood();
        }
        break;
      case "LicensePlate":
        
        break;
      default:
        break;
    }
  }
  isValidated() {
    if (
      (this.state.UnitNumberGood === true || this.state.UnitNumber === "") &&
      (this.state.VINGood === true || this.state.VIN === "") &&
      (this.state.LicensePlateGood === true || this.state.LicensePlate === "")
    ) {
      return true;
    }
    return false;
  }
  render() {
    const { classes } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12}>
          <h4 className={classes.infoText}>
            Enter vehicle information to search:
          </h4>
        </GridItem>
        <GridItem xs={10}>
          <CustomInput
            labelText={<span>Unit Number</span>}
            id="UnitNumber"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event => this.change(event)
            }}
          />
          <CustomInput
            success={this.state.VINGood || this.state.VIN === ""}
            error={!this.state.VINGood && this.state.VIN !== ""}
            labelText={<span>VIN</span>}
            id="VIN"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event => this.change(event)
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={10}>
          <CustomInput
            labelText={<span>License Plate</span>}
            id="LicensePlate"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event => this.change(event)
            }}
          />
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(style)(Step1);
