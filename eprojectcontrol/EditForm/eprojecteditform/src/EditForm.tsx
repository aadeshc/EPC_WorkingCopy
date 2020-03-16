import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';
import { SPPeoplePicker } from "./peoplepicker";
import $ from 'jquery';
//import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
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
  Label, Checkbox, PrimaryButton, Selection, SelectionMode, TextField, IPersonaProps,IPersona, DatePicker, DayOfWeek, Dropdown, values, DefaultButton, inputProperties 
} from "office-ui-fabric-react";
import { Helper } from './helper' ;
import {DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { allResolved } from 'q';
import { string } from 'prop-types';
export interface IeProjectState{
    data: any;
    EBU : any;
    EPC:any;
}

/*dropdown options */
declare var _spPageContextInfo;
let   pstartDate;
let  pendDate;
let  pactDate;
let CurrentFinPeriod=[];
let CurrentPeriod;
let agreedendate

const stackTokens: IStackTokens = { childrenGap: 10 };
export interface NewFormProps{
        data: any;
        EBU : any;  
        BU:any;
}
 
export class eProjectNewForm extends React.Component<{},any>{
public EPC;EndUser;EndDestination;DeltaV;ProjectID;ProjectDate;ProjectPeriod;ProjectName;HWIO;SWIO;FFIO;SSIO;module
 public ModuleClasses;ComplexLoops;EQM;PhraseClasses;OP;UP;PR;Dynamos;Display;Cabinet;ILD;FSOLE;FSOPM;FSOHW;EECPM;BudgetChange;
 public ScheduleChange;ProgressDev;UpdateFreq;BudgetDev;Status;AgreedBudget;InternalBudget;Actuals;ETC;Progress;ExpHours;ActualEnd;
 public Remark;EQMClasses;postdeliveryComments
 public NoOfSLS;NodesDelta;NoOfControl
 public newModule;newModuleClasses;postdelivery;hardcopy;hardcopyComments;
 public delivery;deliverycomments;projectComments
 public ITSS;ITSS2;ITSSComments;ITSS2Comments;donglereturn;dongleComments;projectcorrect
 public close;closeComments;resourceskill;resourceskillComments;CSS;CSSComments
 public  ProjectType;IndType;IndSubType;Country;WorldArea;ProjPlatform;EEECProjID;EBUU;
constructor(props: IeProjectState){

super(props);
this.EPC = React.createRef(); 
this.EndUser = React.createRef();
this.EndUser =React.createRef();
this.DeltaV = React.createRef();
this.ProjectID = React.createRef();
this.ProjectDate = React.createRef();
this.ProjectPeriod = React.createRef();
this.ProjectName =React.createRef();
this.EndDestination = React.createRef();
this.SWIO =React.createRef();
this.HWIO = React.createRef();
this.FFIO = React.createRef();
this.SSIO = React.createRef();
this.module = React.createRef();
this.newModule = React.createRef();
this.newModuleClasses = React.createRef();
this.ModuleClasses =  React.createRef();
this.Remark = React.createRef();
this.ActualEnd = React.createRef();
this.ExpHours = React.createRef();
this.Progress = React.createRef();
this.ETC = React.createRef();
this.Actuals =React.createRef();
this.InternalBudget =React.createRef();
this.AgreedBudget = React.createRef();
this.BudgetDev = React.createRef();
this.UpdateFreq = React.createRef();
this.ProgressDev = React.createRef();
this.ScheduleChange = React.createRef();
this.BudgetChange = React.createRef();
this.ILD = React.createRef();
this.Display = React.createRef();
this.PR =React.createRef();
this.UP = React.createRef();
this.OP = React.createRef();
this.EQM = React.createRef();
this.EQMClasses= React.createRef();
this.ComplexLoops = React.createRef();
this.PhraseClasses = React.createRef();
this.Dynamos = React.createRef();
this.Cabinet = React.createRef();
this.handleInputChange=this.handleInputChange.bind(this)
this.loadsubind = this.loadsubind.bind(this)
this.handlePeopleChnage = this.handlePeopleChnage.bind(this)
this.postdata= this.postdata.bind(this);
this.handleEEECLEChange = this.handleEEECLEChange.bind(this)
this.handleFSOLEChange = this.handleFSOLEChange.bind(this)
this.handleFSOPMChange = this.handleFSOPMChange.bind(this)


this.handleDateEvent = this.handleDateEvent.bind(this);
this.toggleChange = this.handleInputChange.bind(this)
this.ontextChange = this.ontextChange.bind(this)
this.getExpectedHours = this.getExpectedHours.bind(this)
this.NoOfControl =  React.createRef();
this.NoOfSLS =  React.createRef();
this.NodesDelta =  React.createRef();
this.closeComments =  React.createRef();
this.close =  React.createRef();
this.CSS = React.createRef();
this.CSSComments=React.createRef();
this.ITSS =React.createRef();
this.ITSS2 = React.createRef();
this.ITSS2Comments = React.createRef();
this.ITSSComments =React.createRef();
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
this.Status =React.createRef();
this.EEECProjID=React.createRef();
this.ProjPlatform=React.createRef();
this.Country = React.createRef();
this.WorldArea = React.createRef();
this.IndSubType =React.createRef();
this.IndType =React.createRef();
this.ProjectType = React.createRef();
this.EBUU =React.createRef();







this.state = {
        projectDetails:[],
        deltav:[],
        period :[],
        worldarea :[],
         EBU : [],
         platform : [],
         industry:[],
         subindustry:[],
         country:[],
         finyear:[],
         showResults: false,
         year : 0,
         unit : "DMC",
         counter : 0,
         EEECID :"",
         CountryCode :"OTH",
         qualitycounter:900,
         oldcounter : 0,
         title:"",
         ProjEndDate:new Date(),
        ProjRequestEndDate : new Date(),
        AgreedEndDate : new Date(),
        currentDate : new Date(),
        EEECPM : null,
        EEECLE : null,
        FSOLE : null,
        FSOPM : null,
        FinPeriod:"",
        ExpectedHoursPerWeek:0,
        
}
}


public getExpectedHours()
{
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

//get the no of remaining weeks
var diffDateValue = agreedEndDtWeekNo - todaysWeekNo;


var answer = valueETC/diffDateValue;
answer= Math.abs(answer);
console.log(answer)
this.setState(
  {
    ExpectedHoursPerWeek : answer,
  }
)



 
    
  
}

public ontextChange(event)
{
 if (event.target.id="addEPC")
 this.setState({EPC:event.target.value})













}
public loadprojectlist()
 {

  let initialProj = []
  debugger;
  const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Projectmaster')/Items?$top=4500`;
  return new Promise((resolve, reject) => {
    Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
            initialProj =response.d.results;
              var arr =Object.values(response.d.results);
            this.setState({
              projectDetails: arr,
           });
        }).catch( (e) => {
            console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
            reject();
        });
        
      });
 
 }

 public EBU()
 {
  let initialProj = []
  debugger;
  const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('EmersonBusinessUnit')/Items?$top=4500`;
  return new Promise((resolve, reject) => {
    Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
            initialProj =response.d.results;
              var arr =Object.values(response.d.results);
            this.setState({
              EBU: arr,
           });
        }).catch( (e) => {
            console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
            reject();
        });
        
      });
 }
 

 public loaddeltavversion()
 {
  let deltavversion = []
  debugger;
  const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('DeltaV%20Version')/Items?$top=4500`;
  return new Promise((resolve, reject) => {
    Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          deltavversion =response.d.results;
              var arr =Object.values(response.d.results);
            this.setState({
              period: arr,
           });
        }).catch( (e) => {
            console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
            reject();
        });
        
      });
 }

 public loadperiod()
 {
  let perioddetails = []
  debugger;
  let mySet = new Set();
  const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Period')/Items?$top=4500`;
  return new Promise((resolve, reject) => {
    Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          perioddetails =response.d.results;
              var arr =Object.values(response.d.results);
              
            this.setState({
              period: arr,
             
          
           });
        }).catch( (e) => {
            console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
            reject();
        });
        
      });


 }

 public loadFY()
 {
     // get current FY 

     var year = (new Date()).getFullYear();
     var shortyear =  year.toString().substring(2); // 19
     var today = new Date();
     var currmonth = today.getMonth();
     if(currmonth >=8)
     {
     shortyear = shortyear + 1;
     this.setState({ 
       year : shortyear
     })
    } else{
      this.setState({ 
        year : shortyear
      })
    }


  let deltavversion = []
  debugger;
  const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('DeltaV%20Version')/Items?$top=4500`;
  return new Promise((resolve, reject) => {
    Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          deltavversion =response.d.results;
              var arr =Object.values(response.d.results);
            this.setState({
              deltav: arr,
           });
        }).catch( (e) => {
            console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
            reject();
        });
        
      });
 }

 public loadworldarea(name)
 {let worledarea = []
  debugger;
  const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Country')/Items?$filter=CountryCode eq '`+ name +`'` ;
  return new Promise((resolve, reject) => {
    Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          worledarea =response.d.results;
              var arr =Object.values(response.d.results);
            this.setState({
              worldarea: arr,
           });
        }).catch( (e) => {
            console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
            reject();
        });
        
      });

 }

 public loadPlatform()
 {
  let deltavversion = []
  debugger;
  const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Project%20Platform')/Items?$top=4500`;
  return new Promise((resolve, reject) => {
    Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
          deltavversion =response.d.results;
              var arr =Object.values(response.d.results);
            this.setState({
              platform: arr,
           });
        }).catch( (e) => {
            console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
            reject();
        });
        
      });
 }
 public loadindustry()
 {

  let initialProj = []
  debugger;
  const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Type%20of%20Industry')/Items`;
  return new Promise((resolve, reject) => {
    Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
            initialProj =response.d.results;
              var arr =Object.values(response.d.results);
            this.setState({
              industry: arr,
           });
        }).catch( (e) => {
            console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
            reject();
        });
        
      });
 
 }

 public getcurrentcsergroup()
 {
         debugger;
        var url = _spPageContextInfo.webAbsoluteUrl +'/_api/web/currentuser/groups'
        const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('World%20Area')/Items`;
        return new Promise((resolve, reject) => {
          Helper.executeJson(url, null, null, null)
              .then((response) => {
                  var group =response.d.results;
                  var arr;
                    for (let i in response.d.results)
                    {
                       console.log(response.d.results[i].Title)
                       if(response.d.results[i].Title=="Designers")
                       {
                              this.setState({
                                showResults: true,
                             });  
                       }
                    }
                     
                  

              }).catch( (e) => {
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
                   this.loadindsubtype('Food & Beverage');
                
                  // this.postdata();
                
  let initialProj = []
  debugger;
  const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('World%20Area')/Items`;
  return new Promise((resolve, reject) => {
    Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
            initialProj =response.d.results;
              var arr =Object.values(response.d.results);
            this.setState({
              worldarea: arr,
           });
        }).catch( (e) => {
            console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
            reject();
        });
        
      });

 
}

