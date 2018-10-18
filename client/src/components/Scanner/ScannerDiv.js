import React, { Component } from "react";
import Results from "./Results";
import Scanner from "./Scanner";
import vinValidator from 'vin-validator';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scanning: false,
      vin: ""
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

    const vin = vinValidator.validate(result) // chequeo que sea un vin valido

    this.props.getVIN(result);
  }
  render() {


    return (
      <div>
        <button onClick={this._scan}>
          {this.state.scanning ? "Stop" : "Start"}
        </button>

        {this.state.scanning ? <Scanner onDetected={(result) => this._onDetected(result)} /> : null}
      </div>
    );
  }
}

