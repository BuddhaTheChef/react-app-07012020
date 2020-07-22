import React, { Component } from "react";
import { DetailsList} from "@fluentui/react";

import dtsaccounts from "../../dtsaccounts.json";
import Footer from "../Footer/Footer";

const Columns = [
  {
    key: 1,
    name: "ID",
    fieldName: "name",
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: 2,
    name: "Account Name",
    fieldName: "name",
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: 3,
    name: "Account Owner",
    fieldName: "value",
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "column4",
    name: "Primary Transfer Scenario",
    fieldName: "value",
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "column5",
    name: "Amount Billed Last Month",
    fieldName: "value",
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "column6",
    name: "Shares Information",
    fieldName: "value",
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
  },
];



export default class About extends Component {
    constructor(props) {
        super(props);

        this.dtsaccounts = [];
        for (let i = 0; i < dtsaccounts.length -1; i++) {
          this.dtsaccounts.push({
            key: dtsaccounts.id,
            name: 'Item ' + dtsaccounts.name,
            value: i,
          });
        }

        this.state = {
            items: this.dtsaccounts,
          };
      }
  render() {
    const { items } = this.state;

    return (
      <div>
        <h1 className="main-header">About</h1>
        
        <DetailsList compact columns={Columns} items={items} />
        <Footer/>
      </div>
    );
  }
}
