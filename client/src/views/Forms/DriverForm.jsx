import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";
import { Typography } from "@material-ui/core";

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
      FirstName: "",
      Address1: "",
      Address2: "",
      City: "",
      State: "",
      Zip: "",
      Telephone: "",
      DOB: "",
      DriversLicense: "",
      DriversLicenseExpiration: "",
      Email: "",
      errorMessage: ""
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

  sumbitHandler = event => {
    event.preventDefault();
    API.postDrivers({
      LastName: this.state.LastName,
      FirstName: this.state.FirstName,
      Address1: this.state.Address1,
      Address2: this.state.Address2,
      City: this.state.City,
      State: this.state.State,
      Zip: this.state.Zip,
      Telephone: this.state.Telephone,
      DOB: this.state.DOB,
      DriversLicense: this.state.DriversLicense,
      DriversLicenseExpiration: this.state.DriversLicenseExpiration,
      Email: this.state.Email
    })
      .then(res => {
        console.log(res.data.id);
        if (res.data.id) {
          this.setState({ redirect: true });
        }
      })
      .catch(err => this.setState({ errorMessage: "Error" }));
  };
  render() {
    const { classes } = this.props;
    if (this.state.redirect) {
      return <Redirect to="/reports/drivers" />;
    }
    return (
      <GridContainer>
        <GridItem xs={12} sm={12}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <VehicleEntry />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>Add a new Driver</h4>
            </CardHeader>
            <CardBody>
              <form>
                <CustomInput
                  labelText="First Name"
                  name="FirstName"
                  id="FirstName"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                  inputProps={{
                    placeholder: "Required"
                  }}
                />
                <CustomInput
                  labelText="Last Name"
                  name="LastName"
                  id="LastName"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                  inputProps={{
                    placeholder: "Required"
                  }}
                />
                <CustomInput
                  labelText="Address 1"
                  name="Address1"
                  id="Address1"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                  inputProps={{
                    placeholder: "Required"
                  }}
                />
                <CustomInput
                  labelText="Address 2"
                  name="Address2"
                  id="Address2"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                />
                <CustomInput
                  labelText="City"
                  name="City"
                  id="City"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                  inputProps={{
                    placeholder: "Required"
                  }}
                />
                <CustomInput
                  labelText="State"
                  name="State"
                  id="State"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                  inputProps={{
                    placeholder: "Required"
                  }}
                />
                <CustomInput
                  labelText="Zip"
                  name="Zip"
                  id="Zip"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                  inputProps={{
                    placeholder: "Required"
                  }}
                />
                <CustomInput
                  labelText="Telephone"
                  name="Telephone"
                  id="Telephone"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                  inputProps={{
                    placeholder: "Required"
                  }}
                />
                <CustomInput
                  labelText="Date of Birth"
                  name="DOB"
                  id="DOB"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                  inputProps={{
                    placeholder: "Required"
                  }}
                />
                <CustomInput
                  labelText="Drivers License"
                  name="DriversLicense"
                  id="DriversLicense"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                  inputProps={{
                    placeholder: "Required"
                  }}
                />
                <CustomInput
                  labelText="Drivers License Expiration"
                  name="DriversLicenseExpiration"
                  id="DriversLicenseExpiration"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                  inputProps={{
                    placeholder: "Required"
                  }}
                />
                <CustomInput
                  labelText="Email"
                  name="Email"
                  id="Email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                  inputProps={{
                    placeholder: "Required"
                  }}
                />
                <Typography color="error">
                  {this.state.errorMessage === "" ? null : "Invalid input"}
                </Typography>
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
