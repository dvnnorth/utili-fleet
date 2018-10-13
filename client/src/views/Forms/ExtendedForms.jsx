import React, {Component} from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";

// @material-ui/icons
import Dvr from "@material-ui/icons/Dvr";
// import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";

// core components
import Button from "components/CustomButtons/Button.jsx";

import API from "../../utils/API"

// import { dataTable } from "variables/general.jsx";
class ReactTables extends Component {
  state={
    claims: []
  }

  componentDidMount() {
    console.log("mounting");
   API.getAllClaims().then(response => {
    console.log(JSON.stringify(response.data));
    const rows = response.data.map(dataValue => {
      let dataRow = [];
        for (let key in dataValue) {
          dataRow.push(dataValue[key]);
        }
      return dataRow;
      });
      // console.log(JSON.stringify(rows));
    this.setState({ claims: rows });
  })
}
  render() {
    return (
      <ReactTable
      data={ this.state.claims
        // this.state.claims.map((prop, key) => {
        //   return ({
        //     id: key,
        //     insuranceCompany: prop[0],
        //     claimNumber: prop[1],
        //     adjusterName: prop[2],
        //     adjusterEmail: prop[3],
        //     estimate: prop[4],
        //     finalCost: prop[5],
        //     openClosed: prop[6],
        //     status: prop[7],
        //     actions: (
        //       // we've added some custom button actions
        //       <div className="actions-right">

        //         { /* use this button to add a edit kind of action */}
        //         <Button
        //           justIcon
        //           round
        //           simple
        //           onClick={() => console.log(prop)}
        //           color="warning"
        //           customclass="edit">
        //           <Dvr />
        //         </Button>{" "}
        //         { /* use this button to remove the data row */}
        //         <Button
        //           justIcon
        //           round
        //           simple
        //           // onClick={() => API.deleteClaim(key)}
        //           color="danger"
        //           customclass="remove">
        //           <Close />
        //         </Button>{" "}
        //       </div>
        //     )
        //   })
        
        // })
      }

      filterable
      columns={[
        {
          Header: "Insurance",
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
          Header: "Adjuster Email",
          accessor: "AdjusterEmail"
        },
        {
          Header: "Estimate",
          accessor: "Estimate"
        },
        {
          Header: "Final Cost",
          accessor: "FinalCost"
        },
        {
          Header: "Status",
          accessor: "Status",
          // sortable: false,
          // filterable: false,
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
    )
  }
}


export default ReactTables;
