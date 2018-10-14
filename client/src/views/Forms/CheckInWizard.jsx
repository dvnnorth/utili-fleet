import React from "react";

// core components
import Wizard from "components/Wizard/Wizard.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Step1 from "./CheckInSteps/Step1.jsx";
import Step2 from "./CheckInSteps/Step2.jsx";
import Step3 from "./CheckInSteps/Step3.jsx";

class WizardView extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      vehicle: {}
    };
  }

  setVehicle = () => {

  };

  render() {
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={8}>
          <Wizard
            validate
            steps={[
              { stepName: "Vehicle", stepComponent: Step1, stepId: "vehicle" },
              { stepName: "Vehicle", stepComponent: Step2, stepId: "vehicle" },
              { stepName: "Damage", stepComponent: Step3, stepId: "damage" },
            ]}
            title="Vehicle Check-In"
            subtitle="Complete the process to check a vehicle back in to ready status."
          />
        </GridItem>
      </GridContainer>
    );
  }
}

export default WizardView;