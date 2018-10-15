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
class Drivers extends Component {
  state = {
    drivers: []
  };

  componentDidMount() {
    API.getAllDrivers().then(response => {

      console.log(response.data);
      const rows = response.data.map(dataValue => {
        let dataRow = [];
        for (let key in dataValue) {
          dataRow.push(dataValue[key]);
        }
        return dataRow;
      });
      this.setState({ drivers: rows });
    });
  }

  render() {
    return (
      <ReactTable
        data={this.state.drivers.map((prop, key) => {
          return {
            id1: key,
            id: prop[0],
            lastName: prop[1],
            firstName: prop[2],
            address1: prop[3],
            address2: prop[4],
            city: prop[5],
            state: prop[6],
            zip: prop[7],
            telephone: prop[8],
            DOB: prop[9],
            driversLicence: prop[10],
            driversLicenseExpiration: prop[11],
            email: prop[12],
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
                    API.deletedrivers(key)
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
            Header: "Last Name",
            accessor: "lastName",
          },
          {
            Header: "Fist Name",
            accessor: "firstName"
          },
          {
            Header: "Address1",
            accessor: "address1"
          },
          {
            Header: "Address2",
            accessor: "address2",
          },
          {
            Header: "City",
            accessor: "city",
          },
          {
            Header: "State",
            accessor: "state"
          },
          {
            Header: "Zip",
            accessor: "telephone"
          },
          {
            Header: "DOB",
            accessor: "DOB"
          },
          {
            Header: "DL",
            accessor: "driversLicence"
          },
          {
            Header: "DL Exp",
            accessor: "driversLicenseExpiration"
          },
          {
            Header: "Email",
            accessor: "email"
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
export default Drivers;