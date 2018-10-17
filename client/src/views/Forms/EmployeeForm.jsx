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
import API from "../../utils/API";
import { Redirect } from "react-router-dom";

import regularFormsStyle from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      Section: "",
      Description: "",
      ClaimId: 0,
      VehicleId: 0
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
    API.postEmployees({
        EmployeeNumber: this.state.EmployeeNumber,
        JobTitle: this.state.JobTitle,
        MVRCheckDate: this.state.MVRCheckDate,
        VehicleId: this.state.VehicleId
    })
      .then(res => {
        console.log(res.data.id);
        if(res.data.id) {
          this.setState({redirect: true});
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
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <VehicleEntry />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>Add a new Employee</h4>
            </CardHeader>
            <CardBody>
              <form>
                <CustomInput
                  labelText="Employee Number"
                  name="EmployeeNumber"
                  id="EmployeeNumber"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                  inputProps={{
                    placeholder: "required"
                  }}
                />
                <CustomInput
                  labelText="Job Title"
                  name="JobTitle"
                  id="JobTitle"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                  inputProps={{
                    placeholder: "required"
                  }}
                />
                <CustomInput
                  labelText="MVR Check Date"
                  name="MVRCheckDate"
                  id="MVRCheckDate"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                  inputProps={{
                    placeholder: "required"
                  }}
                />
                <CustomInput
                  labelText="Can Drive"
                  name="CanDrive"
                  id="CanDrive"
                  formControlProps={{
                    fullWidth: true
                  }}
                  onChange={this.handleChange}
                  inputProps={{
                    placeholder: "required"
                  }}
                />
                <Button color="rose" onClick={(event) => {this.sumbitHandler(event)}}>
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

export default withStyles(regularFormsStyle)(EmployeeForm);