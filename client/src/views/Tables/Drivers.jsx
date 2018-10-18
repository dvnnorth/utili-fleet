import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
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
    drivers: [],
    redirect: false
  };

  componentDidMount() {
    API.getAllDrivers().then(response => {
      let rows = response.data.map(dataValue => {
        let dataRow = [];
        for (let key in dataValue) {
          dataRow.push(dataValue[key]);
        }
        return dataRow;
      });

      rows = rows.map((prop, key) => {
        return {
          id: key,
          dbID: prop[0],
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
              {/* use this button to add a like kind of action */}
              {/* use this button to add a edit kind of action */}
              <Button
                justIcon
                round
                simple
                onClick={() =>
                  alert("You've pressed the edit button on colmun id: " + key)
                }
                color="warning"
                customClass="edit"
              >
                <Dvr />
              </Button>{" "}
              {/* use this button to remove the data row */}
              <Button
                justIcon
                round
                simple
                onClick={() => {
                  API.deleteDrivers(prop[0]).then(() => {
                    let data = this.state.drivers;
                    data.find((o, i) => {
                      if (o.id === key) {
                        // here you should add some custom code so you can delete the data
                        // from this component and from your server as well
                        data.splice(i, 1);
                        return true;
                      }
                      return false;
                    });
                    this.setState({ drivers: data });
                  })
                }}
                color="danger"
                customClass="remove"
              >
                <Close />
              </Button>{" "}
            </div>
          )
        };
      });

      this.setState({ drivers: rows });
    });
  }

  redirectToDriverForm = () => this.setState({ redirect: true });

  render() {
    if (this.state.redirect) {
      return <Redirect to="/forms/driver" />;
    }
    return (
      <React.Fragment>
        <Button color="rose" onClick={this.redirectToDriverForm}>
          Create a Driver...
        </Button>
        <br /> <br />
        <ReactTable
          data={this.state.drivers}
          filterable
          columns={[
            {
              Header: "Last Name",
              accessor: "lastName"
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
              accessor: "address2"
            },
            {
              Header: "City",
              accessor: "city"
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
              filterable: false
            }
          ]}
          defaultPageSize={10}
          showPaginationTop
          showPaginationBottom={false}
          className="-striped -highlight"
        />
      </React.Fragment>
    );
  }
}
export default Drivers;
