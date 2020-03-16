import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Helper } from "./helper";
import $ from "jquery";
import moment from 'moment'
import "./eProjectNewForm.css";
import Workbook from 'react-excel-workbook'
import 'bootstrap/dist/css/bootstrap.min.css';
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
      columns: [],
      exportToExcel: null
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
    var showAll;
    var valuestocompare = [];

    var filterpair = {};
    var tempfilterArray = [];
    //var status = Helper.getQueryStringParameter("status");
    //console.log(status);
    var EBU = Helper.getQueryStringParameter("EBU");
    if (EBU != "undefined") {
      valuestocompare.push(EBU);
      filterpair["Emerson_x0020_Business_x0020_Uni"] = EBU;
    }

    console.log(EBU);
    var Dest = Helper.getQueryStringParameter("Dest");
    if (Dest != "undefined") {
      valuestocompare.push(decodeURIComponent(Dest));

      filterpair["End_x0020_Destination"] = Dest;
    }

    var EPC = Helper.getQueryStringParameter("EPC");
    if (EPC != "undefined") {
      valuestocompare.push(decodeURIComponent(EPC));
    }
    console.log(Dest);
    var User = Helper.getQueryStringParameter("User");
    if (User != "undefined") {
      valuestocompare.push(decodeURIComponent(User));
      filterpair["End_x0020_User"] = User;
    }
    console.log(User);
    var Name = Helper.getQueryStringParameter("name");
    console.log(Name);
    if (Name != "undefined") {
      valuestocompare.push(decodeURIComponent(Name));
    }
    var ToP = Helper.getQueryStringParameter("ToP");
    if (ToP != "undefined") {
      valuestocompare.push(decodeURIComponent(ToP));
    }
    console.log(ToP);
    var DV = Helper.getQueryStringParameter("DV");
    console.log(DV);
    if (DV != "undefined") {
      valuestocompare.push(decodeURIComponent(DV));
    }
    var Ind = Helper.getQueryStringParameter("Ind");
    console.log(Ind != "undefined");
    if (Ind != "undefined") {

      if (Ind == "Pulp%20") {
        valuestocompare.push("Pulp & Paper")
      } else
        valuestocompare.push(decodeURIComponent(Ind));
    }
    var SI = Helper.getQueryStringParameter("SI");
    if (SI != "undefined") {
      valuestocompare.push(decodeURIComponent(SI));
    }

    var Type = Helper.getQueryStringParameter("Type");
    if (Type != "undefined") {
      valuestocompare.push(decodeURIComponent(Type));
    }

    var FromFY = Helper.getQueryStringParameter("FromFY");
    if (FromFY != "undefined") {
      valuestocompare.push(decodeURIComponent(FromFY));
    }

    var ToFY = Helper.getQueryStringParameter("ToFY");
    if (ToFY != "undefined") {
      valuestocompare.push(ToFY);
    }

    var Country = Helper.getQueryStringParameter("C");
    if (Country != "undefined") {
      valuestocompare.push(decodeURIComponent(Country));
    }

    var Area = Helper.getQueryStringParameter("W");
    if (Area != "undefined") {
      valuestocompare.push(decodeURIComponent(Area));
    }
    console.log(SI);
    tempfilterArray.push(filterpair);
    console.log("Array");
    console.log(valuestocompare);
    console.log(tempfilterArray);
    var Type = Helper.getQueryStringParameter("Type");
    console.log(Type);

    let initialProj = [];
    debugger;
    const restUrl =
      _spPageContextInfo.webAbsoluteUrl +
      `/_api/web/lists/getbyTitle('Projectmaster')/Items?$expand=EEECPM,IndustrySubtype,FSOLe,FSOPm,IndustrySubtype,WorldArea,Country,EEECLe&$select=EEECProjID,ID,UpdateFrequency,Emerson_x0020_Business_x0020_Uni, IndustrySubtype/Industry_x0020_Subtype,TypeOfIndustry,Country/Country,ClarityID,WorldArea/World_x0020_Area,IndustrySubtype/Industry_x0020_Subtype,WorldArea/World_x0020_Area,ProjectStartPeriod,End_x0020_User,End_x0020_Destination,EPC,BudgetDeviation,ProjectStartPeriod,ISDelivered,ETC,Created,Actuals,ProjectName,AgreedBudget,ActualEnd,ProjectType,DeltaVVersion,UpdateFrequency,Modified,ETC,Progress,Status,ProjectStartPeriod,ProjectID,ActualEnd,AgreedEndDate,Status,EPC,End_x0020_User,End_x0020_Destination,DeltaVVersion,ProjectType,TypeOfIndustry,BudgetDeviation,ProgressDeviation,ScheduleChange,BudgetChange,ProjectPlatform,EEECPM/Title,EEECLe/Title,FSOLe/Title,FSOPm/Title,NoOfControllers,NoOfSLS,NodesOnDelta,CabinetJBS,ILD,PR,Dynamos,Displays,PhaseClasses,OP,UP,ComplexClasses,EQMClasses,EQM,SIS,Modules,ModuleClasses,HWIO,SWIO,FWIO,ProjectStartDate,ProjectStartPeriod,ProjectEndDate,AgreedEndDate,ActualEndDate,ProjectName,ProjectPlatform,AgreedBudget,InternalBudget,Actuals,ETC,ExpectedHours,ActualEnd,ISForecasted,SSIO,ComplexLoops,RP&$filter=ISDelete ne 'Yes'&$top=4500`;
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
            var alltruecounter = 0;
            for (let j = 0; j < valuestocompare.length; j++) {
              for (var key in response.d.results[i]) {
                if (response.d.results[i].hasOwnProperty(key)) {
                  if (key == "Country") {
                    if (
                      response.d.results[i][key].Country == valuestocompare[j]
                    ) {
                      debugger;
                      alltruecounter = alltruecounter + 1;
                      console.log(response.d.results[i][key].Country);
                      debugger;
                    }
                  }
                  if (key == "IndustrySubtype") {
                    if (
                      response.d.results[i][key].Industry_x0020_Subtype ==
                      valuestocompare[j]
                    ) {
                      debugger;
                      alltruecounter = alltruecounter + 1;
                      console.log(
                        response.d.results[i][key].Industry_x0020_Subtype
                      );
                      debugger;
                    }
                  }
                  if (key == "WorldArea") {
                    if (
                      response.d.results[i][key].World_x0020_Area ==
                      valuestocompare[j]
                    ) {
                      debugger;
                      alltruecounter = alltruecounter + 1;
                      console.log(response.d.results[i][key].World_x0020_Area);
                      debugger;
                    }
                  }

                  if (response.d.results[i][key] == valuestocompare[j]) {
                    alltruecounter = alltruecounter + 1;
                  }
                }

                if (alltruecounter == valuestocompare.length) {
                  flag = true;
                  if (Ind == "Other") {
                    if (response.d.results[i].TypeOfIndustry != "Other") {
                      flag = false
                    }
                  }
                }
              }
            }

            if (valuestocompare.length == 0) {


              flag = true;
            }
            /*get column names json */

            if (flag == true) {
              jsonData["Emerson_x0020_Business_x0020_Uni"] =
                response.d.results[i].Emerson_x0020_Business_x0020_Uni;
              jsonData["IndustrySubtype"] =
                response.d.results[i].IndustrySubtype.Industry_x0020_Subtype;
              jsonData["EPC"] = response.d.results[i].EPC;
              jsonData["End_x0020_User"] = response.d.results[i].End_x0020_User;
              jsonData["End_x0020_Destination"] =
                response.d.results[i].End_x0020_Destination;
              jsonData["DeltaVVersion"] = response.d.results[i].DeltaVVersion;
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
              jsonData["Displays"] = response.d.results[i].Displays;
              jsonData["PhaseClasses"] = response.d.results[i].PhaseClasses;
              jsonData["OP"] = response.d.results[i].OP;
              jsonData["UP"] = response.d.results[i].UP;
              jsonData["ComplexClasses"] = response.d.results[i].ComplexClasses;
              jsonData["EQM"] = response.d.results[i].EQM;
              jsonData["EQMClasses"] = response.d.results[i].EQMClasses;
              jsonData["SIS"] = response.d.results[i].SIS;
              jsonData["Modules"] = response.d.results[i].Modules;
              jsonData["ModuleClasses"] = response.d.results[i].ModuleClasses;
              jsonData["HWIO"] = response.d.results[i].HWIO;
              jsonData["SWIO"] = response.d.results[i].SWIO;
              jsonData["FWIO"] = response.d.results[i].FWIO;
              if (response.d.results[i].ProjectStartDate != null || response.d.results[i].ProjectStartDate != 'undefined') {
                jsonData["ProjectStartDate"] =
                  (response.d.results[i].ProjectStartDate)
              }
              else {
                jsonData["ProjectStartDate"] = response.d.results[i].ProjectStartDate
              }
              jsonData["ProjectStartPeriod"] =
                response.d.results[i].ProjectStartPeriod;

              if (response.d.results[i].ProjectEndDate != null || response.d.results[i].ProjectEndDate != 'undefined') {
                jsonData["ProjectEndDate"] = (response.d.results[i].ProjectEndDate)
              } else {
                jsonData["ProjectEndDate"] = (response.d.results[i].ProjectEndDate)
              }
              if (response.d.results[i].AgreedEndDate != null || response.d.results[i].AgreedEndDate != 'undefined') {
                jsonData["AgreedEndDate"] = (response.d.results[i].AgreedEndDate)
              } else {
                jsonData["AgreedEndDate"] = (response.d.results[i].AgreedEndDate)
              }
              if (response.d.results[i].ActualEndDate != null || response.d.results[i].ActualEndDate != 'undefined') {
                jsonData["ActualEndDate"] = (response.d.results[i].ActualEndDate)
              } else {
                jsonData["ActualEndDate"] = (response.d.results[i].ActualEndDate)
              }
              jsonData["ProjectName"] = response.d.results[i].ProjectName;
              jsonData["Status"] = response.d.results[i].Status;
              jsonData["ProjectPlatform"] =
                response.d.results[i].ProjectPlatform;
              jsonData["AgreedBudget"] = response.d.results[i].AgreedBudget;
              jsonData["InternalBudget"] = response.d.results[i].InternalBudget;
              jsonData["Actuals"] = response.d.results[i].Actuals;
              jsonData["ETC"] = response.d.results[i].ETC;
              jsonData["Progress"] = response.d.results[i].Progress;
              jsonData["ExpectedHours"] = response.d.results[i].ExpectedHours;
              jsonData["ActualEnd"] = response.d.results[i].ActualEnd;
              jsonData["ClarityID"] = response.d.results[i].ClarityID;
              jsonData["Country"] = response.d.results[i].Country.Country;
              jsonData["WorldArea"] = response.d.results[i].WorldArea.World_x0020_Area;
              jsonData["BudgetChange"] = response.d.results[i].BudgetChange;
              jsonData["ScheduleChange"] = response.d.results[i].ScheduleChange
              jsonData["BudgetDeviation"] = response.d.results[i].BudgetDeviation
              jsonData["ETC"] = response.d.results[i].ETC;
              jsonData["ISForecasted"] = response.d.results[i].ISForecasted
              jsonData["EXP"] = response.d.results[i].ISForecasted
              jsonData["UpdateFrequency"] =
                response.d.results[i].UpdateFrequency;

              if (response.d.results[i].ISDelivered == "Yes")
                jsonData["Status"] = "Delivered";
              else jsonData["Status"] = response.d.results[i].Status;

              jsonData["ProjectStartPeriod"] =
                response.d.results[i].ProjectStartPeriod;

              if (response.d.results[i].AgreedEndDate === null || response.d.results[i].AgreedEndDate === 'undefined') {
              } else {
                jsonData["AgreedEndDate"] = (response.d.results[i].AgreedEndDate).slice(0, 10);
              }

              jsonData["Actuals"] = response.d.results[i].Actuals;
              jsonData["AgreedBudget"] = response.d.results[i].AgreedBudget;
              jsonData["Created"] = (response.d.results[i].Created).slice(0, 10);
              jsonData["LastUpdated"] = (response.d.results[i].Modified).slice(0, 10);
              jsonData["SD"] = "";
              jsonData["SS"] = "";

              temparray.push(jsonData);
              this.setState({
                exportToExcel: temparray
              })
              example = (
                <div className="row text-center" style={{ marginTop: '100px' }}>
                  <Workbook filename="GeneralProjectReport.xlsx" element={<button className="btn btn-success">Export To Excel</button>}>
                    <Workbook.Sheet data={this.state.exportToExcel} name="Sheet A">
                      <Workbook.Column label="Emerson Buisness Unit" value="Emerson_x0020_Business_x0020_Uni" />
                      <Workbook.Column label="Type Of Project" value="ProjPlatform" />
                      <Workbook.Column label="Project Name" value="ProjectName" />
                      <Workbook.Column label="EPC" value="EPC" />
                      <Workbook.Column label="End user" value="End_x0020_User" />

                      <Workbook.Column label="EEECProjectID" value="EEECProjID" />
                      <Workbook.Column label="Country" value="Country" />
                      <Workbook.Column label="EEECPM" value="EEECPM" />
                      <Workbook.Column label="FSOLe" value="FSOLe" />
                      <Workbook.Column label="FSOPm" value="FSOPm" />
                      <Workbook.Column label="EEECLe" value="EEECLe" />
                      <Workbook.Column label="Forecasted" value="Forecast" />
                      <Workbook.Column label="Project Start Date" value="ProjectStartDate" />
                      <Workbook.Column label="Project End Date" value="ProjectEndDate" />
                      <Workbook.Column label="Actual End Date" value="ActualEndDate" />
                      <Workbook.Column label="Agreed End Date" value="AgreedEndDate" />
                      <Workbook.Column label="Status" value="Status" />
                      <Workbook.Column label="Agreed Budget" value="AgreedBudget" />
                      <Workbook.Column label=" Actuals" value="Actuals" />
                      <Workbook.Column label="ETC" value="ETC" />

                      <Workbook.Column label="Agreed Budget" value="AgreedBudget" />
                      <Workbook.Column label="Progress" value="Progress" />
                      <Workbook.Column label="ETC" value="ETC" />
                      <Workbook.Column label="Actuals" value="Actuals" />
                      <Workbook.Column label="Agreed End Date" value="AgreedEndDate" />
                      <Workbook.Column label="End Destination" value="End_x0020_Destination" />

                      <Workbook.Column label="DeltaV Version" value="DeltaVVersion" />
                      <Workbook.Column label="WorldArea" value="WorldArea" />
                      <Workbook.Column label="ProjectType" value="ProjectType" />
                      <Workbook.Column label="Country" value="Country" />
                      <Workbook.Column label="Industry Type" value="TypeOfIndustry" />
                      <Workbook.Column label="Industry Sub Type" value="IndustrySubtype" />
                      <Workbook.Column label="Clarity Project ID" value="ClarityID" />
                      <Workbook.Column label="EEEC Project ID" value="EEECProjID" />
                      <Workbook.Column label="ProjectStartDate" value="ProjectStartDate" />
                      <Workbook.Column label="ProjectStartPeriod" value="ProjectStartPeriod" />
                      <Workbook.Column label="Forecasted" value="ISForecasted" />
                      <Workbook.Column label="Requested End Date" value="ProjectEndDate" />
                      <Workbook.Column label="ActualEndDate" value="ActualEndDate" />
                      <Workbook.Column label="HWIO" value="HWIO" />
                      <Workbook.Column label="SWIO" value="SWIO" />
                      <Workbook.Column label="FFIO" value="FWIO" />
                      <Workbook.Column label="SSIO" value="SSIO" />

                      <Workbook.Column label="Module Classes" value="ModuleClasses" />
                      <Workbook.Column label="Modules" value="Modules" />
                      <Workbook.Column label="Complex Classes" value="ComplexClasses" />
                      <Workbook.Column label="PhaseClasses" value="PhaseClasses" />
                      <Workbook.Column label="OP" value="OP" />
                      <Workbook.Column label="UP" value="UP" />
                      <Workbook.Column label="PR" value="PR" />
                      <Workbook.Column label="Dynamos" value="Dynamos" />
                      <Workbook.Column label="Displays" value="Displays" />
                      <Workbook.Column label="Cabinet/JBs" value="CabinetJBS" />
                      <Workbook.Column label="ILD" value="ILD" />
                      <Workbook.Column label="NoOfSLS" value="NoOfSLS" />
                      <Workbook.Column label="NoOfControllers" value="NoOfControllers" />
                      <Workbook.Column label="NoOfSLS" value="NoOfSLS" />
                      <Workbook.Column label="NodesOnDelta" value="NodesOnDelta" />
                      <Workbook.Column label="Special Design" value="SD" />
                      <Workbook.Column label="Safety System" value="SS" />
                      <Workbook.Column label="EEECLe" value="EEECLe" />
                      <Workbook.Column label="EEECPM" value="EEECPM" />
                      <Workbook.Column label="FSOLE" value="FSOLe" />
                      <Workbook.Column label="FSOPM" value="FSOPm" />
                      <Workbook.Column label="Budget Change" value="BudgetChange" />
                      <Workbook.Column label="Schedule  Change" value="ScheduleChange" />
                      <Workbook.Column label="Project Deviation" value="ProgressDeviation" />
                      <Workbook.Column label="Update Frequency" value="Update" />
                      <Workbook.Column label="Budget Deviation" value="BudgetDeviation" />
                      <Workbook.Column label="Status" value="Status" />
                      <Workbook.Column label="Internal Budget" value="InternalBudget" />
                      <Workbook.Column label="Expected Hours Per Week" value="ExpectedHours" />






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
                Header: () => (
                  <div>
                    Business
                    <br />
                    Unit
                  </div>
                ),
                accessor: "Emerson_x0020_Business_x0020_Uni"
              },
              {
                Header: () => (
                  <div>
                    Type Of
                    <br />
                    Project
                  </div>
                ),
                accessor: "ProjectPlatform"
              },
              {
                Header: () => (
                  <div>
                    Project
                    <br />
                    Name
                  </div>
                ),
                accessor: "ProjectName"
              },
              {
                Header: "EPC",
                accessor: "EPC"
              },
              {
                Header: "End User",
                accessor: "End_x0020_User"
              },
              {
                Header: () => (
                  <div>
                    Agreed
                    <br />
                    Budget
                  </div>
                ),
                accessor: "AgreedBudget"
              },
              {
                Header: "Progress%",
                accessor: "Progress"
              },
              {
                Header: "ETC",
                accessor: "ETC"
              },
              {
                Header: "Actuals",
                accessor: "Actuals"
              },
              {
                Header: () => (
                  <div>
                    Agreed
                    <br />
                    End Date
                  </div>
                ),
                accessor: "AgreedEndDate"
              },
              {
                Header: () => (
                  <div>
                    End
                    <br />
                    Destination
                  </div>
                ),
                accessor: "End_x0020_Destination"
              },

              {
                Header: () => (
                  <div>
                    DeltaV
                    <br />
                    Version
                  </div>
                ),
                accessor: "DeltaVVersion",
                filterable: false
              },
              {
                Header: () => (
                  <div>
                    Project
                    <br />
                    Type
                  </div>
                ),
                accessor: "ProjectType"
              },
              {
                Header: () => (
                  <div>
                    Industry
                    <br />
                    Type
                  </div>
                ),
                accessor: "TypeOfIndustry"
              },
              {
                Header: () => (
                  <div>
                    Industry
                    <br />
                    Sub Type
                  </div>
                ),
                accessor: "IndustrySubtype"
              },
              {
                Header: () => (
                  <div>
                    Clarity
                    <br />
                    Project ID
                  </div>
                ),
                accessor: "ClarityID"
              },
              {
                Header: "EEEC Project ID",
                accessor: "EEECProjID"
              },
              {
                Header: () => (
                  <div>
                    Project
                    <br />
                    Start Date
                  </div>
                ),
                accessor: "ProjectStartDate"
              },
              {
                Header: () => (
                  <div>
                    Project
                    <br />
                    Start Period
                  </div>
                ),
                accessor: "ProjectStartPeriod"
              },
              {
                Header: "Forecasted",
                accessor: "ISForecasted"
              },
              {
                Header: () => (
                  <div>
                    Requested
                    <br />
                    End Date
                  </div>
                ),
                accessor: "ProjectEndDate"
              },
              {
                Header: "Actual End Date",
                accessor: "ActualEndDate"
              },
              {
                Header: "HWIO",
                accessor: "HWIO"
              },
              {
                Header: "SWIO",
                accessor: "SWIO"
              },
              {
                Header: "FFIO",
                accessor: "FWIO"
              },
              {
                Header: "SSIO",
                accessor: "SSIO"
              },
              {
                Header: "Modules Classes",
                accessor: "ModuleClasses"
              },
              {
                Header: "Modules",
                accessor: "Modules"
              },
              {
                Header: "EQM Classes",
                accessor: "EQMClasses"
              },
              {
                Header: "Complex Loops",
                accessor: "ComplexLoops"
              },
              {
                Header: "EQM",
                accessor: "EQM"
              },
              {
                Header: "Phases Classes",
                accessor: "PhaseClasses"
              },
              {
                Header: "OP",
                accessor: "OP"
              },
              {
                Header: "UP",
                accessor: "UP"
              },
              {
                Header: "PR",
                accessor: "PR"
              },
              {
                Header: "Dynamos",
                accessor: "Dynamos"
              },
              {
                Header: "Displays",
                accessor: "Displays"
              },
              {
                Header: "ILD",
                accessor: "ILD"
              },
              {
                Header: "No OF SLS",
                accessor: "NoOfSLS"
              },
              {
                Header: "Nodes on DeltaV",
                accessor: "NodesOnDelta"
              },
              {
                Header: "No Of Controllers",
                accessor: "NoOfControllers"
              },

              {
                Header: "ID",
                accessor: "ID",
                show: false
              },
              {
                Header: "UpdateFrequency",
                accessor: "UpdateFrequency"
              },

              {
                Header: "Status",
                accessor: "Status",
                filterable: false
              },
              {
                Header: "Progress",
                accessor: "Progress",
                filterable: false
              },
              {
                Header: "Start Period",
                accessor: "ProjectStartPeriod",
                filterable: false
              },
              {
                Header: "Created",
                accessor: "Created",
                show: false
              },
              {
                Header: "AgreedEndDate",
                accessor: "AgreedEndDate",
                filterable: false
              },
              {
                Header: "Agreed Budget",
                accessor: "AgreedBudget",
                filterable: false
              },
              {
                Header: "Last Updated date",
                accessor: "LastUpdated",
                filterable: false
              },
              {
                Header: "EEECLE",
                accessor: "EEECLe",
                filterable: false
              },
              {
                Header: "EEECPM",
                accessor: "EEECPM",
                filterable: false
              },
              {
                Header: "FSOLE",
                accessor: "FSOLe",
                filterable: false
              },
              {
                Header: "FSOPM",
                accessor: "FSOPm",
                filterable: false
              },
              {
                Header: "Country",
                accessor: "Country",
                filterable: false
              },
              {
                Header: "World Area",
                accessor: "WorldArea",
                filterable: false
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
                    "/sites/autosolpss/EEEC/EProjectControl/SiteAssets/CustomEditForm.aspx?id=" +
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
                    <span className="ReportHeader"> <b>Report Name :</b>  </span> <b className="subsection"> General Project Details </b>
                    &nbsp; &nbsp; &nbsp; <span className="ReportHeader"> <b> Total Records</b> </span> <b className="subsection">{recordsInfoText}</b>
                    {/* // <span className="ReportHeader" style={{ marginLeft: "30px" }}> <b>Report Period :</b>  </span> <b className="subsection"> {Helper.getQueryStringParameter("Year")}{Helper.getQueryStringParameter("Period")} </b> */}
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



