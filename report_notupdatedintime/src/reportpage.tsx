import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { Helper } from './helper';
import $ from 'jquery'
import './eProjectNewForm.css';
import Workbook from 'react-excel-workbook'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ENGINE_METHOD_DSA } from 'constants';
declare var _spPageContextInfo, jQuery;
export interface IeProjectState {
  data: any;
  EBU: any;
  EPC: any;
}

var example;

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
      exportToExcel: null,

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
  public componentDidMount() {
    let initialProj = []
    debugger;
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Projectmaster')/Items?$expand=EEECPM,IndustrySubtype,FSOLe,FSOPm,IndustrySubtype,WorldArea,Country,EEECLe&$select=EEECProjID,ID,UpdateFrequency,Emerson_x0020_Business_x0020_Uni, IndustrySubtype/Industry_x0020_Subtype,TypeOfIndustry,Country/Country,ClarityID,ProjectID,WorldArea/Title,IndustrySubtype/Industry_x0020_Subtype,WorldArea/World_x0020_Area,ProjectStartPeriod,End_x0020_User,End_x0020_Destination,EPC,BudgetDeviation,ProjectStartPeriod,ISDelivered,ETC,Created,Actuals,ProjectName,AgreedBudget,ActualEnd,ProjectType,DeltaVVersion,UpdateFrequency,Modified,ETC,Progress,Status,ProjectStartPeriod,ActualEnd,AgreedEndDate,Status,EPC,End_x0020_User,End_x0020_Destination,DeltaVVersion,ProjectType,TypeOfIndustry,BudgetDeviation,ProgressDeviation,ScheduleChange,BudgetChange,ProjectPlatform,EEECPM/Title,EEECLe/Title,FSOLe/Title,FSOPm/Title,NoOfControllers,NoOfSLS,NodesOnDelta,CabinetJBS,ILD,PR,Dynamos,Displays,PhaseClasses,OP,UP,ComplexClasses,EQMClasses,EQM,SIS,Modules,ModuleClasses,HWIO,SWIO,FWIO,ProjectStartDate,ProjectStartPeriod,ProjectEndDate,AgreedEndDate,ActualEndDate,ProjectName,ProjectPlatform,AgreedBudget,InternalBudget,Actuals,ETC,ExpectedHours,ActualEnd,ISForecasted,SSIO,ComplexLoops,RP&$top=4500`;
    //const rest_Url = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Projectmaster')/Items?$expand=EEECPM,EEECLe&$select=EEECProjID,ID,ISDelivered,Created,Actuals,ProjectName,AgreedBudget,ETC,Progress,Status,ProjectStartPeriod,AgreedEndDate,ProjectPlatform,EEECPM/Title,EEECLe/Title&$filter=ISDelete ne 'Yes' &$top=4500`;

    var temparray = [];

    var jsonArray;
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          initialProj = response.d.results;
          for (let i in response.d.results) {
            var jsonData = {};
            var lastupdateddate;
            var datediff = 0
            var updatefreq = 0;
            if (response.d.results[i].UpdateFrequency != null || response.d.results[i].UpdateFrequency != undefined) {
              var lastupdateddatestring = response.d.results[i].Modified
              lastupdateddate = new Date(lastupdateddatestring)
              var today = new Date();
              var diff = new Date().getTime() - lastupdateddate.getTime();
              console.log(diff)

              var dateddiff = diff / (1000 * 3600 * 24)
              console.log(datediff)
              updatefreq = parseInt(response.d.results[i].UpdateFrequency)
            }
            if (response.d.results[i].UpdateFrequency == null || dateddiff > updatefreq) {

              jsonData["ClarityID"] = response.d.results[i].ClarityID
              jsonData["EEECProjectID"] = response.d.results[i].EEECProjID;
              jsonData["ProjPlatform"] = response.d.results[i].ProjectPlatform;
              jsonData["Update"] = response.d.results[i].UpdateFrequency;
              jsonData["Forecast"] = response.d.results[i].ISForecasted
              var Enddatestring;

              Enddatestring = (response.d.results[i].AgreedEndDate)
              if (Enddatestring) {
                Enddatestring = Enddatestring.slice(0, 10)
              }
              jsonData["AgreedEndDate"] = Enddatestring

              var StartDateString = response.d.results[i].ProjectStartDate
              if (StartDateString) {
                StartDateString = StartDateString.slice(0, 10)
              }

              jsonData["ProjectStartDate"] = StartDateString



              var ActualEndDateString

              ActualEndDateString = (response.d.results[i].ActualEndDate)
              if (ActualEndDateString) {
                ActualEndDateString = ActualEndDateString.slice(0, 10)
              }
              jsonData["ActualEndDate"] = ActualEndDateString

              var ProjectEndDateString

              ProjectEndDateString = (response.d.results[i].ProjectEndDate)
              if (ProjectEndDateString) {
                ProjectEndDateString = ProjectEndDateString.slice(0, 10)
              }
              jsonData["ProjectEndDate"] = ProjectEndDateString



              jsonData["ProjectName"] = response.d.results[i].ProjectName;
              jsonData["EEECPM"] = response.d.results[i].EEECPM.Title;
              jsonData["EEECLe"] = response.d.results[i].EEECLe.Title;
              jsonData["ID"] = response.d.results[i].ID

              jsonData["ProjectName"] = response.d.results[i].ProjectName;

              jsonData["ETC"] = response.d.results[i].ETC;
              jsonData["Progress"] = response.d.results[i].Progress;
              jsonData["Country"] = response.d.results[i].Country.Country;
              jsonData["UpdateFrequency"] = response.d.results[i].UpdateFrequency;


              if (response.d.results[i].ISDelivered == 'Yes')
                jsonData["Status"] = "Delivered";
              else
                jsonData["Status"] = response.d.results[i].Status;

              jsonData["ProjectStartPeriod"] = response.d.results[i].ProjectStartPeriod;

              jsonData["Actuals"] = response.d.results[i].Actuals;
              jsonData["ETC"] = response.d.results[i].ETC;
              jsonData["Status"] = response.d.results[i].Status;
              jsonData["AgreedBudget"] = response.d.results[i].AgreedBudget;
              jsonData["Forecast"] = response.d.results[i].ISForecasted;
              jsonData["Modified"] = response.d.results[i].Modified.slice(0, 10)
              temparray.push(jsonData);
              this.setState({
                exportToExcel: temparray

              })
              example = (
                <div className="row text-center" style={{ marginTop: '100px' }}>
                  <Workbook filename="NotUpdatedRecords.xlsx" element={<button className="btn btn-success">Export To Excel</button>}>
                    <Workbook.Sheet data={this.state.exportToExcel} name="Sheet A" >

                      <Workbook.Column label="ClarityID" value="ClarityID" />
                      <Workbook.Column label="Project Name" value="ProjectName" />
                      <Workbook.Column label="Type Of Project" value="ProjPlatform" />
                      <Workbook.Column label="EEECPM" value="EEECPM" />
                      <Workbook.Column label="EEECProjectID Name" value="EEECProjectID" />
                      <Workbook.Column label="Forecasted" value="Forecast" />
                      <Workbook.Column label="Country" value="Country" />
                      <Workbook.Column label="EEECPM" value="EEECPM" />
                      <Workbook.Column label="Project Start Date" value="ProjectStartDate" />
                      <Workbook.Column label="Project Start Period" value="ProjectStartPeriod" />
                      <Workbook.Column label="Requested End Date" value="ProjectEndDate" />
                      <Workbook.Column label="Agreed End Date" value="AgreedEndDate" />
                      <Workbook.Column label="Actual End Date" value="ActualEndDate" />
                      <Workbook.Column label="Status" value="Status" />
                      <Workbook.Column label="Agreed Budget" value="AgreedBudget" />
                      <Workbook.Column label=" Actuals" value="Actuals" />
                      <Workbook.Column label="ETC" value="ETC" />
                      <Workbook.Column label="Progress" value="Progress" />
                      <Workbook.Column label="Update Frequency" value="Update" />
                      <Workbook.Column label="Last Updated" value="Modified" />


                    </Workbook.Sheet>

                  </Workbook>
                </div>
              )

            }

          }

          var arr = Object.values(JSON.stringify(jsonData));

          this.setState({
            data: temparray,
            columns: [
              {
                Header: () => <div>Clarity<br />Project ID</div>,
                accessor: 'ClarityID',
                filterable: false,

              },
              {
                Header: 'Project Name',
                accessor: 'ProjectName',
                filterable: false,

              },


              {
                Header: () => <div>Type Of<br />Project</div>,
                accessor: 'ProjPlatform',
                filterable: false,

              },
              {
                Header: 'EEECPM',
                accessor: 'EEECPM',
                filterable: false,

              },
              {
                Header: 'EEECProjectID',
                accessor: 'EEECProjectID',
                filterable: false,

              },
              {
                Header: 'Forecasted',
                accessor: 'Forecast',
                filterable: false,


              },
              {
                Header: () => <div>Project<br />Start Date</div>,
                accessor: 'ProjectStartDate',
                filterable: false,

              },
              {
                Header: () => <div>Requested<br />End Date</div>,
                accessor: 'ProjectEndDate',
                filterable: false,

              },
              {
                Header: () => <div>Actual<br />End Date</div>,
                accessor: 'ActualEndDate',
                filterable: false,

              },
              {
                Header: () => <div>Agreed<br />End Date</div>,
                accessor: 'AgreedEndDate',
                filterable: false,
              },
              {
                Header: 'Status',
                accessor: 'Status',
                filterable: false,

              },
              {
                Header: () => <div>Agreed<br />Budget</div>,
                accessor: 'AgreedBudget',
                filterable: false,

              },
              {
                Header: 'Actuals',
                accessor: 'Actuals',
                filterable: false,

              },

              {
                Header: 'Last Updated',
                accessor: 'Modified',
                filterable: false,
              },
              {
                Header: 'ID',
                accessor: 'ID',
                show: false,
              },
              {
                Header: () => <div>Update<br />Frequency</div>,
                accessor: 'Update',
                filterable: false,

              },
            ]
          });
        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });
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
        >
          {(state, makeTable, instance) => {
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
                <div >
                  <div  >
                    <span className="ReportHeader"> <b>Report Name :</b>  </span> <b className="subsection">Projects not updated in given number of days </b>  &nbsp; &nbsp; &nbsp; <span className="ReportHeader"> <b> Total Count</b> </span> <b className="subsection">{recordsInfoText}</b> <span> {example}</span>



                  </div>
                </div>

                {makeTable()}
              </div>
            );
          }}
        </ReactTable>

      </div>
    )

  }





}

export default App;