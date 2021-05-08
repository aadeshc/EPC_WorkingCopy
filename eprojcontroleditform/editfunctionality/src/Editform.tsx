import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Card';
import { SPPeoplePicker } from "./peoplepicker";
import $ from 'jquery';
//import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { IStackTokens, Stack } from 'office-ui-fabric-react/lib/Stack';
import { Helper } from './helper'
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import "./eProjectNewForm.css"
import {
  CompactPeoplePicker,
  IBasePickerSuggestionsProps,
  IBasePicker,
  ListPeoplePicker,
  NormalPeoplePicker,
  ValidationState
} from 'office-ui-fabric-react/lib/Pickers';
import { DateRangeType } from 'office-ui-fabric-react/lib/Calendar'
import "./"
import {
  Label, Checkbox, PrimaryButton, Selection, SelectionMode, TextField, IPersonaProps, IPersona, DatePicker, DayOfWeek, Dropdown, values, DefaultButton, inputProperties, themeRulesStandardCreator, textAreaProperties, thProperties
} from "office-ui-fabric-react";

import { DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { allResolved } from 'q';
import { string } from 'prop-types';
import { throwStatement } from '@babel/types';
import { EventEmitter } from 'events';
import { parse } from 'path';
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
let agreedendate;
let RRDate;
let QIDate;
let EUDRDate;
let FSODate;
let PR2Date;
let PR1Date;
let ChangeDate;



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
  public delivery; deliverycomments; projectComments
  public ITSS; ITSS2; ITSSComments; ITSS2Comments; donglereturn; dongleComments; projectcorrect
  public close; closeComments; resourceskill; resourceskillComments; CSS; CSSComments
  public ProjectType; IndType; IndSubType; Country; WorldArea; ProjPlatform; EEECProjID; EBUU; closeOut

  public DCSAI; DCSAO; DCSDI; DCSDO; SISAI; SISAO; SISDI; SISDO
  public WorkstationNodes; NoofCIOC; NoofCSLS; CEModules; VotingLogic;
  public SysCabinet; MarshallingCabinets; ServerCabinet; PDBCabinet; RiskRegister; PAS;
  constructor(props: IeProjectState) {

    super(props);
    this.EPC = React.createRef();
    this.PDBCabinet = React.createRef();
    this.RiskRegister = React.createRef();
    this.DCSDO = React.createRef();
    this.SysCabinet = React.createRef();
    this.MarshallingCabinets = React.createRef();
    this.ServerCabinet = React.createRef();
    this.PDBCabinet = React.createRef();
    this.PAS = React.createRef();
    this.DCSAI = React.createRef();
    this.DCSAO = React.createRef();
    this.DCSDI = React.createRef();
    this.SISAI = React.createRef();
    this.SISAO = React.createRef();
    this.SISDI = React.createRef();
    this.SISDO = React.createRef();

    this.WorkstationNodes = React.createRef();
    this.NoofCIOC = React.createRef();
    this.NoofCSLS = React.createRef();
    this.CEModules = React.createRef();
    this.VotingLogic = React.createRef();
    this.EndUser = React.createRef();
    this.EndUser = React.createRef();
    this.DeltaV = React.createRef();
    this.ProjectID = React.createRef();
    this.ProjectDate = React.createRef();
    this.ProjectPeriod = React.createRef();
    this.ProjectName = React.createRef();
    this.EndDestination = React.createRef();
    this.SWIO = React.createRef();
    this.HWIO = React.createRef();
    this.FFIO = React.createRef();
    this.SSIO = React.createRef();
    this.closeOut = React.createRef();
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
    this.AnalysisArrow = this.AnalysisArrow.bind(this);



    this.AnalysisInfoArrow = this.AnalysisInfoArrow.bind(this);
    this.AnalysisConfigArrow = this.AnalysisConfigArrow.bind(this);
    this.AnalysisTrackArrow = this.AnalysisTrackArrow.bind(this);
    this.AnalysisCloseArrow = this.AnalysisCloseArrow.bind(this);
    this.loadsubind = this.loadsubind.bind(this)
    this.handlePeopleChnage = this.handlePeopleChnage.bind(this)
    this.postdata = this.postdata.bind(this);
    this.handleEEECLEChange = this.handleEEECLEChange.bind(this)
    this.handleFSOLEChange = this.handleFSOLEChange.bind(this)
    this.handleFSOPMChange = this.handleFSOPMChange.bind(this)
    this.hardwareLeChange = this.hardwareLeChange.bind(this)

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
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleddl = this.handleddl.bind(this)









    this.state = {
      TotalRiskIndex: 0,
      RiskIndex_ProjectCT: 0,
      RiskIndex_ProjectLD: 0,
      RiskIndex_ProjectGP: 0,
      RiskIndex_ExecutionFSO: 0,
      RiskIndex_Execution: 0,
      RiskIndex_ExecutionMulti: 0,
      RiskIndex_EmersonHours: 0,
      RiskIndex_EEECHours: 0,
      RiskIndex_Budget: 0,
      RiskIndex_Utilization: 0,
      RiskIndex_Duration: 0,
      RiskIndex_EEECInvolvement: 0,
      RiskIndex_ProjectChart: 0,
      RiskIndex_EEECScope: 0,
      RiskIndex_EEECInvolvementScope: 0,
      RiskIndex_FAT: 0,
      RiskIndex_OverallPM: 0,
      RiskIndex_OverallRisk: 0,
      RiskIndex_OverallLead: 0,
      RiskIndex_FSOLead: 0,
      RiskIndex_ResourceSkill: 0,
      RiskIndex_FSOSuccess: 0,
      RiskIndex_NonStandard: 0,
      RiskIndex_ResourcePlan: 0,
      FSO_OPEN: 0,
      FSO_Tech: 0,
      FSO_Oth: 0,
      FSO_EEC: 0,

      restdata: [],
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
      showButton: "No",
      year: 0,
      unit: "",
      prjpltfrmunit: "",
      Isdel: null,
      counter: 0,
      EEECID: "",
      CountryCode: "OTH",
      qualitycounter: 900,
      oldcounter: 0,
      title: "",
      ProjEndDate: new Date(),
      ProjRequestEndDate: new Date(),
      AgreedEndDate: new Date(),
      currentDate: new Date(),
      EEECPM: null,
      EEECLE: null,
      FSOLE: null,
      FSOPM: null,
      FinPeriod: "",
      ExpectedHoursPerWeek: 0,
      today: new Date(),






      // Edit Data map

      EditEmerBuisUnit: null,
      FHX: null,
      EditFHXComments: null,
      EditEndUser: null,
      EditEPC: null,
      EditDeltaVVersion: null,
      Edit: null,
      EditTypeOfIndustry: null,
      EditBudgetDeviation: null,
      EditUpdateFrequency: null,
      EditProgressDeviation: null,
      EditScheduleChange: null,
      EditBudgetChange: null,
      EditEEECPM: null,
      EditEEECLe: null,
      EditFSOLe: null,
      EditFSOPm: null,
      EditEEECPMId: null,
      EditEECLeId: null,
      EditFSOMPmId: null,
      EditFSOLeId: null,
      EditHardwareLE: null,
      EditNoOfSLS: null,
      EditNodesOnDelta: null,
      EditCabinetJBS: null,
      EditILD: null,
      EditPR: null,
      EditDynamos: null,
      EditDisplays: null,
      EditPhaseClasses: null,
      EditOP: null,
      EditUP: null,
      EditComplexClasses: null,
      EditEQMClasses: null,
      EditEQM: null,
      EditSIS: null,
      EditModules: null,
      EditModulesClasses: null,
      EditHWIO: null,
      EditSWIO: null,
      EditFWIO: null,
      EditProjectStartDate: null,
      EditProjectStartPeriod: null,
      EditAgreedEndDate: null,
      EditActualEndDate: null,
      EditProjectID: null,
      EditEEECProjID: null,
      EditProjectName: null,
      EditStatus: null,
      EditSpecialDesign: null,
      EditSafetySystem: null,
      EditProjectPlatform: null,
      EditIOType: null,
      EditIOSeries: null,
      EditAgreedBudget: null,
      EditInternalBudget: null,
      EditActuals: null,
      EditETC: null,
      EditProgress: null,
      EditExpectedHours: null,
      EditActualEnd: null,
      EditRemark: null,
      EditCountry: null,
      EditWorldArea: null,
      EditIndustrySubtype: null,
      EditComplexLoops: null,
      EditSSIO: null,
      EditRP: null,
      EditDeliveryComplete: null,
      EditDeliveryCompleteComments: null,
      EditCSSFormReceived: null,
      EditCSSFormReceivedComments: null,
      EditProjectCloseMeeting: null,
      EditProjectCloseMeetingComments: null,
      EditResourceSkillUpdated: null,
      EditResourceSkillUpdatedComments: null,
      EditPerfomarmanceUpdated: null,
      EditPerfomarmanceUpdatedComments: null,
      EditPMITSS: null,
      EditPMITSSComments: null,
      EditHardcopy: null,
      EditHardcopyComments: null,
      EditDatacorrect: null,
      EditDatacorrectComments: null,
      EditPostdelivery: null,
      EditPostdeliveryComments: null,
      EditCloseOut: null,
      //EditCountry : null,
      EditCountryID: null,
      //EditWorldArea : null, 
      DCSAI: null, DCSAO: null, DCSDI: null, DCSDO: null, SISAI: null, SISAO: null, SISDI: null, SISDO: null,
      WorkstationNodes: null, NoofCIOC: null, NoofCSLS: null, CEModules: null, VotingLogic: null,
      SysCabinet: null, MarshallingCabinets: null, ServerCabinet: null, PDBCabinet: null, RiskRegister: null, PAS: null,







    }
  }

  public _onParseAgreedEndDateFromString = (value: string): Date => {
    if (value) {
      const date = this.state.EditAgreedEndDateString;
      const values = (value || '').trim().split('/');
      const day = values.length > 0 ? Math.max(1, Math.min(31, parseInt(values[0], 10))) : date.getDate();
      const month = values.length > 1 ? Math.max(1, Math.min(12, parseInt(values[1], 10))) - 1 : date.getMonth();
      let year = values.length > 2 ? parseInt(values[2], 10) : date.getFullYear();
      return new Date(year, month, day);
    }
    else {
      return null;
    }
  };


  public _onParseActualEndDateFromString = (value: string): Date => {
    if (value) {
      const date = this.state.EditActualEndDate
      const values = (value || '').trim().split('/');
      const day = values.length > 0 ? Math.max(1, Math.min(31, parseInt(values[0], 10))) : date.getDate();
      const month = values.length > 1 ? Math.max(1, Math.min(12, parseInt(values[1], 10))) - 1 : date.getMonth();
      let year = values.length > 2 ? parseInt(values[2], 10) : date.getFullYear();
      return new Date(year, month, day);
    }
    else {
      return null;
    }
  };
  public _EUDRDateFromString = (value: string): Date => {
    if (value) {
      const date = this.state.EUDRDate
      const values = (value || '').trim().split('/');
      const day = values.length > 0 ? Math.max(1, Math.min(31, parseInt(values[0], 10))) : date.getDate();
      const month = values.length > 1 ? Math.max(1, Math.min(12, parseInt(values[1], 10))) - 1 : date.getMonth();
      let year = values.length > 2 ? parseInt(values[2], 10) : date.getFullYear();
      return new Date(year, month, day);
    }
    else {
      return null;
    }
  };
  public _FSODateFromString = (value: string): Date => {
    if (value) {
      const date = this.state.FSODate
      const values = (value || '').trim().split('/');
      const day = values.length > 0 ? Math.max(1, Math.min(31, parseInt(values[0], 10))) : date.getDate();
      const month = values.length > 1 ? Math.max(1, Math.min(12, parseInt(values[1], 10))) - 1 : date.getMonth();
      let year = values.length > 2 ? parseInt(values[2], 10) : date.getFullYear();
      return new Date(year, month, day);
    }
    else {
      return null;
    }
  };
  public _PR2DateFromString = (value: string): Date => {
    if (value) {
      const date = this.state.PR2Date
      const values = (value || '').trim().split('/');
      const day = values.length > 0 ? Math.max(1, Math.min(31, parseInt(values[0], 10))) : date.getDate();
      const month = values.length > 1 ? Math.max(1, Math.min(12, parseInt(values[1], 10))) - 1 : date.getMonth();
      let year = values.length > 2 ? parseInt(values[2], 10) : date.getFullYear();
      return new Date(year, month, day);
    }
    else {
      return null;
    }
  };
  public _PR1DateFromString = (value: string): Date => {
    if (value) {
      const date = this.state.PR1Date
      const values = (value || '').trim().split('/');
      const day = values.length > 0 ? Math.max(1, Math.min(31, parseInt(values[0], 10))) : date.getDate();
      const month = values.length > 1 ? Math.max(1, Math.min(12, parseInt(values[1], 10))) - 1 : date.getMonth();
      let year = values.length > 2 ? parseInt(values[2], 10) : date.getFullYear();
      return new Date(year, month, day);
    }
    else {
      return null;
    }
  };
  public _ChangeDateFromString = (value: string): Date => {
    if (value) {
      const date = this.state.ChangeDate
      const values = (value || '').trim().split('/');
      const day = values.length > 0 ? Math.max(1, Math.min(31, parseInt(values[0], 10))) : date.getDate();
      const month = values.length > 1 ? Math.max(1, Math.min(12, parseInt(values[1], 10))) - 1 : date.getMonth();
      let year = values.length > 2 ? parseInt(values[2], 10) : date.getFullYear();
      return new Date(year, month, day);
    }
    else {
      return null;
    }
  };
  public _QIDateFromString = (value: string): Date => {
    if (value) {
      const date = this.state.QIDate
      const values = (value || '').trim().split('/');
      const day = values.length > 0 ? Math.max(1, Math.min(31, parseInt(values[0], 10))) : date.getDate();
      const month = values.length > 1 ? Math.max(1, Math.min(12, parseInt(values[1], 10))) - 1 : date.getMonth();
      let year = values.length > 2 ? parseInt(values[2], 10) : date.getFullYear();
      return new Date(year, month, day);
    }
    else {
      return null;
    }
  };
  public _RRDateFromString = (value: string): Date => {
    if (value) {
      const date = this.state.RRDate
      const values = (value || '').trim().split('/');
      const day = values.length > 0 ? Math.max(1, Math.min(31, parseInt(values[0], 10))) : date.getDate();
      const month = values.length > 1 ? Math.max(1, Math.min(12, parseInt(values[1], 10))) - 1 : date.getMonth();
      let year = values.length > 2 ? parseInt(values[2], 10) : date.getFullYear();
      return new Date(year, month, day);
    }
    else {
      return null;
    }
  };

  public _onParseProjectEndDateFromString = (value: string): Date => {
    if (value) {
      const date = this.state.EditProjectEndDate
      const values = (value || '').trim().split('/');
      const day = values.length > 0 ? Math.max(1, Math.min(31, parseInt(values[0], 10))) : date.getDate();
      const month = values.length > 1 ? Math.max(1, Math.min(12, parseInt(values[1], 10))) - 1 : date.getMonth();
      let year = values.length > 2 ? parseInt(values[2], 10) : date.getFullYear();
      return new Date(year, month, day);
    }
    else {
      return null;
    }
  };

  public _onParseProjectStartDateFromString = (value: string): Date => {
    if (value) {
      const date = this.state.EditProjectStartDate
      const values = (value || '').trim().split('/');
      const day = values.length > 0 ? Math.max(1, Math.min(31, parseInt(values[0], 10))) : date.getDate();
      const month = values.length > 1 ? Math.max(1, Math.min(12, parseInt(values[1], 10))) - 1 : date.getMonth();
      let year = values.length > 2 ? parseInt(values[2], 10) : date.getFullYear();
      return new Date(year, month, day);
    }
    else {
      return null;
    }
  };


  public handleddl(e) {
    if (this.state.EditStatus == "Delivered") {
      var doc = document.getElementById("ddlStatus")
      doc.innerHTML = " <option>WIP</option><option>On Hold</option><option>Shelved</option><option selected>Delivered</option>"
    } else
      if (this.state.EditStatus == "Closed") {
        var doc = document.getElementById("ddlStatus")
        doc.innerHTML = " <option>WIP</option><option>On Hold</option><option>Shelved</option><option>Delivered</option><option selected>Closed</option>"
        this.setState({
          showButton: "",
        })

      }
      else {
        var doc = document.getElementById("ddlStatus")
        doc.innerHTML = " <option>WIP</option><option>On Hold</option><option>Shelved</option>"
      }

  }


  public handleTextChange(e) {


    if (e.target.id == "DCSAI") {
      this.setState({
        EditDCSAI: e.target.value
      })
    }
    if (e.target.id == "DCSAO") {
      this.setState({
        EditDCSAO: e.target.value
      })
    }

    if (e.target.id == "FHXComments") {
      this.setState({
        EditFHXComments: e.target.value
      })
    }

    if (e.target.id == "DCSDI") {
      this.setState({
        EditDCSDI: e.target.value
      })
    }
    if (e.target.id == "DCSDO") {
      this.setState({
        EditDCSDO: e.target.value
      })
    }
    if (e.target.id == "SISAI") {
      this.setState({
        EditSISAI: e.target.value
      })
    }
    if (e.target.id == "SISAO") {
      this.setState({
        EditSISAO: e.target.value
      })
    }
    if (e.target.id == "SISDO") {
      this.setState({
        EditSISDO: e.target.value
      })
    }
    if (e.target.id == "SISDI") {
      this.setState({
        EditSISDI: e.target.value
      })
    }
    if (e.target.id == "Workstation") {
      this.setState({
        EditWorkstationNodes: e.target.value
      })
    }
    if (e.target.id == "CIO") {
      this.setState({
        EditNoofCIOC: e.target.value
      })
    }
    if (e.target.id == "CSLS") {
      this.setState({
        EditNoofCSLS: e.target.value
      })
    }
    if (e.target.id == "VL") {
      this.setState({
        EditVotingLogic: e.target.value
      })
    }
    if (e.target.id == "SysCabinet") {
      this.setState({
        EditSysCabinet: e.target.value
      })
    }
    if (e.target.id == "Server") {
      this.setState({
        EditServerCabinet: e.target.value
      })
    }
    if (e.target.id == "Marshalling") {
      this.setState({
        EditMarshallingCabinets: e.target.value
      })
    }




    if (e.target.id == "addExpHours") {
      this.setState({
        EditExpectedHours: e.target.value
      })
    }
    if (e.target.id == "addRemark") {
      this.setState({
        EditRemark: e.target.value
      })
    }

    if (e.target.id == "addRemark") {
      this.setState({
        EditRemark: e.target.value
      })
    }
    if (e.target.id == "addEPC") {
      this.setState({
        EPC: e.target.value
      })
    }
    if (e.target.id == "addEnduser") {
      this.setState({
        EditEndUser: e.target.value
      })
    }
    if (e.target.id == "CloseComments") {
      this.setState({
        EditProjectCloseMeetingComments: e.target.value
      })
    }
    if (e.target.id == "CloseOutNotes") {
      this.setState({
        EditCloseOut: e.target.value
      })
    }
    if (e.target.id == "addEndDestination") {
      this.setState({
        EditEndDestination: e.target.value
      })
    }
    if (e.target.id == "addProjectName") {
      this.setState({
        EditProjectName: e.target.value
      })
    }
    if (e.target.id == "addProjectID") {
      this.setState({
        EditProjectID: e.target.value
      })
    }
    if (e.target.id == "addHWIO") {
      this.setState({
        EditHWIO: e.target.value
      })
    }
    if (e.target.id == "addSWIO") {
      this.setState({
        EditSWIO: e.target.value
      })
    }
    if (e.target.id == "addFFIO") {
      this.setState({
        EditFWIO: e.target.value
      })
    }
    if (e.target.id == "addSISIO") {
      this.setState({
        EditSSIO: e.target.value
      })
    }
    if (e.target.id == "addModuleClasses") {
      this.setState({
        EditModulesClasses: e.target.value
      })
    }
    if (e.target.id == "addModules") {
      this.setState({
        EditModules: e.target.value
      })
    }
    if (e.target.id == "addComplexLoops") {
      this.setState({
        EditComplexLoops: e.target.value
      })
    }
    if (e.target.id == "addEQMClasses") {
      this.setState({
        EditEQMClasses: e.target.value
      })
    }
    if (e.target.id == "addEQM") {
      this.setState({
        EditEQM: e.target.value
      })
    }
    if (e.target.id == "addPhraseClasses") {
      this.setState({
        EditPhaseClasses: e.target.value
      })
    }
    if (e.target.id == "addOP") {
      this.setState({
        EditOP: e.target.value
      })
    }
    if (e.target.id == "addUP") {
      this.setState({
        EditUP: e.target.value
      })
    }
    if (e.target.id == "addPR") {
      this.setState({
        EditPR: e.target.value
      })
    }
    if (e.target.id == "addDynamos") {
      this.setState({
        EditDynamos: e.target.value
      })
    }
    if (e.target.id == "addDisplay") {
      this.setState({
        EditDisplays: e.target.value
      })
    }
    if (e.target.id == "addCabinetJBS") {
      this.setState({
        EditCabinetJBS: e.target.value
      })
    }
    if (e.target.id == "addILD") {
      this.setState({
        EditILD: e.target.value
      })
    }

    if (e.target.id == "addControl") {
      this.setState({
        EditNoOfControl: e.target.value
      })
    }
    if (e.target.id == "NoOfSLS") {
      this.setState({
        EditNoOfSLS: e.target.value
      })
    }
    if (e.target.id == "NodesOnDelta") {
      this.setState({
        EditNodesOnDelta: e.target.value
      })
    }
    if (e.target.id == "addBudgetChange") {
      this.setState({
        EditBudgetChange: e.target.value
      })
    }
    if (e.target.id == "addScheduleChange") {
      this.setState({
        EditScheduleChange: e.target.value
      })
    }
    if (e.target.id == "addProgressDeviation") {
      this.setState({
        EditProgressDeviation: e.target.value
      })
    }
    if (e.target.id == "addUpdateFrequenct") {
      this.setState({
        EditUpdateFrequency: e.target.value
      })
    }
    if (e.target.id == "addBudgetDeviation") {
      this.setState({
        EditBudgetDeviation: e.target.value
      })
    }
    if (e.target.id == "addAgreedBudget") {
      var budget = e.target.value;
      var pervalue = (budget / 100) * 2
      this.setState({
        EditAgreedBudget: e.target.value,
        EditBudgetDeviation: pervalue
      })
    }
    if (e.target.id == "addInternalBudget") {
      this.setState({
        EditInternalBudget: e.target.value
      })
    }
    if (e.target.id == "addActuals") {
      this.setState({
        EditActuals: e.target.value
      })
    }
    if (e.target.id == "addETC") {
      this.setState({
        EditExpectedHours: e.target.value
      })
    }
    if (e.target.id == "CloseOutNotes") {
      this.setState({
        EditCloseOut: e.target.value
      })
    }




    if (e.target.id == "addProgress") {
      this.setState({
        EditProgress: e.target.value
      })
    }
    if (e.target.id == "addActualEnd") {
      this.setState({
        EditActualEnd: e.target.value
      })
    }
    if (e.target.id == "ITSSComments") {
      this.setState({
        EditPMITSSComments: e.target.value
      })
    }
    if (e.target.id == "ITSS2Comments") {
      this.setState({
        ProjectHWComments: e.target.value
      })
    }
    if (e.target.id == "DongleComments") {
      this.setState({
        EditDongleReturnedComments: e.target.value
      })
    }
    if (e.target.id == "ProjectComments") {
      this.setState({
        EditDatacorrectComments: e.target.value
      })
    }
    if (e.target.id == "PostDeliveryComments") {
      this.setState({
        EditPostdeliveryComments: e.target.value
      })
    }
    if (e.target.id == "CSSComments") {
      this.setState({
        EditCSSFormReceivedComments: e.target.value
      })
    }
    if (e.target.id == "ResourceSkillComments") {
      this.setState({
        EditResourceSkillUpdatedComments: e.target.value
      })
    }


    if (e.target.id == "DeliveryComments") {
      this.setState({
        EditDeliveryCompleteComments: e.target.value
      })
    }


    if (e.target.id == "HardCopyComments") {
      this.setState({
        EditProjectFolderComments: e.target.value
      })
    }

    if (e.target.id == "ResourceSkillUpdatedComments") {
      this.setState({
        EditResourceSkillUpdatedComments: e.target.value
      })
    }



  }

  public getExpectedHours(e) {
    this.setState({
      EditETC: e.target.value
    })
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
    var todaysWeekNo = Math.ceil((((todaysDt.getTime() - oneJan.getTime()) / 86400000) + oneJan.getDay()) / 7);
    if (todaysWeekNo == NaN) {
      todaysWeekNo = 2;
    }
    //get the no of remaining weeks
    var diffDateValue = agreedEndDtWeekNo - todaysWeekNo;
    if (diffDateValue == 0) {
      var answer = 0;
    } else {
      var answer = valueETC / diffDateValue;
    }




    answer = Math.abs(answer)
    console.log(answer)
    this.setState(
      {
        ExpectedHoursPerWeek: answer,
        EditExpectedHours: answer,
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


  public hardwareLeChange = (name) => (value: any) => {

    var EEECPM = value;
    var EEEEE = Helper.getUserID(value)
    if (EEEEE != 0 || EEEEE != null) {

      this.setState(
        {
          EditEEECLeId: EEEEE
        }
      )

    }
  }

  public loadFY() {
    // get current FY 

    var year = (new Date()).getFullYear();
    var shortyear = year.toString().substring(2); // 19
    var today = new Date();
    var currmonth = today.getMonth();
    if (currmonth >= 8) {
      shortyear = shortyear + 1;
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
        }).then(

        ).catch((e) => {
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
                opacity: false,
                Group: "Quality"
              });
            }
          }



        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });
  }



  public loadAllData(param) {
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Projectmaster')/Items?$filter=EEECProjID eq '` + param + `'`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          //initialProj =response.d.results;
          var arr = Object.values(response.d.results);
          console.log(arr)

          console.log(response.d.results[0].Emerson_x0020_Business_x0020_Uni);
          console.log(response.d.results[0].DeltaVVersion);
          console.log(response.d.results[0].ProjectType);
          console.log(response.d.results[0].Country);
          console.log(response.d.results[0].WorldArea);
          console.log(response.d.results[0].IndustrySubtype);
          console.log(response.d.results[0].TypeOfIndustry);
          console.log(response.d.results[0].AgreedEndDate)

          if (response.d.results[0].ActualEndDate === null || response.d.results[0].ActualEndDate == 'undefined') {
            this.setState({
              EditActualEndDate: null,
            })
          } else {
            this.setState({

              EditActualEndDate: Helper.getUTCDate(new Date(response.d.results[0].ActualEndDate)),
            })

          }



          if (response.d.results[0].EndUserDesign === null || response.d.results[0].EndUserDesign == 'undefined') {
            this.setState({
              EUDRDate: null,
            })
          } else {
            this.setState({

              EUDRDate: Helper.getUTCDate(new Date(response.d.results[0].EndUserDesign)),
            })

          }

          if (response.d.results[0].ProjectReviewCallswithFSO === null || response.d.results[0].ProjectReviewCallswithFSO == 'undefined') {
            this.setState({
              FSODate: null,
            })
          } else {
            this.setState({

              FSODate: Helper.getUTCDate(new Date(response.d.results[0].ProjectReviewCallswithFSO)),
            })

          }

          if (response.d.results[0].ProductivityReview === null || response.d.results[0].ProductivityReview == 'undefined') {
            this.setState({
              PR1Date: null,
            })
          } else {
            this.setState({

              PR1Date: Helper.getUTCDate(new Date(response.d.results[0].ProductivityReview)),
            })

          }

          if (response.d.results[0].ProductivityReview2 === null || response.d.results[0].ProductivityReview2 == 'undefined') {
            this.setState({
              PR2Date: null,
            })
          } else {
            this.setState({

              PR2Date: Helper.getUTCDate(new Date(response.d.results[0].ProductivityReview2)),
            })

          }

          if (response.d.results[0].ChangeManagement === null || response.d.results[0].ChangeManagement == 'undefined') {
            this.setState({
              ChangeDate: null,
            })
          } else {
            this.setState({

              ChangeDate: Helper.getUTCDate(new Date(response.d.results[0].ChangeManagement)),
            })

          }

          if (response.d.results[0].QIDocumentsUpdated === null || response.d.results[0].QIDocumentsUpdated == 'undefined') {
            this.setState({
              QIDate: null,
            })
          } else {
            this.setState({

              QIDate: Helper.getUTCDate(new Date(response.d.results[0].QIDocumentsUpdated)),
            })

          }

          if (response.d.results[0].ActualEndDate === null || response.d.results[0].ActualEndDate == 'undefined') {
            this.setState({
              EditActualEndDate: null,
            })
          } else {
            this.setState({

              EditActualEndDate: Helper.getUTCDate(new Date(response.d.results[0].ActualEndDate)),
            })

          }

          if (response.d.results[0].RiskRegister === null || response.d.results[0].RiskRegister == 'undefined') {
            this.setState({
              RRDate: null,
            })
          } else {
            this.setState({

              RRDate: Helper.getUTCDate(new Date(response.d.results[0].RiskRegister)),
            })

          }




          this.setState({
            EditForecast: response.d.results[0].ISForecasted,
            EditPDL: response.d.results[0].PDL,
            PDLChecked: (response.d.results[0].PDL == "Yes"),
            EditPCSD: response.d.results[0].PCSD,
            PCSDChecked: (response.d.results[0].PCSD == "Yes"),
            EditVO: response.d.results[0].VO,
            VOChecked: (response.d.results[0].VO == "Yes"),
            EditCTO: response.d.results[0].CTO,
            CTOChecked: (response.d.results[0].CTO == "Yes"),
            EditDVLive: response.d.results[0].ProductivityDVLive,
            DVChecked: (response.d.results[0].ProductivityDVLive == "Yes"),
            EditResourceCertifications: response.d.results[0].ResourceCertifications,
            ResourceChecked: (response.d.results[0].ResourceCertifications == "Yes"),
            EditLBPManagingFAT: response.d.results[0].LBPManagingFAT,
            LBPChecked: (response.d.results[0].LBPManagingFAT == "Yes"),
            EditPAS: response.d.results[0].PAS,
            PASChecked: (response.d.results[0].PAS == "Yes"),
            EditEI: response.d.results[0].E_x0026_I,
            EIChecked: (response.d.results[0].E_x0026_I == "Yes"),
            EditICSS: response.d.results[0].ICSS,
            ICSSChecked: (response.d.results[0].ICSS == "Yes"),
            EditSyncade: response.d.results[0].Syncade,
            SyncadeChecked: (response.d.results[0].Syncade == "Yes"),
            EditTMS: response.d.results[0].TMS,
            TMSChecked: (response.d.results[0].TMS == "Yes"),
            EditMHM: response.d.results[0].MHM,
            MHMChecked: (response.d.results[0].MHM == "Yes"),
            EditWireless: response.d.results[0].Wireless,
            WireChecked: (response.d.results[0].Wireless == "Yes"),
            EditFeed: response.d.results[0].FEED,
            FeedChecked: (response.d.results[0].FEED == "Yes"),
            EditConsultancy: response.d.results[0].Consultancy,
            EditCChecked: (response.d.results[0].Consultancy == "Yes"),
            ISolution: response.d.results[0].ISolution,
            ISolChecked: (response.d.results[0].ISolution == "Yes"),
            EditOSIPI: response.d.results[0].OSIPI,
            OSIChecked: (response.d.results[0].OSIPI == "Yes"),
            EditCybersecurity: response.d.results[0].Cybersecurity,
            CyberChecked: (response.d.results[0].Cybersecurity == "Yes"),
            ChkSIS: response.d.results[0].ChkSIS,
            ChkSISChecked: (response.d.results[0].ChkSIS == "Yes"),
            EditID: response.d.results[0].ID,
            EPC: response.d.results[0].EPC,
            EndUser: response.d.results[0].End_x0020_User,
            EditEndDestination: response.d.results[0].End_x0020_Destination,
            EditEmerBuisUnit: response.d.results[0].Emerson_x0020_Business_x0020_Uni,
            EditYear: (response.d.results[0].EEECProjID).split('-')[0],
            EditUnit: (response.d.results[0].EEECProjID).split('-')[2],
            prjpltfrmunit: "",
            EditCountryCode: (response.d.results[0].EEECProjID).split('-')[1],
            EditCounter: (response.d.results[0].EEECProjID).split('-')[3],
            EditEndUser: response.d.results[0].End_x0020_User,
            //EditEPC: response.d.results[0],
            EditDeltaVVersion: response.d.results[0].DeltaVVersion,
            EditProjectType: response.d.results[0].ProjectType,
            AgreedEndDate: response.d.results[0].AgreedEndDate,


            // EditProjectName : response.d.results[0].ProjectName,
            // EditProjectID : response.d.results[0].ProjectID,
            // EditEEECProjID : response.d.results[0].EEECProjID,
            // Edit: response.d.results[0],
            EndFinPeriod: response.d.results[0].ActualEnd,
            EditTypeOfIndustry: response.d.results[0].TypeOfIndustry,
            EditBudgetDeviation: response.d.results[0].BudgetDeviation,
            EditUpdateFrequency: response.d.results[0].UpdateFrequency,
            EditProgressDeviation: response.d.results[0].ProgressDeviation,
            EditScheduleChange: response.d.results[0].ScheduleChange,
            EditBudgetChange: response.d.results[0].BudgetChange,
            EditEEECPM: response.d.results[0].EEECPM,
            EditEEECLe: response.d.results[0].EEECLe,
            EditFSOLe: response.d.results[0].FSOLe,
            EditFSOPm: response.d.results[0].FSOPm,
            //EditHardwareLE: response.d.results[0],
            EditNoOfSLS: response.d.results[0].NoOfSLS,
            EditNodesOnDelta: response.d.results[0].NodesOnDelta,
            EditCabinetJBS: response.d.results[0].CabinetJBS,
            EditILD: response.d.results[0].ILD,
            EditPR: response.d.results[0].PR,
            EditDynamos: response.d.results[0].Dynamos,
            EditDisplays: response.d.results[0].Displays,
            EditPhaseClasses: response.d.results[0].PhaseClasses,
            EditOP: response.d.results[0].OP,
            EditUP: response.d.results[0].UP,
            EditComplexClasses: response.d.results[0].ComplexClasses,
            EditEQMClasses: response.d.results[0].EQMClasses,
            EditEQM: response.d.results[0].EQM,
            EditSIS: response.d.results[0].SIS,
            EditModules: response.d.results[0].Modules,
            EditModulesClasses: response.d.results[0].ModuleClasses,
            EditHWIO: response.d.results[0].HWIO,
            EditSWIO: response.d.results[0].SWIO,
            EditFWIO: response.d.results[0].FWIO,
            EditEEECProjID: response.d.results[0].EEECProjID,
            EditNoOfControl: response.d.results[0].NoOfControllers,
            ProjectHWComments: response.d.results[0].ProjectHWComments,
            EditProjectStartPeriod: response.d.results[0].ProjectStartPeriod,
            ProjectPeriod: response.d.results[0].ProjectStartPeriod,
            //EditProjectPlatform : response.d.results[0].ProjectPlatform,
            EditHardcopy: response.d.results[0].ProjectFolderArchive,

            FinPeriod: response.d.results[0].ProjectStartPeriod,
            EditAgreedEndDate: response.d.results[0].AgreedEndDate,
            EditProjectStartDate: Helper.getUTCDate(new Date(response.d.results[0].ProjectStartDate)),
            EditAgreedEndDateString: Helper.getUTCDate(new Date(response.d.results[0].AgreedEndDate)),


            EditProjectEndDate: Helper.getUTCDate(new Date(response.d.results[0].ProjectEndDate)),
            EditProjectID: response.d.results[0].ClarityID,
            // EditEEECProjID: response.d.results[0].EditEEECProjID,
            EditExpectedHours: response.d.results[0].ExpectedHours,
            ExpectedHoursPerWeek: response.d.results[0].ExpectedHours,
            EditProjectName: response.d.results[0].ProjectName,
            EditStatus: response.d.results[0].Status,
            EditSpecialDesign: response.d.results[0].SpecialDesign,
            EditSafetySystem: response.d.results[0].SafetySystem,
            EditProjectPlatform: response.d.results[0].ProjectPlatform,
            EditIOType: response.d.results[0].IOType,
            EditIOSeries: response.d.results[0].IOSeries,
            EditAgreedBudget: response.d.results[0].AgreedBudget,
            EditInternalBudget: response.d.results[0].InternalBudget,
            EditActuals: response.d.results[0].Actuals,
            EditETC: response.d.results[0].ETC,
            EditProgress: response.d.results[0].Progress,
            //EditExpectedHours: response.d.results[0].ExpectedHours,
            EditActualEnd: response.d.results[0].ActualEnd,
            EditRemark: response.d.results[0].Remark,
            EditCountry: response.d.results[0].Country,
            EditWorldArea: response.d.results[0].WorldArea,
            EditIndustrySubtype: response.d.results[0].IndustrySubtype,
            EditComplexLoops: response.d.results[0].ComplexLoops,
            EditSSIO: response.d.results[0].SSIO,
            EditRP: response.d.results[0].RP,

            EditDatacorrect: response.d.results[0].Datacorrect,
            EditDatacorrectComments: response.d.results[0].DatacorrectComments,
            EditDeliveryComplete: response.d.results[0].DeliveryComplete,
            EditDeliveryCompleteComments: response.d.results[0].DeliveryCompleteComments,

            EditCSSFormReceived: response.d.results[0].CSSFormReceived,
            EditCSSFormReceivedComments: response.d.results[0].CSSFormReceivedComments,

            EditProjectCloseMeeting: response.d.results[0].ProjectCloseMeeting,
            EditProjectCloseMeetingComments: response.d.results[0].ProjectCloseMeetingComments,
            EditEEEC: response.d.results[0].EEECCenter,
            EditResourceSkillUpdated: response.d.results[0].ResourceSkillUpdated,
            EditResourceSkillUpdatedComments: response.d.results[0].ResourceSkillUpdatedComments,

            EditPerfomarmanceUpdated: response.d.results[0].PerfomarmanceUpdated,
            EditPerfomarmanceUpdatedComments: response.d.results[0].PerfomarmanceUpdatedComments,

            EditPMITSS: response.d.results[0].PMITSS,
            EditPMITSSComments: response.d.results[0].PMITSSComments,
            EditCloseOut: response.d.results[0].Closeoutnotes,
            EditITSSCall: response.d.results[0].ProjectHW,
            EditITSCallComments: response.d.results[0].ProjectHWComments,




            //new Code
            EditDCSAI: response.d.results[0].DCS_x0020_AI,
            EditDCSAO: response.d.results[0].DCSAO,
            EditDCSDI: response.d.results[0].DCSDI,
            EditDCSDO: response.d.results[0].DCSDO,
            EditSISAI: response.d.results[0].SISAI,
            EditSISAO: response.d.results[0].SISAO,
            EditSISDI: response.d.results[0].SISDI,
            EditSISDO: response.d.results[0].SISDO,
            EditWorkstationNodes: response.d.results[0].WorkstationNodes,
            EditFHX: response.d.results[0].ISProjectFHX,
            EditFHXComments: response.d.results[0].ISProjectFHXComments,
            TopRisk: response.d.results[0].TopRisk,
            EditNoofCIOC: response.d.results[0].NoofCIOC,
            EditNoofCSLS: response.d.results[0].NoofCSLS,
            EditCEModules: response.d.results[0].NoofCSLS,
            EditVotingLogic: response.d.results[0].VotingLogic,
            EditSysCabinet: response.d.results[0].SystemCabinets,
            EditMarshallingCabinets: response.d.results[0].MarshallingCabinets,
            EditServerCabinet: response.d.results[0].ServerNetworkCabinets,
            EditPDBCabinet: response.d.results[0].Closeoutnotes,
            EditRiskRegister: response.d.results[0].Closeoutnotes,
            ProjectRiskStatus: response.d.results[0].ProjectLevelRiskStatus,



            //



            // EditHardcopy: response.d.results[0].,
            // EditHardcopyComments: response.d.results[0],

            EditPostdelivery: response.d.results[0].Postdelivery,
            EditPostdeliveryComments: response.d.results[0].PostdeliveryComments,

            EditProjectFolder: response.d.results[0].ProjectFolderArchive,
            EditProjectFolderComments: response.d.results[0].ProjectFolderArchiveComments,

            EditDongleReturned: response.d.results[0].DongleReturned,
            EditDongleReturnedComments: response.d.results[0].DongleReturnedComments,

          }, () => {
            this.getProjectTypeID();
            this.getcurrentcsergroup()
            resolve();
          })
          console.log(arr[0])
        }).then(() => {
          this.loadpeople(param);
        }

        ).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });
  }


  public getProjectTypeID() {
    let deltavversion = []
    debugger;
    //const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Project%20Platform')/Items?&expand=BM&$select%20BM/Id,BM/Title,Project%20Platform?filter=Project%20Platform eq '` + this.state.EditProjectPlatform + `'`
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Project%20Platform')/Items?$select=BM/Title,BM/Id,Project_x0020_Platform&$expand=BM&$filter=Project_x0020_Platform eq '` + this.state.EditProjectPlatform + `'`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          deltavversion = response.d.results;
          var arr = Object.values(response.d.results);

          for (let i in response.d.results) {


            this.setState({
              BMID: response.d.results[0].BM.Id,
              BMTitle: response.d.results[0].BM.Title
            });
          }
          console.log(this.state.BMID)
          console.log(response.d.results)
        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });

  }
  public componentDidMount() {

    var stringQuery = Helper.getQueryStringParameter('id');
    this.setState({
      navURL: "https://emerson.sharepoint.com/sites//EEEC/EProjectControl/Pages/LinkPage.aspx?FilterField1=EEECProjectID&FilterValue1=" + stringQuery + ""
    }, () => {
      // var anchor = document.getElementById("rootbar")
      // anchor.setAttribute("href", this.state.navURL)
      // anchor.setAttribute("Target", "_blank")
    })


    //this.loadpeople();
    debugger;
    console.log(stringQuery);

    this.loadprojectlist();
    this.loaddeltavversion();
    this.loadFY();
    this.loadperiod();
    this.EBU();
    this.loadPlatform();
    this.loadindustry();
    // this.getcurrentcsergroup();
    this.loadCountry();
    this.loadcounter();

    this.loadAllData(stringQuery)
    setTimeout(this.handleddl, 1000);

    // this.postdata();

    let initialProj = []
    debugger;



  }

  public loadpeople(param) {
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Projectmaster')/Items(` + this.state.EditID + `)`
    const url = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Projectmaster')/Items?$expand=EEECPM,IndustrySubtype,Country,EEECLe,FSOPm,HWLE,FSOLe&$select=EEECPM/Title,IndustrySubtype/Industry_x0020_Subtype,EEECPM/Id,EEECLe/Title,EEECLe/Id,Country/Country,Country/CountryCode,Country/Id,HWLE/Title,HWLE/Id,TypeOfIndustry,FSOPm/Title,FSOPm/Id,FSOLe/Title,ClarityID,FSOLe/Id&$filter=EEECProjID eq '` + param + `'`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(url, null, null, null)
        .then((response) => {
          for (let i in response.d.results) {
            console.log(response.d.results[i].EEECPM.Title)
            var name = response.d.results[i].IndustrySubtype.Industry_x0020_Subtype
            var indtype = response.d.results[i].TypeOfIndustry
            this.loadindsubtype(indtype);

            this.loadworldarea(response.d.results[i].Country.CountryCode);



            this.setState
              ({
                EditEEECPM: response.d.results[i].EEECPM.Title,
                EditEEECPMId: response.d.results[i].EEECPM.Id,
                EditEEECLe: response.d.results[i].EEECLe.Title,
                EditEEECLeId: response.d.results[i].EEECLe.Id,
                EditFSOPm: response.d.results[i].FSOPm.Title,
                EditFSOMPmId: response.d.results[i].FSOPm.Id,
                EditFSOLe: response.d.results[i].FSOLe.Title,
                EditFSOLeId: response.d.results[i].FSOLe.Id,
                CC: response.d.results[i].Country.CountryCode,
                EditHardwareLE: response.d.results[i].HWLE.Title,
                EditHardwareLeId: response.d.results[i].HWLE.Id,
                EditCountry: response.d.results[i].Country.Country,
                CountryCode: response.d.results[i].Country.CountryCode,

                EditIndustrySubtype: name

              }, () => {
                this.getuserid();
              })
          }
        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });


  }

  public reloadpage() {

  }

  public loadsubind() {

  }
  public postdata(e) {



    debugger;
    e.preventDefault();
    var EPC = this.EPC.current.value;
    var HWIO = this.HWIO.current.value;
    var SWIO = this.SWIO.current.value;
    var SSIO = this.SSIO.current.value;
    var projectID = this.ProjectID.current.value;
    var projectName = this.ProjectName.current.value;
    var DeltaV = this.DeltaV.current.value;
    var ProjectPeriod = this.ProjectPeriod.current.value;
    var EndUser = this.EndUser.current.value;
    var EndDestination = this.EndDestination.current.value;
    var ProjectPlatform = this.ProjPlatform.current.value
    var CloseOut = this.closeOut.current.value;
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


    var CSS = this.CSS.current.value
    var CSSComments = this.CSSComments.current.value
    var ITSS = this.ITSS.current.value
    var ITSSComments = this.ITSSComments.current.value
    var ProjectHW = this.ITSS2.current.value
    var ProjectHWComments = this.ITSS2Comments.current.value
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
    var EditEEEC = this.state.EditEEEC
    var ProjectStartDate = pstartDate
    var ProjectEndDate = pendDate
    var ProjectActdate = pactDate
    var ProjectAgreedEndDate = agreedendate
    //console.log(title);

    //binding for lookup
    var countryID = parseInt(this.Country.current.selectedOptions[0].id);
    //var worldAreaID = this.WorldArea.current.selectedOptions[0].id
    var IndSubID = parseInt(this.IndSubType.current.selectedOptions[0].id);

    return new Promise((resolve, reject) => {

      const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Projectmaster')/Items(` + this.state.EditID + `)`;
      //const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Projectmaster')/Items`;
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
        Title: "new MMID2",
        EPC: EPC,
        HWIO: HWIO,
        SWIO: SWIO,
        SSIO: SSIO,
        ProjectID: projectID,
        ProjectName: projectName,
        End_x0020_User: EndUser,
        End_x0020_Destination: EndDestination,
        DeltaVVersion: DeltaV,
        BudgetDeviation: BudgetDev,
        ProjectPlatform: ProjPlatform,
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
        Status: this.state.EditStatus,
        ISDelivered: this.state.Isdel,
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
        ProjectHWComments: ProjectHWComments,
        ProjectHW: ProjectHW,
        PostdeliveryComments: PostDeliveryComments,
        Postdelivery: this.state.EditPostdelivery,
        Emerson_x0020_Business_x0020_Uni: EBUU,
        ProjectType: ProjType,
        TypeOfIndustry: IndType,
        EEECProjID: EEECProjID,
        ProjectStartPeriod: ProjectPeriod,
        CountryId: countryID,
        IndustrySubtypeId: IndSubID,
        ProjectStartDate: pstartDate,
        ProjectEndDate: pendDate,
        AgreedEndDate: ProjectAgreedEndDate,
        ActualEndDate: pactDate,
        EndUserDesign: EUDRDate,
        QIDocumentsUpdated: QIDate,
        ChangeManagement: ChangeDate,
        ProductivityReview: PR1Date,
        ProductivityReview2: PR2Date,
        RiskRegister: RRDate,
        ProjectReviewCallswithFSO: FSODate,
        EEECPMId: this.state.EditEEECPMId,
        FSOLeId: this.state.EditFSOLeId,
        EEECLeId: this.state.EditEEECLeId,
        FSOPmId: this.state.EditFSOMPmId,
        HWLEId: this.state.EditHardwareLeId,
        Closeoutnotes: CloseOut,
        EEECCenter: EditEEEC,
        ISForecasted: this.state.EditForecast,
        DCSAO: this.state.EditDCSAO,
        DCSDI: this.state.EditDCSDI,
        DCSDO: this.state.EditDCSDO,
        SISAI: this.state.EditSISAI,
        SISAO: this.state.EditSISAO,
        SISDI: this.state.EditSISDI,
        SISDO: this.state.EditSISDO,
        VotingLogic: this.state.EditVotingLogic,
        DCS_x0020_AI: this.state.EditDCSAI,
        WorkstationNodes: this.state.EditWorkstationNodes,
        NoofCIOC: this.state.EditNoofCIOC,
        NoofCSLS: this.state.EditNoofCSLS,
        SystemCabinets: this.state.EditSysCabinet,
        MarshallingCabinets: this.state.EditMarshallingCabinets,
        ServerNetworkCabinets: this.state.EditServerCabinet,
        PDL: this.state.EditPDL,
        PCSD: this.state.EditPCSD,
        VO: this.state.EditVO,
        ResourceCertifications: this.state.EditResourceCertifications,
        LBPManagingFAT: this.state.EditLBPManagingFAT,
        PAS: this.state.EditPAS,
        E_x0026_I: this.state.EditEI,
        ICSS: this.state.EditICSS,
        Syncade: this.state.EditSyncade,
        TMS: this.state.EditTMS,
        MHM: this.state.EditMHM,
        Wireless: this.state.EditWireless,
        FEED: this.state.EditFeed,
        Consultancy: this.state.EditConsultancy,
        ISolution: this.state.ISolution,
        OSIPI: this.state.EditOSIPI,
        Cybersecurity: this.state.EditCybersecurity,
        CTO: this.state.EditCTO,
        ProductivityDVLive: this.state.EditDVLive,
        FWIO: this.state.EditFWIO,
        ClarityID: this.state.EditProjectID,
        ChkSIS: this.state.ChkSIS,

        ProjectLevelRiskStatus: this.state.ProjectRiskStatus,
        ISProjectFHXComments: this.state.EditFHXComments,
        ISProjectFHX: this.state.EditFHX








      }
      Helper.executeJson(restUrl, "POST", headers, JSON.stringify($.extend(true, {}, savedata))).then((response) => {
        // Resolve the request
        console.log(response);
        alert("Record Updated Succesfully")
        setTimeout(func, 700);
        function func() {
          window.open("https://emerson.sharepoint.com/sites/process-dev2/EEEC/EProjectControl/SiteAssets/ViewReport.aspx", "_self");
        }
        resolve("success");

      }).catch((e) => {
        reject("Error")
        console.log(e);

      });

    });




  }

  public getCurrentFY(shortyear, entereddate, type) {
    this.setState({
      Startflag: false,
      Endflag: false
    })
    var shortyearint = parseInt(shortyear);
    var year = shortyearint;
    var month = entereddate.getMonth();
    if (month > 8) {
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
            // alert("Financial Period for date is not defined .Please contact admin")

            if (type == "start")
              this.setState({
                EditProjectStartPeriod: "",
              });
            if (type == "end") {

              this.setState({
                EndFinPeriod: "",
              })


            }
          } else {
            for (let i in response.d.results) {
              console.log(response.d.results[i].Period_x0020_Name)

              var startdatestring = response.d.results[i].Start_x0020_Date
              var Startdate = new Date(startdatestring);
              var enddatestring = response.d.results[i].End_x0020_Date
              var enddate = new Date(enddatestring);
              if (entereddate >= Startdate && entereddate <= enddate) {
                CurrentFinPeriod.push = response.d.results[i].Period_x0020_Name
                CurrentPeriod = response.d.results[i].Period_x0020_Name
                if (type == "start") {
                  this.setState({
                    FinPeriod: response.d.results[i].Period_x0020_Name,
                    EditProjectStartPeriod: response.d.results[i].Period_x0020_Name,
                    Startflag: true

                  });
                }
                if (type == "end") {
                  this.setState({
                    EndFinPeriod: response.d.results[i].Period_x0020_Name,
                    Endflag: true
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

          if (this.state.Startflag != true && type != "end") {
            alert("‘Project Start Period’ is not defined for selected ‘Project Start Date’. Please contact e-Project Control administrator")
            this.setState({
              FinPeriod: "",
              EditProjectStartPeriod: "",
            })

          }
          if (this.state.Endflag != true && type != "start") {
            alert("‘Project Start Period’ is not defined for selected ‘Project End Date’. Please contact e-Project Control administrator")
            this.setState({
              EndFinPeriod: "",
            })
            document.getElementById("addActualEnd").setAttribute('required', 'required');

          }
        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });
  }


  public handleDateEvent = date => (name) => {


    if (date == "ActualEndDate") {
      var r = window.confirm("Entering date here will change project status to Delivered.Do you want to proceed");
      if (r) {
        const valueOfInput = name.format();
        var prjdate = new Date(valueOfInput);
        var ProjActDate = new Date(valueOfInput).toISOString()
        pactDate = ProjActDate
        this.setState({ EditActualEndDate: Helper.getUTCDate(name) });
        this.setState({
          Isdel: "Yes"
        })
        var year = prjdate.getFullYear();
        var shortyear = year.toString().substring(2)
        var month = prjdate.getMonth();
        this.getCurrentFY(shortyear, prjdate, "end")
        this.setState({
          EditStatus: "Delivered"
        })

        var doc = document.getElementById("ddlStatus")

        doc.innerHTML = "<option>WIP</option><option>On Hold</option><option>Shelved</option><option>Delivered</option>"
        console.log(doc)
        alert("Please review 'Agreed End Date' and update if appropriate.Delivery will be considered delayed if 'Actual End Date' is after 'Agreed End Date'")
        document.getElementById("addAgreedBudget").focus()

        // } else {
        //   document.getElementById("ActualEndDate-label").nodeValue = ""
        // }
      } else {
        this.setState({ EditActualEndDate: null, EndFinPeriod: "" }, () => {
          setTimeout(() => {
            var a: any = document.getElementById('ActualEndDate-label');
            a.value = '';
            // document.getElementById("ActualEndDate-label").nodeValue = ""
            var doc = document.getElementById("ddlStatus")

            doc.innerHTML = "<option>WIP</option><option>On Hold</option><option>Shelved</option>"

          }, 400);

        });





        document.getElementById("addAgreedBudget").focus()
      }
    }
    if (date == "ProjectData") {
      this.setState({ currentDate: name });

      this.setState({ EditProjectStartDate: Helper.getUTCDate(name) })
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
      this.setState({ EditProjectEndDate: Helper.getUTCDate(name) })
      const valueOfInput = name.format();
      var ProjEndDate = new Date(valueOfInput).toISOString();
      pendDate = ProjEndDate
      // this.setState({
      //   pend:name
      // }) 
    }

    if (date == "RRDate") {
      this.setState({ RRDate: name });
      this.setState({ RRDate: Helper.getUTCDate(name) })
      const valueOfInput = name.format();
      var ProjEndDate = new Date(valueOfInput).toISOString();
      RRDate = ProjEndDate
      // this.setState({
      //   pend:name
      // }) 
    }
    if (date == "QIDate") {
      this.setState({ QIDate: name });
      this.setState({ QIDate: Helper.getUTCDate(name) })
      const valueOfInput = name.format();
      var ProjEndDate = new Date(valueOfInput).toISOString();
      QIDate = ProjEndDate
      // this.setState({
      //   pend:name
      // }) 
    }
    if (date == "ChangeDate") {
      this.setState({ ChangeDate: name });
      this.setState({ ChangeDate: Helper.getUTCDate(name) })
      const valueOfInput = name.format();
      var ProjEndDate = new Date(valueOfInput).toISOString();
      pendDate = ProjEndDate
      // this.setState({
      //   pend:name
      // }) 
    }
    if (date == "PR1Date") {
      this.setState({ PR1Date: name });
      this.setState({ PR1Date: Helper.getUTCDate(name) })
      const valueOfInput = name.format();
      var ProjEndDate = new Date(valueOfInput).toISOString();
      PR1Date = ProjEndDate
      // this.setState({
      //   pend:name
      // }) 
    }
    if (date == "PR2Date") {
      this.setState({ PR2Date: name });
      this.setState({ PR2Date: Helper.getUTCDate(name) })
      const valueOfInput = name.format();
      var ProjEndDate = new Date(valueOfInput).toISOString();
      PR2Date = ProjEndDate
      // this.setState({
      //   pend:name
      // }) 
    }
    if (date == "FSODate") {
      this.setState({ FSODate: name });
      this.setState({ FSODate: Helper.getUTCDate(name) })
      const valueOfInput = name.format();
      var ProjEndDate = new Date(valueOfInput).toISOString();
      FSODate = ProjEndDate
      // this.setState({
      //   pend:name
      // }) 
    }
    if (date == "ChangeDate") {
      this.setState({ ChangeDate: name });
      this.setState({ ChangeDate: Helper.getUTCDate(name) })
      const valueOfInput = name.format();
      var ProjEndDate = new Date(valueOfInput).toISOString();
      ChangeDate = ProjEndDate
      // this.setState({
      //   pend:name
      // }) 
    }
    if (date == "EUDRDate") {
      this.setState({ EUDRDate: name });
      this.setState({ EUDRDate: Helper.getUTCDate(name) })
      const valueOfInput = name.format();
      var ProjEndDate = new Date(valueOfInput).toISOString();
      EUDRDate = ProjEndDate
      // this.setState({
      //   pend:name
      // }) 
    }





    if (date == "AgreedEndDate") {
      this.setState({ AgreedEndDate: name });
      // this.setState({EditAgreedEndDate: Helper.getUTCDate(name)})
      const valueOfInput = name.format();
      var projStartDate = new Date(valueOfInput).toISOString();
      agreedendate = projStartDate

    }
    // if (date == "ActualEndDate" && r == true) {
    //   this.setState({ ProjRequestEndDate: name });
    //   this.setState({ EditActualEndDate: Helper.getUTCDate(name) });
    //   const valueOfInput = name.format();
    //  ;


    // }

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
    var EEEEE = Helper.getUserID(value)
    if (EEEEE != 0 || EEEEE != null) {

      this.setState(
        {
          EditEEECPMId: EEEEE
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
          EditHardwareLeId: EEEEE
        }
      )

    }
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
            this.loadUserID(this.state.CC)
          })

        }).catch((e) => {
          console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
          reject();
        });

    });
  }
  public handleFSOLEChange = (name) => (value: any) => {

    var EEECPM = value;
    var EEEEE = Helper.getUserID(value)
    if (EEEEE != 0 || EEEEE != null) {

      this.setState(
        {
          EditFSOLeId: EEEEE
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
          EditFSOMPmId: EEEEE
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
    if (id == "Oil And Gas")
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


  public loadUserID(name) {
    let worledarea = []
    debugger;
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Country')/Items?$expand=BM&$select=CountryCode,BM/Id,BM/Title&$filter=CountryCode eq '` + name + `'`;
    return new Promise((resolve, reject) => {
      Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          worledarea = response.d.results;
          var arr = Object.values(response.d.results);
          console.log(arr)
          this.setState({

            UID: response.d.results[0].BM.Id

          }, () => {

            if ((this.state.CurrentID == this.state.EditEEECPMId) || (this.state.CurrentID == this.state.EditEEECLeId) || (this.state.CurrentID == this.state.EditFSOMPmId) || (this.state.CurrentID == this.state.EditFSOLeId) || (this.state.Group == "Quality") || (this.state.CurrentID == this.state.UID) || (this.state.CurrentID == this.state.BMID)) {
              this.setState({

              })
            } else {
              this.setState({
                showButton: ""
              })
            }
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



  public handleRiskChange = (event) => {

    if ((event.target.name == "FSOMPMOpen") || (event.target.name == "FSOPMTechnical") || (event.target.name == "FSOPMOther") || (event.target.name == "FSOEEEC")) {


      if (event.target.name == "FSOMPMOpen") {
        this.setState({
          FSO_OPEN: parseInt(event.target.dataset.set)
        })
      }
      if (event.target.name == "FSOPMTechnical") {
        this.setState({
          FSO_Tech: parseInt(event.target.dataset.set)
        })
      }
      if (event.target.name == "FSOPMOther") {
        this.setState({
          FSO_Oth: parseInt(event.target.dataset.set)
        })
      }
      if (event.target.name == "FSOEEEC") {
        this.setState({
          FSO_EEC: parseInt(event.target.dataset.set)
        })
      }


    } else {

      var index = event.target.selectedIndex;
      var optionElement = event.target.childNodes[index]
      var option = optionElement.getAttribute('data-set');
      this.setState({
        [event.target.name]: parseInt(option)
      })
    }

  }
  public handleInputChange = (event) => {




    let ddltype = event.target.id;


    if (ddltype == "PPEProjectContractType") {

      var index = event.nativeEvent.target.selectedIndex;
      console.log(event.nativeEvent.target[index].text)

      var index = event.target.selectedIndex;
      var optionElement = event.target.childNodes[index]
      var option = optionElement.getAttribute('data-id');


      console.log(event.target.value)
      console.log(event.target.text)
    }


    if (ddltype == "ddlProjectRiskStatus") {
      this.setState({
        ProjectRiskStatus: event.target.value
      })
    }
    if (ddltype == "ChkSIS") {
      if (event.target.checked) {
        this.setState({
          ChkSIS: "Yes",
          ChkSISChecked: true
        })
      }
      else {
        this.setState({
          ChkSIS: "No",
          ChkSISChecked: false
        })
      }

    }

    if (ddltype == "PDL") {
      if (event.target.checked) {
        this.setState({
          EditPDL: "Yes",
          PDLChecked: true
        })
      }
      else {
        this.setState({
          EditPDL: "No",
          PDLChecked: false
        })
      }

    }
    if (ddltype == "PCSD") {
      if (event.target.checked) {
        this.setState({
          EditPCSD: "Yes",
          PCSDChecked: true
        })
      }
      else {
        this.setState({
          EditPCSD: "No",
          PCSDChecked: false


        })
      }
    }
    if (ddltype == "CTO") {
      if (event.target.checked) {
        this.setState({
          EditCTO: "Yes",
          CTOChecked: true
        })
      }
      else {
        this.setState({
          EditCTO: "No",
          CTOChecked: false
        })
      }
    }
    if (ddltype == "RVO2") {
      if (event.target.checked) {
        this.setState({
          EditVO: "Yes",
          VOChecked: true

        })
      }
      else {
        this.setState({
          EditVO: "No",
          VOChecked: false
        })
      }
    }
    if (ddltype == "DVLive") {
      if (event.target.checked) {
        this.setState({
          EditDVLive: "Yes",
          DVChecked: true
        })
      }
      else {
        this.setState({
          EditDVLive: "No",
          DVChecked: false
        })
      }
    }
    if (ddltype == "ResourceCertifications") {
      if (event.target.checked) {
        this.setState({
          EditResourceCertifications: "Yes",
          ResourceChecked: true,
        })
      }
      else {
        this.setState({
          EditResourceCertifications: "No",
          ResourceChecked: false
        })
      }
    }
    if (ddltype == "LBPManagingFAT") {
      if (event.target.checked) {
        this.setState({
          EditLBPManagingFAT: "Yes",
          LBPChecked: true
        })
      }
      else {
        this.setState({
          EditLBPManagingFAT: "No",
          LBPChecked: false
        })
      }
    }
    if (ddltype == "PAS") {
      if (event.target.checked) {
        this.setState({
          EditPAS: "Yes",
          PASChecked: true
        })
      }
      else {
        this.setState({
          EditPAS: "No",
          PASChecked: false
        })
      }
    }

    if (ddltype == "EI") {
      if (event.target.checked) {
        this.setState({
          EditEI: "Yes",
          EIChecked: true,
        })
      }
      else {
        this.setState({
          EditEI: "No",
          EIChecked: false
        })
      }
    }
    if (ddltype == "ICSS") {
      if (event.target.checked) {
        this.setState({
          EditICSS: "Yes",
          ICSSChecked: true
        })
      }
      else {
        this.setState({
          EditICSS: "No",
          ICSSChecked: false
        })
      }
    }
    if (ddltype == "Syncade") {
      if (event.target.checked) {
        this.setState({
          EditSyncade: "Yes",
          SyncadeChecked: true
        })
      }
      else {
        this.setState({
          EditSyncade: "No",
          SyncadeChecked: false
        })
      }
    }
    if (ddltype == "TMS") {
      if (event.target.checked) {
        this.setState({
          EditTMS: "Yes",
          TMSChecked: true,
        })
      }
      else {
        this.setState({
          EditTMS: "No",
          TMSChecked: false,
        })
      }
    }
    if (ddltype == "MHM") {
      if (event.target.checked) {
        this.setState({
          EditMHM: "Yes",
          MHMChecked: true
        })
      }
      else {
        this.setState({
          EditMHM: "No",
          MHMChecked: false
        })
      }
    }
    if (ddltype == "Wireless") {
      if (event.target.checked) {
        this.setState({
          EditWireless: "Yes",
          WireChecked: true
        })
      }
      else {
        this.setState({
          EditWireless: "No",
          WireChecked: false
        })
      }
    }
    if (ddltype == "FEED") {
      if (event.target.checked) {
        this.setState({
          EditFeed: "Yes",
          FeedChecked: true
        })
      }
      else {
        this.setState({
          EditFeed: "No",
          FeedChecked: false
        })
      }
    }
    if (ddltype == "Consultancy") {
      if (event.target.checked) {
        this.setState({
          EditConsultancy: "Yes",
          EditCChecked: true,
        })
      }
      else {
        this.setState({
          EditConsultancy: "No",
          EditCChecked: false
        })
      }
    }
    if (ddltype == "iSolution") {
      if (event.target.checked) {
        this.setState({
          ISolution: "Yes",
          ISolChecked: true,
        })
      }
      else {
        this.setState({
          ISolution: "No",
          ISolChecked: false,
        })
      }
    }

    if (ddltype == "OSIPI") {
      if (event.target.checked) {
        this.setState({
          EditOSIPI: "Yes",
          OSIChecked: true,
        })
      }
      else {
        this.setState({
          EditOSIPI: "No",
          OSIChecked: false
        })
      }
    }

    if (ddltype == "Cybersecurity") {
      if (event.target.checked) {
        this.setState({
          EditCybersecurity: "Yes",
          CyberChecked: true,
        })
      }
      else {
        this.setState({
          EditCybersecurity: "No",
          CyberChecked: false
        })
      }
    }


    if (ddltype == "ddlForecast") {
      this.setState({
        EditForecast: event.target.value
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

      if (this.state.EditUnit == "A") {
        this.setState({

          EditEEECProjID: this.state.EditYear + "-" + this.state.EditCountryCode + "-" + this.state.EditUnit + keyval + "-" + this.state.EditCounter
        })
      }
    }




    if (ddltype == "ddlStatus") {
      if (event.target.value == "Closed") {
        alert("Do you really want to change the status to Closed?Please ensure  all One Time Entry Parameters are correctly entered,after this project is locked for editing")
      }

      this.setState({
        EditStatus: event.target.value
      })
    }


    if (ddltype == "ddlEEC") {
      this.setState({
        EditEEEC: event.target.value
      })
    }

    if (ddltype == "addDeliv") {
      this.setState({
        EditDeliveryComplete: event.target.value
      })
    }
    if (ddltype == "AddITSS") {
      this.setState({
        EditPMITSS: event.target.value
      })
    }
    if (ddltype == "ITSS2") {
      this.setState({
        EditITSSCall: event.target.value
      })
    }
    if (ddltype == "HardCopy") {
      this.setState({
        EditProjectFolder: event.target.value
      })
    }
    if (ddltype == "DongleReturn") {
      this.setState({
        EditDongleReturned: event.target.value
      })
    }
    if (ddltype == "ProjectCorrect") {
      this.setState({
        EditDatacorrect: event.target.value
      })
    }
    if (ddltype == "PostDelivery") {
      this.setState({
        EditPostdelivery: event.target.value
      })
    }
    if (ddltype == "FHX") {
      this.setState({
        EditFHX: event.target.value
      })
    }




    if (ddltype == "CSS") {

      this.setState({
        EditCSSFormReceived: event.target.value
      }, () => {

        if (this.state.EditCSSFormReceived == "No") {
          if (this.state.EditActualEndDate == null || this.state.EditActualEndDate == undefined) {
            var doc = document.getElementById("ddlStatus")
            doc.innerHTML = "<option selected>WIP</option><option>On Hold</option><option>Shelved</option>"

          } else {
            var doc = document.getElementById("ddlStatus")
            doc.innerHTML = "<option selected>Delivered</option><option>WIP</option><option>On Hold</option><option>Shelved</option>"
          }
        }
        if (ddltype == "CSS" || ddltype == "ResourceSkill" || ddltype == "Close") {

          if (this.state.EditCSSFormReceived == "Yes" && this.state.EditProjectCloseMeeting == "Yes" && this.state.EditResourceSkillUpdated == "Yes" && (this.state.EditActualEndDate != null || this.state.EditActualEndDate != undefined)) {
            this.setState({
              EditStatus: "Closed"


            })



            var doc = document.getElementById("ddlStatus")
            doc.innerHTML = " <option>WIP</option><option>On Hold</option><option>Shelved</option><option>Delivered</option><option>Closed</option>"
          }
        }
      })
    }
    if (ddltype == "Close") {

      this.setState({
        EditProjectCloseMeeting: event.target.value

      }, () => {

        if (this.state.EditProjectCloseMeeting == "No") {
          if (this.state.EditActualEndDate == null || this.state.EditActualEndDate == undefined) {
            var doc = document.getElementById("ddlStatus")
            doc.innerHTML = "<option selected>WIP</option><option>On Hold</option><option>Shelved</option>"

          } else {

            var doc = document.getElementById("ddlStatus")
            doc.innerHTML = "<option selected>Delivered</option><option>WIP</option><option>On Hold</option><option>Shelved</option>"
          }
        }
        if (ddltype == "CSS" || ddltype == "ResourceSkill" || ddltype == "Close") {

          if (this.state.EditCSSFormReceived == "Yes" && this.state.EditProjectCloseMeeting == "Yes" && this.state.EditResourceSkillUpdated == "Yes" && (this.state.EditActualEndDate != null || this.state.EditActualEndDate != undefined)) {
            this.setState({
              EditStatus: "Closed"


            })
            if (this.state.EditActualEndDate == null || this.state.EditActualEndDate == undefined) {
              var doc = document.getElementById("ddlStatus")
              doc.innerHTML = "<option selected>WIP</option><option>On Hold</option><option>Shelved</option>"

            }


            var doc = document.getElementById("ddlStatus")
            doc.innerHTML = " <option>WIP</option><option>On Hold</option><option>Shelved</option><option>Delivered</option><option>Closed</option>"
          }
        }
      })
    }
    if (ddltype == "ResourceSkill") {
      this.setState({
        EditResourceSkillUpdated: event.target.value
      }, () => {

        if (this.state.EditResourceSkillUpdated == "No") {

          if (this.state.EditActualEndDate == null || this.state.EditActualEndDate == undefined) {
            var doc = document.getElementById("ddlStatus")
            doc.innerHTML = "<option selected>WIP</option><option>On Hold</option><option>Shelved</option>"

          } else {
            var doc = document.getElementById("ddlStatus")
            doc.innerHTML = "<option selected>Delivered</option><option>WIP</option><option>On Hold</option><option>Shelved</option>"
          }
        }
        if (ddltype == "CSS" || ddltype == "ResourceSkill" || ddltype == "Close") {

          if (this.state.EditCSSFormReceived == "Yes" && this.state.EditProjectCloseMeeting == "Yes" && this.state.EditResourceSkillUpdated == "Yes" && (this.state.EditActualEndDate != null || this.state.EditActualEndDate != undefined)) {
            this.setState({
              EditStatus: "Closed"


            })



            var doc = document.getElementById("ddlStatus")
            doc.innerHTML = " <option>WIP</option><option>On Hold</option><option>Shelved</option><option>Delivered</option><option>Closed</option>"
          }
        }
      })
    }


    if (ddltype == "ddlInd") {
      let id = event.target.value;
      let name = event.target.value
      this.loadindsubtype(name)
      this.setState({
        EditTypeOfIndustry: event.target.value
      })
    }
    if (ddltype == 'ddlSub') {
      this.setState({
        EditIndustrySubtype: event.target.value
      })
    }

    if (ddltype == "ddlType") {
      this.setState({
        EditProjectPlatform: event.target.value
      })
    }

    if (ddltype == "ddldelta") {
      this.setState({
        EditDeltaVVersion: event.target.value
      })
    }
    if (ddltype == "ddlProjType") {
      this.setState({
        EditProjectType: event.target.value
      })
    }

    if (ddltype == "Quality") {
      let check;
      if (event.target.checked) {
        this.setState({
          counter: this.state.qualitycounter
        })
      } else {
        this.setState({
          counter: this.state.oldcounter
        })
      }
    }

    if (ddltype == "ddlEBU") {

      let inputstring = this.state.EditYear + "-" + this.state.EditCountryCode + "-" + this.state.EditUnit + this.state.prjpltfrmunit + "-" + this.state.EditCounter
      this.setState({
        EditEmerBuisUnit: event.target.value,
        EditProjectPlatform: ""

      })


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
        keyval = "F99"
      if (name == "RTG")
        keyval = "J99"
      if (name == "SBG")
        keyval = "I99"


      if (keyval != "A") {
        this.setState({
          prjpltfrmunit: "",
          EditEEECProjID: this.state.EditYear + "-" + this.state.EditCountryCode + "-" + this.state.EditUnit + this.state.prjpltfrmunit + "-" + this.state.EditCounter
        })
      }
      this.setState({
        EditUnit: keyval,
        EditEEECProjID: this.state.EditYear + "-" + this.state.EditCountryCode + "-" + keyval + this.state.prjpltfrmunit + "-" + this.state.EditCounter
      })

    }

    if (ddltype == "ddlCountry") {
      let id = event.target.value;
      let name = event.target.value
      //this.loadCountry(name)

    }

    if (ddltype === "addCountry") {
      let cc = event.target.value
      this.setState({
        CountryCode: cc,
        EditCountryCode: cc,
        EditEEECProjID: this.state.EditYear + "-" + cc + "-" + this.state.EditUnit + this.state.prjpltfrmunit + "-" + this.state.EditCounter
      });
      this.loadworldarea(cc);
    }


  };


  public clear() {
    if (this.state.EditActualEndDate == null) {
      setTimeout(function () {
        var a: any = document.getElementById('ActualEndDate-label');
        a.value = '';
      }, 300);
    }
  }


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
      <option id={v.ID} selected={this.state.EditIndustrySubtype} value={v.Industry_x0020_Subtype.toString()}>{v.Industry_x0020_Subtype.toString()}</option>
    ));



    let CountryList = this.state.country.map(v => (
      <option id={v.ID} value={v.CountryCode} selected={this.state.CountryCode}>{v.Country}</option>
    ));



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
                          <td style={{ width: '250px' }}>
                            EEEC Location
                          </td>
                          <td style={{ width: '17%' }}>
                            <Stack tokens={stackTokens}>
                              <select className="AR-Select" id="ddlEEC" onChange={this.handleInputChange} value={this.state.EditEEEC} disabled defaultValue={this.state.EditEEEC}>
                                <option value=""> Please select</option>
                                <option value="Pune"> Pune</option>
                                <option value="Nashik">Nashik</option>
                              </select>
                            </Stack>

                          </td>
                          <td style={{ paddingLeft: "30px", width: '250px' }}>
                            Project Name
                          </td>
                          <td>

                            <input type="text" name="Projectname" id="addProjectName" disabled ref={this.ProjectName} value={this.state.EditProjectName} onChange={this.handleTextChange} required />

                          </td>



                        </tr>

                        <tr>
                          <td style={{ width: '250px' }}>
                            Emerson Business Unit <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td style={{ width: '17%' }}>
                            <Stack tokens={stackTokens}>
                              <select className="AR-Select" id="ddlEBU" onChange={this.handleInputChange} ref={this.EBUU} value={this.state.EditEmerBuisUnit} defaultValue={this.state.EditEmerBuisUnit}>
                                {EBUOptionsTemplate}
                              </select>
                            </Stack>

                          </td>
                          <td style={{ width: '250px', paddingLeft: "30px" }}>
                            EPC <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td style={{ width: "20%" }} >


                            <input type="text" name="EPC" id="addEPC" value={this.state.EPC} ref={this.EPC} required onChange={this.handleTextChange} />

                          </td>

                        </tr>

                        <tr>
                          <td >
                            End-User <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td>

                            <input type="text" name="addEndUser" id="addEnduser" required ref={this.EndUser} onChange={this.handleTextChange} value={this.state.EditEndUser} />

                          </td>
                          <td style={{ paddingLeft: "30px" }}>
                            End-Destination <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td>

                            <input type="text" name="addEndDestination" id="addEndDestination" ref={this.EndDestination} onChange={this.handleTextChange} value={this.state.EditEndDestination} required />

                          </td>

                        </tr>
                        <tr>
                          <td>
                            DeltaV Version <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td>

                            <input type="text" id="ddldelta" onChange={this.handleInputChange} ref={this.DeltaV} value={this.state.EditDeltaVVersion} />





                          </td>
                          <td style={{ paddingLeft: "30px" }}>
                            Project Type <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td>
                            <i className="ms-Dropdown-caretDown ms-Icon ms-Icon--ChevronDown" id="addprojType" ></i>
                            <select className="ms-Dropdown-select" value={this.state.EditProjectType} defaultValue={this.state.EditProjectType} ref={this.ProjectType} id='ddlProjType' onChange={this.handleInputChange}>
                              <option>Other</option>
                              <option>MAC</option>
                              <option>MIV/FIV</option>
                              <option>Non PSG BU</option>
                              <option>Services Only</option>
                              <option>Site Support Only</option>

                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td> Type Of Industry  <span style={{ color: 'red' }}><b>*</b></span></td>
                          <td>
                            <Stack tokens={stackTokens}>
                              <select className="AR-Select" onChange={this.handleInputChange} id="ddlInd" ref={this.IndType} value={this.state.EditTypeOfIndustry} defaultValue={this.state.EditTypeOfIndustry}>
                                {IndustryOptionsTemplate}
                              </select> </Stack>

                          </td>
                          <td style={{ paddingLeft: "30px" }}>App/Industry SubType</td>
                          <td>
                            <Stack tokens={stackTokens}>
                              <select className="AR-Select" onChange={this.handleInputChange} id="ddlSub" ref={this.IndSubType} value={this.state.EditIndustrySubtype} defaultValue={this.state.EditIndustrySubtype}>
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
                              <select className="AR-Select" id="addCountry" onChange={this.handleInputChange} ref={this.Country} value={this.state.CountryCode} defaultValue={this.state.CountryCode}>
                                {CountryList}
                              </select>
                            </Stack>
                          </td>
                          <td style={{ paddingLeft: "30px" }}>
                            World Area
                          </td>
                          <td>
                            <Stack tokens={stackTokens} onChange={this.handleInputChange} id="ddlCountryy">
                              <select className="AR-Select" id="ddlCountry" ref={this.WorldArea} value={this.state.EditWorldArea} defaultValue={this.state.EditWorldArea} disabled>
                                {WorldareaoptionTemplate}
                              </select>
                            </Stack>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Project Platform <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td>
                            <i className="ms-Dropdown-caretDown ms-Icon ms-Icon--ChevronDown" id="addProjectPlatform"></i>
                            <Stack tokens={stackTokens}>
                              <select className="AR-Select" id="ddlType" ref={this.ProjPlatform} value={this.state.EditProjectPlatform} defaultValue={this.state.EditProjectPlatform} onChange={this.handleInputChange}>
                                <option value="">Please Select</option>
                                {ProjectOptionsTemplate}</select>
                            </Stack>
                          </td>
                          <td style={{ paddingLeft: "30px" }}>
                            EEEC Project ID
                          </td>
                          <td>

                            <input type="text" name="ProjectID" id="addEEECProjectID" onChange={this.handleTextChange} value={this.state.EditEEECProjID} ref={this.EEECProjID} required disabled />

                          </td>

                        </tr>
                        <tr>
                          <td>
                            (Clarity)  Project ID  <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td>

                            <input type="text" name="Project ID" id="addProjectID" ref={this.ProjectID} onChange={this.handleTextChange} value={this.state.EditProjectID} required />

                          </td>

                        </tr>
                        <br></br>
                        <tr>

                          <td>
                            FSO LE
                      </td>
                          <td>
                            <label>{this.state.EditFSOLe}</label>
                          </td>
                          <td style={{ paddingLeft: "30px" }}>
                            FSO PM
                       </td>
                          <td>
                            <label>{this.state.EditFSOPm}</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Edit FSO LE
                </td>
                          <td>
                            <SPPeoplePicker multi={false} pickerEnabled={true} onChange={this.handleFSOLEChange(this)} />
                          </td>
                          <td style={{ paddingLeft: "30px" }}>
                            Edit FSO PM
                 </td>
                          <td>
                            <SPPeoplePicker multi={false} pickerEnabled={true} onChange={this.handleFSOPMChange(this)} />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            EEEC LE
                       </td>
                          <td> <label>{this.state.EditEEECLe}</label>  </td>

                          <td style={{ paddingLeft: "30px" }}>
                            EEEC PM
                          </td>
                          <td>  <label>{this.state.EditEEECPM}</label>  </td>
                        </tr>
                        <tr>
                          <td>
                            Edit EEEC LE
                </td>
                          <td>
                            <SPPeoplePicker multi={false} pickerEnabled={true} onChange={this.hardwareLeChange(this)} />
                          </td>
                          <td style={{ paddingLeft: "30px" }}> Edit EEECPM</td>
                          <td><SPPeoplePicker multi={false} pickerEnabled={true} onChange={this.handlePeopleChnage("EEECPM")} /></td>
                        </tr>

                        <tr>
                          <td>
                            Hardware LE
                      </td>
                          <td>

                            <label>{this.state.EditHardwareLE}</label>

                          </td>

                        </tr>
                        <tr>

                          <td> Edit Hardware LE</td>
                          <td> <SPPeoplePicker multi={false} pickerEnabled={true} onChange={this.handleEEECLEChange(this)} /> </td>

                        </tr>

                        <br></br>
                        <br></br>
                        <tr>
                          <td>
                            Project Start Date  <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td>

                            <DatePicker showWeekNumbers={false} isMonthPickerVisible={true}
                              showMonthPickerAsOverlay={true} highlightCurrentMonth={true} className="addStartDate" id="ProjStartDate" onSelectDate={this.handleDateEvent("ProjectData")} value={this.state.EditProjectStartDate} onChange={this.handleTextChange} formatDate={Helper._onFormatDate} parseDateFromString={this._onParseProjectStartDateFromString} ></DatePicker>

                          </td>
                          <td style={{ paddingLeft: "20px" }}>
                            Project Start Period
                          </td>
                          <td colSpan={1}>

                            <input type="text" name="ProjectStartPeriod" id="addProjectStartPeriod" ref={this.ProjectPeriod} value={this.state.EditProjectStartPeriod} onChange={this.handleTextChange} required onKeyPress={() => { return false }} style={{ opacity: 0.75, color: "grey" }} />

                          </td>


                        </tr>
                        <tr>
                          <td>
                            Request End Date  <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td>

                            <DatePicker showWeekNumbers={false} isMonthPickerVisible={true}
                              showMonthPickerAsOverlay={true} minDate={this.state.EditProjectStartDate} highlightCurrentMonth={true} className="addRequestEndDate" id="ProjEndDate" onSelectDate={this.handleDateEvent("ProjEndDate")} value={this.state.EditProjectEndDate} onChange={this.handleTextChange} formatDate={Helper._onFormatDate} parseDateFromString={this._onParseProjectEndDateFromString} ></DatePicker>

                          </td>
                          <td style={{ paddingLeft: "20px" }}>
                            Agreed End Date <span style={{ color: 'red' }}><b>*</b></span>
                          </td>
                          <td>

                            <DatePicker showWeekNumbers={false} isMonthPickerVisible={true}
                              showMonthPickerAsOverlay={true} highlightCurrentMonth={true} minDate={this.state.EditProjectStartDate} className="form-addAgreedEndDate" id="AgreedEndDate" value={this.state.EditAgreedEndDateString} formatDate={Helper._onFormatDate} parseDateFromString={this._onParseAgreedEndDateFromString} onSelectDate={this.handleDateEvent("AgreedEndDate")} onChange={this.handleTextChange} />

                          </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>
                            Actual  End Date
                            </td>
                          <td>

                            <DatePicker showWeekNumbers={false} isMonthPickerVisible={true}
                              showMonthPickerAsOverlay={true} onAfterMenuDismiss={this.clear.bind(this)} maxDate={new Date()} minDate={new Date()} highlightCurrentMonth={true} className="addActualEndDate" id="ActualEndDate" onSelectDate={this.handleDateEvent("ActualEndDate")} value={this.state.EditActualEndDate} formatDate={Helper._onFormatDate} parseDateFromString={this._onParseActualEndDateFromString} onChange={this.handleTextChange}></DatePicker>

                          </td>
                          <td style={{ paddingLeft: "20px" }}>
                            Forecasted
                             </td>
                          <td>

                            <select className="AR-Select" id="ddlForecast" value={this.state.EditForecast} defaultValue={this.state.EditForecast} onChange={this.handleInputChange}>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          </td>

                        </tr>
                        <tr>
                          <td style={{ paddingBottom: "20px" }}> Agreed Budget <b><span style={{ color: "red" }}>*</span></b> </td>
                          <td >

                            <input type='number' className="AgreedBudget" id="addAgreedBudget" ref={this.AgreedBudget} step="0.01" onChange={this.handleTextChange} value={this.state.EditAgreedBudget} />
                            <br></br><label>(Hours agreed with EPM FSO)</label></td>
                        </tr>


                      </tbody>
                    </table>



                  </Card.Body>
                </Accordion.Collapse>
              </Accordion>
              <Accordion defaultActiveKey="1">
                <Card.Header>
                  <Accordion.Toggle onClick={this.AnalysisConfigArrow} as={Card.Header} eventKey="1" className="header">
                    <span className={this.state.AnalysisConfigDown === "Yes" ? "glyphicon glyphicon-menu-up" : "glyphicon glyphicon-menu-down"}></span>&nbsp;
                                Configuration Data <br></br>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <table>
                      <tbody>
                        {/* <tr >
                          {/* <td >
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
                          <td></td> */}
                        {/* </tr> */}
                        <tr>
                          <td style={{ width: '180px' }}>
                            HW IO
                            </td>
                          <td style={{ width: '100px' }}>

                            <input type="text" name="HWIO" id="addHWIO" ref={this.HWIO} onChange={this.handleTextChange} value={this.state.EditHWIO} />

                          </td>
                          <td style={{ width: "50px" }}></td>
                          <td style={{ width: '180px' }}>
                            SW IO
                             </td>
                          <td style={{ width: '100px' }}>

                            <input type="text" name="SWIO" id="addSWIO" pattern="^[0-9]{1,45}$" title="Please enter valid number" ref={this.SWIO} onChange={this.handleTextChange} value={this.state.EditSWIO} />

                          </td>
                          <td style={{ width: "50px" }}></td>
                          <td style={{ width: '180px' }}>
                            FF IO
                             </td>
                          <td style={{ width: '100px' }}>

                            <input type="text" name="FFIO" id="addFFIO" pattern="^[0-9]{1,45}$" title="Please enter valid number" ref={this.FFIO} onChange={this.handleTextChange} value={this.state.EditFWIO} />

                          </td>
                        </tr>


                        <tr>
                          <td>
                            SIS IO
                            </td>
                          <td>

                            <input type="text" name="SISIO" id="addSISIO" ref={this.SSIO} onChange={this.handleTextChange} pattern="^[0-9]{1,45}$" title="Please enter valid number" value={this.state.EditSSIO} />

                          </td>
                          <td style={{ width: "50px" }}></td>
                          <td>
                            Displays
                             </td>
                          <td>

                            <input type="text" name="Display" id="addDisplay" pattern="^[0-9]{1,45}$" title="Please enter valid number" ref={this.Display} onChange={this.handleTextChange} value={this.state.EditDisplays} />

                          </td>
                          <td style={{ width: "50px" }}></td>
                          <td>
                            Cabinet/JBS
                            </td>
                          <td>

                            <input type="text" name="PR" pattern="^[0-9]{1,45}$" title="Please enter valid number" id="addCabinetJBS" ref={this.Cabinet} onChange={this.handleTextChange} value={this.state.EditCabinetJBS} />

                          </td>
                        </tr>
                        <br>
                        </br>
                        <br></br>
                        <tr>

                          <td>
                            Module Classes
                             </td>
                          <td>

                            <input type="text" name="ModuleClasses" id="addModuleClasses" ref={this.newModuleClasses} onChange={this.handleTextChange} value={this.state.EditModulesClasses} />

                          </td>
                          <td style={{ width: "50px" }}></td>
                          <td>
                            Modules
                             </td>
                          <td>

                            <input type="text" name="Modules" id="addModules" ref={this.newModule} onChange={this.handleTextChange} value={this.state.EditModules} />

                          </td>
                          <td style={{ width: "50px" }}></td>
                          <td>
                            ILD (Instrument Loop Drawings)
                             </td>
                          <td>

                            <input type="text" name="ILD" id="addILD" ref={this.ILD} onChange={this.handleTextChange} value={this.state.EditILD} />

                          </td>
                        </tr>
                        <tr>
                          <td>
                            Complex Loops
                            </td>
                          <td>

                            <input type="text" name="ComplexLoops" id="addComplexLoops" ref={this.ComplexLoops} onChange={this.handleTextChange} value={this.state.EditComplexLoops} />

                          </td>
                          <td style={{ width: "50px" }}></td>
                          <td>
                            EQM Classes
                             </td>
                          <td>

                            <input type="text" name="EQMClasses" id="addEQMClasses" ref={this.EQMClasses} onChange={this.handleTextChange} value={this.state.EditEQMClasses} />

                          </td>
                          <td style={{ width: "50px" }}></td>
                          <td>
                            EQMs
                             </td>
                          <td>

                            <input type="text" name="EQM" id="addEQM" ref={this.EQM} onChange={this.handleTextChange} value={this.state.EditEQM} />

                          </td>

                        </tr>
                        <tr>
                          <td>
                            Phase Classes
                            </td>
                          <td>

                            <input type="text" name="PhraseClaases" id="addPhraseClasses" ref={this.PhraseClasses} onChange={this.handleTextChange} value={this.state.EditPhaseClasses} />

                          </td>
                          <td style={{ width: "50px" }}></td>
                          <td>
                            OP
                             </td>
                          <td>

                            <input type="text" name="OP" id="addOP" ref={this.OP} onChange={this.handleTextChange} value={this.state.EditOP} />

                          </td>
                          <td style={{ width: "50px" }}></td>
                          <td>
                            UP
                             </td>
                          <td>

                            <input type="text" name="UP" id="addUP" ref={this.UP} onChange={this.handleTextChange} value={this.state.EditUP} />

                          </td>
                        </tr>
                        <tr>
                          <td>
                            PR
                            </td>
                          <td>

                            <input type="text" name="PR" id="addPR" ref={this.PR} onChange={this.handleTextChange} value={this.state.EditPR} />

                          </td>
                          <td style={{ width: "50px" }}></td>
                          <td>
                            Dynamos
                             </td>
                          <td>

                            <input type="text" name="Dynamos" id="addDynamos" ref={this.Dynamos} onChange={this.handleTextChange} value={this.state.EditDynamos} />

                          </td>
                          <td style={{ width: "50px" }}></td>
                          <td>
                            No. Of Controllers
                            </td>
                          <td>

                            <input type="text" name="PR" id="addControl" ref={this.NoOfControl} onChange={this.handleTextChange} value={this.state.EditNoOfControl} />

                          </td>

                        </tr>
                        <tr>



                        </tr>
                        <tr>

                          <td>
                            No Of SLSs
                             </td>
                          <td>

                            <input type="text" name="NoOfSLS" id="NoOfSLS" ref={this.NoOfSLS} onChange={this.handleTextChange} value={this.state.EditNoOfSLS} />

                          </td>
                          <td style={{ width: "50px" }}></td>
                          <td>
                            Nodes On DeltaV Network
                             </td>
                          <td>

                            <input type="text" name="Display" id="NodesOnDelta" ref={this.NodesDelta} onChange={this.handleTextChange} value={this.state.EditNodesOnDelta} />

                          </td>
                        </tr>

                        {/* <br>
                    </br> */}

                        {/*                    
                    <br></br> */}
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
                        </tr> */}
                        {/* <br></br> */}
                        {/* <tr>
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
                        <tr>
                          <td>
                            <table>

                            </table>
                          </td>
                        </tr>

                        {/* <tr>

                             </tr>
                             <tr> 
                           
                            
                                
    
                             
                    </tr> */}
                      </tbody>
                    </table>
                  </Card.Body>
                </Accordion.Collapse>
              </Accordion>
              <Accordion defaultActiveKey="1">
                <Card.Header>
                  <Accordion.Toggle onClick={this.AnalysisInfoArrow} as={Card.Header} eventKey="1" className="header">
                    <span className={this.state.AnalysisInfoDown === "Yes" ? "glyphicon glyphicon-menu-up" : "glyphicon glyphicon-menu-down"}></span>&nbsp;
                                Project Information<br></br>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>

                    <table id="phase2Table" className="phase2Table">
                      <tr>
                        <td>
                          Top Level Risk Status<br></br>
                          This field will be updated from backend
                        </td>
                        <td>
                          <input type="text" id="TopRisk" width="70px" value={this.state.TopRisk} disabled placeholder=""></input>
                        </td>
                        <td>
                          Project Level Risk Status
                        </td>
                        <td><select className="AR-Select" id="ddlProjectRiskStatus" onChange={this.handleInputChange} value={this.state.ProjectRiskStatus} defaultValue={this.state.ProjectRiskStatus} >
                          <option value=""> Please Select</option>
                          <option>Low</option>
                          <option>Medium</option>
                          <option>High</option>
                        </select></td>
                      </tr>
                      <tr>


                      </tr>

                      <br></br>
                      <tr>

                        <td style={{ width: "200px" }}>  <input type="checkbox" name="chkPAS" id="PAS" onChange={this.handleInputChange} value={this.state.EditPAS} checked={this.state.PASChecked}  ></input>&nbsp;PAS</td>

                        <td style={{ width: "200px" }}>  <input type="checkbox" name="chkSIS" id="ChkSIS" onChange={this.handleInputChange} value={this.state.ChkSIS} checked={this.state.ChkSISChecked}  ></input>&nbsp;SIS</td>

                        <td style={{ width: "200px" }}> <input type="checkbox" name="chkEI" id="EI" onChange={this.handleInputChange} value={this.state.EditEI} checked={this.state.EIChecked}  ></input>&nbsp;E & I</td>

                        <td style={{ width: "200px" }}> <input type="checkbox" name="chkICSS" id="ICSS" onChange={this.handleInputChange} value={this.state.EditICSS} checked={this.state.ICSSChecked}   ></input>&nbsp;ICSS</td>

                        <td style={{ width: "200px" }}><input type="checkbox" name="chkRVO2" id="RVO2" onChange={this.handleInputChange} value={this.state.EditVO} checked={this.state.VOChecked} ></input>&nbsp;RVO2</td>

                      </tr>
                      <tr>
                        <td style={{ width: "200px" }}>  <input type="checkbox" name="chkPCSD" id="PCSD" onChange={this.handleInputChange} checked={this.state.PCSDChecked}  ></input>&nbsp;PCSD</td>
                        <td style={{ width: "200px" }}> <input type="checkbox" name="chkPDL" id="PDL" onChange={this.handleInputChange} value={this.state.EditPDL} checked={this.state.PDLChecked} ></input>&nbsp;PDL


                      </td>
                        <td style={{ width: "200px" }}> <input type="checkbox" name="chkDVLive" id="DVLive" onChange={this.handleInputChange} value={this.state.EditDVLive} checked={this.state.DVChecked}  ></input>&nbsp;DV Live</td>
                        <td style={{ width: "200px" }}> <input type="checkbox" name="chkCTO" id="CTO" onChange={this.handleInputChange} value={this.state.EditCTO} checked={this.state.CTOChecked} ></input>&nbsp;CTO</td>
                        <td><input type="checkbox" name="chkWireless" id="Wireless" onChange={this.handleInputChange} value={this.state.EditWireless} checked={this.state.WireChecked}  ></input>&nbsp;Wireless</td>


                      </tr>
                      <tr>
                        <td>  <input type="checkbox" name="chkCybersecurity" id="Cybersecurity" onChange={this.handleInputChange} value={this.state.EditCybersecurity} checked={this.state.CyberChecked}   ></input>&nbsp;Cyber Security</td>
                        <td>  <input type="checkbox" name="chkSyncade" id="Syncade" onChange={this.handleInputChange} value={this.state.EditSyncade} checked={this.state.SyncadeChecked}   ></input>&nbsp;Syncade</td>
                        <td><input type="checkbox" name="chkOSIPI" id="OSIPI" onChange={this.handleInputChange} value={this.state.EditOSIPI} checked={this.state.OSIChecked}  ></input>&nbsp;OSI PI</td>
                        <td>  <input type="checkbox" name="chkMHM" id="MHM" onChange={this.handleInputChange} value={this.state.EditMHM} checked={this.state.MHMChecked} ></input>&nbsp;MHM</td>
                        <td>  <input type="checkbox" name="chkTMS" id="TMS" onChange={this.handleInputChange} value={this.state.EditTMS} checked={this.state.TMSChecked}   ></input>&nbsp;TMS</td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" name="chkFEED" id="FEED" onChange={this.handleInputChange} value={this.state.EditFeed} checked={this.state.FeedChecked}   ></input>&nbsp;FEED</td>


                        <td>  <input type="checkbox" name="chkConsultancy" id="Consultancy" onChange={this.handleInputChange} value={this.state.EditConsultancy} checked={this.state.EditCChecked} ></input>&nbsp;Consultancy</td>

                        <td> <input type="checkbox" name="chkiSolution" id="iSolution" onChange={this.handleInputChange} value={this.state.ISolution} checked={this.state.ISolChecked}  ></input>&nbsp;iSolution</td>
                        <td>  <input type="checkbox" name="chkResourceCertifications" id="ResourceCertifications" onChange={this.handleInputChange} value={this.state.EditResourceCertifications} checked={this.state.ResourceChecked}  ></input>&nbsp;Resource Certifications?</td>


                        <td> <input type="checkbox" name="chkLBPManagingFAT" id="LBPManagingFAT" onChange={this.handleInputChange} value={this.state.EditLBPManagingFAT} checked={this.state.LBPChecked}  ></input>&nbsp;LBP Managing FAT?</td>
                      </tr>





                      <br></br>






                    </table>
                    <table>
                      <tr>
                        <td>
                          DCS AI
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="DCSAI" value={this.state.EditDCSAI} onChange={this.handleTextChange} />
                        </td>
                        <td style={{ width: "50px" }}></td>

                        <td>
                          DCS AO
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="DCSAO" value={this.state.EditDCSAO} onChange={this.handleTextChange} />
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td>
                          DCS DI
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="DCSDI" value={this.state.EditDCSDI} onChange={this.handleTextChange} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          DCS DO
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="DCSDO" value={this.state.EditDCSDO} onChange={this.handleTextChange} />
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td>
                          SIS AI
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="SISAI" value={this.state.EditSISAI} onChange={this.handleTextChange} />
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td>
                          SIS AO
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="SISAO" value={this.state.EditSISAO} onChange={this.handleTextChange} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          SIS DO
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="SISDO" value={this.state.EditSISDO} onChange={this.handleTextChange} />
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td>
                          SIS DI
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="SISDI" value={this.state.EditSISDI} onChange={this.handleTextChange} />
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td>
                          Workstation Nodes
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="Workstation" onChange={this.handleTextChange} value={this.state.EditWorkstationNodes} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          No Of CIOC
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="CIO" onChange={this.handleTextChange} value={this.state.EditNoofCIOC} />
                        </td>
                        <td style={{ width: "50px" }}></td>
                        <td>
                          No Of CSLS
                        </td>
                        <td>
                          <input type="text" name="Dynamos" id="CSLS" onChange={this.handleTextChange} value={this.state.EditNoofCSLS} />
                        </td>
                        <td style={{ width: "50px" }}></td>

                        <td>Voting Logic</td>

                        <td><input type="text" name="Syscabinet" id="VL" onChange={this.handleTextChange} value={this.state.EditVotingLogic}></input></td>
                      </tr>
                      <tr>
                        <td>System Cabinets</td>

                        <td><input type="text" name="Syscabinet" id="SysCabinet" onChange={this.handleTextChange} value={this.state.EditSysCabinet}></input></td>
                        <td style={{ width: "50px" }}></td>
                        <td>Server Cabinets</td>

                        <td><input type="text" name="PDBCabinet" id="Server" onChange={this.handleTextChange} value={this.state.EditServerCabinet}></input></td>
                        <td style={{ width: "50px" }}></td>
                        <td>Marshalling Cabinets</td>

                        <td><input type="text" name="marshalling" id="Marshalling" onChange={this.handleTextChange} value={this.state.EditMarshallingCabinets}></input></td>
                      </tr>
                    </table>








                  </Card.Body>
                </Accordion.Collapse>

              </Accordion>

              <Accordion defaultActiveKey="1">
                <Card.Header>
                  <Accordion.Toggle onClick={this.AnalysisCloseArrow} as={Card.Header} eventKey="1" className="header">
                    <span className={this.state.AnalysisCloseDown === "Yes" ? "glyphicon glyphicon-menu-up" : "glyphicon glyphicon-menu-down"}></span>&nbsp;
                              Project EE Categorization <br></br>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <table>
                      <tr className="MyClass">
                        <th style={{ border: "1px solid black;" }}>Parameters</th>
                        <th style={{ border: "1px solid black;" }}>Selection</th>
                        <th style={{ border: "1px solid black;" }}>Risk Index</th>
                        <th style={{ border: "1px solid black;" }}>Remarks</th>
                      </tr>
                      <tr>
                        <td></td>
                        <th style={{ textAlign: "right" }}> Total Risk Index</th>
                        <th>10</th>
                      </tr>
                      <tr>
                        <td style={{ border: "1px solid black;" }} ></td>
                      </tr>
                      <tr>
                        <td style={{ width: '20%' }}>
                          Project Contract Type (Emerson)
                                           </td>
                        <td style={{ width: '55%' }}>
                          <select name="RiskIndex_ProjectCT" className="ms-Dropdown-select" id="PPEProjectContractType" onChange={this.handleRiskChange}>
                            <option data-set="0">Please Select</option>
                            <option data-set="1" value="1" className="1">Workpack</option>
                            <option data-set="2" value="2" className="2">T And M</option>
                            <option data-set="3" value="3" className="3">Fixed Price</option>
                            <option data-set="4" value="4" className="4">MIB/L1</option>
                            <option data-set="5" value="5" className="5">Other</option>

                          </select>
                        </td>
                        <td style={{ width: '5%', textAlign: "center" }}>{this.state.RiskIndex_ProjectCT}</td>
                        <td><textarea rows={2} cols={30} ></textarea></td>
                      </tr>
                      <tr>
                        <td style={{ width: '20%' }}>
                          Project LD  (Emerson)
                                           </td>
                        <td style={{ width: '45%' }}>
                          <select name="RiskIndex_ProjectLD" className="ms-Dropdown-select" id="PPEProjectContractType" onChange={this.handleRiskChange}>
                            <option data-set="0">Please Select</option>
                            <option data-set="1" value="1" className="1">Applicable</option>
                            <option data-set="2" value="2" className="2">Not Applicable</option>


                          </select>
                        </td>
                        <td style={{ width: '10%', textAlign: "center" }}>{this.state.RiskIndex_ProjectLD}</td>
                        <td><textarea rows={2} cols={30}></textarea></td>
                      </tr>

                      <tr>
                        <td>
                          Project GP
                          </td>
                        <td>
                          <select name="RiskIndex_ProjectGP" className="ms-Dropdown-select" id="PPEProjectContractType" onChange={this.handleRiskChange}>
                            <option>Please Select</option>
                            <option data-set="1" value="2" className="2">Regular GP</option>
                            <option data-set="4" value="1" className="1">Low GP</option>
                            <option data-set="6" value="2" className="2">Negative GP</option>
                          </select>
                        </td>
                        <td style={{ width: '10%', textAlign: "center" }}>{this.state.RiskIndex_ProjectGP}</td>
                        <td><textarea rows={2} cols={30}></textarea></td>
                      </tr>


                      <tr>
                        <td >
                          Execution Strategy and Model
                      </td>
                        <td colSpan={1} style={{ width: '45%' }}>
                          <table style={{ borderCollapse: "collapse", borderStyle: "thin", borderWidth: "1px", border: "1px solid darkgray;", width: "95%" }}>
                            <tr>
                              <th style={{ borderStyle: "Solid", borderWidth: "1px", padding: "5px", textAlign: "center", borderColor: "darkgray" }}><u> Execution</u></th>
                              <th style={{ borderStyle: "Solid", borderWidth: "1px", padding: "5px", textAlign: "center", borderColor: "darkgray" }}> <u>FSO</u></th>
                            </tr>
                            <tr>

                              <td style={{ borderStyle: "Solid", borderWidth: "1px", padding: "5px", borderColor: "darkgray" }}> <input type="radio" id="FSO" name="FSO" value="0" /> &nbsp;
                          <label>FSO/EEEC Split : Same as defined in the Proposal</label> <br></br>
                                <input type="radio" name="FSO" value="3" /> &nbsp;
                          <label>FSO/EEEC Split:Decreased EEEC Utilization/Scope</label> <br></br>
                                <input type="radio" name="FSO" value="3" /> &nbsp;
                          <label>FSO/EEEC Split:Increased EEEC Utilization/Scope</label> <br></br>
                                <input type="radio" name="FSO" value="3" />&nbsp;
                                <label>Additional/Change in EEEC roles after Project Initiation</label>
                              </td>
                              <td style={{ borderStyle: "Solid", borderWidth: "1px", borderColor: 'grey' }}>
                                <span >
                                  <input type="radio" id="FSO" name="FSO" value="0" />&nbsp;
                                     <label>One World Area</label> <br></br>
                                  <input type="radio" name="FSO" value="3" /> &nbsp;

                                    <label>Multiple World Area</label>
                                </span>
                              </td>
                            </tr>


                            <tr>
                              <td colSpan={2} style={{ borderStyle: "Solid", borderWidth: "1px", padding: "5px", textAlign: "center", borderColor: "darkgray" }}>
                                <td>  <input type="checkbox" name="chkEPC" id="PAS" onChange={this.handleInputChange} ></input>&nbsp;<label>Multi EPC</label></td>

                                <td>  <input type="checkbox" name="chkEngg" id="ChkSIS" onChange={this.handleInputChange}></input>&nbsp;<label>Multi Engg Center</label></td>

                                <td> <input type="checkbox" name="chkParallal" id="EI" onChange={this.handleInputChange}></input>&nbsp;<label>Multi Area Phased Execution</label></td>

                                <td > <input type="checkbox" name="chkPhased" id="ICSS" onChange={this.handleInputChange}></input>&nbsp;<label>Multi Area Parallal Execution</label></td>
                                <br></br>
                                <td ><input type="checkbox" name="chkAdditional" id="RVO2" onChange={this.handleInputChange}></input>&nbsp;<label>Additional Roles</label></td>

                              </td>
                            </tr>


                          </table>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          1
                        </td>
                        <td>
                          <textarea rows={2} cols={30} ></textarea>
                        </td>
                      </tr>


                      <tr>
                        <td>
                          Emerson Budgeted Engineering hour </td>
                        <td>
                          <select name="RiskIndex_EmersonHours" className="ms-Dropdown-select" id="PPEmersonBudgeted" onChange={this.handleRiskChange} >
                            <option data-set="0">Please Select</option>
                            <option data-set="2" value="2" className="2"> {">"}1,000 And {"<"}5,000   </option>
                            <option data-set="3" value="3" className="2"> {">"}5,000 and {"<"}10,000   </option>
                            <option data-set="4" value="4" className="2"> {">"}10,000 and {"<"}25,000 </option>
                            <option data-set="5" value="5" className="2"> {">"}25,000 and {"<"}50,000 </option>
                            <option data-set="6 " value="6" className="2"> {">"}50,000 and {"<"}75,000 </option>
                            <option data-set="7" value="7" className="2"> {">"}75,000 and {"<"}100,000 </option>
                            <option data-set="8" value="8" className="2"> {">"}100,000  </option>
                            <option data-set="9" value="9" className="2">Not Available</option>
                          </select>

                        </td>
                        <td style={{ textAlign: "center" }}>
                          {this.state.RiskIndex_EmersonHours}
                        </td>
                        <td>
                          <textarea rows={2} cols={30} ></textarea>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          EEEC Budgeted Engineering hours </td>
                        <td>
                          <select name="RiskIndex_EEECHours" className="ms-Dropdown-select" id="PPEEECBudgeted" onChange={this.handleRiskChange} >
                            <option>Please Select</option>
                            <option data-set="2" value="2" className="2"> {">"}1,000 and {"<"}5,000   </option>
                            <option data-set="3" value="3" className="2"> {">"}5,000 and {"<"}10,000   </option>
                            <option data-set="4" value="4" className="2"> {">"}10,000 and {"<"}25,000 </option>
                            <option data-set="5" value="5" className="2"> {">"}25,000 and {"<"}50,000 </option>
                            <option data-set="6" value="6" className="2"> {">"}50,000 and {"<"}75,000 </option>
                            <option data-set="7" value="7" className="2"> {">"}75,000 and {"<"}100,000 </option>
                            <option data-set="8" value="8" className="2"> {">"}100,000  </option>
                            <option data-set="9" value="9" className="2">Not Available</option>
                          </select>

                        </td>
                        <td style={{ textAlign: "center" }}>
                          {this.state.RiskIndex_EEECHours}
                        </td>
                        <td>
                          <textarea rows={2} cols={30} ></textarea>
                        </td>
                      </tr>

                      <tr>
                        <td> Adequacy of Budget & Schedule</td>
                        <td>
                          <select name="RiskIndex_Budget" className="ms-Dropdown-select" id="PPEBudget" onChange={this.handleRiskChange} >
                            <option data-set="0">Please Select</option>
                            <option data-set="1" value="2" className="2"> Adequate Budget And Schedule  </option>
                            <option data-set="2" value="3" className="2"> Budget Constraint   </option>
                            <option data-set="2" value="4" className="2"> Schedule Constraint </option>
                            <option data-set="6" value="5" className="2"> Budget And Schedule Constraint </option>
                            <option data-set="8" value="6" className="2"> Not Known</option>

                          </select>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {this.state.RiskIndex_Budget}
                        </td>
                        <td>
                          <textarea rows={2} cols={30} ></textarea>
                        </td>
                      </tr>


                      <tr>
                        <td>
                          EEEC Utilization (Engineering)
                        </td>
                        <td>
                          <select name="RiskIndex_Utilization" className="ms-Dropdown-select" id="PPEBudget" onChange={this.handleRiskChange} >
                            <option data-set="0" >Please Select</option>
                            <option data-set="1" value="2" className="2">  {"<"}30% </option>
                            <option data-set="2" value="3" className="2"> {">"}30% And {"<"}35%  </option>
                            <option data-set="3" value="4" className="2"> {">"}35% And {"<"}50% </option>
                            <option data-set="4 " value="4" className="2"> {">"}50% And {"<"}70% </option>
                            <option data-set="5" value="5" className="2"> {">"}75% </option>
                          </select>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {this.state.RiskIndex_Utilization}
                        </td>
                        <td>
                          <textarea rows={2} cols={30} ></textarea>
                        </td>

                      </tr>

                      <tr>
                        <td>Execution Duration</td>
                        <td> <select name="RiskIndex_Duration" className="ms-Dropdown-select" id="PPEInvolve" onChange={this.handleRiskChange} >
                          <option data-set="0">Please Select</option>
                          <option data-set="1" value="2" className="2"> Normal</option>
                          <option data-set="2" value="3" className="2"> Fast Track  </option>

                        </select></td>
                        <td style={{ textAlign: "center" }}>
                          {this.state.RiskIndex_Duration}
                        </td>
                        <td>
                          <textarea rows={2} cols={30} ></textarea>
                        </td>
                      </tr>

                      <tr>
                        <td>Time of EEEC Involvement</td>
                        <td> <select name="RiskIndex_EEECInvolvement" className="ms-Dropdown-select" id="PPEInvolve" onChange={this.handleRiskChange} >
                          <option data-set="0">Please Select</option>
                          <option data-set="1" value="2" className="2"> Planned Late Involvement </option>
                          <option data-set="3" value="3" className="2"> Same as FSO  </option>
                          <option data-set="5" value="3" className="2"> Unexpected Requirement  </option>


                        </select></td>
                        <td style={{ textAlign: "center" }}>
                          {this.state.RiskIndex_EEECInvolvement}
                        </td>
                        <td>
                          <textarea rows={2} cols={30} ></textarea>
                        </td>
                      </tr>


                      <tr>
                        <td>
                          Project Organisation Chart
                        </td>
                        <td>
                          <select name="RiskIndex_ProjectChart" className="ms-Dropdown-select" id="PPEOrgChart" onChange={this.handleRiskChange} >
                            <option data-set="0">Please Select</option>
                            <option data-set="1" value="2" className="2"> Well Defined Structure </option>
                            <option data-set="2" value="3" className="2"> Multiple Roles per resource  </option>
                            <option data-set="4" value="3" className="2">Resource allocation managed by FSO  </option>
                          </select>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {this.state.RiskIndex_ProjectChart}
                        </td>
                        <td>
                          <textarea rows={2} cols={30}></textarea>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Overall Risk Ranking
                       </td>
                        <td>
                          <select name="OverallRisk" className="ms-Dropdown-select" id="PPERiskRanking" onChange={this.handleRiskChange} >
                            <option>Please Select</option>
                            <option data-set="1" value="2" className="2"> Low </option>
                            <option data-set="4" value="3" className="2"> Medium</option>
                            <option data-set="6" value="3" className="2">High  </option>
                          </select>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {this.state.OverallRisk}
                        </td>
                        <td>
                          <textarea rows={2} cols={30}></textarea>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          EEEC Scope
                       </td>
                        <td>

                          <input type="checkbox" id="ChkPPEFeed"></input> &nbsp; Feed  <br></br>
                          <input type="checkbox" id="ChkPPEFeed"></input> &nbsp;Execute  <br></br>
                          <input type="checkbox" id="ChkPPEFeed"></input>&nbsp; FAT  <br></br>
                          <input type="checkbox" id="ChkPPEFeed"></input>&nbsp; SAT  <br></br>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          1
                          </td>
                        <td>
                          <textarea rows={2} cols={30}></textarea>
                        </td>
                      </tr>


                      <tr>
                        <td>
                          EEEC Involvement and Project Scope
                          </td>
                        <td>
                          <div id="EEECInvolvement" style={{ width: "95%", border: "1px solid darkgray", padding: "10px", marginTop: "7px" }}>
                            <table style={{ width: "100%" }} >
                              <tr>
                                <td style={{ width: "20px" }}><input type="checkbox" id="ChkPASBase" /></td><td>PAS Base DB,Interlocks,Graphics  </td>
                                <td style={{ width: "20px" }}><input type="checkbox" id="ChkPASCustom" /></td><td>PAS Custom Logic,Sequences </td>
                                <td style={{ width: "20px" }}><input type="checkbox" id="ChkPASComplex" /></td><td>PAS Complex Logic  </td>
                              </tr>
                              <tr>
                                <td style={{ width: "20px" }}><input type="checkbox" id="ChkPASBatch" /></td><td>PAS Batch  </td>
                                <td style={{ width: "20px" }}><input type="checkbox" id="ChkOtherPAS" /></td><td>Other PAS  </td>
                              </tr>

                              <tr>
                                <td style={{ width: "20px" }}> <input type="checkbox" id="ChkSISESD" /></td><td>SIS ESD  </td>
                                <td style={{ width: "20px" }}> <input type="checkbox" id="ChkSISFGS" /></td><td>SIS FGS </td>
                                <td style={{ width: "20px" }}><input type="checkbox" id="ChkSISBMS" /></td><td>SIS BMS   </td>
                              </tr>
                              <tr>
                                <td style={{ width: "20px" }}><input type="checkbox" id="chkSIS" /> </td><td>SIS/PAS Integration </td>
                                <td style={{ width: "20px" }}><input type="checkbox" id="ChkSISOther" /></td><td>Other SIS Integration </td>
                              </tr>
                              <tr>
                                <td style={{ width: "20px" }}> <input type="checkbox" id="chkPASCab" /></td><td>PAS Cabinets  </td>
                                <td style={{ width: "20px" }}><input type="checkbox" id="ChkSISCab" /></td><td>SIS Cabinets  </td>

                              </tr>

                              <tr>
                                <td style={{ width: "20px" }}> <input type="checkbox" id="chkPASCab" /> </td><td>Other BU's and Engg Support</td>
                                <td style={{ width: "20px" }}> <input type="checkbox" id="chkInterface" /></td><td>Interface Lead  </td>
                                <td style={{ width: "20px" }}><input type="checkbox" id="ChkDocument" /></td><td>Document Controller  </td>
                              </tr>
                              <tr>
                                <td style={{ width: "20px" }} >  <input type="checkbox" id="ChkWriter" /></td><td>Technical Writer  </td>
                                <td style={{ width: "20px" }}><input type="checkbox" id="ChkOTS" /></td><td>OTS   </td>

                              </tr>
                              <tr>
                                <td style={{ width: "20px" }}><input type="checkbox" id="ChkWireless" /></td><td>Wireless  </td>
                                <td style={{ width: "20px" }}><input type="checkbox" id="ChkAgile" /> </td><td>Agile OPS  </td>
                                <td style={{ width: "20px" }}><input type="checkbox" id="ChkOther" /></td><td>Other </td>
                              </tr>



                            </table>
                          </div>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          1
                          </td>
                        <td>
                          <textarea rows={2} cols={30}></textarea>
                        </td>

                      </tr>
                      <tr>
                        <td>FAT Engagement</td>
                        <td><select name="RiskIndex_FAT" className="ms-Dropdown-select" onChange={this.handleRiskChange}>
                          <option data-set="0" >Please Select</option>
                          <option data-set="1">Remote FAT</option>
                          <option data-set="2">Face to Face FAT</option>
                        </select></td>
                        <td style={{ textAlign: "center" }}>
                          {this.state.RiskIndex_FAT}
                        </td>
                        <td>
                          <textarea rows={2} cols={30}></textarea>
                        </td>


                      </tr>

                      <tr>
                        <td>Overall PM</td>
                        <td><select name="RiskIndex_OverallPM" className="ms-Dropdown-select" onChange={this.handleRiskChange}>
                          <option data-set="0">Please Select</option>
                          <option data-set="1">FSO</option>
                          <option data-set="2">EEC</option>
                          <option data-set="3">FSO + EEC</option>
                        </select></td>
                        <td style={{ textAlign: "center" }}>
                          {this.state.RiskIndex_OverallPM}
                        </td>
                        <td>
                          <textarea rows={2} cols={30}></textarea>
                        </td>

                      </tr>
                      <tr>
                        <td>Overall Lead and Other LE's</td>
                        <td>
                          <select name="RiskIndex_OverallLead" className="ms-Dropdown-select" onChange={this.handleRiskChange}>
                            <option data-set="0">Please Select</option>
                            <option data-set="1">FSO</option>
                            <option data-set="2">EEC (Local)</option>
                            <option data-set="3">EEC(Local+Remote)</option>
                            <option data-set="4">FSO + EEC</option>
                            <option data-set="5">No Liaison in FSO</option>
                          </select>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {this.state.RiskIndex_OverallLead}
                        </td>
                        <td>
                          <textarea rows={2} cols={30}></textarea>
                        </td>
                      </tr>

                      <tr>
                        <td> FSO PM and Leads</td>
                        <td>
                          <table style={{ border: "1px solid lightgray" }}>

                            <tr>
                              <th style={{ borderStyle: "Solid", borderWidth: "1px", padding: "5px", textAlign: "center", borderColor: "darkgray" }}><u> Open</u></th>
                              <th style={{ borderStyle: "Solid", borderWidth: "1px", padding: "5px", textAlign: "center", borderColor: "darkgray" }}> <u>Technical</u></th>
                              <th style={{ borderStyle: "Solid", borderWidth: "1px", padding: "5px", textAlign: "center", borderColor: "darkgray" }}>Other</th>
                              <th style={{ borderStyle: "Solid", borderWidth: "1px", padding: "5px", textAlign: "center", borderColor: "darkgray" }}>EEEC Experience</th>
                            </tr>
                            <tr>
                              <td><input type="radio" data-set="0" id="FSOMPMOpen" name="FSOMPMOpen" onChange={this.handleRiskChange} value="0" /> <label>Accomodative</label> </td>
                              <td><input type="radio" data-set="0" id="FSOMPMOpen" name="FSOPMTechnical" onChange={this.handleRiskChange} /> <label>Technical</label> </td>
                              <td><input type="radio" data-set="0" id="FSOMPMOpen" name="FSOPMOther" value="0" onChange={this.handleRiskChange} /> <label>Proactive</label> </td>
                              <td><input type="radio" data-set="0" id="FSOMPMOpen" name="FSOEEEC" value="0" onChange={this.handleRiskChange} /> <label>Worked With EEEC</label> </td>
                            </tr>
                            <tr>
                              <td><input type="radio" data-set="3" id="FSOMPMOpen" name="FSOMPMOpen" value="0" onChange={this.handleRiskChange} /> <label>Non Accomodative</label> </td>
                              <td><input type="radio" data-set="3" id="FSOMPMOpen" name="FSOPMTechnical" value="0" onChange={this.handleRiskChange} /> <label>Non Technical</label> </td>
                              <td><input type="radio" data-set="3" id="FSOMPMOpen" name="FSOPMOther" value="0" onChange={this.handleRiskChange} /> <label>Reactive</label> </td>
                              <td><input type="radio" data-set="3" id="FSOMPMOpen" name="FSOEEEC" value="0" onChange={this.handleRiskChange} /> <label>New to EEEC</label> </td>
                            </tr>
                            <tr>
                              <td><input type="radio" data-set="6" id="FSOMPMOpen" name="FSOMPMOpen" value="0" onChange={this.handleRiskChange} /> <label>Difficult to Classify</label> </td>
                              <td><input type="radio" data-set="6" id="FSOMPMOpen" name="FSOPMTechnical" value="0" onChange={this.handleRiskChange} /> <label>Difficult to Classify</label> </td>
                              <td><input type="radio" data-set="6" id="FSOMPMOpen" name="FSOPMOther" value="0" onChange={this.handleRiskChange} /> <label>Difficult to Classify</label> </td>
                              <td><input type="radio" data-set="6" id="FSOMPMOpen" name="FSOEEEC" value="0" onChange={this.handleRiskChange} /> <label>Difficult to Classify</label> </td>
                            </tr>


                          </table>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {this.state.FSO_OPEN + this.state.FSO_Tech + this.state.FSO_Oth + this.state.FSO_EEC}
                        </td>
                        <td>
                          <textarea rows={2} cols={30}></textarea>
                        </td>
                      </tr>


                      <tr>
                        <td>What FSO Considers As a Success</td>
                        <td><input type="checkbox" id="chkPASCab" name="FSOSuccess" /> &nbsp;Timely Delivery <br></br>
                          <input type="checkbox" id="chkPASCab" name="FSOSuccess" /> &nbsp;No Budget Overrun<br></br>
                          <input type="checkbox" id="chkPASCab" name="FSOSuccess" /> &nbsp;FAT Ready Deliverables<br></br>
                          <input type="checkbox" id="chkPASCab" name="FSOSuccess" /> &nbsp;Minimal Rework after FAT {"<"}1% of Budget
<br></br>
                          <input type="checkbox" id="chkPASCab" name="FSOSuccess" /> &nbsp;Maintain or Improve Sales GP<br></br>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          1
                          </td>
                        <td>
                          <textarea rows={2} cols={30}></textarea>
                        </td>
                      </tr>

                      <tr>

                        <td> Non Standard Requirements</td>
                        <div id="EEECInvolvement" style={{ width: "95%", border: "1px solid darkgray", padding: "10px", marginTop: "7px" }}>
                          <table style={{ width: "100%" }}>
                            <tr>
                              <td><input type="checkbox" id="chkPASCab" name="ChkNonStandardRequirements" /> </td><td>Implement Batch without using Batch Licences </td> <br></br>
                              <td><input type="checkbox" id="chkPASCab" name="ChkNonStandardRequirements" /> </td><td>Use of SIS Blocks in PAS Control Module</td> <br></br>

                              <td><input type="checkbox" id="chkPASCab" name="ChkNonStandardRequirements" /></td><td>Use of Non-PCSD Library</td> <br></br>
                            </tr>
                            <tr>
                              <td><input type="checkbox" id="chkPASCab" name="ChkNonStandardRequirements" /></td><td>Graphics for custom resolutions</td> <br></br>
                              <td><input type="checkbox" id="chkPASCab" name="ChkNonStandardRequirements" /> </td><td>New Product/Technology</td> <br></br>
                            </tr>
                            <tr>
                              <td><input type="checkbox" id="chkPASCab" name="ChkNonStandardRequirements" /> </td><td>Odd Shifts  </td><br></br>
                              <td><input type="checkbox" id="chkPASCab" name="ChkNonStandardRequirements" /> </td><td>IP/Clause</td><br></br>
                              <td> <input type="checkbox" id="chkPASCab" name="ChkNonStandardRequirements" /> </td><td>Customer Demos</td><br></br>
                            </tr>
                            <tr>
                              <td> <input type="checkbox" id="chkPASCab" name="ChkNonStandardRequirements" /> </td><td>Develope Details FS based on limited information</td><br></br>
                              <td><input type="checkbox" id="chkPASCab" name="ChkNonStandardRequirements" /> </td><td>Other</td> <br></br>

                            </tr>
                          </table>
                        </div>
                        <td style={{ textAlign: "center" }}>
                          1
                          </td>
                        <td>
                          <textarea rows={2} cols={30}></textarea>
                        </td>

                      </tr>

                      <tr>
                        <td>
                          <br></br>
                          <br></br>
                        </td>
                      </tr>

                      <tr>
                        <td> Resource Skillset</td>
                        <td>

                          <select name="RiskIndex_ResourceSkill" className="ms-Dropdown-select" id="PPERiskRanking" onChange={this.handleRiskChange} >
                            <option>Please Select</option>
                            <option data-set="1" value="2" className="2"> No Special Requirement </option>
                            <option data-set="2" value="3" className="2"> Blended Mix</option>
                            <option data-set="4" value="3" className="2">Special Skills  </option>
                            <option data-set="6" value="3" className="2">Resource with Process background  </option>
                          </select>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {this.state.RiskIndex_ResourceSkill}
                        </td>
                        <td>
                          <textarea rows={2} cols={30}></textarea>
                        </td>

                      </tr>
                      <tr>
                        <td>Resource Plan and Project Loading Chart</td>
                        <select name="RiskIndex_ResourcePlan" className="ms-Dropdown-select" id="PPERiskRanking" onChange={this.handleInputChange} >
                          <option>Please Select</option>
                          <option value="2" className="2"> Yes </option>
                          <option value="3" className="2"> No</option>
                          <option value="3" className="2">To Be Defined Later  </option>

                        </select>
                        <td style={{ textAlign: "center" }}>
                          {this.state.RiskIndex_ResourcePlan}
                        </td>
                        <td>
                          <textarea rows={2} cols={30}></textarea>
                        </td>
                      </tr>



                    </table>

                  </Card.Body>
                </Accordion.Collapse>
              </Accordion>
              <Accordion defaultActiveKey="1">
                <Card.Header>
                  <Accordion.Toggle onClick={this.AnalysisTrackArrow} as={Card.Header} eventKey="1" className="header">
                    <span className={this.state.AnalysisTrackDown === "Yes" ? "glyphicon glyphicon-menu-up" : "glyphicon glyphicon-menu-down"}></span>&nbsp;
                                Project Tracking<br></br>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <table className="FrequentEntry" id="addFrequentEntry">
                      <tbody>
                        {/* <tr>
                          <td colSpan={3}>

                            <a id="rootbar"> <b><u>Click here to add Risks and Opportunities.</u></b></a></td>
                        </tr> */}
                        <tr>
                          <td></td>
                        </tr>
                        <tr>
                          <td style={{ paddingBottom: "20px" }}> Agreed Budget <b><span style={{ color: "red" }}>*</span></b> </td>
                          <td >

                            <input type='number' className="AgreedBudget" id="addAgreedBudget" ref={this.AgreedBudget} step="0.01" onChange={this.handleTextChange} value={this.state.EditAgreedBudget} />
                            <br></br><label>(Hours agreed with EPM FSO)</label></td>

                          <td> Internal Budget </td>
                          <td >

                            <input type='number' className="InternalBudget" id="addInternalBudget" step="0.01" ref={this.InternalBudget} onChange={this.handleTextChange} value={this.state.EditInternalBudget} />
                            <br></br><label>(Internal budget agreed with the Resource Manager)</label></td>
                        </tr>
                        <tr>
                          <td> Actuals </td>
                          <td >

                            <input type='number' className="Actuals" id="addActuals" step="0.01" ref={this.Actuals} onChange={this.handleTextChange} value={this.state.EditActuals} />
                          </td>

                          <td> EAC </td>
                          <td>

                            <input type='number' className="ETC" id="addETC" ref={this.ETC} step="0.01" onChange={this.getExpectedHours} value={this.state.EditETC} />
                          </td>
                        </tr>
                        <tr>
                          <td> Progress % </td>
                          <td >

                            <input type='number' className="Progress" id="addProgress" step="0.01" ref={this.Progress} onChange={this.handleTextChange} max="100" value={this.state.EditProgress} />
                          </td>

                          <td> Expected Hours Per Week </td>
                          <td>

                            <input type='number' className="ExpHours" id="addExpHours" ref={this.ExpHours} value={this.state.EditExpectedHours} onChange={this.handleTextChange} style={{ opacity: 0.5 }} readOnly />
                          </td>
                        </tr>
                        <tr>
                          <td>Actual End Period </td>
                          <td>

                            <input type='text' className="ActualEnd" id="addActualEnd" ref={this.ActualEnd} onChange={this.handleTextChange} value={this.state.EndFinPeriod} style={{ opacity: 0.5 }} onKeyPress={() => { return false }} />
                          </td>

                          <td>
                            Budget Deviation
                            </td>
                          <td><table  >
                            <tr>

                              <td  >

                                <input type='text' className="UpdateDeviation" id="addBudgetDeviation" ref={this.BudgetDev} onChange={this.handleTextChange} value={this.state.EditBudgetDeviation} disabled />
                                <label> &nbsp; &nbsp;2% of Agreed Budget  </label> </td>
                            </tr>
                          </table>
                          </td>

                        </tr>
                        <tr>
                          <td>
                            Budget Change
                            </td>
                          <td>
                            <table>
                              <tr>

                                <td  >      <input type='text' className="addProgressDeviation" id="addBudgetChange" ref={this.BudgetChange} onChange={this.handleTextChange} value={this.state.EditBudgetChange} /> <label> &nbsp;Hours</label></td>
                              </tr>
                            </table>
                          </td>

                          <td>

                            Schedule Change
                                </td>
                          <td>
                            <table  >
                              <tr>

                                <td>

                                  <input type='text' className="addProgressDeviation" id="addScheduleChange" ref={this.ScheduleChange} onChange={this.handleTextChange} value={this.state.EditScheduleChange} />
                                            &nbsp; <label>Days</label>  </td>
                              </tr>
                            </table>

                          </td>
                        </tr>
                        <tr>

                          <td>
                            Progress Deviation
                            </td>
                          <td>
                            <table  >
                              <tr>

                                <td  >

                                  <input type='text' className="addProgressDeviation" id="addProgressDeviation" ref={this.ProgressDev} onChange={this.handleTextChange} value={this.state.EditProgressDeviation} />
                                       &nbsp;   <label>Hours </label>  </td>
                              </tr>
                            </table>

                          </td>

                          <td>
                            Update Frequency
                            </td>
                          <td>
                            <table >
                              <tr>

                                <td  >
                                  <input type='text' className="addProgressDeviation" id="addUpdateFrequenct" ref={this.UpdateFreq} onChange={this.handleTextChange} value={this.state.EditUpdateFrequency} />
                                  <label> &nbsp;  Days</label> </td>
                              </tr>
                            </table>
                          </td>
                        </tr>

                        <tr>
                          <td> Status </td>
                          <td colSpan={3}>
                            <select className="ms-Dropdown-select" ref={this.Status} id="ddlStatus" onChange={this.handleInputChange} defaultValue={this.state.EditStatus} value={this.state.EditStatus}>
                              {/* <option>WIP</option>
                                                   <option>On Hold</option>
                                                   <option>Shelved</option>
                                                   <option hidden>Delivered</option>
                                                   <option hidden>Closed</option> */}

                            </select>  "Delivered" only after entry of Actual End Date. "Closed" only after Project close-out activities are completed.</td>
                        </tr>
                        <tr>
                          <td>Remark </td>
                          <td>

                            <textarea className="Remark" id="addRemark" ref={this.Remark} onChange={this.handleTextChange} value={this.state.EditRemark} cols={42} rows={5} />
                          </td>
                        </tr>

                        <br></br>


                        <br></br>
                        <br></br>


                        <tr>
                          <td>
                            Risk Register Updated
                            </td>
                          <td>

                            <DatePicker showWeekNumbers={false} isMonthPickerVisible={true}
                              showMonthPickerAsOverlay={true} highlightCurrentMonth={true} maxDate={this.state.today} className="addActualEndDate" id="RRDate" onSelectDate={this.handleDateEvent("RRDate")} value={this.state.RRDate} formatDate={Helper._onFormatDate} parseDateFromString={this._RRDateFromString} onChange={this.handleTextChange}></DatePicker>

                          </td>


                          <td>
                            QI DocumentsUpdated?
                            </td>
                          <td>

                            <DatePicker showWeekNumbers={false} isMonthPickerVisible={true}
                              showMonthPickerAsOverlay={true} maxDate={this.state.today} highlightCurrentMonth={true} className="addActualEndDate" id="QIDate" onSelectDate={this.handleDateEvent("QIDate")} value={this.state.QIDate} formatDate={Helper._onFormatDate} parseDateFromString={this._QIDateFromString} onChange={this.handleTextChange}></DatePicker>

                          </td>

                        </tr>
                        <tr>
                          <td>
                            Change Management
                            </td>
                          <td>

                            <DatePicker showWeekNumbers={false} isMonthPickerVisible={true}
                              showMonthPickerAsOverlay={true} maxDate={this.state.today} highlightCurrentMonth={true} className="addActualEndDate" id="ChangeDate" onSelectDate={this.handleDateEvent("ChangeDate")} value={this.state.ChangeDate} formatDate={Helper._onFormatDate} parseDateFromString={this._ChangeDateFromString} onChange={this.handleTextChange}></DatePicker>

                          </td>


                          <td>
                            Productivity Review-1
                            </td>
                          <td>

                            <DatePicker showWeekNumbers={false} isMonthPickerVisible={true}
                              showMonthPickerAsOverlay={true} maxDate={this.state.today} highlightCurrentMonth={true} className="addActualEndDate" id="PR1Date" onSelectDate={this.handleDateEvent("PR1Date")} value={this.state.PR1Date} formatDate={Helper._onFormatDate} parseDateFromString={this._PR1DateFromString} onChange={this.handleTextChange}></DatePicker>

                          </td>

                        </tr>
                        <tr>
                          <td>
                            Productivity Review-2
                            </td>
                          <td>

                            <DatePicker showWeekNumbers={false} isMonthPickerVisible={true}
                              showMonthPickerAsOverlay={true} maxDate={this.state.today} highlightCurrentMonth={true} className="addActualEndDate" id="PR2Date" onSelectDate={this.handleDateEvent("PR2Date")} value={this.state.PR2Date} formatDate={Helper._onFormatDate} parseDateFromString={this._PR2DateFromString} onChange={this.handleTextChange}></DatePicker>

                          </td>

                          <td>
                            Project Review Calls with FSO?
                            </td>
                          <td>

                            <DatePicker showWeekNumbers={false} isMonthPickerVisible={true}
                              showMonthPickerAsOverlay={true} maxDate={this.state.today} highlightCurrentMonth={true} className="addActualEndDate" id="FSODate" onSelectDate={this.handleDateEvent("FSODate")} value={this.state.FSODate} formatDate={Helper._onFormatDate} parseDateFromString={this._FSODateFromString} onChange={this.handleTextChange}></DatePicker>

                          </td>

                        </tr>
                        <tr>
                          <td>
                            End User Design Review Meeting
                            </td>
                          <td>

                            <DatePicker showWeekNumbers={false} isMonthPickerVisible={true}
                              showMonthPickerAsOverlay={true} maxDate={this.state.today} highlightCurrentMonth={true} className="addActualEndDate" id="EUDRDate" onSelectDate={this.handleDateEvent("EUDRDate")} value={this.state.EUDRDate} formatDate={Helper._onFormatDate} parseDateFromString={this._EUDRDateFromString} onChange={this.handleTextChange}></DatePicker>

                          </td>

                        </tr>
                      </tbody>
                    </table>



                  </Card.Body>
                </Accordion.Collapse>
              </Accordion>
              <Accordion defaultActiveKey="1">
                <Card.Header>
                  <Accordion.Toggle onClick={this.AnalysisCloseArrow} as={Card.Header} eventKey="1" className="header">
                    <span className={this.state.AnalysisCloseDown === "Yes" ? "glyphicon glyphicon-menu-up" : "glyphicon glyphicon-menu-down"}></span>&nbsp;
                               Project Closing <br></br>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <table className="addClosureEntry" id="addClosureEntry">
                      <tbody>
                        <tr>
                          <td><li>Are all deliveries completed and communicated to front office?</li></td>
                          <td> <select className="ms-Dropdown-select" id="addDeliv" ref={this.delivery} onChange={this.handleInputChange} value={this.state.EditDeliveryComplete} >
                            <option>Yes</option>
                            <option selected>No</option>

                          </select> </td>

                          <td>  <textarea cols={30} rows={3} id="DeliveryComments" ref={this.deliverycomments} onChange={this.handleTextChange} value={this.state.EditDeliveryCompleteComments} /> </td>
                        </tr>
                        <tr>
                          <td> <li>Has the PM logged ITSS call for project folder archival and deletion from server (after deletion of "working documents" folder)?</li><br></br><i> &nbsp;&nbsp;&nbsp;&nbsp;<b>Note:</b> PM shall intimate the retention period in ITSS call, as per the "Project Plan (ProjectID)"</i></td>

                          <td> <select className="ms-Dropdown-select" id="AddITSS" ref={this.ITSS} onChange={this.handleInputChange} value={this.state.EditPMITSS}>
                            <option>Yes</option>
                            <option selected>No</option>


                          </select> </td>
                          <td>

                            <textarea cols={30} rows={3} id="ITSSComments" ref={this.ITSSComments} onChange={this.handleTextChange} value={this.state.EditPMITSSComments} />
                          </td>
                        </tr>
                        <tr>
                          <td><li>In case there are hardcopy documents, are these disposed / properly identified and archived by PM?</li></td>
                          <td><select className="ms-Dropdown-select" id="HardCopy" onChange={this.handleInputChange} value={this.state.EditProjectFolder} ref={this.hardcopy} >
                            <option>Yes</option>
                            <option selected>No</option>
                            <option >N/A </option>


                          </select> </td>
                          <td>

                            <textarea cols={30} rows={3} className="InternalBudget" id="HardCopyComments" ref={this.hardcopyComments} onChange={this.handleTextChange} value={this.state.EditProjectFolderComments} />
                          </td>
                        </tr>
                        <tr>
                          <td><li>Has the PM logged ITSS call for release of RVO2 resources</li></td>
                          <td><select className="ms-Dropdown-select" id="ITSS2" ref={this.ITSS2} onChange={this.handleInputChange} value={this.state.EditITSSCall}>
                            <option>Yes</option>
                            <option selected>No</option>


                          </select> </td>
                          <td>

                            <textarea cols={30} rows={3} className="Actuals" id="ITSS2Comments" ref={this.ITSS2Comments} value={this.state.ProjectHWComments} onChange={this.handleTextChange} />
                          </td>
                        </tr>
                        <tr>
                          <td><li>Has the Dongle been returned?</li> </td>
                          <td> <select className="ms-Dropdown-select" id="DongleReturn" ref={this.donglereturn} onChange={this.handleInputChange} value={this.state.EditDongleReturned}>
                            <option>Yes</option>
                            <option selected>No</option>


                          </select> </td>
                          <td>

                            <textarea cols={30} rows={3} className="ETC" id="DongleComments" ref={this.dongleComments} value={this.state.EditDongleReturnedComments} onChange={this.handleTextChange} />
                          </td>
                        </tr>
                        <tr>
                          <td><li>Is all project information and data correct and/or updated to reflect the values at project close?</li></td>
                          <td> <select className="ms-Dropdown-select" id="ProjectCorrect" ref={this.projectcorrect} value={this.state.EditDatacorrect} onChange={this.handleInputChange} >
                            <option>Yes</option>
                            <option selected>No</option>


                          </select> </td>
                          <td>

                            <textarea cols={30} rows={3} className="Progress" id="ProjectComments" ref={this.projectComments} onChange={this.handleTextChange} value={this.state.EditDatacorrectComments} />
                          </td>
                        </tr>
                        <tr>

                          <td><li>Are post-delivery defects (field non-conformities) collected from the Front Office and recorded?</li></td>
                          <td> <select className="ms-Dropdown-select" id="PostDelivery" ref={this.postdelivery} onChange={this.handleInputChange} value={this.state.EditPostdelivery}>
                            <option>No</option>
                            <option>Yes</option>



                          </select> </td>
                          <td>

                            <textarea cols={30} rows={3} className="ExpHours" id="PostDeliveryComments" ref={this.postdeliveryComments} onChange={this.handleTextChange} value={this.state.EditPostdeliveryComments} />
                          </td>

                        </tr>
                        <tr>
                          <td>
                            <li>Is file imported by FHX tool</li>
                          </td>
                          <td>
                            <td> <select className="ms-Dropdown-select" id="FHX" onChange={this.handleInputChange} value={this.state.EditFHX}>
                              <option>No</option>
                              <option>Yes</option>



                            </select> </td>
                          </td>
                          <td>

                            <textarea cols={30} rows={3} className="ExpHours" id="FHXComments" onChange={this.handleTextChange} value={this.state.EditFHXComments} />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="showHide" style={{ pointerEvents: (this.state.showResults ? 'none' : 'auto'), opacity: (this.state.showResults ? 0.3 : 1) }}>
                      <tbody>
                        <tr>

                          <td  ><li>Is the CSS form received and circulated?</li></td>
                          <td ><select className="ms-Dropdown-select" id="CSS" ref={this.CSS} onChange={this.handleInputChange} value={this.state.EditCSSFormReceived}>
                            <option>No</option>
                            <option>Yes</option>


                          </select> </td>
                          <td>

                            <textarea cols={30} rows={3} className="ActualEnd" id="CSSComments" ref={this.CSSComments} onChange={this.handleTextChange} value={this.state.EditCSSFormReceivedComments} />
                          </td>

                        </tr>

                        <tr>

                          <td><li>Is project closeout meeting conducted And lessons learnt including project closeout report uploaded to the EEEC Technical Info.</li></td>
                          <td><select className="ms-Dropdown-select" id="Close" ref={this.close} onChange={this.handleInputChange} value={this.state.EditProjectCloseMeeting}>
                            <option>No</option>
                            <option>Yes</option>


                          </select></td>
                          <td>

                            <textarea cols={30} rows={3} className="ActualEnd" id="CloseComments" ref={this.closeComments} onChange={this.handleTextChange} value={this.state.EditProjectCloseMeetingComments} />
                          </td>

                        </tr>
                        <tr>

                          <td><li>Have resource skills been updated and communicated to ResourceSkills.EEEC@Emerson.com?</li></td>
                          <td><select className="ms-Dropdown-select" id="ResourceSkill" ref={this.resourceskill} onChange={this.handleInputChange} value={this.state.EditResourceSkillUpdated}>
                            <option>No</option>
                            <option>Yes</option>


                          </select> </td>
                          <td>

                            <textarea cols={30} rows={3} className="ActualEnd" id="ResourceSkillComments" ref={this.resourceskillComments} onChange={this.handleTextChange} value={this.state.EditResourceSkillUpdatedComments} />
                          </td>

                        </tr>
                      </tbody>
                    </table>
                    <table style={{ pointerEvents: (this.state.showResults ? 'none' : 'auto'), opacity: (this.state.showResults ? 0.3 : 1), width: '100%' }}>
                      <tbody>
                        <tr>
                          <td style={{ width: '20%', paddingLeft: '16px' }} > Close out Notes </td>
                          <td style={{ textAlign: 'initial' }}>

                            <textarea className="Remark" id="CloseOutNotes" disabled={!this.state.showButton} value={this.state.EditCloseOut} ref={this.closeOut} onChange={this.handleTextChange} cols={119} rows={5} />
                          </td>
                        </tr>
                      </tbody>
                    </table>





                  </Card.Body>
                </Accordion.Collapse>
              </Accordion>
              <table style={{ width: '100%' }}>
                <tr>
                  <td style={{ width: '50%', alignContent: 'right', textAlign: 'center', paddingLeft: '43.5%' }}>    <button type="submit" id="submitbtn" className="btn btn-primary" style={{ textAlign: 'center' }} disabled={!this.state.showButton}>Update</button>
                  </td>
                  <td>
                    <button type="reset" className="btn btn-primary" style={{ textAlign: 'center' }} disabled={!this.state.showButton} onClick={() => window.location.reload()} >Reset</button>
                  </td>
                </tr>
              </table>
            </div >
          </Card >
        </div >
      </form >
    )
  }
}
export default eProjectNewForm;