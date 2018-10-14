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
class ReactTables extends Component {
  state = {
    claims: []
  };

  componentDidMount() {
    API.getAllClaims().then(response => {
      const rows = response.data.map(dataValue => {
        let dataRow = [];
        console.log(JSON.stringify(dataValue))
        for (let key in dataValue) {
          dataRow.push(dataValue[key]);
        } // poner en key el id del claim
        return dataRow;
      });
      this.setState({ claims: rows });
    });
  }
  render() {
    return (
      <ReactTable
        data={this.state.claims.map((prop, key) => {
          return {
            id1: key,
            id: prop[0],
            insuranceCompany: prop[1],
            claimNumber: prop[2],
            adjusterName: prop[3],
            adjusterEmail: prop[4],
            estimate: prop[5],
            finalCost: prop[6],
            openClosed: prop[7],
            status: prop[8],
            actions: (
              // we've added some custom button actions
              <div className="actions-right">
                {/* use this button to add a edit kind of action */}
                <Button
                  justIcon
                  round
                  simple
                  onClick={() => API.updateClaim(prop[0])}
                  color="warning"
                  customclass="edit"
                >
                  <Dvr />
                </Button>{" "}
                {/* use this button to remove the data row */}
                <Button
                  justIcon
                  round
                  simple
                  onClick={() => {
                    API.deleteClaim(prop[0])
                  }
                }
                  color="danger"
                  customclass="remove"
                >
                  <Close />
                </Button>{" "}
              </div>
            )
          };
        })}
        filterable
        columns={[
          {
            Header: "Claim No.",
            accessor: "claimNumber"
          },
          {
            Header: "Ins. Co.",
            accessor: "insuranceCompany"
          },
          {
            Header: "Adj. Name",
            accessor: "adjusterName"
          },
          {
            Header: "Adj. Email",
            accessor: "adjusterEmail"
          },
          {
            Header: "Estimate",
            accessor: "estimate"
          },
          {
            Header: "Final Cost",
            accessor: "finalCost"
          },
          {
            Header: "Status",
            accessor: "status"
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

export default ReactTables;
