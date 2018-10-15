import React from "react";

// core components
import CheckInOutWizard from "components/Wizard/CheckInOutWizard.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Step1 from "./CheckOutSteps/Step1";
import Step2 from "./DriverForm.jsx";
import Step3 from "./CheckOutSteps/Step3.jsx";

class CheckOutWizardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  captureState = otherState => {
    this.setState({ ...this.state, ...otherState });
  };

  submitData = () => {
    // Check state is as it should be then make API call and send state
  };

  render() {
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={8}>
          <CheckInOutWizard
            steps={[
              { stepName: "Client / Employee", stepComponent: Step1, stepId: "driverOrEmployee" },
              {
                stepName: "Find / Add Driver",
                stepComponent: Step2,
                stepId: "driverInformation"
              },
              { stepName: "Notate Damages", stepComponent: Step3, stepId: "damages" }
            ]}
            title="Vehicle Check-Out"
            subtitle="Complete the process to check out a vehicle."
            captureState={this.captureState}
            submitData={this.submitData}
          />
        </GridItem>
      </GridContainer>
    );
  }
}

export default CheckOutWizardContainer;
