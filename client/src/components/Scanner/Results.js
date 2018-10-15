import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class Result extends Component {
  propTypes = {
    result: PropTypes.object
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
    )
  }
};