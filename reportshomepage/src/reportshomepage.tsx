import React from 'react'
import ReactDOM from 'react-dom'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import NewWindow from 'react-new-window';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';
import { SPPeoplePicker } from "./peoplepicker";
import * as toastr from "toastr";
import './ViewReports.css';
import { Helper } from './helper';
import { IStackTokens, Stack } from 'office-ui-fabric-react/lib/Stack';
import {
  CompactPeoplePicker,
  IBasePickerSuggestionsProps,
  IBasePicker,
  ListPeoplePicker,
  NormalPeoplePicker,
  ValidationState
} from 'office-ui-fabric-react/lib/Pickers';
import { DateRangeType } from 'office-ui-fabric-react/lib/Calendar'
import './eProjectNewForm.css';
import {
  Label, Checkbox, PrimaryButton, Selection, SelectionMode, TextField, IPersonaProps, IPersona, DatePicker, DayOfWeek, Dropdown, values, DefaultButton, inputProperties
} from "office-ui-fabric-react";

import { DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { runInThisContext } from 'vm';
export interface IeProjectState {
  data: any;
  FunctionList: IFunctionList[];
  projectDetails: [],
  deltav: [],
  period: [],
  worldarea: [],
  EBU: [],
  platform: [],
  industry: [],
  subindustry: [],
  country: [],
}
export interface IeProjectProps {
  data: "",
  projectDetails: [],
  deltav: [],
  period: [],
  worldarea: [],
  EBU: [],
  platform: [],
  industry: [],
  subindustry: [],
  country: [],
  finyear: [],
  ProjectType: "",
  Subindustry: "",
  EPC: "",
  Dest: "",
  User: "",
  ProjectName: "",
  OnTimeDeliveryYear: "",
  OnTimeDeliveryPeriod: "",
}


declare var _spPageContextInfo;

let containerEl;
let externalWindow;

//Dropdown Variables
const stackTokens: IStackTokens = { childrenGap: 10 };
const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300, height: 20 }
}
const EBUoptions: IDropdownOption[] = [

  { key: 'EmersonBuisnessUnit', text: 'Emerson Buisness Unit', itemType: DropdownMenuItemType.Header },
  { key: 'Please Select', text: 'Please Select' },
  { key: 'ASCO', text: 'ASCO' },
  { key: 'DMC', text: 'DMC' },
  { key: 'MIB', text: 'MIB' },
  { key: 'MMI', text: 'MMI' },
  { key: 'PSS', text: 'PSS' },
  { key: 'PWS', text: 'PWS' },
  { key: 'RAI', text: 'RAI' },
  { key: 'RAS', text: 'RAS' },
  { key: 'RPC', text: 'RPC' },
  { key: 'RTC', text: 'RTC' },
  { key: 'SBG', text: 'SBG' }
];

const TypeOfProjectOptions: IDropdownOption[] = [

  { key: 'Type Of Project', text: 'Emerson Buisness Unit', itemType: DropdownMenuItemType.Header },
  { key: 'Please Select', text: 'Please Select' },
  { key: 'BPCS + SW', text: 'BPCS + SW' },
  { key: 'BPCS + SIS', text: 'BPCS + SIS' },
  { key: 'BPCS + SIS + HW', text: 'BPCS + SIS + HW' },
  { key: 'BPCS Only', text: 'BPCS Only' },
  { key: 'Custom MES Applications', text: 'Custom MES Applications' },
  { key: 'Human Centred Design', text: 'Human Centred Design' },
  { key: 'Migration ABB to DeltaV', text: 'Migration ABB to DeltaV' },
  { key: 'Hardware Only', text: 'Hardware Only' },
  { key: 'Migration Bailey to DeltaV', text: 'Migration Bailey to DeltaV' },
  { key: 'PWS Ovation + SIS', text: 'PWS Ovation + SIS' },
  { key: 'Migration Connect type', text: 'Migration Connect type' },
  { key: 'Migration DVOP, DOP', text: 'Migration DVOP, DOP' },
  { key: 'Migration Fix to iFix', text: 'Migration Fix to iFix' },
  { key: 'Migration Honeywell to DeltaV', text: 'Migration Honeywell to DeltaV' },
  { key: 'Migration Invensys to DeltaV', text: 'Migration Invensys to DeltaV' },
  { key: 'Migration Provox to DeltaV', text: 'Migration Provox to DeltaV' },
  { key: 'Migration Yokogawa to DeltaV', text: 'Migration Yokogawa to DeltaV' },
  { key: 'Migration PLC to DeltaV', text: 'Migration PLC to DeltaV' },
  { key: 'Migration Siemens to DeltaV', text: 'Migration Siemens to DeltaV' },
  { key: 'Migration RS3 to DeltaV', text: 'Migration RS3 to DeltaV' },
  { key: 'Final Control Elements', text: 'Final Control Elements' },
  { key: 'RAPWS SISI', text: 'PWS SIS' },
  { key: 'SW Tools', text: 'SW Tools' },
  { key: 'SharePoint Applications', text: 'SharePoint Applications' },
  { key: 'SIS Only', text: 'SIS Only' },
  { key: 'Syncade - Life Science', text: 'Syncade - Life Science' },
  { key: 'Syncade - MLM', text: 'Syncade - MLM' },
  { key: 'Upgrade', text: 'Upgrade' }


];
/*
Analytical, F&G
Daniel
Field Instrumentation
BPCS + HW
BPCS + SIS
BPCS Only
BPCS + SIS + HW
Custom MES Applications
MMI
Human Centred Design
Migration ABB to DeltaV
Hardware Only
Migration Bailey to DeltaV
PWS Ovation + SIS
Migration Connect type
Migration DVOP, DOP
Migration DVOR
Migration Fix to iFix
Migration Honeywell to DeltaV
Migration Invensys to DeltaV
Migration Provox to DeltaV
Migration Yokogawa to DeltaV
Final Control Elements
Migration PLC to DeltaV
Migration Siemens to DeltaV
Migration RS3 to DeltaV
RAS
PWS SIS
SW Tools
SharePoint Applications
Select..
SIS Only
Syncade - Life Science
Syncade - MLM
Upgrade
*/

