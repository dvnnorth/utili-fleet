import React, { Component } from "react";
import Results from "./Results";
import Scanner from "./Scanner";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scanning: false,
            results: [],
            orderedResult: []
        };
        this._scan = this._scan.bind(this);
        this._onDetected = this._onDetected.bind(this);
    }


    more_frec = (array) => {
        var counts = {};
        array.forEach(element => {
            if (!counts[element]) {
                counts[element] = 0;
            }
            counts[element]++;
        });

        return Object.keys(counts).sort(function (curKey, nextKey) {
            return counts[curKey] < counts[nextKey]
        });
    }

    _scan() {
        this.setState({ scanning: !this.state.scanning });
    }

    _onDetected(result) {
        const results = [...this.state.orderedResult, result.codeResult.code];
        if (this.state.results.length > 10) {
            const eltipo = this.more_frec(results);
            console.log(eltipo);
            console.log('ahi viene el tipo: ')
            console.log(eltipo[0]);
            return;
        }
        this.setState({ results: this.state.results.concat([result]), orderedResult: result.codeResult.code });          
    }
    render() {
        if (this.state.results.length > 0) {
            console.log(this.state.results);
        }

        return (
            <div>
                <button onClick={this._scan}>
                    {this.state.scanning ? "Stop" : "Start"}
                </button>
                <ul className="results">
                    {this.state.results.map(result => {
                        return (<Results key={result.codeResult.angle} result={result} />);

                    })}

                </ul>
                {this.state.scanning ? <Scanner onDetected={this._onDetected} /> : null}
            </div>
        );
    }
}
