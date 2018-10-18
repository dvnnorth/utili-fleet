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

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UnitNumbers: [],
      UnitNumber: "",
      UnitNumberState: ""
    };
  }
  sendState() {
    return {
      UnitNumber: this.state.UnitNumber
    };
  }

  change(event, stateName, type) {
    switch (type) {
      case "UnitNumber":
        if (this.state.UnitNumbers.includes(parseInt(event.target.value))) {
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
    if (this.state.UnitNumberState === "success") {
      return true;
    } else {
      if (this.state.UnitNumberState !== "success") {
        this.setState({ UnitNumberState: "error" });
      }
    }
    return false;
  }
  componentDidMount() {
    API.getAllUnits().then(response => {
      let UnitNumbers = response.data.map(obj => obj.UnitNumber);
      this.setState({ UnitNumbers });
    })
      .catch(err => console.error(err));
  }

  render() {
    const { classes } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12}>
          <h4 className={classes.infoText}>Select a Vehicle</h4>
        </GridItem>
        <GridItem xs={12} sm={6}>
          <CustomInput
            success={this.state.UnitNumberState === "success"}
            error={this.state.UnitNumberState === "error"}
            labelText={
              <span>
                Unit Number <small>(required)</small>
              </span>
            }
            id="UnitNumber"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event => this.change(event, "UnitNumber", "UnitNumber"),
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

export default withStyles(style)(Step1);
