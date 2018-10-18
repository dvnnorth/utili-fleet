import React from "react";
import { Redirect } from "react-router-dom";

// core components
import Wizard from "components/Wizard/Wizard.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Step1 from "./CheckOutSteps/Step1";
import Step2 from "./DriverForm.jsx";
import Step3 from "./CheckOutSteps/Step3.jsx";

class CheckOutWizardContainer extends React.Component {
  state = {
    redirect: false
  };
  submitCheckIn = (vehicleData, damage) => {
    this.setState({ redirect: true });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={8}>
          <Wizard
            validate
            steps={[
              { stepName: "Client / Employee", stepComponent: Step1, stepId: "driverOrEmployee" },
              { stepName: "Find / Add Driver", stepComponent: Step2, stepId: "driverInformation" },
              { stepName: "Notate Damages", stepComponent: Step3, stepId: "damages" }
            ]}
            title="Vehicle Check-Out"
            subtitle="Complete the process to check out a vehicle."
            finishButtonClick={this.submitCheckIn}
          />
        </GridItem>
      </GridContainer>
    );
  }
}

export default CheckOutWizardContainer;