public loadsubind(){

}
public postdata(e)
{
  debugger;
  e.preventDefault();
  var EPC = this.EPC.current.value;
  var HWIO = this.HWIO.current.value;
  var SWIO = this.SWIO.current.value;
  var SSIO = this.SSIO.current.value;
  var projectID = this.ProjectID.current.value;
  var projectName = this.ProjectName.current.value;
  var DeltaV = this.DeltaV.current.value;
  var ProjectPeriod       = this.ProjectPeriod.current.value ;
  var EndUser = this.EndUser.current.value;
  var EndDestination = this.EndDestination.current.value;
   
  var ComplexLoops = this.ComplexLoops.current.value;
  var EQMClasses = this.EQMClasses.current.value;
  var EQM  = this.EQM.current.value;
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
 var ITSS2 = this.ITSS2.current.value
 var ITSS2Comments= this.ITSS2.current.value
 var Dongle = this.donglereturn.current.value
 var DongleComments = this.dongleComments.current.value
 var Delivery = this.delivery.current.value
 var DeliveryComments = this.deliverycomments.current.value
 var ProjectCorrect = this.projectcorrect.current.value
 var ProjectCorrectComments = this.projectComments.current.value
 var PostDelivery = this.postdelivery.current.value
 var PostDeliveryComments=  this.postdeliveryComments.current.value
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
var ProjType =this.ProjectType.current.value
var EEECProjID = this.EEECProjID.current.value
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
        
    const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Projectmaster')/Items`;
    const headers = { 'content-Type': 'application/json;odata=verbose' };
    const listTitle = "Projectmaster";
    const savedata =
    {
      '__metadata': { 'type': 'SP.Data.' + listTitle + 'ListItem' },
      Title : "new MMID2",
      EPC : EPC,
      HWIO : HWIO,
      SWIO:SWIO,
      SSIO : SSIO,
      ProjectID : projectID,
      ProjectName : projectName,
      End_x0020_User : EndUser,
      End_x0020_Destination : EndDestination,
      DeltaVVersion : DeltaV,
      BudgetDeviation : BudgetDev,
      UpdateFrequency : UpdateFrequency,
      ProgressDeviation : ProgressDev,
      ScheduleChange : ScheduleChange,
      BudgetChange : BudgetChange,
      CabinetJBS : Cabinet,
      ILD : ILD,
      PR:PR,
      Dynamos:Dynamos,
      Displays:Display,
      PhaseClasses :PhraseClasses ,
      OP:OP,
      UP:UP,
      ComplexClasses:ComplexLoops,
      ComplexLoops:ComplexLoops,
      EQMClasses: EQMClasses,
      EQM:EQM,
      SIS : SSIO,
      RP:PR,
      NoOfControllers : NoOfControl,
      NoOfSLS : NoOfSLS,
      NodesOnDelta : NodesDelta,
      Modules:newModule,
      ModuleClasses: newModuleClasses,
      AgreedBudget : AgreedBudget,
      InternalBudget : InternalBudget,
      Actuals : Actuals,
      ETC : ETC,
      Progress :Progress,
      ExpectedHours : ExpHours,
      ActualEnd : ActualEnd,
      Remark : Remark,
      DeliveryComplete : Delivery,
      DeliveryCompleteComments : DeliveryComments,
      CSSFormReceived : CSS,
      CSSFormReceivedComments : CSSComments,
      ProjectCloseMeeting : Close,
      ProjectCloseMeetingComments : CloseComments,
      ResourceSkillUpdated : ResourceSkill,
      ResourceSkillUpdatedComments:  ResourceSkillComments,
      PMITSS : ITSS,
      PMITSSComments : ITSSComments,
      DongleReturned : Dongle,
      DongleReturnedComments : DongleComments,
      Datacorrect:ProjectCorrect,
      DatacorrectComments : ProjectCorrectComments,
      ProjectFolderArchive : HardCopy,
      ProjectFolderArchiveComments : HardCopyComments,
      ITSScallComments: ITSS2Comments,
      ITSScall : ITSS2,
      Emerson_x0020_Business_x0020_Uni: EBUU,
      ProjectType : ProjType,
      TypeOfIndustry : IndType,
      EEECProjID : EEECProjID,
      ProjectStartPeriod : ProjectPeriod,
      CountryId:countryID,
      IndustrySubtypeId : IndSubID,
      ProjectStartDate: pstartDate,
      ProjectEndDate  : pendDate,
       AgreedEndDate : ProjectAgreedEndDate,
       ActualEndDate :pactDate,
       EEECPMId : this.state.EEECPM,
       FSOLeId : this.state.FSOLE,
       EEECLeId : this.state.EEECLE,
       FSOPmId : this.state.FSOPM
    }
    Helper.executeJson(restUrl, "POST", headers, JSON.stringify($.extend(true,{}, savedata))) .then((response) => {
      // Resolve the request
      console.log(response);
      resolve("success");
       
  }).catch( (e) => {
      reject("Error")
      console.log(e);

  }); 
    
});
    

  
  e.preventDefault();
}

