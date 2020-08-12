import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { Helper } from './helper';
import $ from 'jquery'
import './eProjectNewForm.css';
import { ENGINE_METHOD_DSA } from 'constants';
import { loadOptions } from '@babel/core';
declare var _spPageContextInfo, jQuery;
export interface IeProjectState {
  data: any;
  EBU: any;
  EPC: any;
}



class App extends React.Component<{}, any> {

  constructor(props: IeProjectState) {

    super(props);
    this.softDelete = this.softDelete.bind(this)
    this.state = {
      projectDetails: [],
      filtered: [],
      data: [],
      EditID: 0,
      columns: [],
      showAll: "false"

    }

  }




  onFilteredChangeCustom = (value, accessor) => {
    let filtered = this.state.filtered;
    let insertNewFilter = 1;

    if (filtered.length) {
      filtered.forEach((filter, i) => {
        if (filter["id"] === accessor) {
          if (value === "" || !value.length) filtered.splice(i, 1);
          else filter["value"] = value;

          insertNewFilter = 0;
        }
      });
    }

    if (insertNewFilter) {
      filtered.push({ id: accessor, value: value });
    }

    this.setState({ filtered: filtered });
  };

  //   public filterCaseInsensitive(filter, row) {
  //     const id = filter.pivotId || filter.id;
  //     return (
  //         row[id] !== undefined?
  //             String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase())
  //         :
  //             true
  //     );
  // }
  filterCaseInsensitive = (filter, row) => {
    const id = filter.pivotId || filter.id;
    const content = row[id];
    if (typeof content !== 'undefined') {
      // filter by text in the table or if it's a object, filter by key
      if (typeof content === 'object' && content !== null && content.key) {
        return String(content.key).toLowerCase().includes(filter.value.toLowerCase());
      } else {
        return String(content).toLowerCase().includes(filter.value.toLowerCase());
      }
    }

    return true;
  };

