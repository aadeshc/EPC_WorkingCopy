import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Helper } from "./Helper";
import $ from "jquery";
import "./eProjectNewForm.css";
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Workbook from 'react-excel-workbook'
import { ENGINE_METHOD_DSA } from "constants";
declare var _spPageContextInfo, jQuery;
export interface IeProjectState {
  data: any;
  EBU: any;
  EPC: any;
}var example;
class App extends React.Component<{}, any> {
  constructor(props: IeProjectState) {
    super(props);
    this.softDelete = this.softDelete.bind(this);
    this.state = {
      projectDetails: [],
      filtered: [],
      data: [],
      EditID: 0,
      columns: [],
      exportToExcel: null,
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
      `/_api/web/lists/getbyTitle('Projectmaster')/Items?$expand=EEECPM,IndustrySubtype,FSOLe,FSOPm,IndustrySubtype,WorldArea,Country,EEECLe&$select=EEECProjID,ID,ProjectID,UpdateFrequency,Emerson_x0020_Business_x0020_Uni, IndustrySubtype/Industry_x0020_Subtype,TypeOfIndustry,Country/Country,ClarityID,WorldArea/World_x0020_Area,IndustrySubtype/Industry_x0020_Subtype,WorldArea/World_x0020_Area,ProjectStartPeriod,End_x0020_User,End_x0020_Destination,EPC,BudgetDeviation,ProjectStartPeriod,ISDelivered,ETC,Created,Actuals,ProjectName,AgreedBudget,ActualEnd,ProjectType,DeltaVVersion,UpdateFrequency,Modified,ETC,Progress,Status,ProjectStartPeriod,ActualEnd,AgreedEndDate,Status,EPC,End_x0020_User,End_x0020_Destination,DeltaVVersion,ProjectType,TypeOfIndustry,BudgetDeviation,ProgressDeviation,ScheduleChange,BudgetChange,ProjectPlatform,EEECPM/Title,EEECLe/Title,FSOLe/Title,FSOPm/Title,NoOfControllers,NoOfSLS,NodesOnDelta,CabinetJBS,ILD,PR,Dynamos,Displays,PhaseClasses,OP,UP,ComplexClasses,EQMClasses,EQM,SIS,Modules,ModuleClasses,HWIO,SWIO,FWIO,ProjectStartDate,ProjectStartPeriod,ProjectEndDate,AgreedEndDate,ActualEndDate,ProjectName,ProjectPlatform,AgreedBudget,InternalBudget,Actuals,ETC,ExpectedHours,ActualEnd,ISForecasted,SSIO,ComplexLoops,RP,DeliveryComplete,CSSFormReceived,ProjectCloseMeeting,ResourceSkillUpdated,PMITSS,DongleReturned,Datacorrect,ProjectFolderArchive,ProjectHW,PerfomarmanceUpdated,Postdelivery,Closeoutnotes&$top=4500`;
    //const rest_Url = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Projectmaster')/Items?$expand=EEECPM,EEECLe&$select=EEECProjID,ID,ISDelivered,Created,Actuals,ProjectName,AgreedBudget,ETC,Progress,Status,ProjectStartPeriod,AgreedEndDate,ProjectPlatform,EEECPM/Title,EEECLe/Title&$filter=ISDelete ne 'Yes' &$top=4500`;

    var temparray = [];

    var jsonArray;
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then(response => {
          initialProj = response.d.results;
          for (let i in response.d.results) {
            var jsonData = {};
            var isdiscrepancy = false;

            var status = response.d.results[i].Status;
            var Shelved = Helper.getQueryStringParameter("Shelved");
            var Closed = Helper.getQueryStringParameter("Closed");

            var UserFrom = Helper.getQueryStringParameter("From");
            var UserTo = Helper.getQueryStringParameter("To");
            var ActualEndDate = response.d.results[i].ActualEnd;
            if (ActualEndDate == null || ActualEndDate == "undefined") {
              continue;
            } else {
              var withinrange = ActualEndDate.localeCompare(UserFrom);
              var withintorange = ActualEndDate.localeCompare(UserTo);
              if (withintorange == 1 || withinrange == -1) {
                continue;
              }
            }




            if (response.d.results[i].Status == "Delivered" || response.d.results[i].Status == "Closed") {






              if (
                response.d.results[i].Status == "Delivered" ||
                response.d.results[i].Status == "Closed" ||
                response.d.results[i].ISDelivered != "No"
              ) {


                if (Shelved == "No" && Closed == "No") {
                  continue;
                } else {
                  if (Shelved == "No") {
                    if (response.d.results[i].Status == "Delivered") {
                      continue;
                    }
                  }

                  if (Closed == "No") {
                    if (response.d.results[i].Status == "Closed") {
                      continue;
                    }
                  }
                }
              }

              jsonData["Emerson_x0020_Business_x0020_Uni"] =
                response.d.results[i].Emerson_x0020_Business_x0020_Uni;
              jsonData["IndustrySubtype"] =
                response.d.results[i].IndustrySubtype.Industry_x0020_Subtype;
              jsonData["EPC"] = response.d.results[i].EPC;
              jsonData["End_x0020_User"] = response.d.results[i].End_x0020_User;
              jsonData["End_x0020_Destination"] =
                response.d.results[i].End_x0020_Destination;
              jsonData["ResourceSkillUpdated"] = response.d.results[i].ResourceSkillUpdated;
              jsonData["TypeOfIndustry"] = response.d.results[i].TypeOfIndustry;
              jsonData["ProjectType"] = response.d.results[i].ProjectType;
              jsonData["BudgetDeviation"] =
                response.d.results[i].BudgetDeviation;
              jsonData["UpdateFrequency"] =
                response.d.results[i].UpdateFrequency;
              jsonData["ProgressDeviation"] =
                response.d.results[i].ProgressDeviation;
              jsonData["FSOLe"] = response.d.results[i].FSOLe.Title;
              jsonData["FSOPm"] = response.d.results[i].FSOPm.Title;
              jsonData["NoOfControllers"] =
                response.d.results[i].NoOfControllers;
              jsonData["NoOfSLS"] = response.d.results[i].NoOfSLS;
              jsonData["NodesOnDelta"] = response.d.results[i].NodesOnDelta;
              jsonData["CabinetJBS"] = response.d.results[i].CabinetJBS;
              jsonData["ILD"] = response.d.results[i].ILD;
              jsonData["PR"] = response.d.results[i].PR;

              jsonData["EEECPM"] = response.d.results[i].EEECPM.Title;
              jsonData["EEECLe"] = response.d.results[i].EEECLe.Title;
              jsonData["ID"] = response.d.results[i].ID;
              jsonData["EEECProjID"] = response.d.results[i].EEECProjID;
              jsonData["ProjectName"] = response.d.results[i].ProjectName;
              jsonData["ProjPlatform"] = response.d.results[i].ProjectPlatform;
              jsonData["ETC"] = response.d.results[i].ETC;
              jsonData["Closeoutnotes"] = response.d.results[i].Closeoutnotes;
              jsonData["PerfomarmanceUpdated"] = response.d.results[i].PerfomarmanceUpdated;
              jsonData["DongleReturned"] = response.d.results[i].DongleReturned;
              jsonData["UP"] = response.d.results[i].UP;
              jsonData["ComplexClasses"] = response.d.results[i].ComplexClasses;
              jsonData["EQM"] = response.d.results[i].EQM;
              jsonData["EQMClasses"] = response.d.results[i].EQMClasses;
              jsonData["SIS"] = response.d.results[i].SIS;
              jsonData["ProjectCloseMeeting"] = response.d.results[i].ProjectCloseMeeting;
              jsonData["DeliveryComplete"] = response.d.results[i].DeliveryComplete;
              jsonData["HWIO"] = response.d.results[i].HWIO;
              jsonData["CSSFormReceived"] = response.d.results[i].CSSFormReceived;
              jsonData["ProjectCloseMeeting"] = response.d.results[i].ProjectCloseMeeting;
              if (response.d.results[i].ProjectStartDate != null || response.d.results[i].ProjectStartDate != 'undefined') {
                jsonData["ProjectStartDate"] =
                  (response.d.results[i].ProjectStartDate)
              }
              else {
                jsonData["ProjectStartDate"] = response.d.results[i].ProjectStartDate
              }
              jsonData["ProjectStartPeriod"] =
                response.d.results[i].ProjectStartPeriod;

              // if (response.d.results[i].ProjectEndDate != null || response.d.results[i].ProjectEndDate != 'undefined') {
              //   jsonData["ProjectEndDate"] = (response.d.results[i].ProjectEndDate)
              // } else {
              //   jsonData["ProjectEndDate"] = (response.d.results[i].ProjectEndDate)
              // }
              // if (response.d.results[i].AgreedEndDate != null || response.d.results[i].AgreedEndDate != 'undefined') {
              //   jsonData["AgreedEndDate"] = (response.d.results[i].AgreedEndDate)
              // } else {
              //   jsonData["AgreedEndDate"] = (response.d.results[i].AgreedEndDate)
              // }
              // if (response.d.results[i].ActualEndDate != null || response.d.results[i].ActualEndDate != 'undefined') {
              //   jsonData["ActualEndDate"] = (response.d.results[i].ActualEndDate)
              // } else {
              //   jsonData["ActualEndDate"] = (response.d.results[i].ActualEndDate)
              // }


              jsonData["ProjectName"] = response.d.results[i].ProjectName;
              jsonData["Status"] = response.d.results[i].Status;
              jsonData["ProjectPlatform"] =
                response.d.results[i].ProjectPlatform;
              jsonData["Postdelivery"] = response.d.results[i].Postdelivery;
              jsonData["ProjectHW"] = response.d.results[i].ProjectHW;
              jsonData["ProjectFolderArchive"] = response.d.results[i].ProjectFolderArchive;
              jsonData["Datacorrect"] = response.d.results[i].Datacorrect;
              jsonData["PMITSS"] = response.d.results[i].PMITSS;
              jsonData["ResourceSkillUpdated"] = response.d.results[i].ResourceSkillUpdated;
              jsonData["ActualEnd"] = response.d.results[i].ActualEnd;
              jsonData["ClarityID"] = response.d.results[i].ClarityID;
              jsonData["Country"] = response.d.results[i].Country.Country;
              //jsonData["WorldArea"] = response.d.results[i].WorldArea.World_x0020_Area;

              jsonData["ETC"] = response.d.results[i].ETC;
              jsonData["UpdateFrequency"] =
                response.d.results[i].UpdateFrequency;

              if (response.d.results[i].ISDelivered == "Yes")
                jsonData["Status"] = "Delivered";
              else jsonData["Status"] = response.d.results[i].Status;

              jsonData["ProjectStartPeriod"] =
                response.d.results[i].ProjectStartPeriod;
              jsonData["AgreedEndDate"] = (response.d.results[i].AgreedEndDate).slice(0, 10);
              jsonData["Actuals"] = response.d.results[i].Actuals;
              jsonData["AgreedBudget"] = response.d.results[i].AgreedBudget;
              jsonData["Created"] = (response.d.results[i].Created).slice(0, 10);
              jsonData["LastUpdated"] = (response.d.results[i].Modified).slice(0, 10);

              temparray.push(jsonData);
              this.setState({
                exportToExcel: temparray
              })
            } else {
              continue;
            }
          }


          example = (
            <div className="row text-center" style={{ marginTop: '0px' }}>
              <Workbook filename="ClosedAndDeliveredProjectsReport.xlsx" element={<button className="btn btn-success">Export To Excel</button>}>
                <Workbook.Sheet data={this.state.exportToExcel} name="Sheet A">
                  <Workbook.Column label="Project Status" value="Status" />
                  <Workbook.Column label="Period Of Delivery" value="ActualEnd" />
                  <Workbook.Column label="Clarity Project ID" value="ClarityID" />
                  <Workbook.Column label="EEECProjectID" value="EEECProjID" />
                  <Workbook.Column label="Project Name" value="ProjectName" />
                  <Workbook.Column label="Country" value="Country" />
                  <Workbook.Column label="EEECPM" value="EEECPM" />
                  <Workbook.Column label="Industry" value="TypeOfIndustry" />

                  <Workbook.Column label="Type Of Project" value="ProjPlatform" />
                  <Workbook.Column label="Project Folder Archived??" value="ProjectFolderArchive" />
                  <Workbook.Column label="Deliveries Complete" value="DeliveryComplete" />
                  <Workbook.Column label="Hard Docs Archived By PM??" value="PMITSS" />
                  <Workbook.Column label="Type Of Project" value="ProjPlatform" />
                  <Workbook.Column label=" Project HW Released??" value="ProjectHW" />
                  <Workbook.Column label="Dongle Returned" value="DongleReturned" />
                  <Workbook.Column label="  Project Info Data Correct And Updated??" value="Datacorrect" />
                  <Workbook.Column label="Post Delivery Collected" value="Postdelivery" />
                  <Workbook.Column label=" CSS Received" value="CSSFormReceived" />
                  <Workbook.Column label=" Close Out Report Uploaded" value="ProjectCloseMeeting" />
                  <Workbook.Column label="ResourceSkillUpdated" value="ResourceSkillUpdated" />
                  <Workbook.Column label="Performance Appraisal Done" value="PerfomarmanceUpdated" />
                  <Workbook.Column label="Close Out Notes" value="Closeoutnotes" />
                </Workbook.Sheet>

              </Workbook>
            </div>
          )

          var arr = Object.values(JSON.stringify(jsonData));

          this.setState({
            data: temparray,
            columns: [

              {
                Header: () => (
                  <div>
                    Project
                    <br />
                    Status
                  </div>
                ),
                accessor: "Status",

              },
              {
                Header: () => (
                  <div>
                    Period Of
                    <br />
                    Delivery
                  </div>
                ),
                accessor: "ActualEnd",

              },
              {
                Header: "Clarity Project ID",
                accessor: "ClarityID",
                width: 95
              },
              {
                Header: "EEECProjectID",
                accessor: "EEECProjID",
                filterable: false,

              },
              {
                Header: "ProjectName",
                accessor: "ProjectName",
                filterable: false,
                width: 110
              },
              {
                Header: "Country",
                accessor: "Country",
                filterable: false,

              },
              {
                Header: "EEECPM",
                accessor: "EEECPM",

              },
              {
                Header: "Industry",
                accessor: "TypeOfIndustry",
              },
              // {
              //   Header: "WorldArea",
              //   accessor: "WorldArea",
              // },
              {
                Header: "Type Of Project",
                accessor: "ProjPlatform",
              },

              {
                Header: () => (
                  <div>
                    Project Folder
                    <br />
                    Archived??
                  </div>
                ),
                accessor: "ProjectFolderArchive",

              },
              {
                Header: () => (
                  <div>
                    Deliveries
                    <br />
                    Complete??
                  </div>
                ),
                accessor: "DeliveryComplete",

              },
              {
                Header: () => (
                  <div>
                    Hard Docs Archived
                    <br />
                    By PM??
                  </div>
                ),
                accessor: "PMITSS",

              },
              {
                Header: () => (
                  <div>
                    Project HW
                    <br />
                    Released??
                  </div>
                ),
                accessor: "ProjectHW",

              },
              {
                Header: () => (
                  <div>
                    Dongle
                    <br />
                    Returned??
                  </div>
                ),
                accessor: "DongleReturned",

              },
              {
                Header: () => (
                  <div>
                    Project Info
                    <br />
                    Data Correct
                    <br /> And
                      Updated??
                  </div>
                ),
                accessor: "Datacorrect",

              },
              {
                Header: () => (
                  <div>
                    Post Dly Defects
                    <br />
                    Collected??
                  </div>
                ),
                accessor: "Postdelivery",

              },
              {
                Header: () => (
                  <div>
                    CSS
                    <br />
                    Received
                  </div>
                ),
                accessor: "CSSFormReceived",

              },
              {
                Header: () => (
                  <div>
                    Close Out
                    <br />
                    Report Uploaded
                  </div>
                ),
                accessor: "ProjectCloseMeeting",

              },


              {
                Header: () => (
                  <div>
                    Resource Skill
                    <br />
                    Updated
                  </div>
                ),
                accessor: "ResourceSkillUpdated",

              },
              {
                Header: () => (
                  <div>
                    Performance
                    <br />
                    Appraisal Done??
                  </div>
                ),
                accessor: "PerfomarmanceUpdated",

              },
              {
                Header: () => (
                  <div>
                    Close Out Notes
                  </div>
                ),
                accessor: "Closeoutnotes",

              },

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
          }}


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
                <div>
                  <div>
                    <span className="ReportHeader" style={{ fontSize: "14px" }}> <b>Report Name :</b>  </span> <b className="subsection" style={{ fontSize: "14px", color: "#00008b", textDecoration: "underline" }}> Closed And Delivered Project Report </b>
                    &nbsp; &nbsp; &nbsp; <span className="ReportHeader" style={{ fontSize: "14px" }}> <b> Total Records</b> </span> <b className="subsection" style={{ fontSize: "14px", color: "00008b", textDecoration: "underline" }}>{recordsInfoText}</b>

                    <span className="ReportHeader">
                      <b style={{ fontSize: "14px", marginLeft: "120px" }}>Report Period :</b>  </span> <b className="subsection" style={{ fontSize: "14px", color: "00008b", textDecoration: "underline" }}> FROM FY : {Helper.getQueryStringParameter("From")} TO FY : {Helper.getQueryStringParameter("To")}  </b>
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
