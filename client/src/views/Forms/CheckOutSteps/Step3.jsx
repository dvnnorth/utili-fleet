import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

// core components
import CustomInput from "components/CustomInput/CustomInput.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import DirectionsCar from "@material-ui/icons/DirectionsCar";
import InputAdornment from "@material-ui/core/InputAdornment";

import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";

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
  },
  ...customSelectStyle
};

class Step3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Section: "",
      SectionState: "",
      Description: "",
      DescriptionState: ""
    };
  }

  sendState() {
    return {
      Section: this.state.Section,
      Description: this.state.Description
    };
  }

  handleSelect = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  change(event, stateName, type) {
    switch (type) {
      case "Description":
        if (event.target.value.length >= 1) {
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
    if (
      this.state.SectionState === "success" &&
      this.state.DescriptionState === "success"
    ) {
      return true;
    } else {
      if (this.state.SectionState !== "success") {
        this.setState({ SectionState: "error" });
      }
      if (this.state.DescriptionState !== "success") {
        this.setState({ DescriptionState: "error" });
      }
    }
    return false;
  }

  render() {
    const { classes } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <FormControl fullWidth className={classes.selectFormControl}>
            <InputLabel htmlFor="Section" className={classes.selectLabel}>
              Damage Section <small>(required)</small>
            </InputLabel>
            <Select
              MenuProps={{
                className: classes.selectMenu
              }}
              classes={{
                select: classes.select
              }}
              value={this.state.Section}
              onChange={this.handleSelect}
              inputProps={{
                name: "Section",
                id: "Section"
              }}
            >
              {(() => {
                let menuItems = [];
                for (let i = 1; i <= 20; i++) {
                  menuItems.push(
                    <MenuItem
                      key={i}
                      classes={{
                        root: classes.selectMenuItem
                      }}
                      value={i}
                    >
                      {i}
                    </MenuItem>
                  );
                }
                return menuItems;
              })()}
            </Select>
          </FormControl>
          <CustomInput
            success={this.state.DescriptionState === "success"}
            error={this.state.DescriptionState === "error"}
            labelText={
              <span>
                Description <small>(required)</small>
              </span>
            }
            id="Mileage"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event =>
                this.change(event, "Description", "Description"),
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

export default withStyles(style)(Step3);