public getCurrentFY(shortyear,entereddate)
{

  var shortyearint = parseInt(shortyear);
  var year=shortyearint;
  var month = entereddate.getMonth();
  if(month>8)
  {
    year = year + 1
  }
  var  FY = 'FY'+year
  const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Period')/Items?$filter=FinYear eq '`+ FY +`'` ; 
  return new Promise((resolve, reject) => {
   Helper.executeJson(restUrl, null, null, null)
       .then((response) => {
           //initialProj =response.d.results;
             var arr =Object.values(response.d.results);
             for (let i in response.d.results)
                    {
                       console.log(response.d.results[i].Period_x0020_Name)

                        var startdatestring = response.d.results[i].Start_x0020_Date
                        var Startdate = new Date(startdatestring);
                        var enddatestring =response.d.results[i].End_x0020_Date
                        var enddate= new Date(enddatestring);
                         if(entereddate>=Startdate && entereddate<=enddate)
                         {
                            CurrentFinPeriod.push = response.d.results[i].Period_x0020_Name
                            CurrentPeriod =response.d.results[i].Period_x0020_Name
                            this.setState({
                              FinPeriod: response.d.results[i].Period_x0020_Name,
                           });
                            console.log(CurrentPeriod)
                          
                           
                            
                         
                          }

                    }
       }).catch( (e) => {
           console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
           reject();
       });
       
     });
}

