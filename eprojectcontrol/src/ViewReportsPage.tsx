import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';
import { SPPeoplePicker } from "./peoplepicker";
import * as toastr from "toastr";
import   './ViewReports.css';
import { Helper } from './helper' ;
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
 
import {DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { runInThisContext } from 'vm';
export interface IeProjectState{
    data: any;
    FunctionList: IFunctionList[];
    projectDetails : [],
    deltav:[],
    period :[],
    worldarea : [],
    EBU : [],
    platform : [],
    industry:[],
    subindustry:[],
    country:[],
}
export interface IeProjectProps{
  data:"",
 projectDetails:[],
deltav :[],
period:[],
worldarea : [],
EBU : [],
platform : [],
industry:[],
subindustry:[],
 country:[],
 finyear:[],
  
}


declare var _spPageContextInfo;



//Dropdown Variables
const stackTokens: IStackTokens = { childrenGap: 10 };
const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300, height:20 }
}
const EBUoptions: IDropdownOption[] = [
        { key: 'EmersonBuisnessUnit', text: 'Emerson Buisness Unit', itemType: DropdownMenuItemType.Header  },
        { key: 'ASCO', text: 'ASCO' },
        { key: 'DMC', text: 'DMC' },
        { key: 'MIB', text: 'MIB'},
        { key: 'MMI', text: 'MMI' }, 
        { key: 'PSS', text: 'PSS' },
        { key: 'PWS', text: 'PWS' },
        { key: 'RAI', text: 'RAI' },
        { key: 'RAS', text: 'RAS' }, 
        { key: 'RPC', text: 'RPC' },
        { key: 'RTC', text: 'RTC' },
        { key: 'SBG', text: 'SBG' }
      ];

 const TypeOfProjectOptions : IDropdownOption[]=[
   
    { key: 'Type Of Project', text: 'Emerson Buisness Unit', itemType: DropdownMenuItemType.Header  },
   
        { key: 'BPCS + SW', text: 'BPCS + SW' },
        { key: 'BPCS + SIS', text: 'BPCS + SIS'},
        { key: 'BPCS + SIS + HW', text: 'BPCS + SIS + HW' }, 
        { key: 'BPCS Only', text: 'BPCS Only' },
        { key: 'Custom MES Applications', text: 'Custom MES Applications' },
        { key: 'Human Centred Design', text: 'Human Centred Design' },
        { key: 'Migration ABB to DeltaV', text: 'Migration ABB to DeltaV'},
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
        { key: 'Migration PLC to DeltaV', text: 'Migration PLC to DeltaV'},
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
  Title?:string;
  IFunctionList
}



export class ViewReportsPage extends React.Component<{},any>{
constructor(props: IeProjectState){
super(props);
this.handleInputChange=this.handleInputChange.bind(this)
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
  
 }
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