export interface IFunctionList {
  ID: number;
  Title?: string;
  IFunctionList
}



export class ViewReportsPage extends React.PureComponent<{}, any>{
  constructor(props: IeProjectState) {
    super(props);


    externalWindow = null;
    this.handleInputChange = this.handleInputChange.bind(this)
    this.redirectToGeneralProject = this.redirectToGeneralProject.bind(this)
    //this.toggleWindowPortal = this.toggleWindowPortal.bind(this);
    // this.closeWindowPortal = this.closeWindowPortal.bind(this);
    this.state = {
      projectDetails: [],
      deltav: [],
      period: [],
      worldarea: [],
      EBU: [],
      platform: [],
      industry: [],
      subindustry: [],
      country: [],
      finyear: [],
      counter: 0,
      showWindowPortal: false,
      ActualsShelved: "Yes",
      ActualsClosed: "Yes",
      IsShelvedReport: "Yes",
      IsClosedReport: "Yes",
      ReportFromFY: "",
      ReportToFY: "",
      ProShelved: "Yes",
      ProClosed: "Yes",
    }
  }


  public loadprojectlist() {

    let initialProj = []
    debugger;
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Projectmaster')/Items?$top=45000`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          initialProj = response.d.results;
          var arr = Object.values(response.d.results);
          this.setState({
            projectDetails: arr,
          });
        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });

  }

  public EBU() {
    let initialProj = []
    debugger;
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('EmersonBusinessUnit')/Items?$top=4500`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          initialProj = response.d.results;
          var arr = Object.values(response.d.results);
          this.setState({
            EBU: arr,
          });
        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });
  }


  public loaddeltavversion() {
    let deltavversion = []
    debugger;
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('DeltaV%20Version')/Items?$top=4500`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          deltavversion = response.d.results;
          var arr = Object.values(response.d.results);
          this.setState({
            period: arr,
          });
        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });
  }

  public loadperiod() {
    let perioddetails = []
    debugger;
    let mySet = new Set();
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Period')/Items?$top=4500&$orderby=Period_x0020_Name desc`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          perioddetails = response.d.results;
          var arr = Object.values(response.d.results);

          this.setState({
            period: arr,


          });
        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });


  }

  public loadFY() {
    let deltavversion = []
    debugger;
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('DeltaV%20Version')/Items?$top=4500`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          deltavversion = response.d.results;
          var arr = Object.values(response.d.results);
          this.setState({
            deltav: arr,
          });
        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });
  }

  public loadworldarea() {
    let worledarea = []
    debugger;
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Country')/Items?$top=4500`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          worledarea = response.d.results;
          var arr = Object.values(response.d.results);
          this.setState({
            worldarea: arr,
          });
        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });

  }

  public loadPlatform() {
    let deltavversion = []
    debugger;
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Project%20Platform')/Items?$top=4500`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          deltavversion = response.d.results;
          var arr = Object.values(response.d.results);
          this.setState({
            platform: arr,
          });
        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });
  }
  public loadindustry() {

    let initialProj = []
    debugger;
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Type%20of%20Industry')/Items`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          initialProj = response.d.results;
          var arr = Object.values(response.d.results);
          this.setState({
            industry: arr,
          });
        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });

  }





  public componentDidMount() {
    this.loadprojectlist();
    this.loaddeltavversion();
    this.loadFY();
    this.loadperiod();
    this.EBU();
    this.loadPlatform();
    this.loadindustry();
    this.loadAllCountry();
    this.sortList();



    let initialProj = []
    debugger;
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Country')/Items`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          initialProj = response.d.results;
          var arr = Object.values(response.d.results);
          this.setState({
            worldarea: arr,
          });
        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });

  }





  /* functions */


  // public  handlechange = (name:any) => (value:any) => 
  // {
  //   let event:any;
  //   let projectDetails = this.state.projectDetails;   
  //   if (name==="pname")
  //   {
  //        projectDetails[name]= event.target['value']    
  //   }else {
  //     projectDetails[name] = value;
  // }
  // this.setState({
  //    projectDetails
  // });
  // }


  // const callpopup = () =>
  //  {
  //     let EBUOptionsTemplate =this.state.EBU.map(v => (
  //         <option value={v.EmersonDivision}>{v.EmersonDivision}</option>
  //       ));
  //             <NewWindow>
  //                 <div >

  //                             <select className="AR-Select" id="ddlEBU" onChange={this.handleInputChange}>
  //                                 { EBUOptionsTemplate}
  //                             </select>

  //                 </div>
  //             </NewWindow>
  //  }

  public redirectToGeneralProject(event) {


    if (event.target.id == "GeneralProject") {
      var redirectstring = "/sites/autosolpss/EEEC/EProjectControl/SiteAssets/GeneralProject.aspx?EBU=" + this.state.EditEBU + "&Dest=" + this.state.Dest + "&User=" + this.state.User +
        "&name=" + this.state.ProjectName + "&ToP=" + this.state.EditProjectType + "&EPC=" + this.state.EditEPC + "&DV=" + this.state.Editdeltav + "&Ind=" + this.state.Editindustry + "&SI=" + this.state.EditSubindustry +
        "&Type=" + this.state.TypeOfProject + "&FromFY=" + this.state.EditFrom + "&ToFY=" + this.state.EditTo + "&W=" + this.state.Editworldarea + "&C=" + this.state.EditCountry

      console.log(redirectstring);
      window.open(redirectstring);
    }
    if (event.target.id == "NotUpdated") {
      var redirectstring = "/sites/process-dev2/EEEC/EProjectControl/SiteAssets/Report_projectnotupdated.aspx"
      window.open(redirectstring)
    }
    if (event.target.id == "DiscrepancyActuals") {
      var redirectstring = "/sites/process-dev2/EEEC/EProjectControl/SiteAssets/Discrepancy.aspx?Shelved=" + this.state.ActualsShelved + "&Closed=" + this.state.ActualsClosed
      window.open(redirectstring)
    }

    if (event.target.id == 'DiscrepanctAct') {
      var redirectstring = "/sites/process-dev2/EEEC/EProjectControl/SiteAssets/Discrepancr_C.aspx?Shelved=" + this.state.ProShelved + "&Closed=" + this.state.ProClosed
      window.open(redirectstring)
    }
    if (event.target.id == "ClosedReport") {
      var redirectstring = "/sites/process-dev2/EEEC/EProjectControl/SiteAssets/ClosedReport.aspx?Shelved=" + this.state.IsShelvedReport + "&Closed=" + this.state.IsClosedReport + "&From=" + this.state.ReportFromFY + "&To=" + this.state.ReportToFY
      window.open(redirectstring)
    }
    if (event.target.id == "OnTimeDelivery") {
      var redirectstring = "/sites/process-dev2/EEEC/EProjectControl/SiteAssets/OnTimeDelivery.aspx?Year=" + this.state.OnTimeDeliveryYear + "&Period=" + this.state.OnTimeDeliveryPeriod
      window.open(redirectstring)

    }
  }


  public sortList() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("ddlDest");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // start by saying: no switching is done:
      switching = false;
      b = list.getElementsByTagName("option");
      // Loop through all list-items:
      for (i = 0; i < (b.length - 1); i++) {
        // start by saying there should be no switching:
        shouldSwitch = false;
        /* check if the next item should
        switch place with the current item: */
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          /* if next item is alphabetically
          lower than current item, mark as a switch
          and break the loop: */
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark the switch as done: */
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
  }


  public loadindsubtype(id) {
    let restid = id;
    let initialProj = []
    debugger;
    var lookupid;
    if (id == "Chemical")
      lookupid = 5
    if (id == 'Food & Beverage')
      lookupid = 1
    if (id == 'Utilities')
      lookupid = 2;
    if (id == 'Other')
      lookupid = 3;
    if (id == 'Metal And Mining')
      lookupid = 4;
    if (id == 'Pharmaceutical')
      lookupid = 6;
    if (id == 'Refining')
      lookupid = 7
    if (id == 'Pulp And Paper')
      lookupid = 8
    if (id == 'Internal')
      lookupid = 9
    if (id == 'Oil And Gas')
      lookupid = 10
    var string = '$select=Industry_x0020_Subtype,Type_x0020_of_x0020_Industry/Id &$expand=Type_x0020_of_x0020_Industry/Id &$filter=Type_x0020_of_x0020_Industry/Id eq' + lookupid



    //https://emerson.sharepoint.com/sites/process-dev2/EEEC/EProjectControl/_api/web/Lists/getByTitle('Industry%20Subtype')/items?$select=Industry_x0020_Subtype,Type_x0020_of_x0020_Industry/Id &$expand=Type_x0020_of_x0020_Industry/Id &$filter=Type_x0020_of_x0020_Industry/Id eq 1
    //const restUrl = _spPageContextInfo.webAbsoluteUrl + string;
    const restUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/Lists/getByTitle('Industry%20Subtype')/items?$select=Industry_x0020_Subtype,Type_x0020_of_x0020_Industry/Id &$expand=Type_x0020_of_x0020_Industry/Id &$filter=Type_x0020_of_x0020_Industry/Id eq " + lookupid
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          initialProj = response.d.results;
          var arr = Object.values(response.d.results);
          this.setState({
            subindustry: arr,
          });
        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });

  }

  public loadCountry(id) {

    if (id == "Please Select") {
      this.loadAllCountry()
    } else {
      //https://emerson.sharepoint.com/sites/process-dev2/EEEC/EProjectControl/_api/web/Lists/getByTitle('Country')/items?$filter=World_x0020_Area eq 'Europe'
      var string = '/items?$filter=World_x0020_Area eq' + id

      //https://emerson.sharepoint.com/sites/process-dev2/EEEC/EProjectControl/_api/web/Lists/getByTitle('Industry%20Subtype')/items?$select=Industry_x0020_Subtype,Type_x0020_of_x0020_Industry/Id &$expand=Type_x0020_of_x0020_Industry/Id &$filter=Type_x0020_of_x0020_Industry/Id eq 1
      //const restUrl = _spPageContextInfo.webAbsoluteUrl + string;
      const restUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/Lists/getByTitle('Country')/items?$filter=World_x0020_Area eq " + "'" + id + "'"
      return new Promise((resolve, reject) => {
        Helper.executeJson(restUrl, null, null, null)
          .then((response) => {
            // initialProj =response.d.results;
            var arr = Object.values(response.d.results);
            this.setState({
              country: arr,
            });
          }).catch((e) => {
            console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
            reject();
          });

      });
    }
  }



  public loadAllCountry() {
    //https://emerson.sharepoint.com/sites/process-dev2/EEEC/EProjectControl/_api/web/Lists/getByTitle('Country')/items?$filter=World_x0020_Area eq 'Europe'
    //var string = '/items?$filter=World_x0020_Area eq' + id

    //https://emerson.sharepoint.com/sites/process-dev2/EEEC/EProjectControl/_api/web/Lists/getByTitle('Industry%20Subtype')/items?$select=Industry_x0020_Subtype,Type_x0020_of_x0020_Industry/Id &$expand=Type_x0020_of_x0020_Industry/Id &$filter=Type_x0020_of_x0020_Industry/Id eq 1
    //const restUrl = _spPageContextInfo.webAbsoluteUrl + string;
    const restUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/Lists/getByTitle('Country')/items"
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          // initialProj =response.d.results;
          var arr = Object.values(response.d.results);
          this.setState({
            country: arr,
          });
        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });
  }
  public handleInputChange = (event) => {


    let ddltype = event.target.id;

    if (ddltype == "ReportFromFY") {
      this.setState({
        ReportFromFY: event.target.value
      })
    }


    if (ddltype == "OnTimeDelPeriod") {
      this.setState({
        OnTimeDeliveryPeriod: event.target.value
      })
    }
    if (ddltype == "onTimeDelYear") {
      this.setState({
        OnTimeDeliveryYear: event.target.value
      })
    }
    if (ddltype == "ReportToFY") {
      this.setState({
        ReportToFY: event.target.value
      })
    }
    if (ddltype == "isClosedReport") {
      var checked = event.target.checked
      if (checked == true) {
        this.setState({
          IsClosedReport: "Yes"
        })
      }
      if (checked == false) {
        this.setState({
          IsClosedReport: "No"
        })
      }

    }

    if (ddltype == "isShelvedReport") {
      var checked = event.target.checked
      if (checked == true) {
        this.setState({
          IsShelvedReport: "Yes"
        })
      }
      if (checked == false) {
        this.setState({
          IsShelvedReport: "No"
        })
      }

    }

    if (ddltype == "isActualsClosed") {
      var checked = event.target.checked
      if (checked == true) {
        this.setState({
          ActualsClosed: "Yes"
        })
      }
      if (checked == false) {
        this.setState({
          ActualsClosed: "No"
        })
      }
    }

    if (ddltype == "isActualsShelved") {
      var checked = event.target.checked
      if (checked == true) {
        this.setState({
          ActualsShelved: "Yes"
        })
      }
      if (checked == false) {
        this.setState({
          ActualsShelved: "No"
        })
      }
    }
    if (ddltype == "isProClosed") {
      var checked = event.target.checked
      if (checked == true) {
        this.setState({
          ProClosed: "Yes"
        })
      }
      if (checked == false) {
        this.setState({
          ProClosed: "No"
        })
      }
    }

    if (ddltype == "isProShelved") {
      var checked = event.target.checked
      if (checked == true) {
        this.setState({
          ProShelved: "Yes"
        })
      }
      if (checked == false) {
        this.setState({
          ProShelved: "No"
        })
      }
    }








    if (ddltype == "ddlInd") {
      let id = event.target.value;
      let name = event.target.value
      this.loadindsubtype(name)
      this.setState({
        Editindustry: event.target.value
      })

    }
    ;
    if (ddltype == "ddlCountry") {
      let id = event.target.value;
      let name = event.target.value
      this.loadCountry(name)
      this.setState({
        Editworldarea: event.target.value
      })

    }
    if (ddltype == "ddlEBU") {
      let id = event.target.value;
      let name = event.target.value

      this.setState({
        EditEBU: event.target.value
      })

    }
    if (ddltype == "ddlType") {
      let id = event.target.value;
      let name = event.target.value

      this.setState({
        TypeOfProject: event.target.value
      })

    }
    if (ddltype == "ddlProjName") {
      let id = event.target.value;
      let name = event.target.value

      this.setState({
        ProjectName: event.target.value
      })

    }
    if (ddltype == "ddlUser") {
      let id = event.target.value;
      let name = event.target.value

      this.setState({
        User: event.target.value
      })

    }
    if (ddltype == "ddlDest") {
      let id = event.target.value;
      let name = event.target.value

      this.setState({
        Dest: event.target.value
      })

    }
    if (ddltype == "ddlEPC") {
      let id = event.target.value;
      let name = event.target.value

      this.setState({
        EditEPC: event.target.value
      })

    }
    if (ddltype == "ddlDeltav") {
      let id = event.target.value;
      let name = event.target.value

      this.setState({
        Editdeltav: event.target.value
      })

    }
    if (ddltype == "ddlSub") {
      let id = event.target.value;
      let name = event.target.value

      this.setState({
        EditSubindustry: event.target.value
      })

    }
    if (ddltype == "ProjectType") {
      let id = event.target.value;
      let name = event.target.value

      this.setState({
        EditProjectType: event.target.value
      })

    }
    if (ddltype == "ddlFrom") {
      let id = event.target.value;
      let name = event.target.value

      this.setState({
        EditFrom: event.target.value
      })

    }
    if (ddltype == "ddlTo") {
      let id = event.target.value;
      let name = event.target.value

      this.setState({
        EditTo: event.target.value
      })

    }
    if (ddltype == "ddlCtry") {
      let id = event.target.value;
      let name = event.target.value

      this.setState({
        EditCountry: event.target.value
      })

    }


  };





  public render() {

    debugger;
    const uniqueNames = Array.from(new Set(this.state.projectDetails.map(v => v.ProjectName)));
    let optionTemplate = this.state.projectDetails.map(v => (
      <option value={v.ProjectName}>{v.ProjectName}</option>
    ));

    let EndUserOptionTemplate = this.state.projectDetails.map(v => (
      <option value={v.End_x0020_User}>{v.End_x0020_User}</option>
    ));
    let EPCUserOptionTemplate = this.state.projectDetails.map(v => (
      <option value={v.EPC}>{v.EPC}</option>
    ));
    let EndDestinationOptionTemplate = this.state.projectDetails.map(v => (
      <option value={v.End_x0020_Destination}>{v.End_x0020_Destination}</option>
    ));
    let DeltaVoptionTemplate = this.state.deltav.map(v => (
      <option value={v.DeltaVversion}>{v.DeltaVversion}</option>
    ));
    let PeridoptionTemplate = this.state.period.map(v => (
      <option value={v.Period_x0020_Name}>{v.Period_x0020_Name}</option>
    ));

    let WorldareaoptionTemplate = this.state.worldarea.map(v => (
      <option value={v.World_x0020_Area}>{v.World_x0020_Area}</option>
    ));

    let EBUOptionsTemplate = this.state.EBU.map(v => (
      <option value={v.EmersonDivision}>{v.EmersonDivision}</option>
    ));

    let ProjectOptionsTemplate = this.state.platform.map(v => (
      <option value={v.Project_x0020_Platform}>{v.Project_x0020_Platform}</option>
    ));
    let IndustryOptionsTemplate = this.state.industry.map(v => (
      <option value={v.Type_x0020_of_x0020_Industry}>{v.Type_x0020_of_x0020_Industry}</option>
    ));
    // let FinyearOptionsTemplate = this.state.finyear.map(v => (
    //  <option value={v.FinYear}>{v.FinYear}</option>
    //));
    let SubIndsutryOptionsTemplate = this.state.subindustry.map(v => (
      <option value={v.Industry_x0020_Subtype.toString()}>{v.Industry_x0020_Subtype.toString()}</option>
    ));

    let CountryList = this.state.country.map(v => (
      <option value={v.Country}>{v.Country}</option>
    ));









    return (
      <div id="mainContainerRender">
        <Card>
          <h5 className="table-color" id="mainSubheader">e-Project Control</h5>
          <div id="DottedBox_content">
            <Accordion defaultActiveKey="0">

              <Card.Header >
                <Accordion.Toggle as={Button} variant="link" eventKey="1"  >
                  <b><span className="subheader"> + General Project Details</span></b>
                </Accordion.Toggle>

              </Card.Header>

              <Accordion.Collapse eventKey="1">
                <Card.Body>


                  <table className="tblmain" id="tblmain">
                    <tbody>
                      <tr>
                        <td style={{ width: "10%" }}> <b> Emerson Business Unit </b></td>
                        <td style={{ width: "23%" }}>
                          <Stack tokens={stackTokens}>
                            <select className="AR-Select" id="ddlEBU" onChange={this.handleInputChange}>
                              <option value="select">Please Select</option>
                              {EBUOptionsTemplate}
                            </select>
                          </Stack>
                        </td>
                        <td style={{ width: "10%" }}><b> Type Of Project </b></td>
                        <td style={{ width: "23%" }}><Stack tokens={stackTokens}>
                          <select className="AR-Select" id="ddlType" onChange={this.handleInputChange} >
                            <option value="select" >Please Select</option>
                            {ProjectOptionsTemplate}</select>
                        </Stack></td>
                        <td style={{ width: "10%" }}> <b> Project Name</b></td>
                        <td style={{ width: "23%" }}>
                          <Stack tokens={stackTokens}>

                            <select className="AR-Select" id="ddlProjName" onChange={this.handleInputChange}>
                              <option value="select">Please Select</option>
                              {optionTemplate}

                            </select>
                          </Stack>
                        </td>



                      </tr>
                      <br></br>
                      <tr>
                        <td> <b> End User </b></td>
                        <td>
                          <Stack tokens={stackTokens}>

                            <select className="AR-Select" id="ddlUser" onChange={this.handleInputChange}>
                              <option value="select">Please Select</option>
                              {EndUserOptionTemplate}
                            </select>
                          </Stack>
                        </td>
                        <td><b> End Destination </b></td>
                        <td><Stack tokens={stackTokens}>

                          <select className="AR-Select" id="ddlDest" onChange={this.handleInputChange}>
                            <option value="select">Please Select</option>
                            {EndDestinationOptionTemplate}
                          </select>
                        </Stack></td>
                        <td> <b> EPC</b></td>
                        <td>
                          <Stack tokens={stackTokens}>
                            <select className="AR-Select" id="ddlEPC" onChange={this.handleInputChange}>
                              <option value="select">Please Select</option>
                              {EPCUserOptionTemplate}
                            </select>
                          </Stack>
                        </td>

                      </tr>
                      <br></br>
                      <tr>
                        <td> <b> DeltaV Version </b></td>
                        <td>
                          <Stack tokens={stackTokens}>
                            <select className="AR-Select" id="ddlDeltav" onChange={this.handleInputChange}>
                              <option value="select" >Please Select</option>
                              {DeltaVoptionTemplate}
                            </select>
                          </Stack>
                        </td>
                        <td><b> Type Of Industry </b></td>
                        <td>
                          <Stack tokens={stackTokens}>
                            <select className="AR-Select" onChange={this.handleInputChange} id="ddlInd">
                              {IndustryOptionsTemplate}
                              <option value="select">Please Select</option>
                            </select> </Stack>

                        </td>
                        <td> <b>Application/Industry Subtype</b></td>
                        <td>
                          <Stack tokens={stackTokens}>
                            <select className="AR-Select" onChange={this.handleInputChange} id="ddlSub">
                              <option value="select">Please Select</option>
                              {SubIndsutryOptionsTemplate}
                            </select>
                          </Stack>
                        </td>

                      </tr>
                      <br></br>
                      <tr>
                        <td> <b> Project Type </b></td>
                        <td>
                          <Stack tokens={stackTokens} >
                            <select id="ProjectType" onChange={this.handleInputChange} >
                              <option value="select">Please Select</option>
                              <option value="MAC">MAC</option>
                              <option value="MIV">MIV/FIV</option>
                              <option value="BU">Non-PSG BU</option>
                              <option value="Site">Site Support Only</option>
                              <option value="Other">Other</option>
                              <option value="Services">Services Only</option>
                            </select>
                          </Stack>
                        </td>
                        <td><b> From Financial Year </b></td>
                        <td><Stack tokens={stackTokens}>
                          <select className="AR-Select" id="ddlFrom" onChange={this.handleInputChange}>
                            <option value="select">Please Select</option>
                            {PeridoptionTemplate}
                          </select>
                        </Stack></td>
                        <td> <b> To Financial Year</b></td>
                        <td>
                          <Stack tokens={stackTokens}>
                            <select className="AR-Select" id="ddlTo" onChange={this.handleInputChange}>
                              <option value="select">Please Select</option>
                              {PeridoptionTemplate}
                            </select>
                          </Stack>
                        </td>

                      </tr>
                      <br></br>
                      <tr>
                        <td> <b>World Area </b></td>
                        <td>
                          <Stack tokens={stackTokens} onChange={this.handleInputChange} id="ddlCountryy">
                            <select className="AR-Select" id="ddlCountry">
                              <option>Please Select</option>
                              <option value="Central Europe">Central Europe</option>
                              <option value="Asia Pacific">Asia Pacific</option>
                              <option value="Eastern Europe">Eastern Europe</option>
                              <option value="Russia and Baltic Countries">Russia and Baltic Countries</option>
                              <option value="Scandinavian Europe">Scandinavian Europe</option>
                              <option value="LA">LA</option>
                              <option value="Middle East And Africa">Middle East And Africa</option>
                              <option value="Europe">Europe</option>
                              <option value="Other">Other</option>

                            </select>
                          </Stack>
                        </td>
                        <td><b> Country (Booking) </b></td>
                        <td> <Stack tokens={stackTokens}>
                          <select className="AR-Select" onChange={this.handleInputChange} id="ddlCtry">
                            <option value="select"  >Please Select</option>
                            {CountryList}
                          </select>
                        </Stack></td>


                      </tr>
                    </tbody>
                  </table>
                  <span className="Button" >   <button className="btn btn-primary" id="GeneralProject" style={{ textAlign: 'initial' }} onClick={this.redirectToGeneralProject}>Generate Report</button> </span>
                </Card.Body>
              </Accordion.Collapse>
            </Accordion>
            <Accordion>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <b><span className="subheader"> + On Time Delivery Reports</span></b>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <table>
                    <tr>
                      <td> <b>Financial year </b></td>
                      <td>
                        <Stack tokens={stackTokens}>
                          <select id="onTimeDelYear" className="AR-Select" onChange={this.handleInputChange}>
                            <option value="">Please Select</option>
                            <option>FY20</option>
                            <option>FY19</option>
                            <option>FY18</option>
                            <option>FY17</option>
                            <option>FY16</option>
                            <option>FY15</option>
                            <option>FY14</option>
                            <option>FY13</option>
                            <option>FY12</option>
                            <option>FY11</option>
                            <option>FY10</option>
                            <option>FY09</option>
                            <option>FY08</option>
                            <option>FY07</option>
                            <option>FY06</option>
                            <option>FY05</option>
                            <option>FY04</option>
                            <option>FY03</option>
                            <option>FY02</option>


                          </select>
                        </Stack>
                      </td>
                      <td><b> Period </b></td>
                      <td> <Stack tokens={stackTokens}>
                        <select id="OnTimeDelPeriod" className="AR-Select" onChange={this.handleInputChange}>
                          <option value="">Please Select</option>
                          <option value="P01">P01</option>
                          <option value="P02">P02</option>
                          <option value="P03">P03</option>
                          <option value="P04">P04</option>
                          <option value="P05">P05</option>
                          <option value="P06">P06</option>
                          <option value="P07">P07</option>
                          <option value="P08">P08</option>
                          <option value="P09">P09</option>
                          <option value="P10">P10</option>
                          <option value="P11">P11</option>
                          <option value="P12">P12</option>

                        </select>
                      </Stack></td>


                    </tr>
                  </table>
                  <br></br>
                  <span className="Button" >   <button className="btn btn-primary" id="OnTimeDelivery" onClick={this.redirectToGeneralProject} style={{ textAlign: 'initial' }}>Generate Report</button> </span>


                </Card.Body>
              </Accordion.Collapse>
            </Accordion>
            <Accordion>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <b><span className="subheader"> + Projects not updated in given number of days </span></b>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <span className="Button" >   <button className="btn btn-primary" id="NotUpdated" onClick={this.redirectToGeneralProject} style={{ textAlign: 'initial' }}>Generate Report</button> </span>
                </Card.Body>
              </Accordion.Collapse>
            </Accordion>
            <Accordion>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <b><span className="subheader"> + Projects with discrepancy in Budget, ETC and actuals  </span></b>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <table>
                    <tr>
                      <td><td>Shelved</td>
                        <input name="isActualsShelved" id="isActualsShelved" type="checkbox" defaultChecked={true} onClick={this.handleInputChange} />
                      </td>
                      <td><td>Closed</td>
                        <input name="isActualsClosed" id="isActualsClosed" type="checkbox" defaultChecked={true} onClick={this.handleInputChange} />
                      </td>
                    </tr>
                    <br>
                    </br>
                    <tr>
                      <td>
                        <span className="Button" >   <button className="btn btn-primary" id="DiscrepancyActuals" style={{ textAlign: 'initial' }} onClick={this.redirectToGeneralProject}>Generate Report</button> </span>
                      </td>
                    </tr>
                  </table>



                </Card.Body>
              </Accordion.Collapse>
            </Accordion>
            <Accordion>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <b><span className="subheader"> + Projects with discrepancy in % progress and the actuals   </span></b>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <table>
                    <tr>

                      <td><td>Shelved</td>
                        <input name="isProShelved" id="isProShelved" type="checkbox" onClick={this.handleInputChange} defaultChecked={true} />
                      </td>
                      <td><td>Closed</td>
                        <input name="isProClosed" id="isProClosed" type="checkbox" onClick={this.handleInputChange} defaultChecked={true} />
                      </td>
                    </tr>
                    <tr>
                      <td>   <span className="Button" >   <button className="btn btn-primary" id="DiscrepanctAct" onClick={this.redirectToGeneralProject} style={{ textAlign: 'initial' }}>Generate Report</button> </span></td>
                    </tr>
                  </table>


                </Card.Body>
              </Accordion.Collapse>
            </Accordion>
            <Accordion>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <b><span className="subheader"> + Delivered and Closed Projects Report   </span></b>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>

                  <table>
                    <tr>
                      <td><b> From Financial Year </b></td>
                      <td><Stack tokens={stackTokens}>
                        <select className="AR-Select" id="ReportFromFY" onClick={this.handleInputChange}>
                          <option> Please Select</option>
                          {PeridoptionTemplate}

                        </select>
                      </Stack></td>
                      <td> <b> To Financial Year</b></td>
                      <td>
                        <Stack tokens={stackTokens} >
                          <select className="AR-Select" id="ReportToFY" onClick={this.handleInputChange}>
                            <option> Please Select</option>
                            {PeridoptionTemplate}
                          </select>
                        </Stack>
                      </td>

                      <td><td>Delivered</td>
                        <input name="isShelvedReport" id="isShelvedReport" type="checkbox" onClick={this.handleInputChange} defaultChecked={true} />
                      </td>
                      <td><td>Closed</td>
                        <input name="isClosedReport" id="isClosedReport" type="checkbox" onClick={this.handleInputChange} defaultChecked={true} />
                      </td>

                    </tr>
                    <br></br>
                    <tr>
                      <td>   <span className="Button" >   <button className="btn btn-primary" id="ClosedReport" onClick={this.redirectToGeneralProject} style={{ textAlign: 'initial' }}>Generate Report</button> </span></td>
                    </tr>

                  </table>


                </Card.Body>
              </Accordion.Collapse>
            </Accordion>
          </div>

        </Card>
      </div>
    )
  }

}




export default ViewReportsPage;