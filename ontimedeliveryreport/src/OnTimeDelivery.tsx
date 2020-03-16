import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Helper } from "./helper";
import $ from "jquery";
import "./eProjectNewForm.css";
import Workbook from 'react-excel-workbook'
import { ENGINE_METHOD_DSA } from "constants";
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
    this.softDelete = this.softDelete.bind(this);
    this.state = {
      projectDetails: [],
      filtered: [],
      data: [],
      EditID: 0,
      columns: []
    };
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
    if (typeof content !== "undefined") {
      // filter by text in the table or if it's a object, filter by key
      if (typeof content === "object" && content !== null && content.key) {
        return String(content.key)
          .toLowerCase()
          .includes(filter.value.toLowerCase());
      } else {
        return String(content)
          .toLowerCase()
          .includes(filter.value.toLowerCase());
      }
    }

    return true;
  };

  public softDelete(rowData) {
    console.log(rowData.EEECProjectID);
    let param = rowData.EEECProjectID;
    let ID = rowData.ID;
    if (window.confirm("Are you sure you wish to delete this item?")) {
      debugger;
      const restUrl =
        _spPageContextInfo.webAbsoluteUrl +
        `/_api/web/lists/getbyTitle('Projectmaster')/Items(` +
        ID +
        `)`;
      const headers = {
        accept: "application/json;odata=verbose",

        "content-Type": "application/json;odata=verbose",
        "IF-MATCH": "*",
        "X-HTTP-Method": "MERGE"
      };
      const listTitle = "Projectmaster";
      const savedata = {
        __metadata: { type: "SP.Data." + listTitle + "ListItem" },
        ISDelete: "Yes"
      };
      return new Promise((resolve, reject) => {
        Helper.executeJson(
          restUrl,
          "POST",
          headers,
          JSON.stringify($.extend(true, {}, savedata))
        )
          .then(response => {
            console.log(response);
            alert("Record Deleted Succesfully ");
            window.location.reload();
          })
          .catch(e => {
            console.error(
              e.message,
              "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list"
            );
            reject();
          });
      });
    }
  }
  public componentDidMount() {
    var status = Helper.getQueryStringParameter("status");
    if (status == "Shelved") {
    }

    if (status == "Closed") {
    }
    let initialProj = [];
    debugger;
    const restUrl =
      _spPageContextInfo.webAbsoluteUrl +
      `/_api/web/lists/getbyTitle('Projectmaster')/Items?$expand=EEECPM,IndustrySubtype,FSOLe,FSOPm,IndustrySubtype,WorldArea,Country,EEECLe&$select=EEECProjID,ID,UpdateFrequency,Emerson_x0020_Business_x0020_Uni, IndustrySubtype/Industry_x0020_Subtype,TypeOfIndustry,Country/Country,ClarityID,WorldArea/World_x0020_Area,IndustrySubtype/Industry_x0020_Subtype,WorldArea/World_x0020_Area,ProjectStartPeriod,End_x0020_User,End_x0020_Destination,EPC,BudgetDeviation,ProjectStartPeriod,ISDelivered,ETC,Created,Actuals,ProjectName,AgreedBudget,ActualEnd,ProjectType,DeltaVVersion,UpdateFrequency,Modified,ETC,Progress,Status,ProjectStartPeriod,ActualEnd,AgreedEndDate,Status,EPC,End_x0020_User,End_x0020_Destination,DeltaVVersion,ProjectType,TypeOfIndustry,BudgetDeviation,ProgressDeviation,ScheduleChange,BudgetChange,ProjectPlatform,EEECPM/Title,EEECLe/Title,FSOLe/Title,FSOPm/Title,NoOfControllers,NoOfSLS,NodesOnDelta,CabinetJBS,ILD,PR,Dynamos,Displays,PhaseClasses,OP,UP,ComplexClasses,EQMClasses,EQM,SIS,Modules,ModuleClasses,HWIO,SWIO,FWIO,ProjectStartDate,ProjectStartPeriod,ProjectEndDate,AgreedEndDate,ActualEndDate,ProjectName,ProjectPlatform,AgreedBudget,InternalBudget,Actuals,ETC,ExpectedHours,ActualEnd,ISForecasted,SSIO,ComplexLoops,RP&$top=4500`;
    //const rest_Url = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Projectmaster')/Items?$expand=EEECPM,EEECLe&$select=EEECProjID,ID,ISDelivered,Created,Actuals,ProjectName,AgreedBudget,ETC,Progress,Status,ProjectStartPeriod,AgreedEndDate,ProjectPlatform,EEECPM/Title,EEECLe/Title&$filter=ISDelete ne 'Yes' &$top=4500`;

    var temparray = [];

    var jsonArray;
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then(response => {
          initialProj = response.d.results;
          for (let i in response.d.results) {
            var jsonData = {};
            var flag = false;
            var FinYear = Helper.getQueryStringParameter("Year");
            var FinPeriod = Helper.getQueryStringParameter("Period");
            var YearPart;
            var QueryStringYearPart = FinYear.substr(2, 2);
            var QueryStringPeriodPart = FinPeriod.substr(1, 2);
            var PeriodPart
            var EndYearPart
            var CurrentEndPeriod;
            var tempstr = FinYear.toString() + FinPeriod.toString();
            var CurrentFinPeriod = response.d.results[i].ProjectStartPeriod;
            if (CurrentFinPeriod != null || CurrentFinPeriod == "") {
              YearPart = CurrentFinPeriod.substr(2, 2);
            } else {
              YearPart = 0;
            }
            console.log(YearPart);
            if (CurrentFinPeriod != null || CurrentFinPeriod == "") {
              PeriodPart = CurrentFinPeriod.substr(5, 2);
            } else {

            }
            console.log(PeriodPart);
            var FinYearString = FinYear.toLocaleLowerCase();
            CurrentEndPeriod = response.d.results[0].ActualEnd;
            if (CurrentEndPeriod != null || CurrentEndPeriod == "") {
              EndYearPart = CurrentEndPeriod.substr(2, 2);
            } else {
              EndYearPart = 0;
            }
            console.log(EndYearPart);
            var EndPeriodPart = CurrentEndPeriod.substr(5, 2);
            console.log(EndPeriodPart);

            var cnt = 0;
            if (CurrentFinPeriod == tempstr) {
              console.log("found");
            }
            if (parseInt(YearPart) <= parseInt(QueryStringYearPart) && response.d.results[i].Status == "WIP") {
              flag = true;
            }

            //project started in previos period and ended (del and closed) in current period
            if (
              parseInt(YearPart) <= parseInt(QueryStringYearPart) &&
              (parseInt(EndYearPart) == parseInt(QueryStringYearPart) &&
                parseInt(EndPeriodPart) == parseInt(QueryStringPeriodPart))
            ) {
              flag = true;
            }
            console.log(cnt);

            //
            if (
              parseInt(QueryStringYearPart) == parseInt(YearPart) &&
              (parseInt(QueryStringPeriodPart) == parseInt(PeriodPart) ||
                parseInt(QueryStringPeriodPart) == parseInt(EndPeriodPart))
            ) {
              flag = true;
            }


            if (flag == true) {


              jsonData["EEECPM"] = response.d.results[i].EEECPM.Title;
              jsonData["EEECLe"] = response.d.results[i].EEECLe.Title;
              jsonData["ID"] = response.d.results[i].ID;
              jsonData["EEECProjectID"] = response.d.results[i].EEECProjID;
              jsonData["ProjectName"] = response.d.results[i].ProjectName;
              jsonData["ProjPlatform"] = response.d.results[i].ProjectPlatform;
              jsonData["ETC"] = response.d.results[i].ETC;
              jsonData["Progress"] = response.d.results[i].Progress;
              jsonData["ETC"] = response.d.results[i].ETC;
              jsonData["UpdateFrequency"] = response.d.results[i].UpdateFrequency;
              jsonData["DeliveryStatus"] = "In Progress"
              if (response.d.results[i].ProjectStartDate === null || response.d.results[i].ProjectStartDate === 'undefined') {
                jsonData["StartDate"] = ""
              } else {
                jsonData["StartDate"] = (response.d.results[i].ProjectStartDate).slice(0, 10);
              }
              // jsonData["StartDate"] = response.d.results[i].ProjectStartDate
              jsonData["Country"] = response.d.results[i].Country.Country
              jsonData["FSOLead"] = response.d.results[i].FSOLe.Title
              jsonData["AgreedBudget"] = response.d.results[i].AgreedBudget
              if (response.d.results[i].ActualEndDate === null || response.d.results[i].ActualEndDate === 'undefined') {
                jsonData["ActualEndDate"] = ""
              } else {
                jsonData["ActualEndDate"] = (response.d.results[i].ActualEndDate).slice(0, 10)
              }
              jsonData["Forecasted"] = response.d.results[i].ISForecasted
              jsonData["WorldArea"] = response.d.results[i].WorldArea.World_x0020_Area
              if (response.d.results[i].Status == "Delivered" || response.d.results[i].Status == "Closed" || response.d.results[i].ISDelivered == "Yes") {
              }
              if (response.d.results[i].ISDelivered == "Yes")
                jsonData["Status"] = "Delivered";
              else jsonData["Status"] = response.d.results[i].Status;

              jsonData["ProjectStartPeriod"] =
                response.d.results[i].ProjectStartPeriod;
              if (response.d.results[i].AgreedEndDate === null || response.d.results[i].AgreedEndDate === 'undefined') {

              } else {
                jsonData["AgreedEndDate"] = (response.d.results[i].AgreedEndDate).slice(0, 10);
              }
              var sourcedate = new Date(response.d.results[i].AgreedEndDate)
              var destdate = new Date(response.d.results[i].ActualEndDate)
              if (sourcedate < destdate && (response.d.results[i].Status == "Delivered" || response.d.results[i].Status == "Shelved")) {
                jsonData["DeliveryStatus"] = "Delayed" + "-" + response.d.results[i].ActualEnd
              }
              jsonData["Actuals"] = response.d.results[i].Actuals;
              jsonData["AgreedBudget"] = response.d.results[i].AgreedBudget;
              jsonData["Created"] = response.d.results[i].Created;
              jsonData["LastUpdated"] = response.d.results[i].Modified;
              jsonData["EBU"] = response.d.results[i].Emerson_x0020_Business_x0020_Uni
              temparray.push(jsonData);
              this.setState({
                exportToExcel: temparray
              })
              example = (
                <div style={{ marginTop: '0px' }}>
                  <Workbook filename="On Time Delivery Report.xlsx" element={<button className="btn btn-success">Export To Excel</button>}>
                    <Workbook.Sheet data={this.state.exportToExcel} name="Sheet A">
                      <Workbook.Column label="EEECProjectID" value="EEECProjectID" />
                      <Workbook.Column label="Project Name" value="ProjectName" />
                      <Workbook.Column label="Buisness Unit" value="EBU" />
                      <Workbook.Column label=" Type Of Project" value="ProjPlatform" />
                      <Workbook.Column label="Project Start Date" value="StartDate" />
                      <Workbook.Column label="Country" value="Country" />
                      <Workbook.Column label="EEECPM" value="EEECPM" />
                      <Workbook.Column label="FSOLeadEngg" value="FSOLeadEngg" />
                      <Workbook.Column label="Agreed Budget" value="AgreedBudget" />
                      <Workbook.Column label="ProjectStartPeriod" value="ProjectStartPeriod" />
                      <Workbook.Column label="AgreedEndDate" value="AgreedEndDate" />
                      <Workbook.Column label="Actual End Date" value="ActualEndDate" />
                      <Workbook.Column label="Forecasted" value="Forecasted" />
                      <Workbook.Column label="World Area" value="WorldArea" />
                      <Workbook.Column label="DeliveryStatus" value="DeliveryStatus" />


                    </Workbook.Sheet>

                  </Workbook>
                </div>
              )
            }

            var arr = Object.values(JSON.stringify(jsonData));
          }
          this.setState({
            data: temparray,
            columns: [


              {
                Header: "EEECProjectID",
                accessor: "EEECProjectID",
                width: 115
              },
              {
                Header: () => (
                  <div>
                    Project
                    <br />
                    Name
                  </div>
                ),
                accessor: "ProjectName",
                width: 95
              },
              {
                Header: () => (
                  <div>
                    Business
                    <br />
                    Unit
                  </div>
                ),
                accessor: "EBU",
                filterable: false,
                width: 95
              },
              {
                Header: () => (
                  <div>
                    Type
                    <br />
                    Of Project
                  </div>
                ),
                accessor: "ProjPlatform",
                filterable: false,
                width: 95
              },
              {
                Header: () => (
                  <div>
                    Project
                    <br />
                    Start date
                  </div>
                ),
                accessor: "StartDate",
                width: 95
              },
              {
                Header: "Country",
                accessor: "Country",
                width: 80
              },
              {
                Header: "EEECPM",
                accessor: "EEECPM",
                width: 115
              },
              {
                Header: "FSOLeadEngg",
                accessor: "FSOLead",

              },
              {
                Header: () => (
                  <div>
                    Agreed
                    <br />
                    Budget
                  </div>
                ),
                accessor: "AgreedBudget",
                width: 90
              },
              {
                Header: () => (
                  <div>
                    Start
                    <br />
                    Period
                  </div>
                ),
                accessor: "ProjectStartPeriod",
                width: 90
              },
              {
                Header: () => (
                  <div>
                    Agreed
                    <br />
                    EndDate
                  </div>
                ),
                accessor: "AgreedEndDate",
                width: 90
              },

              {
                Header: () => (
                  <div>
                    Actual
                    <br />
                    EndDate
                  </div>
                ),
                accessor: "ProjectEndDate",
                width: 90
              },
              {
                Header: () => (
                  <div>
                    Forecasted
                    <br />

                  </div>
                ),
                accessor: "Forecasted",
                width: 90
              },
              {
                Header: () => (
                  <div>
                    World Area
                    <br />

                  </div>
                ),
                accessor: "WorldArea",
                width: 90
              },








              {
                Header: () => (
                  <div>
                    Delivery
                    <br />
                    Status
                  </div>
                ),
                accessor: "DeliveryStatus",
                filterable: false,
                width: 90
              }
            ]
          });
        })
        .catch(e => {
          console.error(
            e.message,
            "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list"
          );
          reject();
        });
    });
  }

  render() {
    let data = [{}];

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
          filtered={this.state.filtered}
          onFilteredChange={(filtered, column, value) => {
            this.onFilteredChangeCustom(value, column.id || column.accessor);
          }}
          defaultFilterMethod={(filter, row) =>
            this.filterCaseInsensitive(filter, row)
          }
          defaultPageSize={15}
          pageSizeOptions={[15, 30, 45]}
          getTdProps={(state, rowInfo, column, instance) => {
            return {
              onClick: (e, handleOriginal) => {
                console.log("A Td Element was clicked!");
                console.log("Row Index:", rowInfo.index);
                console.log(column.Header);
                let rowData = rowInfo.original;
                if (column.Header == "Delete") {
                  this.softDelete(rowData);
                }
                if (column.Header == "Edit") {
                  var link =
                    "/sites/process-dev2/EEEC/EProjectControl/SiteAssets/CustomEditForm.aspx?id=" +
                    rowData.EEECProjectID;
                  window.location.href = link;
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
            };
          }}>

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
                <div>
                  <div>
                    <span className="ReportHeader"> <b>Report Name :</b>  </span> <b className="subsection"> On Time Delivery Report </b>
                    &nbsp; &nbsp; &nbsp; <span className="ReportHeader"> <b> Total Records</b> </span> <b className="subsection">{recordsInfoText}</b>
                    <span className="ReportHeader" style={{ marginLeft: "30px" }}> <b>Report Period :</b>  </span> <b className="subsection"> {Helper.getQueryStringParameter("Year")}{Helper.getQueryStringParameter("Period")} </b>
                    <span> {example}</span>

                  </div>
                </div>

                {makeTable()}
              </div>
            );
          }}



        </ReactTable>

      </div>
    );
  }
}

export default App;
