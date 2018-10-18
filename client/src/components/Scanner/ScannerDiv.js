import React, { Component } from "react";
import Scanner from "./Scanner";
import vinValidator from "vin-validator";
import Button from "components/CustomButtons/Button.jsx";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scanning: false,
      vin: "",
      soundOn: false
    };
    this._scan = this._scan.bind(this);
    this._onDetected = this._onDetected.bind(this);
    this._onProcessed = this._onProcessed.bind(this);
  }

  _scan() {
    this.setState({ scanning: !this.state.scanning });
  }

  _onProcessed(result) {
    return;
  }

  _onDetected(result) {
    result = result.codeResult.code;

    const vin = vinValidator.validate(result); // chequeo que sea un vin valido

    this.props.getVIN(result);
  }

  render() {
    return (
      <div>
        <Button color="rose" onClick={this._scan}>
          {this.state.scanning ? "Stop Scanner" : "Start Scanner"}
        </Button>
        {this.state.scanning ? (
          <Scanner
            toggleScan={this._scan}
            onDetected={result => this._onDetected(result)}
          />
        ) : null}
      </div>
    );
  }
}
