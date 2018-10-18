import React from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";

// @material-ui/icons
import Dvr from "@material-ui/icons/Dvr";
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";

// core components
import Button from "components/CustomButtons/Button.jsx";

import { dataTable } from "variables/general.jsx";

import API from "./utils/API";

function ReactTables({...props}){
  return(
    <ReactTable
      data={
        dataTable.dataRows.map((prop,key) => {
          return ({
            id: key,
            InsuranceCompany: prop[0],
            ClaimNumber: prop[1],
            AdjusterName: prop[2],
            AdjusterEmail: prop[3],
            Estimate: prop[4],
            FinalCost: prop[5],
            OpenClosed: prop[6],
            Status: prop[7]
            actions: (
              // we've added some custom button actions
              <div className="actions-right">
                { /* use this button to add a like kind of action */ }
                <Favorite />
                </Button>{" "}
                { /* use this button to add a edit kind of action */ }
                <Button
                  justIcon
                  round
                  simple
                  onClick={() => alert("You've pressed the edit button on colmun id: "+key)}
                  color="warning"
                  customClass="edit">
                  <Dvr />
                </Button>{" "}
                { /* use this button to remove the data row */ }
                <Button
                  justIcon
                  round
                  simple
                  onClick={() => alert("You've pressed the delete button on colmun id: "+key)}
                  color="danger"
                  customClass="remove">
                  <Close />
                </Button>{" "}
              </div>
            )
          })
        })
      }
      filterable
      columns={[
        {
          Header: "Insurance Company",
          accessor: "InsuranceCompany",
        },
        {
          Header: "Claim Number",
          accessor: "ClaimNumber"
        },
        {
          Header: "Adjuster Name",
          accessor: "AdjusterName"
        },
        {
          Header: "Estimate",
          accessor: "Estimate"
        },
        {
          Header: "Final Cost",
          accessor: "FinalCost",
          sortable: false,
          filterable: false,
        },
        {
          Header: "Status",
          accessor: "Status"
        }
      ]}
      defaultPageSize={10}
      showPaginationTop
      showPaginationBottom={false}
      className="-striped -highlight"
    />
  );
}
export default ReactTables;

