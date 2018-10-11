import React, { Component } from "react";
import "./Scanner.css";
import Quagga from "quagga";

export default class Scanner extends Component {
  constructor(props) {
    super(props);
    this._onDetected = this._onDetected.bind(this);
    this._onProcessed = this._onProcessed.bind(this);
  }

  componentDidMount() {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          constraints: {
            width: 640,
            height: 480,
            facingMode: "environment" // or user
          }
        },
        singleChannel: false,
        area: {
          top: "0%",
          right: "0%",
          left: "0%",
          bottom: "0%"
        },
        locator: {
          patchSize: "medium",
          halfSample: true
        },
        numOfWorkers: 8,
        decoder: {
          readers:
            // "code_39_vin_reader",
            "upc_reader",
          debug: {
            drawBoundingBox: false,
            showFrequency: false,
            drawScanline: false,
            showPattern: false
          },
          multiple: false
        },
        locate: true
      },
      function(err) {
        if (err) {
          return console.log(err);
        }
        Quagga.start();
      }
    );

    Quagga.onDetected(this._onDetected);

    Quagga.onProcessed(function(result) {
      var drawingCtx = Quagga.canvas.ctx.overlay,
        drawingCanvas = Quagga.canvas.dom.overlay;

      if (result) {
        if (result.boxes) {
          drawingCtx.clearRect(
            0,
            0,
            parseInt(drawingCanvas.getAttribute("width")),
            parseInt(drawingCanvas.getAttribute("height"))
          );
          result.boxes
            .filter(function(box) {
              return box !== result.box;
            })
            .forEach(function(box) {
              Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
                color: "green",
                lineWidth: 2
              });
            });
        }

        if (result.box) {
          Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
            color: "#00F",
            lineWidth: 2
          });
        }

        if (result.codeResult && result.codeResult.code) {
          Quagga.ImageDebug.drawPath(
            result.line,
            { x: "x", y: "y" },
            drawingCtx,
            { color: "red", lineWidth: 3 }
          );
        }
      }
    });
  }

  componentWillUnmount() {
    Quagga.offDetected(this._onDetected);
  }

  _onDetected(result) {
    this.props.onDetected(result);
  }

  _onProcessed(result) {
    this.props.onProcessed(result);
  }

  render() {
    return <div id="interactive" className="viewport" />;
  }
}
