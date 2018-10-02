import React, { Component } from "react";

export default class Results extends Component {
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
