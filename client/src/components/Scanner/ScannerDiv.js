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
      // results: []
      // orderedResult: []
    };
    this._scan = this._scan.bind(this);
    this._onDetected = this._onDetected.bind(this);
    this._onProcessed = this._onProcessed.bind(this);
  }

  validateVin = (vin) => {
    var isValidVin = vinValidator.validate(vin);
    return isValidVin;
  }


  // more_frec = (array) => {
  //     var counts = {};
  //     array.forEach(element => {
  //         if (!counts[element]) {
  //             counts[element] = 0;
  //         }
  //         counts[element]++;
  //     });

  //     return Object.keys(counts).sort(function (curKey, nextKey) {
  //         return counts[curKey] < counts[nextKey]
  //     });
  // }

  _scan() {
    this.setState({ scanning: !this.state.scanning });
  }

  _onProcessed(result) {
    return;
  }

  _onDetected(result) {
    // const results = [...this.state.orderedResult, result.codeResult.code];
    // if (this.state.results.length > 10) {
    //     const eltipo = this.more_frec(results);
    //     console.log(eltipo);
    //     console.log('ahi viene el tipo: ')
    //     console.log(eltipo[0]);
    //     return;
    // }
    // this.setState({ results: this.state.results.concat([result]), orderedResult: result.codeResult.code });   
    console.log(result);
    const vin = this.validateVin(result) // chequeo que sea un vin valido
    console.log("resultado de la llamada a la funcion para verificar el vin :" + vin)
    // while (vin) {    //mientras no sea un vin valido seguir escaneando
    //     // this._scan();
    // }
    // this.setState({ vin: result }); // cuando encuentre el vin correcto actualizar el estado del componente
    //stop quagga      


    // var last_code = result.codeResult.code;

    // this.codeResult.push(last_code);
    // if (this.codeResult.length > 20) {
    //     const code = this.more_frec(this.codeResult)[0];
    //     console.log(code);
    // }
  }
  render() {
    // if (this.state.results.length > 0) {
    //     console.log(this.state.results);
    // }

    return (
      <div>
        <button onClick={this._scan}>
          {this.state.scanning ? "Stop" : "Start"}
        </button>

        <form>
          <div className="form-group">
            <label htmlFor="vin" >Vin::</label>
            <input
              value={this.state.vin}
              name="vin"
              type="text"
              className="form-control"
              placeholder="Here will appears the code"
              id="vin"
            />
          </div>
        </form>
        {/* comentar desde aqui */}
        {/* <ul className="results">
                    {this.state.results.map(result => {
                        return (<Results key={result.codeResult.angle} result={result} />);

                    })}

                </ul> */}

        {/* hasta aqui */}
        {this.state.scanning ? <Scanner onDetected={this._onDetected('result')} /> : null}
      </div>
    );
  }
}


//JHLRD77874C026456