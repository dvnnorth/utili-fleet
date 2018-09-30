import React from 'react';
import Scaner from './Scanner';
import Result from './Results';

export default class ScannerDiv extends React.Component {
    getInitialState() {
        return {
            scanning: false,
            results: []
        }
    }
    render() {
        return (
            <div>
                <button onClick={this._scan}>{this.state.scanning ? 'Stop' : 'Start'}</button>
                <ul className="results">
                    {this.state.results.map((result) => (<Result key={result.codeResult.code} result={result} />))}
                </ul>
                {this.state.scanning ? <Scaner onDetected={this._onDetected}/> : null}
            </div>
        );
    }

    _scan() {
        this.setState({scanning: !this.state.scanning});
    }


    _onDetected(result) {
        this.setState({results: this.state.results.concat([result])});
    }
};