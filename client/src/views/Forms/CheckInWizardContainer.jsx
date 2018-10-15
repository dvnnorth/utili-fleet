import React from "react";

// core components
import CheckInOutWizard from "components/Wizard/CheckInOutWizard.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Step1 from "./CheckInSteps/Step1.jsx";
import Step2 from "./CheckInSteps/Step2.jsx";
import Step3 from "./CheckInSteps/Step3.jsx";

class CheckInWizardContainer extends React.Component {
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
              { stepName: "Vehicle", stepComponent: Step1, stepId: "vehicle" },
              { stepName: "Information", stepComponent: Step2, stepId: "information" },
              { stepName: "Damages", stepComponent: Step3, stepId: "damages" },
            ]}
            title="Vehicle Check-In"
            subtitle="Complete the process to check a vehicle back in."
            captureState={this.captureState}
            submitData={this.submitData}
          />
        </GridItem>
      </GridContainer>
    );
  }
}

export default CheckInWizardContainer;
