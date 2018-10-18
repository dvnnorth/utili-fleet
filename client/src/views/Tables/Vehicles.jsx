import React, { Component } from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";

// @material-ui/icons
import Dvr from "@material-ui/icons/Dvr";
// import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";

// core components
import Button from "components/CustomButtons/Button.jsx";
import API from "../../utils/API";

// import { dataTable } from "variables/general.jsx";
class Vehicles extends Component {
  state = {
    vehicles: []
  };

  componentDidMount() {
    API.getAllVehicles().then(response => {
      let rows = response.data.map(dataValue => {
        let dataRow = [];
        for (let key in dataValue) {
          dataRow.push(dataValue[key]);
        }
        return dataRow;
      });

      rows = rows.map((prop, key) => {
        return {
          id1: key,
          id: prop[0],
          unitNumber: prop[1],
          VIN: prop[2],
          modelYear: prop[3],
          make: prop[4],
          model: prop[5],
          // series: prop[6],
          vehicleType: prop[7],
          bodyClass: prop[8],
          exteriorColor: prop[9],
          // interiorColor: prop[10],
          LicensePlate: prop[11],
          mileage: prop[12],
          // maxMileage: prop[9],
          // MaxMileage: prop[10],
          // NetCost: prop[13],
          // DepretiationStart: prop[14],
          // DepretiationEnd: prop[15],
          // DepretiationRateYearly: prop[16],
          // TollTagSerial: prop[17],
          actions: (
            // we've added some custom button actions
            <div className="actions-right">
              { /* use this button to add a like kind of action */}
              { /* use this button to add a edit kind of action */}
              <Button
                justIcon
                round
                simple
                onClick={() => alert("You've pressed the edit button on colmun id: " + key)}
                color="warning"
                customClass="edit">
                <Dvr />
              </Button>{" "}
              { /* use this button to remove the data row */}
              <Button
                justIcon
                round
                simple
                onClick={() => {
                  API.deleteVehicles(prop[0])
                }}
                color="danger"
                customClass="remove">
                <Close />
              </Button>{" "}
            </div>
          )
        };
      });

      this.setState({ vehicles: rows });
    });
  }

  render() {
    return (
      <ReactTable
        data={this.state.vehicles}
        filterable
        columns={[
          {
            Header: "Unit #",
            accessor: "unitNumber",
          },
          {
            Header: "VIN",
            accessor: "VIN"
          },
          {
            Header: "Year",
            accessor: "modelYear"
          },
          {
            Header: "Make",
            accessor: "make",
          },
          {
            Header: "Model",
            accessor: "model",
          },
          {
            Header: "Series",
            accessor: "series"
          },
          {
            Header: "VehicleType",
            accessor: "vehicleType"
          },
          {
            Header: "BodyClass",
            accessor: "bodyClass"
          },
          {
            Header: "ExtColor",
            accessor: "exteriorColor"
          },
          {
            Header: "IntColor",
            accessor: "interiorColor"
          },
          {
            Header: "LicensePlate",
            accessor: "licensePlate"
          },
          {
            Header: "Mileage",
            accessor: "mileage"
          },
          {
            Header: "MaxMileage",
            accessor: "maxMileage"
          },
          {
            Header: "NetCost",
            accessor: "netCost"
          },
          {
            Header: "DepretiationStart",
            accessor: "depretiationStart"
          },
          {
            Header: "DepretiationEnd",
            accessor: "depretiationEnd"
          },
          {
            Header: "DepretiationRateYearly",
            accessor: "depretiationRateYearly"
          },
          {
            Header: "TollTagSerial",
            accessor: "tollTagSerial"
          },
          {
            Header: "Actions",
            accessor: "actions",
            sortable: false,
            filterable: false,
          }
        ]}
        defaultPageSize={10}
        showPaginationTop
        showPaginationBottom={false}
        className="-striped -highlight"
      />
    );
  }
}
export default Vehicles;