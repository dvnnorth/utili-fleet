import React from 'react';

export default class Results extends React.Component {

    constructor(props) {
        super(props);
        // propTypes: {
        //     onDetected: PropTypes.string.isRequired
        // }
    }
    render() {
        const result = this.props.result;

        if (!result) {
            return null;
        }
        return (
            <li>
            {result.codeResult.code} [{result.codeResult.format}]
            </li>
        );
    }
}