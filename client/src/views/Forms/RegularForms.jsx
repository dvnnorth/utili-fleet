import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";

// @material-ui/icons
import MailOutline from "@material-ui/icons/MailOutline";
import Check from "@material-ui/icons/Check";
import Clear from "@material-ui/icons/Clear";
import Contacts from "@material-ui/icons/Contacts";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import VehicleEntry from "@material-ui/icons/DirectionsCar";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardText from "components/Card/CardText.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";

// Import API
import API from "utils/API";
import { Redirect } from "react-router-dom";

import regularFormsStyle from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";

class RegularForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      unitNumber: "",
      VIN: "",
      modelYear: "",
      make: "",
      model: "",
      series: "",
      vehicleType: "",
      bodyClass: "",
      exteriorColor: "",
      interiorColor: "",
      licensePlate: "",
      mileage: "",
      maxMileage: "",
      netCost: "",
      depreciationStart: "",
      depreciationRateYearly: "",
      tollTageSerial: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
  }
  handleChange = event => {
    this.setState({ [event.target.getAttribute("id")]: event.target.value });
  };
  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value });
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      unitNumber: "",
      VIN: "",
      modelYear: "",
      make: "",
      model: "",
      series: "",
      vehicleType: "",
      bodyClass: "",
      exteriorColor: "",
      interiorColor: "",
      licensePlate: "",
      mileage: "",
      maxMileage: "",
      netCost: "",
      depreciationStart: "",
      DepreciationEnd: "",
      depreciationRateYearly: "",
      tollTageSerial: ""
    });
  }
  sumbitHandler = event => {
    event.preventDefault();
    API.addVehicle({
      UnitNumber: this.state.unitNumber,
      VIN: this.state.VIN,
      ModelYear: this.state.modelYear,
      Make: this.state.make,
      Model: this.state.model,
      Series: this.state.series,
      VehicleType: this.state.vehicleType,
      BodyClass: this.state.bodyClass,
      ExteriorColor: this.state.exteriorColor,
      InteriorColor: this.state.interiorColor,
      LicensePlate: this.state.licensePlate,
      Mileage: this.state.mileage,
      MaxMileage: this.state.maxMileage,
      NetCost: this.state.netCost,
      DepreciationStart: this.state.depreciationStart,
      DepreciationEnd: this.state.depreciationRateYearly,
      TollTagSerial: this.state.tollTageSerial
    })
      .then(res => {
        console.log(res.data.id);
        if (res.data.id) {
          this.setState({ redirect: true });
        }
      })
      .catch(err =>
        this.setState({ errorMessage: "Login Failed" + err.toString() })
      );
  };
  render() {
    const { classes } = this.props;
    if (this.state.redirect) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={8}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <VehicleEntry />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>Add a vehicle</h4>
            </CardHeader>
            <CardBody>
              <form>
                <CustomInput
                  labelText="Unit Number"
                  name="unitNumber"
                  id="unitNumber"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                  inputProps={{
                    placeholder: "required"
                  }}
                />
                <CustomInput
                  labelText="VIN"
                  name="VIN"
                  id="VIN"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                  inputProps={{
                    placeholder: "required"
                  }}
                />
                <CustomInput
                  labelText="Model Year"
                  name="modelYear"
                  id="modelYear"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                  inputProps={{
                    placeholder: "mm/dd/yyyy"
                  }}
                />
                <CustomInput
                  labelText="Make"
                  name="make"
                  id="make"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                  inputProps={{
                    placeholder: "required"
                  }}
                />
                <CustomInput
                  labelText="Model"
                  name="model"
                  id="model"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                  inputProps={{
                    placeholder: "required"
                  }}
                />
                <CustomInput
                  labelText="Series"
                  name="series"
                  id="series"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                  inputProps={{
                    placeholder: "Series"
                  }}
                />
                <CustomInput
                  labelText="Vehicle Type"
                  name="vehicleType"
                  id="vehicleType"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                  inputProps={{
                    placeholder: "required"
                  }}
                />
                <CustomInput
                  labelText="Body Class"
                  name="bodyClass"
                  id="bodyClass"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                  inputProps={{
                    placeholder: "Body Class"
                  }}
                />
                <CustomInput
                  labelText="Exterior Color"
                  name="exteriorColor"
                  id="exteriorColor"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    placeholder: "required"
                  }}
                />
                <CustomInput
                  labelText="Interior Color"
                  name="interiorColor"
                  id="interiorColor"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                  inputProps={{
                    placeholder: "Interior Color"
                  }}
                />
                <CustomInput
                  labelText="License Plate"
                  name="licensePlate"
                  id="licensePlate"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                  inputProps={{
                    type: "email"
                  }}
                />
                <CustomInput
                  labelText="Mileage"
                  id="mileage"
                  name="mileage"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                  inputProps={{
                    placeholder: "required"
                  }}
                />
                <CustomInput
                  labelText="Max Mileage"
                  name="maxMileage"
                  id="maxMileage"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                  inputProps={{
                    placeholder: "Max Mileage"
                  }}
                />
                <CustomInput
                  labelText="Net Cost"
                  name="netCost"
                  id="netCost"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                  inputProps={{
                    placeholder: "Decimal"
                  }}
                />
                <CustomInput
                  labelText="Depreciation Start"
                  name="depreciationStart"
                  id="depreciationStart"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                  inputProps={{
                    placeholder: "mm/dd/yyyy"
                  }}
                />
                <CustomInput
                  labelText="Depreciation End"
                  name="depreciationEnd"
                  id="depreciationEnd"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                  inputProps={{
                    placeholder: "mm/dd/yyyy"
                  }}
                />
                <CustomInput
                  labelText="Depreciation Rate Yearly"
                  name="depreciationRateYearly"
                  id="depreciationRateYearly"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                  inputProps={{
                    placeholder: "Decimal"
                  }}
                />
                <CustomInput
                  labelText="Toll Tag Serial"
                  name="tollTageSerial"
                  id="tollTageSerial"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                  inputProps={{
                    type: "email"
                  }}
                />
                <Button
                  color="rose"
                  onClick={event => {
                    this.sumbitHandler(event);
                  }}
                >
                  Submit
                </Button>
              </form>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(regularFormsStyle)(RegularForms);
