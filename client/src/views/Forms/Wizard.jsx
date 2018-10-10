import React from "react";

// core components
import Wizard from "components/Wizard/Wizard.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Step1 from "./WizardSteps/Step1.jsx";
import Step2 from "./WizardSteps/Step2.jsx";
import Step3 from "./WizardSteps/Step3.jsx";

class WizardView extends React.Component {
  render() {
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={8}>
          <Wizard
            validate
            steps={[
              { stepName: "Driver", stepComponent: Step1, stepId: "driver" },
              { stepName: "Vehicle", stepComponent: Step2, stepId: "vehicle" },
              { stepName: "Damage", stepComponent: Step3, stepId: "damage" },
            ]}
            title="Vehicle Check-out"
            subtitle="Complete process to assign a vehicle to a driver."
          />
        </GridItem>
      </GridContainer>
    );
  }
}

export default WizardView;