public handleDateEvent = date=> (name)=>
{
  
   if(date=="ProjectData")
   {
    this.setState({currentDate: name});
    const valueOfInput = name.format();
    var prjdate = new Date(valueOfInput);
    var year = prjdate.getFullYear();
    var shortyear =  year.toString().substring(2)
    var month = prjdate.getMonth();
    var projStartDate = new Date(valueOfInput).toISOString();
    
     this.getCurrentFY(shortyear,prjdate)
     

    pstartDate = projStartDate
  //  this.setState(
  //    {
  //     pstart : name,
  //    }
  //  )
            
   }
   if(date=="ProjEndDate")
   {
    this.setState({ProjEndDate: name});
    const valueOfInput = name.format();
    var ProjEndDate = new Date(valueOfInput).toISOString();
       pendDate = ProjEndDate
      // this.setState({
      //   pend:name
      // }) 
   }
   if(date=="AgreedEndDate")
   {
    this.setState({AgreedEndDate: name}); 
    const valueOfInput = name.format();
    var projStartDate = new Date(valueOfInput).toISOString();
    agreedendate = projStartDate
            
   }
   if(date=="ActualEndDate")
   {
    this.setState({ProjRequestEndDate: name}); 
    const valueOfInput = name.format();
    var ProjActDate = new Date(valueOfInput).toISOString();
    pactDate = ProjActDate
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

public handlePeopleChnage = (name) => (value:any) => {

var EEECPM = value;
var EEEEE = Helper.getUserID(value)
 if(EEEEE != 0 || EEEEE !=null)
 {

      this.setState(
        {
          EEECPM:EEEEE  
        }
      )

 }
}

public handleEEECLEChange = (name) => (value:any) => {

  var EEECPM = value;
  var EEEEE = Helper.getUserID(value)
   if(EEEEE != 0 || EEEEE !=null)
   {
  
        this.setState(
          {
            EEECLE:EEEEE      
          }
        )
  
   }
  }
  
  public handleFSOLEChange = (name) => (value:any) => {

    var EEECPM = value;
    var EEEEE = Helper.getUserID(value)
     if(EEEEE != 0 || EEEEE !=null)
     {
    
          this.setState(
            {
              FSOLE:EEEEE  
            }
          )
    
     }
  }
    public handleFSOPMChange = (name) => (value:any) => {

      var EEECPM = value;
      var EEEEE = Helper.getUserID(value)
       if(EEEEE != 0 || EEEEE !=null)
       {
      
            this.setState(
              {
                FSOPM: EEEEE    
              }
            )
      
       }
  }
      
    
public loadindsubtype(id)
{
 let restid = id;
 let initialProj = []
 debugger;
 var lookupid ;
 if (id == "Chemical")
 lookupid=5
 if(id=='Food & Beverage')
 lookupid=1
 if(id=='Utilities')
 lookupid=2;
 if(id=='Other')
 lookupid=3;
 if(id=='Metals & Mining')
 lookupid=4;
 if(id=='Pharmaceutical')
 lookupid=6;
 if(id=='Refining')
 lookupid = 7
 if(id=='Pulp & Paper')
lookupid = 8
if(id=='Internal') 
lookupid = 9
if(id=='Oil & Gas')
lookupid = 10
var string = '$select=Industry_x0020_Subtype,Type_x0020_of_x0020_Industry/Id &$expand=Type_x0020_of_x0020_Industry/Id &$filter=Type_x0020_of_x0020_Industry/Id eq' +lookupid

 //https://emerson.sharepoint.com/sites/process-dev2/EEEC/EProjectControl/_api/web/Lists/getByTitle('Industry%20Subtype')/items?$select=Industry_x0020_Subtype,Type_x0020_of_x0020_Industry/Id &$expand=Type_x0020_of_x0020_Industry/Id &$filter=Type_x0020_of_x0020_Industry/Id eq 1
 //const restUrl = _spPageContextInfo.webAbsoluteUrl + string;
 const restUrl = _spPageContextInfo.webAbsoluteUrl +"/_api/web/Lists/getByTitle('Industry%20Subtype')/items?$select=Industry_x0020_Subtype,ID,Type_x0020_of_x0020_Industry/Id &$expand=Type_x0020_of_x0020_Industry/Id &$filter=Type_x0020_of_x0020_Industry/Id eq "+lookupid
 return new Promise((resolve, reject) => {
   Helper.executeJson(restUrl, null, null, null)
       .then((response) => {
           initialProj =response.d.results;
             var arr =Object.values(response.d.results);
           this.setState({
            subindustry: arr,
          });
       }).catch( (e) => {
           console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
           reject();
       });
       
     });

}

public loadcounter()
{

  
 

  
 var counter;
 var qualitycounter
  const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Counter')/Items`;
  return new Promise((resolve, reject) => {
    Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
            
              var arr =Object.values(response.d.results);
              counter = response.d.results[0].Count;
              qualitycounter = response.d.results[0].QualityCount
            this.setState({
              counter: counter,
              qualitycounter: qualitycounter,
              oldcounter : counter
           });
        }).catch( (e) => {
            console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
            reject();
        });
        
      });
}

