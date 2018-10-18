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


class Employees extends Component {
  state = {
    employees: []
  };

  componentDidMount() {
    API.getAllEmployees().then(response => {
      let rows = response.data.map(dataValue => {
        let dataRow = [];
        for (let key in dataValue) {
          dataRow.push(dataValue[key]);
        } // poner en key el id del claim
        return dataRow;
      });


      rows = rows.map((prop, key) => {
        return {
          id: key,
          dbID: prop[0],
          employeeNumber: prop[1],
          jobTitle: prop[2],
          mVRCheckDate: prop[3],
          canDrive: prop[4],
          actions: (
            // we've added some custom button actions
            <div className="actions-right">
              {/* use this button to remove the data row */}
              <Button
                justIcon
                round
                simple
                onClick={() =>
                  API.deleteEmployees(prop[0]).then(() => {
                    let data = this.state.employees;
                    data.find((o, i) => {
                      if (o.id === key) {
                        // here you should add some custom code so you can delete the data
                        // from this component and from your server as well
                        data.splice(i, 1);
                        return true;
                      }
                      return false;
                    });
                      this.setState({ employees: data });
                  })
                }
                color="danger"
                customclass="remove"
              >
                <Close />
              </Button>{" "}
            </div>
          )
        };
      })

      this.setState({ employees: rows });
    });
  }
  render() {
    return (
      <ReactTable
        data={this.state.employees}
        filterable
        columns={[
          {
            Header: "Employee No.",
            accessor: "employeeNumber"
          },
          {
            Header: "Job Title",
            accessor: "jobTitle"
          },
          {
            Header: "MVR Check Date",
            accessor: "mVRCheckDate"
          },
          {
            Header: "Can Drive",
            accessor: "canDrive"
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
    );
  }
}

export default Employees;