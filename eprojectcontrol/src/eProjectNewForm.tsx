import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';
import { SPPeoplePicker } from "./peoplepicker";
import $ from 'jquery';
import store from './action/saveaction'
//import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { IStackTokens, Stack } from 'office-ui-fabric-react/lib/Stack';
//import DayPickerStrings from 'office-ui-fabric-react'
import { DayPickerStrings } from './strings';

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
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import {
  Label, Checkbox, PrimaryButton, Selection, SelectionMode, TextField, IPersonaProps, IPersona, DatePicker, DayOfWeek, Dropdown, values, DefaultButton, inputProperties
} from "office-ui-fabric-react";
import { Helper } from './helper';
import { DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { allResolved } from 'q';
import { string } from 'prop-types';
import { cpus } from 'os';
initializeIcons(/* optional base url */);
export interface IeProjectState {
  data: any;
  EBU: any;
  EPC: any;
}




/*dropdown options */
declare var _spPageContextInfo;
let pstartDate;
let pendDate;
let pactDate;
let CurrentFinPeriod = [];
let CurrentPeriod;
let agreedendate
let cnt;
let cntQuality;

const stackTokens: IStackTokens = { childrenGap: 10 };
export interface NewFormProps {
  data: any;
  EBU: any;
  BU: any;
}

export class eProjectNewForm extends React.Component<{}, any>{
  public EPC; EndUser; EndDestination; DeltaV; ProjectID; ProjectDate; ProjectPeriod; ProjectName; HWIO; SWIO; FFIO; SSIO; module
  public ModuleClasses; ComplexLoops; EQM; PhraseClasses; OP; UP; PR; Dynamos; Display; Cabinet; ILD; FSOLE; FSOPM; FSOHW; EECPM; BudgetChange;
  public ScheduleChange; ProgressDev; UpdateFreq; BudgetDev; Status; AgreedBudget; InternalBudget; Actuals; ETC; Progress; ExpHours; ActualEnd;
  public Remark; EQMClasses; postdeliveryComments
  public NoOfSLS; NodesDelta; NoOfControl
  public newModule; newModuleClasses; postdelivery; hardcopy; hardcopyComments;
  public delivery; deliverycomments; projectComments; CloseNotes; PAS;
  public ITSS; ITSS2; ITSSComments; ITSS2Comments; donglereturn; dongleComments; projectcorrect
  public close; closeComments; resourceskill; resourceskillComments; CSS; CSSComments; EEEEC;
  public ProjectType; IndType; IndSubType; Country; WorldArea; ProjPlatform; EEECProjID; EBUU;
  public DCSAI; DCSAO; DCSDI; DCSDO; SISAI; SISAO; SISDI; SISDO
  public WorkstationNodes; NoofCIOC; NoofCSLS; CEModules; VotingLogic;
  public SysCabinet; MarshallingCabinets; ServerCabinet; PDBCabinet; RiskRegister
  public FHX; FHXComments;
  constructor(props: IeProjectState) {

    super(props);
    this.EPC = React.createRef();
    this.FHX = React.createRef();
    this.FHXComments = React.createRef();
    this.PDBCabinet = React.createRef();
    this.RiskRegister = React.createRef();
    this.DCSDO = React.createRef();
    this.SysCabinet = React.createRef();
    this.MarshallingCabinets = React.createRef();
    this.ServerCabinet = React.createRef();
    this.PDBCabinet = React.createRef();
    this.PAS = React.createRef();
    this.EndDestination = React.createRef();
    this.EndUser = React.createRef();
    this.EndUser = React.createRef();
    this.DeltaV = React.createRef();
    this.ProjectID = React.createRef();
    this.ProjectDate = React.createRef();
    this.ProjectPeriod = React.createRef();
    this.ProjectName = React.createRef();
    this.WorkstationNodes = React.createRef();
    this.NoofCIOC = React.createRef();
    this.NoofCSLS = React.createRef();
    this.CEModules = React.createRef();
    this.VotingLogic = React.createRef();



    this.SWIO = React.createRef();
    this.HWIO = React.createRef();
    this.FFIO = React.createRef();
    this.SSIO = React.createRef();
    this.module = React.createRef();
    this.newModule = React.createRef();
    this.newModuleClasses = React.createRef();
    this.ModuleClasses = React.createRef();
    this.Remark = React.createRef();
    this.ActualEnd = React.createRef();
    this.ExpHours = React.createRef();
    this.Progress = React.createRef();
    this.ETC = React.createRef();
    this.Actuals = React.createRef();
    this.InternalBudget = React.createRef();
    this.AgreedBudget = React.createRef();
    this.BudgetDev = React.createRef();
    this.UpdateFreq = React.createRef();
    this.ProgressDev = React.createRef();
    this.ScheduleChange = React.createRef();
    this.BudgetChange = React.createRef();
    this.ILD = React.createRef();
    this.Display = React.createRef();
    this.PR = React.createRef();
    this.UP = React.createRef();
    this.OP = React.createRef();
    this.EQM = React.createRef();
    this.EQMClasses = React.createRef();
    this.ComplexLoops = React.createRef();
    this.PhraseClasses = React.createRef();
    this.Dynamos = React.createRef();
    this.Cabinet = React.createRef();
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleHWChange = this.handleHWChange.bind(this)
    this.loadsubind = this.loadsubind.bind(this)
    this.handlePeopleChnage = this.handlePeopleChnage.bind(this)
    this.postdata = this.postdata.bind(this);
    this.handleEEECLEChange = this.handleEEECLEChange.bind(this)
    this.handleFSOLEChange = this.handleFSOLEChange.bind(this)
    this.handleFSOPMChange = this.handleFSOPMChange.bind(this)
    this.inccounter = this.inccounter.bind(this);


    this.AnalysisInfoArrow = this.AnalysisInfoArrow.bind(this);
    this.AnalysisConfigArrow = this.AnalysisConfigArrow.bind(this);
    this.AnalysisTrackArrow = this.AnalysisTrackArrow.bind(this);
    this.AnalysisCloseArrow = this.AnalysisCloseArrow.bind(this);

    this.AnalysisArrow = this.AnalysisArrow.bind(this);

    this.handleDateEvent = this.handleDateEvent.bind(this);
    this.toggleChange = this.handleInputChange.bind(this)
    this.ontextChange = this.ontextChange.bind(this)
    this.getExpectedHours = this.getExpectedHours.bind(this)
    this.NoOfControl = React.createRef();
    this.NoOfSLS = React.createRef();
    this.NodesDelta = React.createRef();
    this.closeComments = React.createRef();
    this.close = React.createRef();
    this.CSS = React.createRef();
    this.CSSComments = React.createRef();
    this.ITSS = React.createRef();
    this.ITSS2 = React.createRef();
    this.ITSS2Comments = React.createRef();
    this.ITSSComments = React.createRef();
    this.dongleComments = React.createRef();
    this.donglereturn = React.createRef();
    this.resourceskill = React.createRef();
    this.resourceskillComments = React.createRef();
    this.close = React.createRef();
    this.closeComments = React.createRef();
    this.postdelivery = React.createRef();
    this.postdeliveryComments = React.createRef();
    this.hardcopy = React.createRef();
    this.hardcopyComments = React.createRef();
    this.delivery = React.createRef();
    this.deliverycomments = React.createRef();
    this.projectcorrect = React.createRef();
    this.projectComments = React.createRef();
    this.Status = React.createRef();
    this.EEECProjID = React.createRef();
    this.ProjPlatform = React.createRef();
    this.Country = React.createRef();
    this.WorldArea = React.createRef();
    this.IndSubType = React.createRef();
    this.IndType = React.createRef();
    this.ProjectType = React.createRef();
    this.EBUU = React.createRef();
    this.CloseNotes = React.createRef();
    this.DCSAI = React.createRef();
    this.DCSAO = React.createRef();
    this.DCSDI = React.createRef();
    this.SISAI = React.createRef();
    this.SISAO = React.createRef();
    this.SISDI = React.createRef();
    this.SISDO = React.createRef();






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
      showResults: true,
      year: 0,
      unit: "",
      prjpltfrmunit: "",
      counter: 0,
      EEECID: "",
      CountryCode: "OTH",
      qualitycounter: 900,
      oldcounter: 0,
      zero: false,
      title: "",
      ProjEndDate: null,
      ProjRequestEndDate: null,
      AgreedEndDate: null,
      currentDate: null,
      EEECPM: null,
      EEECLE: null,
      FSOLE: null,
      FSOPM: null,
      FinPeriod: "",
      ExpectedHoursPerWeek: 0,
      EndFinPeriod: "",
      PAS: "",
      today: new Date(),

    }
  }


  public getExpectedHours() {
    //get ETC value
    var valueETC = parseInt(this.ETC.current.value);
    //get Agreed end date 
    let valueAgreedEndDate = new Date(Date.parse(this.state.AgreedEndDate));

    //get todays date as reference
    var refDate = new Date();

    //get value 1st jan
    var oneJan = new Date(refDate.getFullYear(), 0, 1);

    //get user entered agreed end date week no
    var agreedEndDtWeekNo = Math.ceil((((valueAgreedEndDate.valueOf() - oneJan.valueOf()) / 86400000) + oneJan.getDay()) / 7);

    //get todays date;
    var todaysDt = new Date(refDate.getFullYear(), refDate.getMonth(), refDate.getDate());
    //get todays date week no
    var todaysWeekNo = Math.ceil((((todaysDt.valueOf() - oneJan.valueOf()) / 86400000) + oneJan.getDay()) / 7);
    if (todaysWeekNo == NaN) {
      todaysWeekNo = 2
    }
    //get the no of remaining weeks
    var diffDateValue = agreedEndDtWeekNo - todaysWeekNo;
    if (diffDateValue == 0) {
      var answer = 0
    } else {
      var answer = valueETC / diffDateValue;
    }


    answer = Math.abs(answer);
    console.log(answer)
    this.setState(
      {
        ExpectedHoursPerWeek: answer,
      }
    )






  }

  public ontextChange(event) {
    if (event.target.id = "addEPC")
      this.setState({ EPC: event.target.value })
  }
  public loadprojectlist() {

    let initialProj = []
    debugger;
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Projectmaster')/Items?$top=4500`;
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
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('EmersonBusinessUnit')/Items?$top=4500&$orderby=EmersonDivision`;
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
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Period')/Items?$top=4500`;
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
    // get current FY 

    var year = (new Date()).getFullYear();
    let shortyear: any = year.toString().substring(2); // 19
    var today = new Date();
    var currmonth = today.getMonth();
    if (currmonth >= 8) {
      shortyear = parseInt(shortyear) + 1;
      this.setState({
        year: shortyear
      })
    } else {
      this.setState({
        year: shortyear
      })
    }


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

  public loadworldarea(name) {
    let worledarea = []
    debugger;
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Country')/Items?$filter=CountryCode eq '` + name + `'`;
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
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Project%20Platform')/Items?$top=4500&$orderby=Project_x0020_Platform`;
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
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Type%20of%20Industry')/Items?$top=4500&$orderby=Type_x0020_of_x0020_Industry`;
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

  public getcurrentcsergroup() {
    debugger;
    var url = _spPageContextInfo.webAbsoluteUrl + '/_api/web/currentuser/groups'
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('World%20Area')/Items`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(url, null, null, null)
        .then((response) => {
          var group = response.d.results;
          var arr;
          for (let i in response.d.results) {
            console.log(response.d.results[i].Title)
            if (response.d.results[i].Title == "QualityTeam") {
              this.setState({
                showResults: false,
                opacity: false
              });
            }
          }



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
    this.getcurrentcsergroup();
    this.loadCountry();
    this.loadcounter();
    this.loadindsubtype('Food And Beverage');

    var year = new Date().getFullYear();
    var short_year = year.toString().substring(2)
    // this.getCurrentFY(short_year, new Date(), "start")

    // this.postdata();




  }

  public loadsubind() {

  }
  public postdata(e) {
    debugger;
    e.preventDefault();
    var CloseNotes = this.CloseNotes.current.value
    var EPC = this.EPC.current.value;
    var HWIO = this.HWIO.current.value;
    var ProjPlatform = this.ProjPlatform.current.value;
    var SWIO = this.SWIO.current.value;
    var SSIO = this.SSIO.current.value;
    var projectID = this.ProjectID.current.value;
    var projectName = this.ProjectName.current.value;
    var DeltaV = this.DeltaV.current.value;
    var ProjectPeriod = this.ProjectPeriod.current.value;
    var EndUser = this.EndUser.current.value;
    var EndDestination = this.EndDestination.current.value;
    var FFIO = this.FFIO.current.value
    var ComplexLoops = this.ComplexLoops.current.value;
    var EQMClasses = this.EQMClasses.current.value;
    var EQM = this.EQM.current.value;
    var phrase = this.PhraseClasses.current.value;
    var OP = this.OP.current.value;
    var UP = this.UP.current.value;
    var PR = this.PR.current.value;
    var Dynamos = this.Dynamos.current.value;
    var Cabinet = this.Cabinet.current.value;
    var ILD = this.ILD.current.value;
    var BudgetChange = this.BudgetChange.current.value;
    var ScheduleChange = this.ScheduleChange.current.value;
    var ProgressDev = this.ProgressDev.current.value;
    var UpdateFrequency = this.UpdateFreq.current.value;
    var BudgetDev = this.BudgetDev.current.value;
    var AgreedBudget = this.AgreedBudget.current.value;
    var InternalBudget = this.InternalBudget.current.value;
    var Actuals = this.Actuals.current.value;
    var ETC = this.ETC.current.value;
    var ProgressDev = this.ProgressDev.current.value;
    var ExpHours = this.ExpHours.current.value;
    var ActualEnd = this.ActualEnd.current.value;
    var Remark = this.Remark.current.value;
    var Display = this.Display.current.value;
    var PhraseClasses = this.PhraseClasses.current.value;
    var NoOfControl = this.NoOfControl.current.value;
    var NoOfSLS = this.NoOfSLS.current.value;
    var NodesDelta = this.NodesDelta.current.value;
    var EBU = this.state.EBU
    let newModule = this.newModule.current.value
    let newModuleClasses = this.newModuleClasses.current.value
    let Progress = this.Progress.current.value
    let FHX = this.FHX.current.value
    let FHXComments = this.FHXComments.current.value
    var CSS = this.CSS.current.value
    var CSSComments = this.CSSComments.current.value
    var ITSS = this.ITSS.current.value
    var ITSSComments = this.ITSSComments.current.value
    var ITSS2 = this.ITSS2.current.value
    var ITSS2Comments = this.ITSS2Comments.current.value
    var Dongle = this.donglereturn.current.value
    var DongleComments = this.dongleComments.current.value
    var Delivery = this.delivery.current.value
    var DeliveryComments = this.deliverycomments.current.value
    var ProjectCorrect = this.projectcorrect.current.value
    var ProjectCorrectComments = this.projectComments.current.value
    var PostDelivery = this.postdelivery.current.value
    var PostDeliveryComments = this.postdeliveryComments.current.value
    var ResourceSkill = this.resourceskill.current.value
    var ResourceSkillComments = this.resourceskillComments.current.value
    var Close = this.close.current.value
    var CloseComments = this.closeComments.current.value
    var HardCopy = this.hardcopy.current.value
    var HardCopyComments = this.hardcopyComments.current.value



    var EBUU = this.EBUU.current.value
    var Country = this.Country.current.value
    var WorldArea = this.WorldArea.current.value
    var IndType = this.IndType.current.value
    var IndSubType = this.IndSubType.current.value
    var ProjPlatform = this.ProjPlatform.current.value
    var Status = this.Status.current.value
    var ProjType = this.ProjectType.current.value
    var EEECProjID = this.EEECProjID.current.value
    var ProjectStartDate = pstartDate
    var ProjectEndDate = pendDate
    var ProjectActdate = pactDate
    var ProjectAgreedEndDate = agreedendate
    var chkRVO2 = this.state.RVO2
    var chkResourceCertifications = this.state.ResourceCertifications
    var chkLBPManagingFAT = this.state.LBPManagingFAT
    var chkPAS = this.state.PAS
    var chkSIS = this.state.SIS
    var chkEI = this.state.EI
    var chkICSS = this.state.ICSS
    var chkSyncade = this.state.Syncade
    var chkTMS = this.state.TMS
    var chkMHM = this.state.MHM
    var chkWireless = this.state.Wireless
    var chkFEED = this.state.FEED
    var chkConsultancy = this.state.Consultancy
    var chkiSolution = this.state.iSolution
    var chkOSIPI = this.state.OSIPI
    var chkCybersecurity = this.state.Cybersecurity
    var postdelivery = this.postdelivery.current.value
    var postdeliveryComments = this.postdeliveryComments.current.value
    var saveCHK = this.state.chkPDL
    var savePCSD = this.state.PCSD
    var chkCTO = this.state.CTO
    var chkDVLive = this.state.DVLive
    var VotingLogic = this.VotingLogic.current.value


    //console.log(title);

    //binding for lookup
    var countryID = parseInt(this.Country.current.selectedOptions[0].id);
    //var worldAreaID = this.WorldArea.current.selectedOptions[0].id
    var IndSubID = parseInt(this.IndSubType.current.selectedOptions[0].id);

    return new Promise((resolve, reject) => {

      const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Projectmaster')/Items`;
      const headers = { 'content-Type': 'application/json;odata=verbose' };
      const listTitle = "Projectmaster";
      const savedata =
      {
        '__metadata': { 'type': 'SP.Data.' + listTitle + 'ListItem' },
        Title: "new MMID2",
        EPC: EPC,
        HWIO: HWIO,
        SWIO: SWIO,
        ProjectPlatform: ProjPlatform,
        SSIO: SSIO,
        ProjectID: projectID,
        ClarityID: projectID,
        ProjectName: projectName,
        End_x0020_User: EndUser,
        End_x0020_Destination: EndDestination,
        DeltaVVersion: DeltaV,
        BudgetDeviation: BudgetDev,
        UpdateFrequency: UpdateFrequency,
        ProgressDeviation: ProgressDev,
        ScheduleChange: ScheduleChange,
        BudgetChange: BudgetChange,
        CabinetJBS: Cabinet,
        ILD: ILD,
        PR: PR,
        Dynamos: Dynamos,
        Displays: Display,
        PhaseClasses: PhraseClasses,
        OP: OP,
        UP: UP,
        ComplexClasses: ComplexLoops,
        ComplexLoops: ComplexLoops,
        EQMClasses: EQMClasses,
        EQM: EQM,
        SIS: SSIO,
        RP: PR,
        NoOfControllers: NoOfControl,
        NoOfSLS: NoOfSLS,
        NodesOnDelta: NodesDelta,
        Modules: newModule,
        ModuleClasses: newModuleClasses,
        AgreedBudget: AgreedBudget,
        InternalBudget: InternalBudget,
        Actuals: Actuals,
        ETC: ETC,
        Progress: Progress,
        ExpectedHours: ExpHours,
        ActualEnd: ActualEnd,
        Remark: Remark,
        DeliveryComplete: Delivery,
        DeliveryCompleteComments: DeliveryComments,
        CSSFormReceived: CSS,
        CSSFormReceivedComments: CSSComments,
        ProjectCloseMeeting: Close,
        ProjectCloseMeetingComments: CloseComments,
        ResourceSkillUpdated: ResourceSkill,
        ResourceSkillUpdatedComments: ResourceSkillComments,
        PMITSS: ITSS,
        PMITSSComments: ITSSComments,
        DongleReturned: Dongle,
        DongleReturnedComments: DongleComments,
        Datacorrect: ProjectCorrect,
        DatacorrectComments: ProjectCorrectComments,
        ProjectFolderArchive: HardCopy,
        ProjectFolderArchiveComments: HardCopyComments,
        ITSScallComments: ITSS2Comments,
        ITSScall: ITSS2,
        Emerson_x0020_Business_x0020_Uni: EBUU,
        ProjectType: this.state.prjtype,
        TypeOfIndustry: IndType,
        EEECProjID: EEECProjID,
        ProjectStartPeriod: ProjectPeriod,
        CountryId: countryID,
        IndustrySubtypeId: IndSubID,
        ProjectStartDate: pstartDate,
        ProjectEndDate: pendDate,
        AgreedEndDate: ProjectAgreedEndDate,
        ActualEndDate: pactDate,
        EEECPMId: this.state.EEECPM,
        FSOLeId: this.state.FSOLE,
        EEECLeId: this.state.EEECLE,
        FSOPmId: this.state.FSOPM,
        HWLEId: this.state.HWLE,
        FWIO: FFIO,
        Closeoutnotes: CloseNotes,
        ProjectHWComments: ITSS2Comments,
        ProjectHW: ITSS,
        ISForecasted: this.state.ProjForecast,
        EEECCenter: this.state.EEECCenter,
        PostdeliveryComments: postdeliveryComments,
        Postdelivery: postdelivery,
        Status: Status,


        PDL: saveCHK,
        PCSD: savePCSD,
        VO: chkRVO2,
        ResourceCertifications: chkResourceCertifications,
        LBPManagingFAT: chkLBPManagingFAT,
        PAS: chkPAS,
        E_x0026_I: chkEI,
        ICSS: chkICSS,
        Syncade: chkSyncade,
        TMS: chkTMS,
        MHM: chkMHM,
        Wireless: chkWireless,
        FEED: chkFEED,
        Consultancy: chkConsultancy,
        ISolution: chkiSolution,
        OSIPI: chkOSIPI,
        Cybersecurity: chkCybersecurity,
        CTO: chkCTO,
        ProductivityDVLive: chkDVLive,
        ChkboxSIS: chkSIS,
        ChkSIS: chkSIS,
        DCSAO: this.DCSAO.current.value,
        DCSDI: this.DCSDI.current.value,
        DCSDO: this.DCSDO.current.value,
        SISAI: this.SISAI.current.value,
        SISAO: this.SISAO.current.value,
        SISDI: this.SISDI.current.value,
        SISDO: this.SISDO.current.value,

        DCS_x0020_AI: this.DCSAI.current.value,
        WorkstationNodes: this.WorkstationNodes.current.value,
        NoofCIOC: this.NoofCIOC.current.value,
        NoofCSLS: this.NoofCSLS.current.value,
        SystemCabinets: this.SysCabinet.current.value,
        MarshallingCabinets: this.MarshallingCabinets.current.value,
        ServerNetworkCabinets: this.ServerCabinet.current.value,
        // PDBCabinets: this.PDBCabinet.current.value,
        RiskRegister: this.state.RiskRegister,
        QIDocumentsUpdated: this.state.QIDocuments,
        ProductivityReview: this.state.Productivity1,
        ProductivityReview2: this.state.Productivity2,
        ProjectReviewCallswithFSO: this.state.ProjectReviewCallswithFSO,
        EndUserDesign: this.state.EndUserDesign,
        ChangeManagement: this.state.Change,
        ProjectLevelRiskStatus: this.state.ProjectRiskStatus,
        VotingLogic: VotingLogic,
        ISProjectFHX: this.FHX.current.value,
        ISProjectFHXComments: this.FHXComments.current.value,
      }
      Helper.executeJson(restUrl, "POST", headers, JSON.stringify($.extend(true, {}, savedata))).then((response) => {
        // Resolve the request
        console.log(response);
        resolve("success");
        this.inccounter();
        alert("Item Added Successfully")

        setTimeout(func, 700);
        function func() {
          window.open("https://emerson.sharepoint.com/sites/process-dev2/EEEC/EProjectControl/SiteAssets/ViewReport.aspx", "_self");
        }


      }).catch((e) => {
        reject("Error")
        console.log(e);

      });

    });



    e.preventDefault();
  }

  public inccounter() {
    var cntToIncrement;
    var cntvalue;
    return new Promise((resolve, reject) => {

      if (cnt == true) {
        cntToIncrement = 'QualityCount'
        cntvalue = parseInt(this.state.qualitycounter) + 1
      }
      else {
        cntToIncrement = 'Count'
        cntvalue = parseInt(this.state.counter) + 1
      }

      const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Counter')/Items(1)`;
      const headers = {
        "accept": "application/json;odata=verbose",

        "content-Type": "application/json;odata=verbose",
        "IF-MATCH": "*",
        "X-HTTP-Method": "MERGE"
      }

      const listTitle = "Counter";

      if (cnt == true) {
        const savedata =
        {
          '__metadata': { 'type': 'SP.Data.' + listTitle + 'ListItem' },
          QualityCount: cntvalue
        }
        Helper.executeJson(restUrl, "POST", headers, JSON.stringify($.extend(true, {}, savedata))).then((response) => {
          // Resolve the request
          console.log(response);



          resolve("success");
        }).catch((e) => {
          reject("Error")
          console.log(e);
        });
      } else {
        const savedata =
        {
          '__metadata': { 'type': 'SP.Data.' + listTitle + 'ListItem' },
          Count: cntvalue
        }
        Helper.executeJson(restUrl, "POST", headers, JSON.stringify($.extend(true, {}, savedata))).then((response) => {
          // Resolve the request
          console.log(response);
          resolve("success");
        }).catch((e) => {
          reject("Error")
          console.log(e);
        });
      }



    })
  }

  public getCurrentFY(shortyear, entereddate, type) {
    this.setState({
      flag: false
    })
    var shortyearint = parseInt(shortyear);
    var year = shortyearint;
    var month = entereddate.getMonth();
    if (month >= 8) {
      year = year + 1
    }
    var FY = 'FY' + year
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Period')/Items?$filter=FinYear eq '` + FY + `'`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          //initialProj =response.d.results;
          var arr = Object.values(response.d.results);
          if (response.d.results.length == 0) {

            this.setState({
              FinPeriod: "",
            });

          } else {
            for (let i in response.d.results) {
              console.log(response.d.results[i].Period_x0020_Name)
              var count = 0;
              var startdatestring = response.d.results[i].Start_x0020_Date
              var Startdate = new Date(startdatestring);
              var enddatestring = response.d.results[i].End_x0020_Date
              var enddate = new Date(enddatestring);
              var flag;
              if (entereddate >= Startdate && entereddate <= enddate) {
                CurrentFinPeriod.push = response.d.results[i].Period_x0020_Name
                CurrentPeriod = response.d.results[i].Period_x0020_Name
                if (type == "start") {
                  this.setState({
                    FinPeriod: response.d.results[i].Period_x0020_Name,
                    flag: true
                  });
                }
                if (type == "end") {
                  this.setState({
                    EndFinPeriod: response.d.results[i].Period_x0020_Name,
                  });
                  console.log(CurrentPeriod)

                }
                break;
              } else {
                this.setState({

                  flag: false
                })
              }
            }
          }

          if (this.state.flag != true && type != "end") {
            alert("‘Project Start Period’ is not defined for selected ‘Project Start Date’. Please contact e-Project Control administrator")
            this.setState({
              FinPeriod: "",
            })
          }

        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });
  }

  public handleDateEvent = date => (name) => {

    if (date == "ProjectData") {

      this.setState({ currentDate: name });
      const valueOfInput = name.format();
      var prjdate = new Date(valueOfInput);
      var year = prjdate.getFullYear();
      var shortyear = year.toString().substring(2)
      var month = prjdate.getMonth();
      var projStartDate = new Date(valueOfInput).toISOString();

      this.getCurrentFY(shortyear, prjdate, "start")


      pstartDate = projStartDate
      //  this.setState(
      //    {
      //     pstart : name,
      //    }
      //  )

    }
    if (date == "ProjEndDate") {
      this.setState({ ProjEndDate: name });
      const valueOfInput = name.format();
      var ProjEndDate = new Date(valueOfInput).toISOString();
      pendDate = ProjEndDate
      // this.setState({
      //   pend:name
      // }) 
    }
    if (date == "AgreedEndDate") {

      this.setState({ AgreedEndDate: name });
      const valueOfInput = name.format();
      var projStartDate = new Date(valueOfInput).toISOString();
      var prjdate = new Date(valueOfInput);
      var year = prjdate.getFullYear();
      var shortyear = year.toString().substring(2)
      var month = prjdate.getMonth();

      var projStartDate = new Date(valueOfInput).toISOString();

      this.getCurrentFY(shortyear, prjdate, "end")

      agreedendate = projStartDate

    }
    if (date == "ActualEndDate") {
      this.setState({ ProjRequestEndDate: name });
      const valueOfInput = name.format();
      var ProjActDate = new Date(valueOfInput).toISOString();
      pactDate = ProjActDate
      // this.setState({
      //   pact:ProjActDate
      // }) 



    }
    if (date == "QIDocuments") {
      this.setState({ QIDocuments: name });
      const valueOfInput = name.format();
      var ProjActDate = new Date(valueOfInput).toISOString();
      //pactDate = ProjActDate
      // this.setState({
      //   pact:ProjActDate
      // }) 

    }
    if (date == "Productivity1") {
      this.setState({ Productivity1: name });
      const valueOfInput = name.format();
      var ProjActDate = new Date(valueOfInput).toISOString();
      // pactDate = ProjActDate
      // this.setState({
      //   pact:ProjActDate
      // }) 

    }
    if (date == "Productivity2") {
      this.setState({ Productivity2: name });
      const valueOfInput = name.format();
      var ProjActDate = new Date(valueOfInput).toISOString();
      // pactDate = ProjActDate
      // this.setState({
      //   pact:ProjActDate
      // }) 

    }
    if (date == "FSO") {
      this.setState({ ProjectReviewCallswithFSO: name });
      const valueOfInput = name.format();
      var ProjActDate = new Date(valueOfInput).toISOString();
      //pactDate = ProjActDate
      // this.setState({
      //   pact:ProjActDate
      // }) 

    }

    if (date == "Change") {
      this.setState({ Change: name });
      const valueOfInput = name.format();
      var ProjActDate = new Date(valueOfInput).toISOString();
      // pactDate = ProjActDate
      // this.setState({
      //   pact:ProjActDate
      // }) 

    }

    if (date == "EndUserDesign") {
      this.setState({ EndUserDesign: name });
      const valueOfInput = name.format();
      var ProjActDate = new Date(valueOfInput).toISOString();
      // pactDate = ProjActDate
      // this.setState({
      //   pact:ProjActDate
      // }) 

    }
    if (date == "RiskRegister") {
      this.setState({ RiskRegister: name });
      const valueOfInput = name.format();
      var ProjActDate = new Date(valueOfInput).toISOString();
      //pactDate = ProjActDate
      // this.setState({
      //   pact:ProjActDate
      // }) 

    }





  }

  // public handleDate = date =>(event)=> {
  //   debugger;
  //   if(event.target.id=="ProjStartDate-label")
  //   {
  //     const test =   event.target.value
  //     const startdate =  new Date(test).toISOString();

  //   )
  //   }
  //   if(event.target.id=="AgreedEndDate-label")
  //   {

  //   }
  //   if(event.target.id=="ActualEndDate-label")
  //   {
  //   const valueOfInput = date.format();
  //   var projStartDate = new Date(valueOfInput).toISOString();
  //   this.setState(
  //     {
  //            AgreedEndDate : projStartDate,
  //     }
  //   )
  //   }
  //   if(event.target.id=="ActualEndDate")
  //   {
  //   const valueOfInput = date.format();
  //   var projStartDate = new Date(valueOfInput).toISOString();
  //   this.setState(
  //     {
  //       ActualEndDate : projStartDate,
  //     }
  //   )
  //   }

  //   ///...
  // };

  public handlePeopleChnage = (name) => (value: any) => {

    var EEECPM = value;
    var EEEEE: any = Helper.getUserID(value)
    if (EEEEE == 'undefined' || EEEEE == "UNDEFINED" || EEEEE == null) {
      this.setState(
        {
          dummyValue: null
        }
      )

    } else if (EEEEE != 0 || EEEEE != null) {
      this.setState(
        {
          EEECPM: EEEEE,
          dummyValue: EEEEE
        }
      )

    }
  }

  public handleHWChange = (name) => (value: any) => {
    var HWLE = value;
    var EEEEE = Helper.getUserID(value)
    if (EEEEE != 0 || EEEEE != null) {

      this.setState(
        {
          HWLE: EEEEE
        }
      )

    }


  }

  public handleEEECLEChange = (name) => (value: any) => {

    var EEECPM = value;
    var EEEEE = Helper.getUserID(value)
    if (EEEEE != 0 || EEEEE != null) {

      this.setState(
        {
          EEECLE: EEEEE
        }
      )

    }
  }

  public handleFSOLEChange = (name) => (value: any) => {

    var EEECPM = value;
    var EEEEE = Helper.getUserID(value)
    if (EEEEE != 0 || EEEEE != null) {

      this.setState(
        {
          FSOLE: EEEEE
        }
      )

    }
  }
  public handleFSOPMChange = (name) => (value: any) => {

    var EEECPM = value;
    var EEEEE = Helper.getUserID(value)
    if (EEEEE != 0 || EEEEE != null) {

      this.setState(
        {
          FSOPM: EEEEE

        }
      )

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
    if (id == 'Food And Beverage')
      lookupid = 1
    if (id == 'Utilities')
      lookupid = 2;
    if (id == 'Other')
      lookupid = 3;
    if (id == 'Metal & Mining')
      lookupid = 4;
    if (id == 'Metal And Mining')
      lookupid = 4;
    if (id == 'Pharmaceutical')
      lookupid = 6;
    if (id == 'Refining')
      lookupid = 7
    if (id == 'Pulp & Paper')
      lookupid = 8
    if (id == 'Pulp And Paper')
      lookupid = 8
    if (id == 'Internal')
      lookupid = 9
    if (id == 'Oil & Gas')
      lookupid = 10
    if (id == 'Oil And Gas')
      lookupid = 10
    var string = '$select=Industry_x0020_Subtype,Type_x0020_of_x0020_Industry/Id &$expand=Type_x0020_of_x0020_Industry/Id &$filter=Type_x0020_of_x0020_Industry/Id eq' + lookupid

    //https://emerson.sharepoint.com/sites/process-dev2/EEEC/EProjectControl/_api/web/Lists/getByTitle('Industry%20Subtype')/items?$select=Industry_x0020_Subtype,Type_x0020_of_x0020_Industry/Id &$expand=Type_x0020_of_x0020_Industry/Id &$filter=Type_x0020_of_x0020_Industry/Id eq 1
    //const restUrl = _spPageContextInfo.webAbsoluteUrl + string;
    const restUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/Lists/getByTitle('Industry%20Subtype')/items?$select=Industry_x0020_Subtype,ID,Type_x0020_of_x0020_Industry/Id &$expand=Type_x0020_of_x0020_Industry/Id &$filter=Type_x0020_of_x0020_Industry/Id eq " + lookupid + "&$orderby=Industry_x0020_Subtype"
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

  public loadcounter() {





    var counter;
    var qualitycounter
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Counter')/Items`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {

          var arr = Object.values(response.d.results);
          counter = response.d.results[0].Count;
          let counternum = counter
          if (counternum < 100) {
            counter = "0" + counternum
          }
          qualitycounter = response.d.results[0].QualityCount
          this.setState({
            counter: counter,
            qualitycounter: qualitycounter,
            oldcounter: counter
          });
        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });
  }

  public AnalysisArrow(): any {
    if (this.state.AnalysisDown === "Yes") {
      this.setState({ AnalysisDown: "No" });
    } else {
      this.setState({ AnalysisDown: "Yes" });
    }
  }
  public AnalysisInfoArrow(): any {
    if (this.state.AnalysisInfoDown === "Yes") {
      this.setState({ AnalysisInfoDown: "No" });
    } else {
      this.setState({ AnalysisInfoDown: "Yes" });
    }
  }


  public AnalysisConfigArrow(): any {
    if (this.state.AnalysisConfigDown === "Yes") {
      this.setState({ AnalysisConfigDown: "No" });
    } else {
      this.setState({ AnalysisConfigDown: "Yes" });
    }
  }


  public AnalysisTrackArrow(): any {
    if (this.state.AnalysisTrackDown === "Yes") {
      this.setState({ AnalysisTrackDown: "No" });
    } else {
      this.setState({ AnalysisTrackDown: "Yes" });
    }
  }


  public AnalysisCloseArrow(): any {
    if (this.state.AnalysisCloseDown === "Yes") {
      this.setState({ AnalysisCloseDown: "No" });
    } else {
      this.setState({ AnalysisCloseDown: "Yes" });
    }
  }

  public loadCountry() {
    //https://emerson.sharepoint.com/sites/process-dev2/EEEC/EProjectControl/_api/web/Lists/getByTitle('Country')/items?$filter=World_x0020_Area eq 'Europe'
    // var string = '/items?$filter=World_x0020_Area eq' + id

    //https://emerson.sharepoint.com/sites/process-dev2/EEEC/EProjectControl/_api/web/Lists/getByTitle('Industry%20Subtype')/items?$select=Industry_x0020_Subtype,Type_x0020_of_x0020_Industry/Id &$expand=Type_x0020_of_x0020_Industry/Id &$filter=Type_x0020_of_x0020_Industry/Id eq 1
    //const restUrl = _spPageContextInfo.webAbsoluteUrl + string;
    const restUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/Lists/getByTitle('Country')/Items?$top=4500&$orderby=Country"
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

  public setdropdownvalue(param) {

  }

  public toggleChange = (event) => {
    debugger;

    this.setState({
      qualitycounter: this.state.counter
    })
  }

  public handleInputChange = (event) => {
    let ddltype = event.target.id;


    if (ddltype == "ddlProjectRiskStatus") {
      this.setState({
        ProjectRiskStatus: event.target.value
      })
    }
    if (ddltype == "chkPDL") {
      if (event.target.checked) {
        this.setState({
          chkPDL: "Yes"
        })
      }
      else {
        this.setState({
          chkPDL: "No"
        })
      }
    }

    if (ddltype == "PCSD") {
      if (event.target.checked) {
        this.setState({
          PCSD: "Yes"
        })
      }
      else {
        this.setState({
          PCSD: "No"
        })
      }
    }

    if (ddltype == "chkCTO") {
      if (event.target.checked) {
        this.setState({
          CTO: "Yes"
        })
      }
      else {
        this.setState({
          CTO: "No"
        })
      }
    }

    if (ddltype == "RVO2") {
      if (event.target.checked) {
        this.setState({
          RVO2: "Yes"
        })
      }
      else {
        this.setState({
          RVO2: "No"
        })
      }

    }

    if (ddltype == "DVLive") {
      if (event.target.checked) {
        this.setState({
          DVLive: "Yes"
        })
      }
      else {
        this.setState({
          DVLive: "No"
        })
      }
    }

    if (ddltype == "chkResourceCertifications") {
      if (event.target.checked) {
        this.setState({
          ResourceCertifications: "Yes"
        })
      }
      else {
        this.setState({
          ResourceCertifications: "No"
        })
      }
    }

    if (ddltype == "chkLBPManagingFAT") {
      if (event.target.checked) {
        this.setState({
          LBPManagingFAT: "Yes"
        })
      }
      else {
        this.setState({
          LBPManagingFAT: "No"
        })
      }
    }

    if (ddltype == "chkPAS") {
      if (event.target.checked) {
        this.setState({
          PAS: "Yes"
        })
      }
      else {
        this.setState({
          PAS: "No"
        })
      }
    }

    if (ddltype == "chkSIS") {
      if (event.target.checked) {
        this.setState({
          SIS: "Yes"
        })
      }
      else {
        this.setState({
          SIS: "No"
        })
      }

    }

    if (ddltype == "chkEI") {
      if (event.target.checked) {
        this.setState({
          EI: "Yes"
        })
      }
      else {
        this.setState({
          EI: "No"
        })
      }
    }

    if (ddltype == "chkICSS") {
      if (event.target.checked) {
        this.setState({
          ICSS: "Yes"
        })
      }
      else {
        this.setState({
          ICSS: "No"
        })
      }
    }

    if (ddltype == "chkSyncade") {
      if (event.target.checked) {
        this.setState({
          Syncade: "Yes"
        })
      }
      else {
        this.setState({
          Syncade: "No"
        })
      }
    }

    if (ddltype == "chkTMS") {
      if (event.target.checked) {
        this.setState({
          TMS: "Yes"
        })
      }
      else {
        this.setState({
          TMS: "No"
        })
      }
    }

    if (ddltype == "chkMHM") {
      if (event.target.checked) {
        this.setState({
          MHM: "Yes"
        })
      }
      else {
        this.setState({
          MHM: "No"
        })
      }
    }

    if (ddltype == "chkWireless") {
      if (event.target.checked) {
        this.setState({
          Wireless: "Yes"
        })
      }
      else {
        this.setState({
          Wireless: "No"
        })
      }
    }

    if (ddltype == "chkFEED") {
      if (event.target.checked) {
        this.setState({
          FEED: "Yes"
        })
      }
      else {
        this.setState({
          FEED: "No"
        })
      }
    }

    if (ddltype == "chkConsultancy") {
      if (event.target.checked) {
        this.setState({
          Consultancy: "Yes"
        })
      }
      else {
        this.setState({
          Consultancy: "No"
        })
      }
    }

    if (ddltype == "chkiSolution") {
      if (event.target.checked) {
        this.setState({
          iSolution: "Yes"
        })
      }
      else {
        this.setState({
          iSolution: "No"
        })
      }
    }

    if (ddltype == "chkOSIPI") {
      if (event.target.checked) {
        this.setState({
          OSIPI: "Yes"
        })
      }
      else {
        this.setState({
          OSIPI: "No"
        })
      }
    }

    if (ddltype == "chkCybersecurity") {
      if (event.target.checked) {
        this.setState({
          Cybersecurity: "Yes"
        })
      }
      else {
        this.setState({
          Cybersecurity: "No"
        })
      }
    }

    if (ddltype == "ddlprj") {


      this.setState({
        prjtype: event.target.value
      })
    }
    if (ddltype == "ddlType") {
      let name = event.target.value
      let keyval;
      if (name == "Analytical, F&G")
        keyval = ""
      if (name == "Daniel")
        keyval = ""
      if (name == "Field Instrumentation")
        keyval = ""
      if (name == "BPCS + HW")
        keyval = "01"
      if (name == "BPCS + SIS")
        keyval = "02"
      if (name == "BPCS Only")
        keyval = "00"
      if (name == "BPCS + SIS + HW")
        keyval = "03"
      if (name == "Custom MES Applications")
        keyval = "09"
      if (name == "MMI")
        keyval = ""
      if (name == "Human Centred Design")
        keyval = "07"
      if (name == "Migration ABB to DeltaV")
        keyval = "06"
      if (name == "BPCS Only")
        keyval = "00"
      if (name == "Hardware Only")
        keyval = "05"
      if (name == "Migration Bailey to DeltaV")
        keyval = "06"
      if (name == "PWS Ovation + SIS")
        keyval = ""
      if (name == "Migration Connect type")
        keyval = "06"
      if (name == "Migration DVOP, DOP")
        keyval = "06"




      if (name == "Migration DVOR")
        keyval = "06"
      if (name == "Migration Fix to iFix")
        keyval = "06"
      if (name == "Migration Honeywell to DeltaV")
        keyval = "06"
      if (name == "Migration Invensys to DeltaV")
        keyval = "06"
      if (name == "Migration Provox to DeltaV")
        keyval = "06"
      if (name == "Migration Yokogawa to DeltaV")
        keyval = "06"
      if (name == "Final Control Elements")
        keyval = ""
      if (name == "Migration PLC to DeltaV")
        keyval = ""
      if (name == "Migration Siemens to DeltaV")
        keyval = "06"

      if (name == "Migration RS3 to DeltaV")
        keyval = "06"
      if (name == "RAS")
        keyval = ""
      if (name == "PWS SIS")
        keyval = "08"
      if (name == "SW Tools")
        keyval = ""
      if (name == "SharePoint Applications")
        keyval = ""
      if (name == "SIS Only")
        keyval = "04"
      if (name == "Syncade - Life Science")
        keyval = "09"
      if (name == "Syncade - MLM")
        keyval = "09"
      if (name == "Upgrade")
        keyval = "10"

      if (this.state.unit == "A") {
        this.setState({
          prjpltfrmunit: keyval
        })
      }
    }

    if (ddltype == "addAgreedBudget1") {
      var budget = event.target.value;

      this.setState({
        budget: event.target.value
      })
      var pervalue = (budget / 100) * 2
      this.setState({
        BudgetDev: pervalue
      })
    }
    if (ddltype == "ddlInd") {
      let id = event.target.value;
      let name = event.target.value
      this.loadindsubtype(name)

    }

    if (ddltype == "ddlEEC") {
      this.setState({
        EEECCenter: event.target.value
      })
    }

    if (ddltype == "Quality") {
      let check;
      if (event.target.checked) {
        cnt = true;
        this.setState({
          counter: this.state.qualitycounter

        })
      } else {
        cnt = false;
        this.setState({
          counter: this.state.oldcounter
        })
      }
    }

    if (ddltype == "Forecasted") {
      if (event.target.checked) {
        this.setState({
          ProjForecast: "Yes"
        })
      }
      else {
        this.setState({
          ProjForecast: "No"
        })
      }


    }

    if (ddltype == "ddlEBU") {
      let name = event.target.value
      let keyval;
      if (name == "ASCO")
        keyval = "H99"
      if (name == "DMC")
        keyval = "C99"
      if (name == "MIB")
        keyval = "K99"
      if (name == "MMI")
        keyval = "E99"
      if (name == "PSS")
        keyval = "A"
      if (name == "PWS")
        keyval = "B99"
      if (name == "RAI")
        keyval = "D99"
      if (name == "RAS")
        keyval = "G99"
      if (name == "RPC")
        keyval = "H99"
      if (name == "RTG")
        keyval = "J99"
      if (name == "SBG")
        keyval = "I99"

      if (keyval != "A") {
        this.setState({
          prjpltfrmunit: ""
        })
      }
      this.setState({
        unit: keyval
      })

    }

    if (ddltype == "ddlCountry") {
      let id = event.target.value;
      let name = event.target.value
      //this.loadCountry(name)

    }

    if (ddltype == "addCountry") {
      let cc = event.target.value
      this.setState({
        CountryCode: cc,
      });
      this.loadworldarea(cc);
    }


  };





  public render() {
    debugger;

    let Test = CurrentPeriod;


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
      <option id={v.ID} value={v.Industry_x0020_Subtype.toString()}>{v.Industry_x0020_Subtype.toString()}</option>
    ));



    let CountryList = this.state.country.map(v => (
      <option id={v.ID} value={v.CountryCode}>{v.Country}</option>
    ));

    let inputstring = this.state.year + "-" + this.state.CountryCode + "-" + this.state.unit + this.state.prjpltfrmunit + "-" + this.state.counter

    return (
      <form id='myform' onSubmit={this.postdata}>
        <div id="mainContainerRender">
          <Card>
            <h5 className="table-color" id="mainSubheader">e-Project Control</h5>
            <div id="DottedBox_content">
              <Accordion defaultActiveKey="1">

                <Card.Header >
                  <Accordion.Toggle onClick={this.AnalysisArrow} as={Card.Header} eventKey="1" className="header">
                    <span className={this.state.AnalysisDown === "Yes" ? "glyphicon glyphicon-menu-up" : "glyphicon glyphicon-menu-down"}></span>&nbsp;
                               Project Initiation<br></br>
                  </Accordion.Toggle>
                </Card.Header>

                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <span className="Shortnote"> <span className="redstar">*</span> Indicates required field. Gray fields are either read-only or calculated fields</span>
                    <br></br>
                    <table className="InputTable" id="InputTable">
                      <tbody>
                        <tr>

                          <td style={{ width: '250px%' }}>
                            EEEC Location <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td style={{ width: '17%' }}>
                            <Stack tokens={stackTokens}>
                              <select className="AR-Select" id="ddlEEC" onChange={this.handleInputChange} ref={this.EBUU} required>
                                <option value=""> Please Select</option>
                                <option value="Pune">Pune</option>
                                <option value="Nashik">Nashik</option>

                              </select>
                            </Stack>

                          </td>
                          <td style={{ paddingLeft: '50px', width: "250px" }}>
                            Project Name <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td style={{ width: "20%" }} >

                            <input type="text" name="Projectname" id="addProjectName" ref={this.ProjectName} required title="Please enter project name exactly same as decided in kickoff meeting" />

                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: '250px' }}>
                            Emerson Business Unit <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td style={{ width: '17%' }}>
                            <Stack tokens={stackTokens}>
                              <select className="AR-Select" id="ddlEBU" onChange={this.handleInputChange} ref={this.EBUU} required>
                                <option value=""> Please Select</option>
                                {EBUOptionsTemplate}
                              </select>
                            </Stack>

                          </td>
                          <td style={{ width: '15.3%', paddingLeft: "50px" }}>
                            EPC <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td>

                            <input type="text" name="EPC" id="addEPC" ref={this.EPC} required />

                          </td>

                        </tr>

                        <tr>
                          <td>
                            End-User&nbsp;<span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td>

                            <input type="text" name="addEndUser" id="addEnduser" required ref={this.EndUser} />

                          </td>
                          <td style={{ paddingLeft: '50px' }}>
                            End-Destination <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td style={{ width: "15%" }} >

                            <input type="text" name="addEndDestination" id="addEndDestination" ref={this.EndDestination} required />

                          </td>

                        </tr>
                        <tr>
                          <td>
                            DeltaV Version <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td>
                            <Stack tokens={stackTokens}>
                              <input type="text" className="AR-Select" id="ddldelta" ref={this.DeltaV} required />

                            </Stack>


                          </td>
                          <td style={{ paddingLeft: '50px' }}>
                            Project Type  <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td style={{ width: "15%" }}>
                            <i className="ms-Dropdown-caretDown ms-Icon ms-Icon--ChevronDown" id="addprojType" ref={this.ProjectType} ></i>
                            <select className="ms-Dropdown-select" required onChange={this.handleInputChange} id="ddlprj"  >
                              <option value=""> Please Select</option>
                              <option>Other</option>
                              <option>MAC</option>
                              <option>MIV/FIV</option>
                              <option>Non-PSG BU</option>
                              <option>Services Only</option>
                              <option>Site Support Only</option>

                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td> Type Of Industry<span style={{ color: 'red' }}><b>*</b></span></td>
                          <td>
                            <Stack tokens={stackTokens}>
                              <select className="AR-Select" onChange={this.handleInputChange} id="ddlInd" ref={this.IndType} required>
                                <option value=""> Please Select</option>
                                {IndustryOptionsTemplate}
                              </select> </Stack>

                          </td>
                          <td style={{ paddingLeft: '50px' }}>App/Industry-Subtype</td>
                          <td  >
                            <Stack tokens={stackTokens}>
                              <select className="AR-Select" onChange={this.handleInputChange} id="ddlSub" ref={this.IndSubType} required>

                                {SubIndsutryOptionsTemplate}

                              </select>
                            </Stack>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Country (Booking) <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td>
                            <i className="ms-Dropdown-caretDown ms-Icon ms-Icon--ChevronDown" id="addCountry" ></i>
                            <Stack tokens={stackTokens}>
                              <select className="AR-Select" id="addCountry" onChange={this.handleInputChange} ref={this.Country} required>
                                <option value=""> Please Select</option>
                                {CountryList}
                              </select>
                            </Stack>
                          </td>
                          <td style={{ paddingLeft: '50px' }}>
                            World Area                          </td>
                          <td style={{ width: "15%" }} >
                            <Stack tokens={stackTokens} onChange={this.handleInputChange} id="ddlCountryy">

                              <select className="AR-Select" id="ddlCountry" ref={this.WorldArea} disabled>

                                {WorldareaoptionTemplate}
                              </select>
                            </Stack>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Project Platform <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td >
                            <i className="ms-Dropdown-caretDown ms-Icon ms-Icon--ChevronDown" id="addProjectPlatform"></i>
                            <Stack tokens={stackTokens}>
                              <select className="AR-Select" id="ddlType" ref={this.ProjPlatform} onChange={this.handleInputChange} required>
                                <option value=""> Please Select</option>
                                {ProjectOptionsTemplate}</select>
                            </Stack>
                          </td>
                          <td style={{ paddingLeft: '50px' }}>
                            EEEC Project ID
                          </td>
                          <td style={{ width: "19%" }} rowSpan={2}>


                            <input type="text" name="ProjectID" id="addEEECProjectID" value={inputstring} ref={this.EEECProjID} required disabled />
                            <input type="checkbox" name="Quality" id="Quality" onChange={this.handleInputChange} ></input>
                            &nbsp;For Generic/Internal initiative projects.


                          </td>
                        </tr>
                        <tr>
                          <td>
                            (Clarity) Project ID  <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td style={{ width: "15%" }}>

                            <input type="text" name="Project ID" id="addProjectID" ref={this.ProjectID} required />

                          </td>

                        </tr>
                        <br></br>


                        <tr>
                          <td>
                            FSO LE
                            </td>
                          <td>

                            <SPPeoplePicker multi={false} pickerEnabled={true} onChange={this.handleFSOLEChange(this)} />

                          </td>
                          <td style={{ paddingLeft: '50px' }}>
                            FSO PM
                             </td>
                          <td>
                            <SPPeoplePicker multi={false} pickerEnabled={true} onChange={this.handleFSOPMChange(this)} />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            EEEC LE
                            </td>
                          <td>

                            <SPPeoplePicker multi={false} pickerEnabled={true} onChange={this.handleEEECLEChange(this)} />

                          </td>
                          <td style={{ paddingLeft: '50px' }}>
                            EEEC PM <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td>  <SPPeoplePicker multi={false} pickerEnabled={true} onChange={this.handlePeopleChnage("EEECPM")} />   </td><input type="text" width={40} id="dummyField" value={this.state.dummyValue} required></input>
                        </tr>
                        <tr>
                          <td>
                            Hardware LE
                            </td>
                          <td>

                            <SPPeoplePicker multi={false} pickerEnabled={true} onChange={this.handleHWChange(this)} />

                          </td>

                        </tr>
                        <br></br>
                        <br></br>

                        <tr>
                          <td>
                            Project Start Date  <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td>

                            <DatePicker className="addStartDate" formatDate={Helper._onFormatDate} id="ProjStartDate" onSelectDate={this.handleDateEvent("ProjectData")} value={this.state.currentDate} strings={DayPickerStrings} showWeekNumbers={false} isMonthPickerVisible={true} showMonthPickerAsOverlay={true}  ></DatePicker>

                          </td>
                          <td style={{ paddingLeft: '50px' }}>
                            Project Start Period
                          </td>
                          <td>

                            <input type="text" name="ProjectStartPeriod" id="addProjectStartPeriod" style={{ opacity: 0.75, color: "grey" }} ref={this.ProjectPeriod} value={this.state.FinPeriod} required onKeyPress={() => { return false }} />

                          </td>


                        </tr>
                        <tr>
                          <td>
                            Request End Date  <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td>

                            <DatePicker formatDate={Helper._onFormatDate} showWeekNumbers={false} isMonthPickerVisible={true}
                              showMonthPickerAsOverlay={true} minDate={this.state.currentDate} strings={DayPickerStrings} highlightCurrentMonth={true} className="addRequestEndDate" id="ProjEndDate" onSelectDate={this.handleDateEvent("ProjEndDate")} value={this.state.ProjEndDate}  ></DatePicker>

                          </td>
                          <td style={{ paddingLeft: '50px' }}>
                            Agreed End Date <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td>

                            <DatePicker showWeekNumbers={false} isMonthPickerVisible={true} formatDate={Helper._onFormatDate}
                              minDate={this.state.currentDate} showMonthPickerAsOverlay={true} strings={DayPickerStrings} highlightCurrentMonth={true} className="form-addAgreedEndDate" id="AgreedEndDate" onSelectDate={this.handleDateEvent("AgreedEndDate")} value={this.state.AgreedEndDate} />

                          </td>
                          <td></td>
                        </tr>

                        <tr>
                          <td style={{ paddingBottom: "20px" }}> Agreed Budget <span style={{ color: 'red' }}><b>*</b></span></td>

                          <td >

                            <input type='number' className="AgreedBudget" id="addAgreedBudget1" ref={this.AgreedBudget} value={this.state.budget} onChange={this.handleInputChange} required />
                            <br></br><label>(Hours agreed with EPM FSO)</label>
                          </td>
                          <td style={{ paddingLeft: '50px' }}>
                            Forecasted
                             </td>
                          <td>
                            <select className="AR-Select" id="Forecasted" onChange={this.handleInputChange} >
                              <option>Yes</option>
                              <option>No</option>
                            </select>
                          </td>

                        </tr>
                      </tbody>
                    </table>
                  </Card.Body>
                </Accordion.Collapse>
              </Accordion>
              <Accordion defaultActiveKey="0">
                <Card.Header>
                  <Accordion.Toggle onClick={this.AnalysisConfigArrow} as={Card.Header} eventKey="0" className="header">
                    <span className={this.state.AnalysisConfigDown === "Yes" ? "glyphicon glyphicon-menu-up" : "glyphicon glyphicon-menu-down"}></span>&nbsp;
                                Configuration Data <br></br>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <table>
                      <tbody>
                        {/* <tr>
                          <td>
                            IO Series
                          </td>
                          <td>

                            (Future Provision)

                          </td>
                          <td>
                            IO Type
                          </td>
                          <td>

                            (Future Provision)

                          </td>
                          <td></td>
                        </tr> */}


                        <tr>
                          <td>
                            HW IO
                          </td>
                          <td>

                            <input type="text" name="HWIO" id="addHWIO" ref={this.HWIO} />

                          </td>
                          <td style={{ paddingLeft: "40px" }}>
                            SW IO
                          </td>
                          <td>

                            <input type="text" name="SWIO" pattern="^[0-9]{1,45}$" id="addSWIO" ref={this.SWIO} title="Please enter valid number" />

                          </td>
                          <td style={{ width: "210px", paddingLeft: "40px" }}>
                            FF IO
                          </td>
                          <td>

                            <input type="text" name="FFIO" id="addFFIO" pattern="^[0-9]{1,45}$" title="Please enter valid number" ref={this.FFIO} />

                          </td>
                        </tr>
                        <tr>
                          <td>
                            SIS IO
                          </td>
                          <td>

                            <input type="text" name="SISIO" id="addSISIO" pattern="^[0-9]{1,45}$" title="Please enter valid number" ref={this.SSIO} />

                          </td>
                          <td style={{ paddingLeft: "40px" }} >
                            Displays
                          </td>
                          <td>

                            <input type="text" name="Display" id="addDisplay" pattern="^[0-9]{1,45}$" title="Please enter valid number" ref={this.Display} />

                          </td>
                          <td style={{ paddingLeft: "40px" }}>
                            Cabinet/JBs
                          </td>
                          <td>

                            <input type="text" name="PR" pattern="^[0-9]{1,45}$" title="Please enter valid number" id="addCabinetJBS" ref={this.Cabinet} />

                          </td>
                        </tr>

                        <div style={{ display: "none" }}>
                          <tr>

                            <td>
                              Module Classes
                          </td>
                            <td>

                              <input type="text" name="ModuleClasses" id="addModuleClasses" ref={this.newModuleClasses} />

                            </td>
                            <td>
                              Modules
                          </td>
                            <td>

                              <input type="text" name="Modules" id="addModules" ref={this.newModule} />

                            </td>
                            <td style={{ width: "250px" }}>
                              ILD&nbsp;(Instrument Loop Drawings)
                          </td>
                            <td>

                              <input type="text" name="ILD" id="addILD" ref={this.ILD} />

                            </td>
                          </tr>
                          <tr>
                            <td>
                              Complex Loops
                          </td>
                            <td>

                              <input type="text" name="ComplexLoops" id="addComplexLoops" ref={this.ComplexLoops} />

                            </td>
                            <td>
                              EQM Classes
                          </td>
                            <td>

                              <input type="text" name="EQMClasses" id="addEQMClasses" ref={this.EQMClasses} />

                            </td>
                            <td>
                              EQMs
                          </td>
                            <td>

                              <input type="text" name="EQM" id="addEQM" ref={this.EQM} />

                            </td>
                          </tr>
                          <tr>
                            <td>
                              Phase Classes
                          </td>
                            <td>

                              <input type="text" name="PhraseClaases" id="addPhraseClasses" ref={this.PhraseClasses} />

                            </td>
                            <td>
                              OP
                          </td>
                            <td>

                              <input type="text" name="OP" id="addOP" ref={this.OP} />

                            </td>
                            <td>
                              UP
                        </td>
                            <td>

                              <input type="text" name="UP" id="addUP" ref={this.UP} />

                            </td>
                          </tr>
                          <tr>
                            <td>
                              PR
                          </td>
                            <td>

                              <input type="text" name="PR" id="addPR" ref={this.PR} />

                            </td>
                            <td>
                              Dynamos
                          </td>
                            <td>

                              <input type="text" name="Dynamos" id="addDynamos" ref={this.Dynamos} />

                            </td>
                            <td>
                              No Of Controllers
                          </td>
                            <td>

                              <input type="text" name="PR" id="addControl" ref={this.NoOfControl} />

                            </td>

                          </tr>
                          <tr>



                          </tr>
                          <tr>

                            <td>
                              No Of SLSs
                          </td>
                            <td>

                              <input type="text" name="Dynamos" id="addDynamos" ref={this.NoOfSLS} />

                            </td>
                            <td>
                              Nodes On DeltaV Network
                          </td>
                            <td>

                              <input type="text" name="Display" id="addDisplay" ref={this.NodesDelta} />

                            </td>
                          </tr>
                        </div>

                        {/* <tr>
                          <td>
                            Special Design
                          </td>
                          <td>

                            (Future Provision)

                          </td>
                          <td>
                            Safety System
                          </td>
                          <td>

                            (Future Provision)

                          </td>
                          <td></td>
                        </tr>
                        <br></br>
                        <tr>
                          <td>
                            Cabinet Type
                          </td>
                          <td>

                            (Future Provision)

                          </td>
                          <td>
                            Cabinet Size
                          </td>
                          <td>

                            (Future Provision)

                          </td>
                          <td></td>
                        </tr> */}





                      </tbody>
                    </table>
                  </Card.Body>
                </Accordion.Collapse>
              </Accordion>
              <Accordion defaultActiveKey="0">
                <Card.Header>
                  <Accordion.Toggle onClick={this.AnalysisInfoArrow} as={Card.Header} eventKey="0" className="header">
                    <span className={this.state.AnalysisInfoDown === "Yes" ? "glyphicon glyphicon-menu-up" : "glyphicon glyphicon-menu-down"}></span>&nbsp;
                                Project Information<br></br>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>


                    <table id="phase2Table" className="phase2Table">
                      <tr>
                        <td>
                          Project Level Risk Status
                        </td>
                        <td><select className="AR-Select" id="ddlProjectRiskStatus" onChange={this.handleInputChange} >
                          <option value=""> Please Select</option>
                          <option>Low</option>
                          <option>Medium</option>
                          <option>High</option>
                        </select></td>
                      </tr>
                      <tr>

                        <td style={{ width: "200px" }}>
                          <input type="checkbox" name="chkPAS" id="chkPAS" onChange={this.handleInputChange} />&nbsp;PAS
                        </td>
                        <td style={{ width: "200px" }}>
                          <input type="checkbox" name="chkSIS" id="chkSIS" onChange={this.handleInputChange} />&nbsp;SIS
                        </td>
                        <td style={{ width: "200px" }}>
                          <input type="checkbox" name="chkEI" id="chkEI" onChange={this.handleInputChange} />&nbsp;E & I
                        </td>
                        <td style={{ width: "200px" }}>
                          <input type="checkbox" name="chkICSS" id="chkICSS" onChange={this.handleInputChange} />&nbsp;ICSS
                        </td>
                        <td style={{ width: "200px" }}>
                          <input type="checkbox" name="chkRVO2" id="RVO2" onChange={this.handleInputChange} />&nbsp;RVO2
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "200px" }}>
                          <input type="checkbox" name="chkPCSD" id="PCSD" onChange={this.handleInputChange}  ></input>
                          &nbsp;PCSD</td>
                        <td >
                          <input type="checkbox" name="chkPDL" id="chkPDL" onChange={this.handleInputChange}  ></input>
                          &nbsp;PDL</td>
                        <td style={{ width: "200px" }}>
                          <input type="checkbox" name="chkDVLive" id="DVLive" onChange={this.handleInputChange} />&nbsp;DV Live
                        </td>
                        <td style={{ width: "200px" }}>
                          <input type="checkbox" name="chkCTO" id="chkCTO" onChange={this.handleInputChange} />&nbsp;CTO
                        </td>
                        <td><input type="checkbox" name="chkWireless" id="chkWireless" onChange={this.handleInputChange} />&nbsp;Wireless</td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" name="chkCybersecurity" id="chkCybersecurity" onChange={this.handleInputChange} />&nbsp;Cyber Security  </td>

                        <td>
                          <input type="checkbox" name="chkSyncade" id="chkSyncade" onChange={this.handleInputChange} />&nbsp;Syncade
                        </td>
                        <td><input type="checkbox" name="chkOSIPI" id="chkOSIPI" onChange={this.handleInputChange} />&nbsp;OSI PI </td>
                        <td> <input type="checkbox" name="chkMHM" id="chkMHM" onChange={this.handleInputChange} />&nbsp;MHM</td>
                        <td> <input type="checkbox" name="chkTMS" id="chkTMS" onChange={this.handleInputChange} />&nbsp;TMS</td>
                      </tr>

                      <tr>
                        <td> <input type="checkbox" name="chkFEED" id="chkFEED" onChange={this.handleInputChange} />&nbsp;FEED&nbsp;</td>


                        <td><input type="checkbox" name="chkConsultancy" id="chkConsultancy" onChange={this.handleInputChange} />&nbsp;Consultancy</td>

                        <td><input type="checkbox" name="chkiSolution" id="chkiSolution" onChange={this.handleInputChange} />&nbsp;iSolution</td>
                        <td>
                          <input type="checkbox" name="chkResourceCertifications" id="chkResourceCertifications" onChange={this.handleInputChange} />&nbsp;Resource Certifications?
                        </td>


                        <td>
                          <input type="checkbox" name="chkLBPManagingFAT" id="chkLBPManagingFAT" onChange={this.handleInputChange} />&nbsp;LBP Managing FAT?
                        </td>

























                      </tr>
                    </table>

                    <table style={{ display: "none" }}>
                      <tr>
                        <td>
                          DCS AI
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="DCSAI" ref={this.DCSAI} />
                        </td>

                        <td style={{ paddingLeft: '30px' }}>
                          DCS AO
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="DCSAO" ref={this.DCSAO} />
                        </td>

                        <td style={{ paddingLeft: '30px' }}>
                          DCS DI
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="DCSDI" ref={this.DCSDI} />
                        </td>
                      </tr>
                      <tr>

                        <td>
                          DCS DO
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="DCSAI" ref={this.DCSDO} />
                        </td>

                        <td style={{ paddingLeft: '30px' }}>
                          SIS AI
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="DCSAI" ref={this.SISAI} />
                        </td>

                        <td style={{ paddingLeft: '30px' }}>
                          SIS AO
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="DCSAI" ref={this.SISAO} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          SIS DO
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="DCSAI" ref={this.SISDO} />
                        </td>
                        <td style={{ paddingLeft: '30px' }}>
                          SISDI
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="DCSAI" ref={this.SISDI} />
                        </td>

                        <td style={{ paddingLeft: '30px' }}>
                          Workstation Nodes
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="Workstation" ref={this.WorkstationNodes} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          No Of CIOC
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="DCSAI" ref={this.NoofCIOC} />
                        </td>
                        <td style={{ paddingLeft: '30px' }}>
                          No Of CSLS
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="Workstation" ref={this.NoofCSLS} />
                        </td>

                        <td style={{ paddingLeft: '30px' }}>Voting Logic</td>

                        <td><input type="text" name="Syscabinet" id="SysCabinet" ref={this.VotingLogic}></input></td>
                      </tr>
                      <tr>
                        <td>System Cabinets</td>

                        <td><input type="text" name="Syscabinet" id="SysCabinet" ref={this.SysCabinet}></input></td>

                        <td style={{ paddingLeft: '30px' }}>Server Cabinets</td>

                        <td><input type="text" name="PDBCabinet" id="PDBCabinet" ref={this.ServerCabinet}></input></td>

                        <td style={{ paddingLeft: '30px' }}>Marshalling Cabinets</td>

                        <td><input type="text" name="marshalling" id="Marshalling" ref={this.MarshallingCabinets}></input></td>
                      </tr>
                    </table>
                  </Card.Body>
                </Accordion.Collapse>
              </Accordion>
              <Accordion defaultActiveKey="0">
                <Card.Header>
                  <Accordion.Toggle onClick={this.AnalysisTrackArrow} as={Card.Header} eventKey="0" className="header">
                    <span className={this.state.AnalysisTrackDown === "Yes" ? "glyphicon glyphicon-menu-up" : "glyphicon glyphicon-menu-down"}></span>&nbsp;
                                Project Tracking<br></br>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <table className="FrequentEntry" id="addFrequentEntry" style={{
                      width: "100 %"
                    }}>
                      < tbody >
                        <tr>
                        </tr>
                        <tr>
                          <td style={{ paddingBottom: "20px" }} > Agreed Budget <span style={{ color: 'red' }}><b>*</b></span></td>
                          <td  >
                            <input type='number' className="AgreedBudget" id="addAgreedBudget1" ref={this.AgreedBudget} value={this.state.budget} onChange={this.handleInputChange} required />
                            <br></br><label>(Hours agreed with EPM FSO)</label>
                          </td>

                          <td style={{ paddingBottom: "10px" }} > Internal Budget </td>
                          <td >

                            <input type='number' className="InternalBudget" id="addInternalBudget" ref={this.InternalBudget} />
                            <br></br><label>(Internal budget agreed with the Resource Manager)</label> </td>
                        </tr>


                        <tr>
                          <td  > Actuals </td>
                          <td >
                            <input type='number' className="Actuals" id="addActuals" ref={this.Actuals} />
                          </td>

                          <td> EAC </td>
                          <td>

                            <input type='number' className="ETC" id="addETC" ref={this.ETC} onChange={this.getExpectedHours} />
                          </td>
                        </tr>
                        <tr>
                          <td  > Progress % </td>
                          <td  >

                            <input type='number' className="Progress" id="addProgress" ref={this.Progress} max="100" />
                          </td>

                          <td  > Expected Hours Per Week </td>
                          <td >

                            <input type='number' className="ExpHours" id="addExpHours" ref={this.ExpHours} value={this.state.ExpectedHoursPerWeek} style={{ opacity: 0.4 }} readOnly />
                          </td>
                        </tr>
                        <tr>

                          <td >Actual End Period </td>
                          <td >

                            <input type='text' ref={this.ActualEnd} style={{ opacity: 0.4, width: "173px" }} readOnly />
                          </td>
                          <td>
                            Budget Deviation
   </td>
                          <td>
                            <input type='text' className="UpdateDeviation" id="addBudgetDeviation" ref={this.BudgetDev} value={this.state.BudgetDev} disabled />
                            &nbsp;<label>2% of Agreed Budget</label>
                          </td>
                        </tr>


                        <tr>
                          <td>
                            Budget Change
   </td>
                          <td>
                            <input type='text' className="addProgressDeviation" id="addBudgetChange" ref={this.BudgetChange} />&nbsp;<label>Hours </label>
                          </td>

                          <td>
                            Schedule Change
   </td>
                          <td>
                            <input type='text' className="addProgressDeviation" id="addScheduleChange" ref={this.ScheduleChange} />
                            &nbsp;<label>Days</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Progress Deviation
   </td>
                          <td>
                            <input type='text' className="addProgressDeviation" id="addProgressDeviation" ref={this.ProgressDev} />
                            &nbsp;<label>Hours </label>
                          </td>

                          <td>
                            Update Frequency
   </td>
                          <td>

                            <input type='text' className="addProgressDeviation" id="addUpdateFrequenct" ref={this.UpdateFreq} />
                            &nbsp;<label>Days </label>
                          </td></tr>
                        <tr>

                        </tr>
                        <tr>
                          <td> Status </td>
                          <td colSpan={4}> <select className="ms-Dropdown-select" ref={this.Status} style={{ width: "173px" }} >

                            <option selected>WIP</option>
                            <option>On Hold</option>
                            <option>Shelved</option>


                          </select> <label>("Delivered" only after entry of Actual End Date.&nbsp;"Closed" only after Project close-out activities are completed.)</label></td>
                        </tr >
                        <tr>
                          <td>Remark </td>
                          <td>
                            <textarea name="Remark" cols={40} rows={5} id="addRemark" ref={this.Remark}></textarea>

                          </td>
                        </tr>




                        <br></br>
                        <br></br>
                        <tr>
                          <td>
                            Risk Register
                          </td>
                          <td>

                            <DatePicker formatDate={Helper._onFormatDate} showWeekNumbers={false} isMonthPickerVisible={true}
                              showMonthPickerAsOverlay={true} strings={DayPickerStrings} highlightCurrentMonth={true} maxDate={this.state.today} className="addRequestEndDate" id="RiskRegister" onSelectDate={this.handleDateEvent("RiskRegister")} value={this.state.RiskRegister}  ></DatePicker>

                          </td>

                          <td>
                            QI Documents Updated?
                          </td>
                          <td>

                            <DatePicker showWeekNumbers={false} isMonthPickerVisible={true} formatDate={Helper._onFormatDate}
                              showMonthPickerAsOverlay={true} strings={DayPickerStrings} highlightCurrentMonth={true} maxDate={this.state.today} className="form-addAgreedEndDate" id="QIDocuments" onSelectDate={this.handleDateEvent("QIDocuments")} value={this.state.QIDocuments} />

                          </td>

                        </tr>
                        <tr>
                          <td>Change Management</td>

                          <td>

                            <DatePicker showWeekNumbers={false} isMonthPickerVisible={true} formatDate={Helper._onFormatDate}
                              showMonthPickerAsOverlay={true} strings={DayPickerStrings} highlightCurrentMonth={true} maxDate={this.state.today} className="form-addAgreedEndDate" id="Change" onSelectDate={this.handleDateEvent("Change")} value={this.state.Change} />

                          </td>

                          <td>
                            Productivity Review-1
                          </td>
                          <td>

                            <DatePicker showWeekNumbers={false} isMonthPickerVisible={true} formatDate={Helper._onFormatDate}
                              showMonthPickerAsOverlay={true} strings={DayPickerStrings} highlightCurrentMonth={true} maxDate={this.state.today} className="form-addAgreedEndDate" id="Productivity1" onSelectDate={this.handleDateEvent("Productivity1")} value={this.state.Productivity1} />

                          </td>

                        </tr>
                        <tr>
                          <td>
                            Productivity Review-2
                          </td>
                          <td>

                            <DatePicker showWeekNumbers={false} isMonthPickerVisible={true} formatDate={Helper._onFormatDate}
                              showMonthPickerAsOverlay={true} strings={DayPickerStrings} highlightCurrentMonth={true} maxDate={this.state.today} className="form-addAgreedEndDate" id="Productivity2" onSelectDate={this.handleDateEvent("Productivity2")} value={this.state.Productivity2} />

                          </td>


                          <td>
                            Project Review Calls with FSO?

                          </td>
                          <td>

                            <DatePicker showWeekNumbers={false} isMonthPickerVisible={true} formatDate={Helper._onFormatDate}
                              showMonthPickerAsOverlay={true} strings={DayPickerStrings} highlightCurrentMonth={true} maxDate={this.state.today} className="form-addAgreedEndDate" id="ProjectReview" onSelectDate={this.handleDateEvent("FSO")} value={this.state.ProjectReviewCallswithFSO} />

                          </td>

                        </tr>
                        <tr>
                          <td>
                            End User Design Review Meeting

                          </td>
                          <td>

                            <DatePicker showWeekNumbers={false} isMonthPickerVisible={true} formatDate={Helper._onFormatDate}
                              showMonthPickerAsOverlay={true} strings={DayPickerStrings} highlightCurrentMonth={true} maxDate={this.state.today} className="form-addAgreedEndDate" id="EndUserDesign" onSelectDate={this.handleDateEvent("EndUserDesign")} value={this.state.EndUserDesign} />

                          </td>

                        </tr>
                      </tbody>
                    </table>



                  </Card.Body>
                </Accordion.Collapse>
              </Accordion>
              <Accordion defaultActiveKey="0">
                <Card.Header>
                  <Accordion.Toggle onClick={this.AnalysisCloseArrow} as={Card.Header} eventKey="0" className="header">
                    <span className={this.state.AnalysisCloseDown === "Yes" ? "glyphicon glyphicon-menu-up" : "glyphicon glyphicon-menu-down"}></span>&nbsp;
                               Project Closing <br></br>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <table className="addClosureEntry" id="addClosureEntry" style={{ pointerEvents: "none", opacity: 0.3 }}>
                      <tbody>
                        <ul>
                          <tr>
                            <td><li> Are all deliveries completed and communicated to front office?</li></td>
                            <td> <select className="ms-Dropdown-select" id="addDeliv" ref={this.delivery}>
                              <option>Yes</option>
                              <option selected>No</option>
                              <option>N/A</option>
                            </select> </td>

                            <td> <textarea rows={3} cols={30} id="DeliveryComments" ref={this.deliverycomments} /> </td>
                          </tr>
                          <tr>
                            <td><li> Has the PM logged ITSS call for project folder archival and deletion from server (after deletion of "working documents" folder)?</li> <i><b> Note: </b> PM shall intimate the retention period in ITSS call, as per the "Project Plan (ProjectID)"</i></td>

                            <td> <select className="ms-Dropdown-select" id="AddITSS" ref={this.ITSS}>
                              <option>Yes</option>
                              <option selected> No</option>
                              <option>N/A</option>

                            </select> </td>
                            <td>

                              <textarea rows={3} cols={30} id="ITSSComments" ref={this.ITSSComments} />
                            </td>
                          </tr>
                          <tr>
                            <td> <li>In case there are hardcopy documents, are these disposed / properly identified and archived by PM?</li></td>
                            <td><select className="ms-Dropdown-select" id="HardCopy" ref={this.hardcopy}>
                              <option>Yes</option>
                              <option selected>No</option>
                              <option> N/A</option>

                            </select> </td>
                            <td>

                              <textarea rows={3} cols={30} className="InternalBudget" id="HardCopyComments" ref={this.hardcopyComments} />
                            </td>
                          </tr>
                          <tr>
                            <td><li>Has the PM logged ITSS call for release of project hardware?</li></td>
                            <td><select className="ms-Dropdown-select" id="ITSS2" ref={this.ITSS2}>
                              <option>Yes</option>
                              <option selected>No</option>
                              <option>N/A</option>

                            </select> </td>
                            <td>

                              <textarea rows={3} cols={30} className="Actuals" id="ITSS2Comments" ref={this.ITSS2Comments} />
                            </td>
                          </tr>
                          <tr>
                            <td><li>Has the  Dongle been returned? </li></td>
                            <td> <select className="ms-Dropdown-select" id="DongleReturn" ref={this.donglereturn}>
                              <option>Yes</option>
                              <option selected>No</option>
                              <option>N/A</option>

                            </select> </td>
                            <td>

                              <textarea rows={3} cols={30} className="ETC" id="DongleComments" ref={this.dongleComments} />
                            </td>
                          </tr>
                          <tr>
                            <td><li>Is all project information and data correct and/or updated to reflect the values at project close?</li></td>
                            <td> <select className="ms-Dropdown-select" id="ProjectCorrect" ref={this.projectcorrect}>
                              <option>Yes</option>
                              <option selected>No</option>
                              <option>N/A</option>

                            </select> </td>
                            <td>

                              <textarea rows={3} cols={30} className="Progress" id="ProjectComments" ref={this.projectComments} />
                            </td>
                          </tr>
                          <tr>

                            <td><li>Are post-delivery defects (field non-conformities) collected from the Front Office and recorded? </li></td>
                            <td> <select className="ms-Dropdown-select" id="PostDelivery" ref={this.postdelivery}>
                              <option>Yes</option>
                              <option selected>No</option>
                              <option>N/A</option>

                            </select> </td>
                            <td>

                              <textarea rows={3} cols={30} className="ExpHours" id="PostDeliveryComments" ref={this.postdeliveryComments} />
                            </td>

                          </tr>
                          <tr>
                            <td>
                              <li>Is data imported from FHX file</li>
                            </td>
                            <td> <select className="ms-Dropdown-select" id="AddITSS" ref={this.FHX}>
                              <option>Yes</option>
                              <option selected> No</option>
                              <option>N/A</option>

                            </select> </td>
                            <td>
                              <textarea rows={3} cols={30} className="FHX" id="txtFHX" ref={this.FHXComments} />
                            </td>
                          </tr>
                        </ul>
                      </tbody>
                    </table>
                    <table className="showHide" style={{ pointerEvents: "none", opacity: 0.3 }}>
                      <tbody>
                        <tr>

                          <td><li>Is the CSS form received and circulated?</li></td>
                          <td> <select className="ms-Dropdown-select" id="CSS" ref={this.CSS}>
                            <option>Yes</option>
                            <option selected>No</option>
                            <option>N/A</option>

                          </select> </td>
                          <td>

                            <textarea rows={3} cols={30} className="ActualEnd" id="CSSComments" ref={this.CSSComments} />
                          </td>

                        </tr>

                        <tr>

                          <td><li>Is project close-out meeting conducted & lessons learnt including project close-out report uploaded to the EEEC Technical Info</li></td>
                          <td><select className="ms-Dropdown-select" id="Close" ref={this.close}>
                            <option >Yes</option>
                            <option selected>No</option>
                            <option>N/A</option>

                          </select></td>
                          <td>

                            <textarea rows={3} cols={30} className="ActualEnd" id="CloseComments" ref={this.closeComments} />
                          </td>

                        </tr>
                        <tr>

                          <td><li>Have resource skills been updated and communicated to ResourceSkills.EEEC@Emerson.com?</li></td>
                          <td><select className="ms-Dropdown-select" id="ResourceSkill" ref={this.resourceskill}>
                            <option >Yes</option>
                            <option selected>No</option>
                            <option>N/A</option>

                          </select> </td>
                          <td>

                            <textarea rows={3} cols={30} className="ActualEnd" id="ResourceSkillComments" ref={this.resourceskillComments} />
                          </td>

                        </tr>
                      </tbody>
                    </table>
                    <table style={{ pointerEvents: "none", opacity: 0.3 }}>
                      <tbody>
                        <tr>
                          <td style={{ width: '20%', paddingLeft: '16px' }}> Close out Notes </td>
                          <td style={{ textAlign: 'initial' }}>

                            <textarea className="Remark" id="addRemark" cols={130} rows={6} ref={this.CloseNotes}></textarea>
                          </td>
                        </tr>
                      </tbody>
                    </table>





                  </Card.Body>
                </Accordion.Collapse>
              </Accordion>
              <table style={{ width: '100%' }}>

                <tr>
                  <td style={{ width: '50%', textAlign: "right" }} >    <button type="submit" className="btn btn-primary">Submit</button>
                  </td>
                  <td>
                    <button className="btn btn-primary" id="ResetButton" onClick={() => window.location.reload()} >Reset</button>
                  </td>
                </tr>
              </table>
            </div>
          </Card>
        </div >
      </form >
    )
  }
}
export default eProjectNewForm;