  public softDelete(rowData) {

    console.log(rowData.EEECProjectID)
    let param = rowData.EEECProjectID;
    let ID = rowData.ID
    if (window.confirm('Are you sure you wish to delete this item?')) {
      debugger;
      const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Projectmaster')/Items(` + ID + `)`;
      const headers = {
        "accept": "application/json;odata=verbose",

        "content-Type": "application/json;odata=verbose",
        "IF-MATCH": "*",
        "X-HTTP-Method": "MERGE"
      }
      const listTitle = "Projectmaster";
      const savedata =
      {
        '__metadata': { 'type': 'SP.Data.' + listTitle + 'ListItem' },
        ISDelete: "Yes"
      }
      return new Promise((resolve, reject) => {
        Helper.executeJson(restUrl, "POST", headers, JSON.stringify($.extend(true, {}, savedata)))
          .then((response) => {
            console.log(response);
            alert("Record Deleted Succesfully ")
            window.location.reload();
          }).catch((e) => {
            console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
            reject();
          });

      });


    }
  };
  public getcurrentcsergroup() {
    debugger;
    var url = _spPageContextInfo.webAbsoluteUrl + '/_api/web/currentuser/groups'
    //const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('World%20Area')/Items`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(url, null, null, null)
        .then((response) => {
          var group = response.d.results;
          var arr;
          for (let i in response.d.results) {
            console.log(response.d.results[i].Title)

            if (response.d.results[i].Title == "QualityTeam" || response.d.results[i].Title == "BMRole" || response.d.results[i].Title == "ADD" || response.d.results[i].Title == "DL EEEC IND Associate Director" || response.d.results[i].Title == "DL EEEC IND Directors") {
              this.setState({
                showAll: "true",
              });
            }
          }
          resolve(response);
        }).then(() => {
          this.getuserid();
        })
        .catch((e) => {

          reject();
        });

    });

  }


  public getuserid() {
    debugger;
    var url = _spPageContextInfo.webAbsoluteUrl + '/_api/web/currentuser'
    //const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('World%20Area')/Items`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(url, null, null, null)
        .then((response) => {
          var group = response.d.results;
          console.log(response.d.Id)
          console.log(group)
          this.setState({
            CurrentID: response.d.Id
          }, () => {
            this.showdata()
          })

        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });
  }

  public showdata() {
    let initialProj = []
    debugger;
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Projectmaster')/Items?$expand=EEECPM,EEECLe,FSOPm,FSOLe&$select=EEECProjID,ID,EEECCenter,EEECPM/ID,EEECLe/ID,FSOPm/ID,FSOLe/ID,ISDelivered,Created,Actuals,ProjectName,AgreedBudget,ETC,Progress,Status,ProjectStartPeriod,AgreedEndDate,ProjectPlatform,EEECPM/Title,EEECLe/Title&$filter=ISDelete ne 'Yes' &$top=4500`;
    var temparray = [];

    var jsonArray;
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          initialProj = response.d.results;

          for (let i in response.d.results) {


            var jsonData = {};

            if (this.state.showAll == "true" ||
              (this.state.showAll != "true" && (
                (
                  (this.state.CurrentID == response.d.results[i].EEECPM.ID) || (this.state.CurrentID == response.d.results[i].EEECLe.ID) || (this.state.CurrentID == response.d.results[i].FSOPm.ID) || (this.state.CurrentID == response.d.results[i].FSOLe.ID))))
            ) {



              jsonData["EEECPM"] = response.d.results[i].EEECPM.Title;
              jsonData["EEECLe"] = response.d.results[i].EEECLe.Title;
              jsonData["ID"] = response.d.results[i].ID
              jsonData["EEECProjectID"] = response.d.results[i].EEECProjID;
              jsonData["ProjectName"] = response.d.results[i].ProjectName;
              jsonData["ProjPlatform"] = response.d.results[i].ProjectPlatform;
              jsonData["ETC"] = response.d.results[i].ETC;
              jsonData["Progress"] = response.d.results[i].Progress;

              jsonData["Status"] = response.d.results[i].Status;

              jsonData["ProjectStartPeriod"] = response.d.results[i].ProjectStartPeriod;
              var finaldate = ""

              var datestring = String(response.d.results[i].AgreedEndDate)
              if (datestring === null || (response.d.results[i].AgreedEndDate === null)) {
                finaldate = ""
              } else {
                var newdate = new Date(datestring)
                newdate.setDate(newdate.getDate() + 1)

                finaldate = newdate.toISOString().substring(0, 10);
              }
              jsonData["AgreedEndDate"] = finaldate
              jsonData["Actuals"] = response.d.results[i].Actuals;
              jsonData["AgreedBudget"] = response.d.results[i].AgreedBudget;
              jsonData["Created"] = response.d.results[i].Created
              jsonData["EEEC"] = response.d.results[i].EEECCenter
              temparray.push(jsonData);

            }
          }
          var arr = Object.values(JSON.stringify(jsonData));

          this.setState({
            data: temparray,
            columns: [{
              Header: 'Edit',
              Cell: props => <a href="#"><img src="/sites/process-dev2/EEEC/EProjectControl/SiteAssets/Edit.png"></img></a>,
              filterable: false,
              width: 50
            },

            {
              Header: 'EEEC Center',
              accessor: 'EEEC',
              width: 100
            },
            {
              Header: 'EEECProjectID',
              accessor: 'EEECProjectID',
              width: 102
            },
            {
              Header: () => <div>Project<br />Name</div>,
              accessor: 'ProjectName',
              width: 136
            },
            {
              Header: () => <div>Project<br />Platform</div>,
              accessor: 'ProjPlatform',
              filterable: false,
              width: 110
            },
            {
              Header: 'EEECPM',
              accessor: 'EEECPM',
              width: 115
            },
            {
              Header: 'ID',
              accessor: 'ID',
              show: false,
            },
            {
              Header: 'EEECLe',
              accessor: 'EEECLe',
              width: 115,
            },


            {
              Header: 'Status',
              accessor: 'Status',
              filterable: true,
              width: 75
            },
            {
              Header: 'Progress',
              accessor: 'Progress',
              filterable: false,
              width: 65
            },

            {
              Header: () => <div>Start<br />Period</div>,
              accessor: 'ProjectStartPeriod',
              filterable: false,
            },
            {
              Header: "Created",
              accessor: "Created",
              show: false
            },
            {
              Header: () => <div>Agreed<br />End Date</div>,
              accessor: 'AgreedEndDate',
              filterable: false,
              width: 95
            },
            {
              Header: () => <div>Agreed<br />Budget</div>,
              accessor: 'AgreedBudget',
              filterable: false,
              width: 95
            },
            {
              Header: 'Actuals',
              accessor: 'Actuals',
              filterable: false,
              width: 85
            }]
          });
        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });
  }
  public componentDidMount() {
    this.getcurrentcsergroup();






  }

  render() {
    let data = [{

    }]





    return (
      <div>
        <ReactTable
          data={this.state.data}
          columns={this.state.columns}

          defaultSorted={[
            {
              id: "Created",
              desc: true
            }
          ]}
          filterable

          filtered={this.state.filtered}
          onFilteredChange={(filtered, column, value) => {
            this.onFilteredChangeCustom(value, column.id || column.accessor);
          }}
          defaultFilterMethod={(filter, row) => this.filterCaseInsensitive(filter, row)}
          defaultPageSize={15}
          pageSizeOptions={[15, 30, 45]}
          getTdProps={(state, rowInfo, column, instance) => {
            return {
              onClick: (e, handleOriginal) => {
                console.log("A Td Element was clicked!");
                console.log("Row Index:", rowInfo.index);
                console.log(column.Header)
                let rowData = rowInfo.original
                if (column.Header == "Delete") {
                  this.softDelete(rowData);
                }
                if (column.Header == "Edit") {
                  var link = "/sites/process-dev2/EEEC/EProjectControl/SiteAssets/CustomEditForm.aspx?id=" + rowData.EEECProjectID
                  window.location.href = link
                }



                // IMPORTANT! React-Table uses onClick internally to trigger
                // events like expanding SubComponents and pivots.
                // By default a custom 'onClick' handler will override this functionality.
                // If you want to fire the original onClick handler, call the
                // 'handleOriginal' function.
                if (handleOriginal) {
                  handleOriginal();
                }
              }
            }
          }}
        >{(state, makeTable, instance) => {
          let recordsInfoText = "";

          const { filtered, pageRows, pageSize, sortedData, page } = state;

          if (sortedData && sortedData.length > 0) {
            let isFiltered = filtered.length > 0;

            let totalRecords = sortedData.length;

            let recordsCountFrom = page * pageSize + 1;

            let recordsCountTo = recordsCountFrom + pageRows.length - 1;
            let rectext = totalRecords

            recordsInfoText = `${totalRecords}`;


          }

          return (
            <div className="main-grid">
              <div>
                <div>
                  <span className="ReportHeader"> <b> Total Records</b> </span> <b className="subsection">{recordsInfoText}</b><br></br>
                  <span className="shortnote"><b>(Please click on Column header to sort records)</b></span>
                </div>
              </div>

              {makeTable()}
            </div>
          );
        }}


        </ReactTable>
      </div >
    )

  }





}

export default App;