import React from "react";
import { Redirect } from "react-router-dom";

// core components
import Wizard from "components/Wizard/Wizard.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Step1 from "./CheckInSteps/Step1.jsx";
import Step2 from "./CheckInSteps/Step2.jsx";
import Step3 from "./CheckInSteps/Step3.jsx";
//import Step4 from "./CheckInSteps/Step4.jsx";


//import API from "utils/API";

class CheckInWizardContainer extends React.Component {
  state = {
    redirect: false
  };
  submitCheckIn = (vehicleData, damage) => {
    this.setState({ redirect: true });
    // API.updateVehicles(vehicleData.id, {
    //   DriverId: null,
    //   Mileage: vehicleData.Mileage
    // })
    //   .then(res => {
    //     console.log(res);
    //     API.postDamage(damage).then(res => {
    //       console.log(res);
    //       this.setState({ redirect: true });
    //     });
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
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
              { stepName: "Vehicle", stepComponent: Step1, stepId: "vehicle" },
              {
                stepName: "Information",
                stepComponent: Step2,
                stepId: "information"
              },
              { stepName: "Damage", stepComponent: Step3, stepId: "damage" }
            ]}
            title="Vehicle Check-In"
            subtitle="Complete the process to check a vehicle back in."
            finishButtonClick={this.submitCheckIn}
          />
        </GridItem>
      </GridContainer>
    );
  }
}

export default CheckInWizardContainer;
