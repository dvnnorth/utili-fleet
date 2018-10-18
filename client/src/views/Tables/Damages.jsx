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
class Damages extends Component {
  state = {
    damages: []
  };

  componentDidMount() {
    API.getAllDamages().then(response => {
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
          section: prop[1],
          description: prop[2],
          claimId: prop[5],
          vehicleId: prop[6],
          actions: (
            // we've added some custom button actions
            <div className="actions-right">
              {/* use this button to remove the data row */}
              <Button
                justIcon
                round
                simple
                onClick={() =>
                  API.deleteDamage(prop[0]).then(() => {
                    let data = this.state.damages;
                    data.find((o, i) => {
                      if (o.id === key) {
                        // here you should add some custom code so you can delete the data
                        // from this component and from your server as well
                        data.splice(i, 1);
                        return true;
                      }
                      return false;
                    });
                    this.setState({ damages: data });
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

      this.setState({ damages: rows });
    });
  }
  render() {
    return (
      <ReactTable
        data={this.state.damages}
        filterable
        columns={[
          {
            Header: "Section",
            accessor: "section"
          },
          {
            Header: "Description",
            accessor: "description"
          },
          {
            Header: "Claim Id",
            accessor: "claimId"
          },
          {
            Header: "Vehicle Id",
            accessor: "vehicleId"
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

export default Damages;