 public loadworldarea()
 {let worledarea = []
  debugger;
  const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Country')/Items?$top=4500`;
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


 
 

 public componentDidMount() {
                   this.loadprojectlist();
                   this.loaddeltavversion();
                   this.loadFY();
                   this.loadperiod();
                   this.EBU();
                   this.loadPlatform();
                   this.loadindustry();
                    
  let initialProj = []
  debugger;
  const restUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/getbyTitle('Country')/Items`;
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
 const restUrl = _spPageContextInfo.webAbsoluteUrl +"/_api/web/Lists/getByTitle('Industry%20Subtype')/items?$select=Industry_x0020_Subtype,Type_x0020_of_x0020_Industry/Id &$expand=Type_x0020_of_x0020_Industry/Id &$filter=Type_x0020_of_x0020_Industry/Id eq "+lookupid
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

public loadCountry(id)
{
   //https://emerson.sharepoint.com/sites/process-dev2/EEEC/EProjectControl/_api/web/Lists/getByTitle('Country')/items?$filter=World_x0020_Area eq 'Europe'
 var string = '/items?$filter=World_x0020_Area eq' + id
 
  //https://emerson.sharepoint.com/sites/process-dev2/EEEC/EProjectControl/_api/web/Lists/getByTitle('Industry%20Subtype')/items?$select=Industry_x0020_Subtype,Type_x0020_of_x0020_Industry/Id &$expand=Type_x0020_of_x0020_Industry/Id &$filter=Type_x0020_of_x0020_Industry/Id eq 1
  //const restUrl = _spPageContextInfo.webAbsoluteUrl + string;
  const restUrl = _spPageContextInfo.webAbsoluteUrl +"/_api/web/Lists/getByTitle('Country')/items?$filter=World_x0020_Area eq " +"'" +id +"'"
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
public handleInputChange = (event)  =>{
  let ddltype = event.target.id;
  if(ddltype=="ddlInd")
  {
    let id = event.target.value;
    let name = event.target.value 
    this.loadindsubtype(name)
            
  }
    ;
    if(ddltype=="ddlCountry")
  {
    let id = event.target.value;
    let name = event.target.value 
    this.loadCountry(name)
            
  }

  
};




public render(){
  
  debugger;
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
    <option value={v.Industry_x0020_Subtype.toString()}>{v.Industry_x0020_Subtype.toString()}</option>
  ));

  let CountryList = this.state.country.map(v => (
    <option value={v.Country}>{v.Country}</option>
  ));
  


  
  


  

  
    return(
      <div id="mainContainerRender">
        <Card>
          <h5  className="table-color" id= "mainSubheader">E Project Control</h5> 
        <div id="DottedBox_content">
                    <Accordion defaultActiveKey="1">
  
                    <Card.Header >
      <Accordion.Toggle as={Button} variant="link" eventKey="1"  >
      <span className="subheader"> Genereal Project Details</span>
      </Accordion.Toggle>
      </Card.Header>
      
    <Accordion.Collapse eventKey="1">
      <Card.Body>
               
       
        <table className="tblmain" id="tblmain">
          <tbody>
            <tr> 
                    <td> <b> Emerson Buisness Unit </b></td>
                     <td>
                     <Stack tokens={stackTokens}>
                                 <select className="AR-Select" id="ddlEBU" onChange={this.handleInputChange}>
                                { EBUOptionsTemplate}
                            </select>
                                  </Stack>
                      </td>
                      <td><b> Type Of Project </b></td>
                      <td><Stack tokens={stackTokens}>
                                  <select className="AR-Select" id="ddlType">
                                    {ProjectOptionsTemplate}</select>
                                  </Stack></td>
                      <td> <b> Project Name</b></td>
                      <td>
                                 <Stack tokens={stackTokens}>
                                 <select className="AR-Select" id="ddlProjName">
                                  {optionTemplate}
                                  
                            </select>
                                  </Stack>
                     </td>
                     <tr>
                       <td>
                       <select>
                      
                              </select>
                       </td>
                     </tr>
                     

            </tr>
            <br></br>
            <tr> 
                    <td> <b> End User </b></td>
                     <td>
                                 <Stack tokens={stackTokens}>
                                 <select className="AR-Select" id="ddlUser">
                                  {EndUserOptionTemplate}     
                                </select>
                                  </Stack>
                      </td>
                      <td><b> End Destination </b></td>
                      <td><Stack tokens={stackTokens}>
                                <select className="AR-Select" id="ddlDest">
                                  {EndDestinationOptionTemplate}     
                                </select>
                                  </Stack></td>
                      <td> <b> EPC</b></td>
                      <td>
                                 <Stack tokens={stackTokens}>
                                 <select className="AR-Select" id="ddlEPC">
                                  {EPCUserOptionTemplate}     
                                </select>
                                  </Stack>
                     </td>

            </tr>
            <br></br>
            <tr> 
                    <td> <b> Delta V Version </b></td>
                     <td>
                                 <Stack tokens={stackTokens}>
                                 <select className="AR-Select">
                                  {DeltaVoptionTemplate}     
                                </select>
                                  </Stack>
                      </td>
                      <td><b> Type Of Indutry </b></td>
                      <td>
                      <Stack tokens={stackTokens}>
                                 <select className="AR-Select"  onChange={this.handleInputChange} id="ddlInd">
                                  {IndustryOptionsTemplate}     
                                </select> </Stack>
                      
                      </td>
                      <td> <b> Sub Type</b></td>
                      <td>
                                 <Stack tokens={stackTokens}>
                                 <select className="AR-Select"  onChange={this.handleInputChange} id="ddlSub">
                                  {SubIndsutryOptionsTemplate}
                                  </select>
                                  </Stack>
                     </td>

            </tr>
            <br></br>
            <tr> 
                    <td> <b> Project Type </b></td>
                     <td>
                                 <Stack tokens={stackTokens}>
                                  <select>
                                   <option value="MAC">MAC</option>
                                   <option value="MIV">MIV/FIV</option>
                                    <option value="BU">Non-PSG BU</option>
                                    <option value="Site">Site Support Only</option>
                                   <option value="Other">Other</option>
                                    <option value="Services">Services Only</option>
                                  </select>
                                  </Stack>
                      </td>
                      <td><b> From FY </b></td>
                      <td><Stack tokens={stackTokens}>
                                      <select className="AR-Select">
                                               {PeridoptionTemplate}     
                                        </select>
                                  </Stack></td>
                      <td> <b> To FY</b></td>
                      <td>
                                 <Stack tokens={stackTokens}>
                                 <select className="AR-Select">
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
                                               {WorldareaoptionTemplate}     
                                        </select>
                                        </Stack>
                      </td>
                      <td><b> Country </b></td>
                      <td> <Stack tokens={stackTokens}>
                                 <select className="AR-Select">
                                              {CountryList}    
                                        </select>
                                        </Stack></td>
                       

            </tr>
          </tbody>
        </table>

      </Card.Body>
    </Accordion.Collapse>
  </Accordion>
  <Accordion>
  <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      <b><span className="subheader">On Time Delivery Reports</span></b>
      </Accordion.Toggle>
      </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
         <table>
         <tr> 
                    <td> <b>Financial year </b></td>
                     <td>
                                  <Stack tokens={stackTokens}>
                                 <select className="AR-Select">
                                           
                                        </select>
                                        </Stack>
                      </td>
                      <td><b> Period </b></td>
                      <td> <Stack tokens={stackTokens}>
                                 <select className="AR-Select">
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
          


      </Card.Body>
    </Accordion.Collapse>
  </Accordion>
  <Accordion>
  <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      <b><span className="subheader">Projects not updated in given number of days </span></b>
      </Accordion.Toggle>
      </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      



      </Card.Body>
    </Accordion.Collapse>
  </Accordion>
  <Accordion>
  <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      <b><span className="subheader">Projects with discrepancy in Budget, ETC and actuals  </span></b>
      </Accordion.Toggle>
      </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <table>
                        <tr>
                        <td><td>Shelved</td>
                         <input name="isShelved"  type="checkbox"/>
                          </td>
                          <td><td>Shelved</td>
                         <input name="isClosed"  type="checkbox"/>
                          </td>
                        </tr>
                        </table>



      </Card.Body>
    </Accordion.Collapse>
  </Accordion>
  <Accordion>
  <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      <b><span className="subheader">Projects with discrepancy in % progress and the actuals   </span></b>
      </Accordion.Toggle>
      </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
        <table>
      <tr>

                        <td><td>Shelved</td>
                         <input name="isShelved"  type="checkbox"/>
                          </td>
                          <td><td>Shelved</td>
                         <input name="isClosed"  type="checkbox"/>
                          </td>
                        </tr>      
</table>


      </Card.Body>
    </Accordion.Collapse>
  </Accordion>
  <Accordion>
  <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      <b><span className="subheader">Delivered and Closed Projects Report   </span></b>
      </Accordion.Toggle>
      </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      
                     <table>
                                <tr>
                                <td><b> From FY </b></td>
                      <td><Stack tokens={stackTokens}>
                                      <select className="AR-Select">
                                               {PeridoptionTemplate}     
                                        </select>
                                  </Stack></td>
                      <td> <b> To FY</b></td>
                      <td>
                                 <Stack tokens={stackTokens}>
                                 <select className="AR-Select">
                                               {PeridoptionTemplate}     
                                        </select>
                                  </Stack>
                     </td>
                   
                        <td><td>Shelved</td>
                         <input name="isShelved"  type="checkbox"/>
                          </td>
                          <td><td>Shelved</td>
                         <input name="isClosed"  type="checkbox"/>
                          </td>
                         
                      </tr>


                     </table>


      </Card.Body>
    </Accordion.Collapse>
  </Accordion>
 </div>
 <span className="Button" >  <PrimaryButton data-automation-id="test" text="Generate Report"/>  </span>
 </Card>
 </div>
    )
}

}




export default ViewReportsPage;