public loadCountry()
{
   //https://emerson.sharepoint.com/sites/process-dev2/EEEC/EProjectControl/_api/web/Lists/getByTitle('Country')/items?$filter=World_x0020_Area eq 'Europe'
// var string = '/items?$filter=World_x0020_Area eq' + id
 
  //https://emerson.sharepoint.com/sites/process-dev2/EEEC/EProjectControl/_api/web/Lists/getByTitle('Industry%20Subtype')/items?$select=Industry_x0020_Subtype,Type_x0020_of_x0020_Industry/Id &$expand=Type_x0020_of_x0020_Industry/Id &$filter=Type_x0020_of_x0020_Industry/Id eq 1
  //const restUrl = _spPageContextInfo.webAbsoluteUrl + string;
  const restUrl = _spPageContextInfo.webAbsoluteUrl +"/_api/web/Lists/getByTitle('Country')/items"
  return new Promise((resolve, reject) => {
    Helper.executeJson(restUrl, null, null, null)
        .then((response) => {
           // initialProj =response.d.results;
              var arr =Object.values(response.d.results);
            this.setState({
             country: arr,
           });
        }).catch( (e) => {
            console.error(e.message, "Failed to fetch AzureFunctionAppURL from 'AzureAppConfiguration1' list");
            reject();
        });
        
      });
    }

    public setdropdownvalue(param)
    {
            
    }

    public toggleChange = (event)=>{
      debugger;
      this.setState({
        qualitycounter : this.state.counter
      })
    }

    public handleInputChange = (event) => {
      let ddltype = event.target.id;
      if (ddltype == "ddlInd") {
       let id = event.target.value;
       let name = event.target.value
       this.loadindsubtype(name)
       this.setState({
        unit: "IND"
       })
      }

      if(ddltype == "Quality")
      {
         let check;
         if(event.target.checked)
         {
        this.setState({
          counter : this.state.qualitycounter
        })
         } else{
          this.setState({
            counter :this.state.oldcounter
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
     
     
       this.setState({
        unit: keyval
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
      });
      this.loadworldarea(cc);
      }
     
     
     };





public render(){
        debugger;

  let Test= CurrentPeriod;
   

  const uniqueNames = Array.from(new Set(this.state.projectDetails.map(v=>v.ProjectName)));
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

  let EBUOptionsTemplate =this.state.EBU.map(v => (
    <option value={v.EmersonDivision}>{v.EmersonDivision}</option>
  ));
  
  let ProjectOptionsTemplate =this.state.platform.map(v => (
    <option value={v.Project_x0020_Platform}>{v.Project_x0020_Platform}</option>
  ));
  let IndustryOptionsTemplate =this.state.industry.map(v => (
    <option value={v.Type_x0020_of_x0020_Industry}>{v.Type_x0020_of_x0020_Industry}</option>
  ));

 // let FinyearOptionsTemplate = this.state.finyear.map(v => (
  //  <option value={v.FinYear}>{v.FinYear}</option>
  //));
  let SubIndsutryOptionsTemplate = this.state.subindustry.map(v => (
    <option id = {v.ID} value={v.Industry_x0020_Subtype.toString()}>{v.Industry_x0020_Subtype.toString()}</option>
  ));



  let CountryList = this.state.country.map(v => (
    <option id={v.ID} value={v.CountryCode}>{v.Country}</option>
  ));
  
    let inputstring = this.state.year +"-" + this.state.CountryCode +"-" + this.state.unit + "-" + this.state.counter 
    
    return(
      <form id='myform' onSubmit= {this.postdata}>
      <div id="mainContainerRender">
        <Card>
          <h5  className="table-color" id= "mainSubheader">E Project Control</h5> 
        <div id="DottedBox_content">
                    <Accordion defaultActiveKey="1">
  
                    <Card.Header >
      <Accordion.Toggle as={Button} variant="link" eventKey="1"  >
        <span className="subheader"> One Time Entry Project Parameters</span> 
      </Accordion.Toggle>
      </Card.Header>
      
    <Accordion.Collapse eventKey="1">
      <Card.Body>
                <table className="InputTable" id="InputTable">
                    <tbody>
                    <tr>
                    <td style={{width: '22%'}}>
                               Emerson Buisness Unit <span style={{color:'red'}}><b>*</b></span>
                            </td>
                            <td style={{width: '22%'}}>
                            <Stack tokens={stackTokens}>
                                 <select className="AR-Select" id="ddlEBU" onChange={this.handleInputChange} ref={this.EBUU} >
                                { EBUOptionsTemplate}
                            </select>
                                  </Stack>
                                   
                            </td>
                            <td style={{width: '22%'}}>
                                     <label>EPC</label><span style={{color:'red'}}><b>*</b></span>
                             </td>
                              <td colSpan={4}>
                                        <div className="panel panel-default">
                                        <input type="text" name="EPC" id="addEPC"  ref= {this.EPC} required/>
                                        </div>
                             </td>
                             
                    </tr>
                   
                    <tr>
                            <td>
                              End User<span style={{color:'red'}}><b>*</b></span>
                            </td>
                            <td>
                                        
                                        <input type="text"      name="addEndUser" id="addEnduser"  required  ref={this.EndUser}/>
                                       
                             </td>
                             <td>
                                     <label>End Destination</label><span style={{color:'red'}}><b>*</b></span>
                             </td>
                              <td colSpan={4}>
                                       
                                        <input type="text"     name="addEndDestination" id="addEndDestination" ref={this.EndDestination} required/>
                                         
                             </td>
                              
                    </tr>
                    <tr>
                            <td>
                              Delta V Version <span style={{color:'red'}}><b>*</b></span>
                            </td>
                            <td>
                            <Stack tokens={stackTokens}>
                                 <select className="AR-Select" id="ddlEBU" onChange={this.handleInputChange} ref={this.DeltaV}>
                                {    DeltaVoptionTemplate}
                            </select>
                                  </Stack>  
                         
                                        
                             </td>
                             <td>
                                     <label>Project Type</label> <span style={{color:'red'}}><b>*</b></span>
                             </td>
                              <td>
                              <i className="ms-Dropdown-caretDown ms-Icon ms-Icon--ChevronDown" id="addprojType" ref={this.ProjectType}></i>
                                    <select className="ms-Dropdown-select">
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
                    <td> Type Of Indutry</td>
                      <td>
                      <Stack tokens={stackTokens}>
                                 <select className="AR-Select"  onChange={this.handleInputChange} id="ddlInd" ref={this.IndType}>
                                  {IndustryOptionsTemplate}     
                                </select> </Stack>
                      
                      </td>
                      <td>Sub Type</td>
                      <td colSpan={4}>
                                 <Stack tokens={stackTokens}>
                                 <select className="AR-Select"  onChange={this.handleInputChange} id="ddlSub" ref={this.IndSubType}>
                                  {SubIndsutryOptionsTemplate}

                                  </select>
                                  </Stack>
                     </td>
                    </tr>
                    <tr>
                            <td>
                               Country
                            </td>
                            <td>
                            <i className="ms-Dropdown-caretDown ms-Icon ms-Icon--ChevronDown" id="addCountry" ></i>
                            <Stack tokens={stackTokens}>
                                 <select className="AR-Select" id="addCountry" onChange={this.handleInputChange} ref={this.Country}>
                                              {CountryList}    
                                        </select>
                                        </Stack>
                            </td>
                             <td>
                                     <label>World Area</label>
                             </td>
                              <td colSpan={4}>
                              <Stack tokens={stackTokens} onChange={this.handleInputChange} id="ddlCountryy">
                                 <select className="AR-Select" id="ddlCountry" ref={this.WorldArea}>
                                               {WorldareaoptionTemplate}     
                                        </select>
                                        </Stack>
                             </td>
                    </tr>
                    <tr>
                            <td>
                               Project Platform <span style={{color:'red'}}><b>*</b></span>
                            </td>
                            <td>
                            <i className="ms-Dropdown-caretDown ms-Icon ms-Icon--ChevronDown" id="addProjectPlatform"></i>
                            <Stack tokens={stackTokens}>
                                  <select className="AR-Select" id="ddlType" ref={this.ProjPlatform}>
                                    {ProjectOptionsTemplate}</select>
                                  </Stack>
                            </td>
                             <td>
                                     <label>Project Name</label><span style={{color:'red'}}><b>*</b></span>
                             </td>
                              <td colSpan={4}>
                                       
                                        <input type="text"    name="Projectname" id="addProjectName" ref={this.ProjectName}  required/>
                                      
                             </td>
                    </tr>
                    <tr>
                            <td>
                               <label>Project ID </label><span style={{color:'red'}}><b>*</b></span>
                            </td>
                            <td>
                                         
                                        <input type="text"    name="Project ID" id="addProjectID"  ref={this.ProjectID} required/>
                                         
                             </td>
                             <td>
                                     <label>EEEC Project ID</label><span style={{color:'red'}}><b>*</b></span>
                             </td>
                              <td colSpan={4}>
                                         
                                        <input type="checkbox" name="Quality" id="Quality"  onChange ={this.handleInputChange} ></input><input type="text"    name="ProjectID" id="addEEECProjectID" value = {inputstring}  ref={this.EEECProjID}  required />
                                      
                             </td>
                    </tr>
                    <tr>
                            <td>
                               <label>Project Start Date </label><span style={{color:'red'}}><b>*</b></span>
                            </td>
                            <td>
                                         
                                         <DatePicker className="addStartDate" id="ProjStartDate"  onSelectDate={this.handleDateEvent("ProjectData")} value={this.state.currentDate}    ></DatePicker>
                                        
                             </td>
                             <td>
                                     <label>Project Start Period</label> 
                             </td>
                              <td colSpan={4}>
                                        
                                        <input type="text"    name="ProjectStartPeriod" id="addProjectStartPeriod" ref= {this.ProjectPeriod} value = {this.state.FinPeriod}  required/>
                                        
                             </td>
                            
                    </tr>
                    <tr>
                            <td>
                               <label>Request End Date </label><span style={{color:'red'}}><b>*</b></span>
                            </td>
                            <td>
                                         
                                         <DatePicker className="addRequestEndDate" id="ProjEndDate" onSelectDate={this.handleDateEvent("ProjEndDate")} value={this.state.ProjEndDate} ></DatePicker>
                                        
                             </td>
                             <td>
                                     <label>Agreed End Date</label><span style={{color:'red'}}><b>*</b></span>
                             </td>
                              <td>
                                        <div className="panel panel-default">
                                        <DatePicker className="form-addAgreedEndDate" id="AgreedEndDate" onSelectDate={this.handleDateEvent("AgreedEndDate")}  value={this.state.AgreedEndDate}/>
                                        </div>
                             </td>
                              <td></td>
                    </tr>
                    <tr>
                            <td>
                               <label>Actual  End Date </label>
                            </td>
                            <td>
                                        <div className="panel panel-default">
                                         <DatePicker className="addActualEndDate" id="ActualEndDate" onSelectDate={this.handleDateEvent("ActualEndDate")}  value={this.state.ProjRequestEndDate}></DatePicker>
                                        </div>
                             </td>
                             
                    </tr>
                    <tr>
                            <td>
                               <label>HW IO</label><span style={{color:'red'}}><b>*</b></span>
                            </td>
                            <td>
                                         
                                        <input type="text"    name="HWIO" id="addHWIO" ref= {this.HWIO}  required/>
                                        
                             </td>
                             <td>
                                     <label>SW IO</label><span style={{color:'red'}}><b>*</b></span>
                             </td>
                              <td>
                                        
                                        <input type="text"   name="SWIO" id="addSWIO" ref= {this.SWIO}  required/>
                                       
                             </td>
                             <td>
                             <label>FF IO</label><span style={{color:'red'}}><b>*</b></span>
                             </td>
                             <td>
                                      
                                        <input type="text"    name="FFIO" id="addFFIO"  ref={this.FFIO} required/>
                                        
                             </td>
                    </tr>
                    <tr>
                            <td>
                               <label>SIS IO</label><span style={{color:'red'}}><b>*</b></span>
                            </td>
                            <td>
                                        
                                        <input type="text"   name="SISIO" id="addSISIO" ref={this.SSIO} required/>
                                        
                             </td>
                             <td>
                                     <label>Module Classes</label><span style={{color:'red'}}><b>*</b></span>
                             </td>
                              <td>
                                         
                                        <input type="text"   name="ModuleClasses" id="addModuleClasses" ref={this.newModuleClasses}required/>
                                         
                             </td>
                             <td>
                             <label>Modules</label><span style={{color:'red'}}><b>*</b></span>
                             </td>
                             <td>
                                       
                                        <input type="text"  name="Modules" id="addModules" ref={this.newModule}  required/>
                                        
                             </td>
                    </tr>
                    <tr>
                            <td>
                               <label>Complex Loops</label><span style={{color:'red'}}><b>*</b></span>
                            </td>
                            <td>
                                        
                                        <input type="text"    name="ComplexLoops" id="addComplexLoops" ref={this.ComplexLoops}  required/>
 
                             </td>
                             <td>
                                     <label>EQM Classes</label><span style={{color:'red'}}><b>*</b></span>
                             </td>
                              <td>
                                      
                                        <input type="text"    name="EQMClasses" id="addEQMClasses"  ref={this.EQMClasses} required/>
                                        
                             </td>
                             <td>
                             <label>EQM</label><span style={{color:'red'}}><b>*</b></span>
                             </td>
                             <td>
                                        
                                        <input type="text"   name="EQM" id="addEQM" ref={this.EQM} required/>
                                         
                             </td>
                    </tr>
                    <tr>
                            <td>
                               <label>Phrase Classes</label><span style={{color:'red'}}><b>*</b></span>
                            </td>
                            <td>
                                        
                                        <input type="text"   name="PhraseClaases" id="addPhraseClasses" ref={this.PhraseClasses}  required/>
                                        
                             </td>
                             <td>
                                     <label>OP</label><span style={{color:'red'}}><b>*</b></span>
                             </td>
                              <td>
                                       
                                        <input type="text"   name="OP" id="addOP" ref={this.OP}  required/>
                                        
                             </td>
                             <td>
                             <label>UP</label><span style={{color:'red'}}><b>*</b></span>
                             </td>
                             <td>
                                        
                                        <input type="text"     name="UP" id="addUP" ref={this.UP} required/>
                                         
                             </td>
                    </tr>
                    <tr>
                            <td>
                               <label>PR</label><span style={{color:'red'}}><b>*</b></span>
                            </td>
                            <td>
                                         
                                        <input type="text"    name="PR" id="addPR"  ref={this.PR} required/>
                                        
                             </td>
                             <td>
                                     <label>Dynamos</label><span style={{color:'red'}}><b>*</b></span>
                             </td>
                              <td>
                                        
                                        <input type="text"    name="Dynamos" id="addDynamos"  ref={this.Dynamos} required/>
                                        
                             </td>
                             <td>
                             <label>Display</label><span style={{color:'red'}}><b>*</b></span>
                             </td>
                             <td>
                                        
                                        <input type="text"   name="Display" id="addDisplay" ref={this.Display} required/>
                                        
                             </td>
                    </tr>
                    <tr>
                            <td>
                               <label>Cabinet/JBS</label><span style={{color:'red'}}><b>*</b></span>
                            </td>
                            <td>
                                        
                                        <input type="text"   name="PR" id="addCabinetJBS" ref={this.Cabinet}  required />
                                        
                             </td>
                             <td>
                                     <label>ILD (instrument level Design)</label><span style={{color:'red'}}><b>*</b></span>
                             </td>
                              <td>
                                        
                                        <input type="text"   name="ILD" id="addILD"  required ref={this.ILD}/>
                                       
                             </td>
                             
                    </tr>
                    <tr>
                            <td>
                               <label>No Of Controllers</label><span style={{color:'red'}}><b>*</b></span>
                            </td>
                            <td>
                                         
                                        <input type="text"    name="PR" id="addControl"  ref={this.NoOfControl} required/>
                                        
                             </td>
                             <td>
                                     <label>No Of SLSs</label><span style={{color:'red'}}><b>*</b></span>
                             </td>
                              <td>
                                        
                                        <input type="text"    name="Dynamos" id="addDynamos"  ref={this.NoOfSLS} required/>
                                        
                             </td>
                             <td>
                             <label>Nodes On Delta V Network</label><span style={{color:'red'}}><b>*</b></span>
                             </td>
                             <td>
                                        
                                        <input type="text"   name="Display" id="addDisplay" ref={this.NodesDelta} required/>
                                        
                             </td>
                    </tr>
                    <tr>
                            <td>
                             FSO LE
                            </td>
                            <td>
                                        
                                        <SPPeoplePicker multi={false}  pickerEnabled={true}  onChange={this.handleFSOLEChange(this)} /> 
                                        
                             </td>
                             <td>
                                     <label>FSO PM</label>
                             </td>
                              <td>
                              <SPPeoplePicker multi={false}  pickerEnabled={true} onChange={this.handleFSOPMChange(this)}  /> 
                             </td>
                    </tr>
                    <tr>
                            <td>
                            Hardware LE
                            </td>
                            <td>
                                        
                                        <SPPeoplePicker multi={false}  pickerEnabled={true} onChange={this.handleEEECLEChange(this)}  /> 
                                       
                             </td>
                             <td>
                               EEEC PM<span style={{color:'red'}}><b>*</b></span>
                             </td>
                             <td>  <SPPeoplePicker multi={false}  pickerEnabled={true} onChange={ this.handlePeopleChnage("EEECPM")}  /> </td>
                    </tr>
                    <tr>
                            <td>
                           Budget Change
                            </td>
                            <td>
                              <table style={{width: '100%'}}>
                                <tr>
                                       
                                <td style={{width: '95%'}}>      <input type='text' className="BudgetChange" id="addBudgetChange" ref={this.BudgetChange}/></td>  <td> <b>Hours</b></td>
                                        </tr>
                                        </table>
                             </td>
                    </tr>
                    <tr>
                            <td>
                              
                          Schedule Change
                            </td>
                            <td>
                            <table style={{width: '100%'}}>
                                <tr>
                                       
                                <td style={{width: '87%'}}> 
                                        
                                        <input type='text' className="ScheduleChange" id="addScheduleChange" ref={this.ScheduleChange}/>
                                         </td><td><b>Days</b> </td>
                                         </tr>
                                         </table>
    
                             </td>
                    </tr>
                    <tr>
                            <td>
                         Progress Deviation
                            </td>
                            <td>
                            <table style={{width: '100%'}}>
                                <tr>
                                       
                                <td style={{width: '95%'}}> 
                                       
                                        <input type='text' className="ProgressDeviation" id="addProgressDeviation" ref={this.ProgressDev}/> </td>
                                       <td>  <b>Hours</b> </td>
                                       </tr>
                                       </table>
    
                             </td>
                    </tr>
                    <tr>
                            <td>
                         Update Frequency
                            </td>
                            <td>
                                    <table style={{width: '100%'}}>
                                                    <tr>
                                       
                                                        <td style={{width: '87%'}}>           
                                                        <input type='text' className="UpdateFrequency" id="addUpdateFrequenct" ref={this.UpdateFreq}/>
                                                         </td>
                                      
                                        
                                        <td> <b>Days</b></td>
                                        </tr>
                                        </table>
                            </td> 
                            </tr>      
    
                             
                     <tr>
                            <td>
                        Budget Deviation
                            </td>
                            <td><table style={{width: '100%'}}>
                                <tr>
                                       
                                <td style={{width: '54%'}}> 
                                        
                                        <input type='text' className="UpdateDeviation" id="addBudgetDeviation" ref={this.BudgetDev}/> </td>
                                        <b> 2 % of Agreed Budget </b>
                                </tr>        
                               </table>
                               </td>         
    
                             
                    </tr>

                  
                   
                    
                    </tbody>
                    </table>             
 


      </Card.Body>
    </Accordion.Collapse>
    </Accordion>
    <Accordion defaultActiveKey="1">
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
       <b> <span className="subheader">Frequent Entry Parameters</span> </b>
      
                    
      </Accordion.Toggle>
      </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <table className="FrequentEntry" id="addFrequentEntry">
                    <tbody>
                            <tr>
                                    <td> Status </td>
                                    <td> <select className="ms-Dropdown-select" ref={this.Status}>
                                                   <option>WIP</option>
                                                   <option>Closed</option>
                                                   <option>Shelved</option>
                                                   
                                                   
                                     </select></td>
                            </tr>
                            <tr>
                            <td></td>
                            </tr>
                            <tr>
                                    <td> Agreed Budget </td>
                                    <td>  
                                                   
                                    <input type='number' className="AgreedBudget" id="addAgreedBudget" ref={this.AgreedBudget}/>      
                                     </td>
                            </tr>
                            <tr>
                                    <td> Internal Budget </td>
                                    <td>  
                                                   
                                    <input type='number' className="InternalBudget" id="addInternalBudget" ref={this.InternalBudget}/>      
                                     </td>
                            </tr>
                            <tr>
                                    <td> Actuals </td>
                                    <td>  
                                                   
                                    <input type='number' className="Actuals" id="addActuals" ref={this.Actuals}/>      
                                     </td>
                            </tr>
                            <tr>
                                    <td> ETC </td>
                                    <td>  
                                                   
                                    <input type='number' className="ETC" id="addETC" ref={this.ETC}  onChange={this.getExpectedHours}/>      
                                     </td>
                            </tr>
                            <tr>
                                    <td> Progress % </td>
                                    <td>  
                                                   
                                    <input type='number' className="Progress" id="addProgress" ref={this.Progress}/>      
                                     </td>
                            </tr>
                            <tr>
                                    <td> Expected Hours Per Week </td>
                                    <td>  
                                                   
                                    <input type='number' className="ExpHours" id="addExpHours" ref={this.ExpHours} value={this.state.ExpectedHoursPerWeek}/>      
                                     </td>
                            </tr>
                            <tr>
                                    <td>Actual End Period </td>
                                    <td>  
                                                   
                                    <input type='text' className="ActualEnd" id="addActualEnd" ref={this.ActualEnd}/>      
                                     </td>
                            </tr> <tr>
                                    <td>Remark </td>
                                    <td>  
                                                   
                                    <input type='text' className="Remark" id="addRemark" ref={this.Remark}/>      
                                     </td>
                            </tr>
                            </tbody>
                            </table>
                            


      </Card.Body>
    </Accordion.Collapse>
  </Accordion>
  <Accordion>
  <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      <b><span className="subheader">Update Project Closure Status</span></b>
      </Accordion.Toggle>
      </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <table className="addClosureEntry" id="addClosureEntry">
                    <tbody>
                            <tr>
                                    <td>Are all deliveries completed and communicated to front office?</td>
                                    <td> <select className="ms-Dropdown-select" id="addDeliv" ref={this.delivery}>
                                                   <option>Yes</option>
                                                   <option>No</option>
                                                   
                                     </select> </td>
                                    
                                    <td> <input type='text' id= "DeliveryComments" ref={this.deliverycomments}  /> </td>
                            </tr>
                            <tr>
                            <td> Has the PM logged ITSS call for project folder archival and deletion from server (after deletion of "working documents" folder)?<br></br> Note: PM shall intimate the retention period in ITSS call, as per the "Project Plan (ProjectID)"</td>
                            
                                    <td> <select className="ms-Dropdown-select" id="AddITSS" ref={this.ITSS}>
                                                   <option>Yes</option>
                                                   <option>No</option>
                                                   
                                     </select> </td>
                                    <td>  
                                                   
                                    <input type='text' id="ITSSComments" ref={this.ITSSComments}/>      
                                     </td>
                            </tr>
                            <tr>
                                    <td>In case there are hardcopy documents, are these disposed / properly identified and archived by PM?</td>
                                    <td><select className="ms-Dropdown-select" id="HardCopy" ref={this.hardcopy}>
                                                   <option>Yes</option>
                                                   <option>No</option>
                                                   
                                     </select> </td>
                                    <td>  
                                                   
                                    <input type='text' className="InternalBudget" id="HardCopyComments" ref={this.hardcopyComments}/>      
                                     </td>
                            </tr>
                            <tr>
                                    <td>Has the PM logged ITSS call for release of project hardware and/or deletion of project VLAN?</td>
                                    <td><select className="ms-Dropdown-select" id="ITSS2" ref={this.ITSS2}>
                                                   <option>Yes</option>
                                                   <option>No</option>
                                                   
                                     </select> </td>
                                    <td>  
                                                   
                                    <input type='text' className="Actuals" id="ITSS2Comments" ref={this.ITSS2Comments}/>      
                                     </td>
                            </tr>
                            <tr>
                                    <td>Has the the Dongle been returned? </td>
                                    <td> <select className="ms-Dropdown-select" id="DongleReturn" ref={this.donglereturn}>
                                                   <option>Yes</option>
                                                   <option>No</option>
                                                   
                                     </select> </td>
                                    <td>  
                                                   
                                    <input type='text' className="ETC" id="DongleComments" ref={this.dongleComments}/>      
                                     </td>
                            </tr>
                            <tr>
                                    <td>Is all project information and data correct and/or updated to reflect the values at project close?</td>
                                    <td> <select className="ms-Dropdown-select" id="ProjectCorrect" ref={this.projectcorrect}>
                                                   <option>Yes</option>
                                                   <option>No</option>
                                                   
                                     </select> </td>
                                    <td>  
                                                   
                                    <input type='text' className="Progress" id="ProjectComments" ref={this.projectComments}/>      
                                     </td>
                            </tr>
                            <tr>
                                   
                                    <td>Are post delivery defects (field non-conformities) collected from the Front Office and recorded?</td>
                                    <td> <select className="ms-Dropdown-select" id="PostDelivery" ref={this.postdelivery}>
                                                   <option>Yes</option>
                                                   <option>No</option>
                                                   
                                     </select> </td>
                                    <td>  
                                                   
                                    <input type='text' className="ExpHours" id="PostDeliveryComments" ref={this.postdeliveryComments}/>      
                                     </td>
                                     
                            </tr>
                            </tbody>
                            </table>
                            <table  className="showHide"  style={{display:(this.state.showResults? 'block':'none')}}>
                                    <tbody>
                            <tr>
                           
                                    <td>Is the CSS form received and circulated?</td>
                                    <td><select className="ms-Dropdown-select" id="CSS" ref={this.CSS}>
                                                   <option>Yes</option>
                                                   <option>No</option>
                                                   
                                     </select> </td>
                                    <td>  
                                                   
                                    <input type='text' className="ActualEnd" id="CSSComments" ref={this.CSSComments}/>      
                                     </td>
                                    
                            </tr> 
                            <tr>
                            
                                    <td>Have resource skills been updated and communicated to ResourceSkills.EEEC@Emerson.com?</td>
                                    <td><select className="ms-Dropdown-select" id="ResourceSkill" ref={this.resourceskill}>
                                                   <option>Yes</option>
                                                   <option>No</option>
                                                   
                                     </select> </td>
                                    <td>  
                                                   
                                    <input type='text' className="ActualEnd" id="ResourceSkillComments" ref={this.resourceskillComments}/>      
                                     </td>
                                   
                            </tr>
                            <tr>
                           
                            <td>Is project close-out meeting conducted & lessons learnt including project close-out report uploaded to the EEEC Technical Info</td>
                                    <td><select className="ms-Dropdown-select" id="Close" ref={this.close}>
                                                   <option>Yes</option>
                                                   <option>No</option>
                                                   
                                     </select></td>
                                    <td>  
                                                   
                                    <input type='text' className="ActualEnd" id="CloseComments" ref={this.closeComments}/>      
                                     </td>
                                     
                            </tr>
                            </tbody>
                            </table>
                             <table>
                                     <tbody>                           
                            <tr>
                                  <td> Close out Notes </td>
                                    <td colSpan={2}>  
                                                   
                                    <input type='text' className="Remark" id="addRemark"/>      
                                     </td>
                            </tr>
                            </tbody>
                            <tr>
                                    <td>    <button type="submit" className="btn btn-primary">Submit</button>
                                            </td>
                                            <td>
                                            <button className="btn btn-primary" onClick={this.postdata}  >Cancel</button>
                                            </td>
                                            </tr>
                            </table>
                            



      </Card.Body>
    </Accordion.Collapse>
  </Accordion>

 </div>
 </Card>
 </div>
 </form>
    )
}
}
export default eProjectNewForm;