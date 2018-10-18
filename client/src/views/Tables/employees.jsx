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
class Employees extends Component {
  state = {
    employees: []
  };

  componentDidMount() {
    API.getAllEmployees().then(response => {

      console.log(response.data);
      const rows = response.data.map(dataValue => {
        let dataRow = [];
        for (let key in dataValue) {
          dataRow.push(dataValue[key]);
        }
        return dataRow;
      });
      this.setState({ employees: rows });
    });
  }

  render() {
    return (
      <ReactTable
        data={this.state.employees.map((prop, key) => {
          return {
            id1: key,
            id: prop[0],
            jobTitle: prop[1],
            MVRCheckDate: prop[2],
            canDrive: prop[3],
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
                    console.log(key);
                    API.deleteVehicles(key)
                  }}
                  color="danger"
                  customClass="remove">
                  <Close />
                </Button>{" "}
              </div>
            )
          };
        })
        }
        filterable
        columns={[
          {
            Header: "Employee Number",
            accessor: "unitNumber",
          },
          {
            Header: "Title",
            accessor: "jobTitle"
          },
          {
            Header: "MVR Check Date",
            accessor: "MVRCheckDate"
          },
          {
            Header: "Driver",
            accessor: "canDrive",
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
export default Employees;