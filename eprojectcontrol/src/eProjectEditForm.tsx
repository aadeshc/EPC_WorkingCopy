import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';
import { SPPeoplePicker } from "./peoplepicker";

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
export interface IeProject {
        data: any;
}

export class eProjectEditForm extends React.Component {
        constructor(props: IeProject) {
                super(props);


                this.state = {
                        data: ""
                }
        }
        public render() {

                return (
                        <div id="mainContainerRender">
                                <Card>
                                        <h5 className="table-color" id="mainSubheader">E Project Control</h5>
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
                                                                                                <td style={{ width: '10%' }}>
                                                                                                        Emerson Buisness Unit
                            </td>
                                                                                                <td style={{ width: '15%' }}>
                                                                                                        <i className="ms-Dropdown-caretDown ms-Icon ms-Icon--ChevronDown" id="EditEBU"></i>
                                                                                                        <select className="ms-Dropdown-select">
                                                                                                                <option>Please Select</option>
                                                                                                                <option>DMC</option>
                                                                                                                <option>MIB</option>
                                                                                                                <option>MMI</option>
                                                                                                                <option>PSS</option>
                                                                                                                <option>PWS</option>
                                                                                                                <option>RAI</option>
                                                                                                                <option>RPC</option>
                                                                                                                <option>RTG</option>
                                                                                                                <option>SBC</option>
                                                                                                                <option>Other</option>
                                                                                                        </select>
                                                                                                </td>
                                                                                                <td style={{ width: '15%' }}>
                                                                                                        <label>EPC</label>
                                                                                                </td>
                                                                                                <td colSpan={2}>
                                                                                                        <div className="panel panel-default">
                                                                                                                <input type="text" className="form-control" placeholder="EPC" name="EPC" id="EditEPC" required />
                                                                                                        </div>
                                                                                                </td>

                                                                                        </tr>

                                                                                        <tr>
                                                                                                <td>
                                                                                                        End User
                            </td>
                                                                                                <td>
                                                                                                        <div className="panel panel-default">
                                                                                                                <input type="text" className="form-control" name="EditEndUser" id="EditEnduser" required />
                                                                                                        </div>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <label>End Destination</label>
                                                                                                </td>
                                                                                                <td colSpan={2}>
                                                                                                        <div className="panel panel-default">
                                                                                                                <input type="text" className="form-control" name="EditEndDestination" id="EditEndDestination" required />
                                                                                                        </div>
                                                                                                </td>

                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td>
                                                                                                        Delta V Version
                            </td>
                                                                                                <td>
                                                                                                        <div className="panel panel-default">
                                                                                                                <input type="text" className="form-control" name="EditDelta" id="EditDelta" required />
                                                                                                        </div>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <label>Project Type</label>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <i className="ms-Dropdown-caretDown ms-Icon ms-Icon--ChevronDown" id="EditprojType"></i>
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
                                                                                                <td>
                                                                                                        Country
                            </td>
                                                                                                <td>
                                                                                                        <i className="ms-Dropdown-caretDown ms-Icon ms-Icon--ChevronDown" id="EditCountry"></i>
                                                                                                        <select className="ms-Dropdown-select">
                                                                                                                <option>Please Select</option>

                                                                                                        </select>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <label>World Area</label>
                                                                                                </td>
                                                                                                <td colSpan={3}>
                                                                                                        <div className="panel panel-default">
                                                                                                                <input type="text" className="form-control" name="WorldArea" id="EditWorldArea" required />
                                                                                                        </div>
                                                                                                </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td>
                                                                                                        Project Platform
                            </td>
                                                                                                <td>
                                                                                                        <i className="ms-Dropdown-caretDown ms-Icon ms-Icon--ChevronDown" id="EditProjectPlatform"></i>
                                                                                                        <select className="ms-Dropdown-select">
                                                                                                                <option>Please Select</option>

                                                                                                        </select>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <label>Project Name</label>
                                                                                                </td>
                                                                                                <td colSpan={3}>
                                                                                                        <div className="panel panel-default">
                                                                                                                <input type="text" className="form-control" name="Projectname" id="EditProjectName" required />
                                                                                                        </div>
                                                                                                </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td>
                                                                                                        <label>Project ID </label>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <div className="panel panel-default">
                                                                                                                <input type="text" className="form-control" name="Project ID" id="EditProjectID" required />
                                                                                                        </div>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <label>EEEC Project ID</label>
                                                                                                </td>
                                                                                                <td colSpan={3}>
                                                                                                        <div className="panel panel-default">
                                                                                                                <input type="text" className="form-control" name="ProjectID" id="EditEEECProjectID" required />
                                                                                                        </div>
                                                                                                </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td>
                                                                                                        <label>Project Start Date </label>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <div className="panel panel-default">
                                                                                                                <DatePicker className="EditStartDate" ></DatePicker>
                                                                                                        </div>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <label>Project Start Period</label>
                                                                                                </td>
                                                                                                <td colSpan={3}>
                                                                                                        <div className="panel panel-default">
                                                                                                                <input type="text" className="form-control" name="ProjectStartPeriod" id="EditProjectStartPeriod" required />
                                                                                                        </div>
                                                                                                </td>

                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td>
                                                                                                        <label>Request End Date </label>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <div className="panel panel-default">
                                                                                                                <DatePicker className="EditRequestEndDate" ></DatePicker>
                                                                                                        </div>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <label>Agreed End Date</label>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <div className="panel panel-default">
                                                                                                                <DatePicker className="form-EditAgreedEndDate" />
                                                                                                        </div>
                                                                                                </td>
                                                                                                <td> test</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td>
                                                                                                        <label>Actual  End Date </label>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <div className="panel panel-default">
                                                                                                                <DatePicker className="EditActualEndDate" ></DatePicker>
                                                                                                        </div>
                                                                                                </td>

                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td>
                                                                                                        <label>HW IO</label>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <div className="panel panel-default">
                                                                                                                <input type="text" className="form-control" name="HWIO" id="EditHWIO" required />
                                                                                                        </div>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <label>SW IO</label>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <div className="panel panel-default">
                                                                                                                <input type="text" className="form-control" name="SWIO" id="EditSWIO" required />
                                                                                                        </div>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <label>FF IO</label>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <div className="panel panel-default">
                                                                                                                <input type="text" className="form-control" name="FFIO" id="EditFFIO" required />
                                                                                                        </div>
                                                                                                </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td>
                                                                                                        <label>SIS IO</label>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <div className="panel panel-default">
                                                                                                                <input type="text" className="form-control" name="SISIO" id="EditSISIO" required />
                                                                                                        </div>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <label>Module Classes</label>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <div className="panel panel-default">
                                                                                                                <input type="text" className="form-control" name="ModuleClasses" id="EditModuleClasses" required />
                                                                                                        </div>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <label>Modules</label>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <div className="panel panel-default">
                                                                                                                <input type="text" className="form-control" name="Modules" id="EditModules" required />
                                                                                                        </div>
                                                                                                </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td>
                                                                                                        <label>Complex Loops</label>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <div className="panel panel-default">
                                                                                                                <input type="text" className="form-control" name="ComplexLoops" id="EditComplexLoops" required />
                                                                                                        </div>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <label>EQM Classes</label>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <div className="panel panel-default">
                                                                                                                <input type="text" className="form-control" name="EQMClasses" id="EditEQMClasses" required />
                                                                                                        </div>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <label>EQM</label>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <div className="panel panel-default">
                                                                                                                <input type="text" className="form-control" name="EQM" id="EditEQM" required />
                                                                                                        </div>
                                                                                                </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td>
                                                                                                        <label>Phrase Classes</label>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <div className="panel panel-default">
                                                                                                                <input type="text" className="form-control" name="PhraseClaases" id="EditPhraseClasses" required />
                                                                                                        </div>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <label>OP</label>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <div className="panel panel-default">
                                                                                                                <input type="text" className="form-control" name="OP" id="EditOP" required />
                                                                                                        </div>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <label>UP</label>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <div className="panel panel-default">
                                                                                                                <input type="text" className="form-control" name="UP" id="EditUP" required />
                                                                                                        </div>
                                                                                                </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td>
                                                                                                        <label>PR</label>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <div className="panel panel-default">
                                                                                                                <input type="text" className="form-control" name="PR" id="EditPR" required />
                                                                                                        </div>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <label>Dynamos</label>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <div className="panel panel-default">
                                                                                                                <input type="text" className="form-control" name="Dynamos" id="EditDynamos" required />
                                                                                                        </div>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <label>Display</label>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <div className="panel panel-default">
                                                                                                                <input type="text" className="form-control" name="Display" id="EditDisplay" required />
                                                                                                        </div>
                                                                                                </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td>
                                                                                                        <label>Cabinet/JBS</label>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <div className="panel panel-default">
                                                                                                                <input type="text" className="form-control" name="PR" id="EditCabinetJBS" required />
                                                                                                        </div>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <label>ILD (instrument level Design)</label>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <div className="panel panel-default">
                                                                                                                <input type="text" className="form-control" name="ILD" id="EditILD" required />
                                                                                                        </div>
                                                                                                </td>

                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td>
                                                                                                        FSO LE
                            </td>
                                                                                                <td>
                                                                                                        <div className="panel panel-default">
                                                                                                                <SPPeoplePicker multi={false} pickerEnabled={true} />
                                                                                                        </div>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <label>FSO PM</label>
                                                                                                </td>
                                                                                                <td>
                                                                                                        <SPPeoplePicker multi={false} pickerEnabled={true} />
                                                                                                </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td>
                                                                                                        Hardware LE
                            </td>
                                                                                                <td>
                                                                                                        <div className="panel panel-default">
                                                                                                                <SPPeoplePicker multi={false} pickerEnabled={true} />
                                                                                                        </div>
                                                                                                </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td>
                                                                                                        Budget Change
                            </td>
                                                                                                <td>
                                                                                                        <div className="panel panel-default">
                                                                                                                <input type='text' className="BudgetChange" id="EditBudgetChange" />
                                                                                                        </div>

                                                                                                </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td>
                                                                                                        Schedule Change
                            </td>
                                                                                                <td>
                                                                                                        <div className="panel panel-default">
                                                                                                                <input type='text' className="ScheduleChange" id="EditScheduleChange" />
                                                                                                        </div>

                                                                                                </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td>
                                                                                                        Progress Deviation
                            </td>
                                                                                                <td>
                                                                                                        <div className="panel panel-default">
                                                                                                                <input type='text' className="ProgressDeviation" id="EditProgressDeviation" />
                                                                                                        </div>

                                                                                                </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td>
                                                                                                        Update Frequency
                            </td>
                                                                                                <td>
                                                                                                        <div className="panel panel-default">
                                                                                                                <input type='text' className="UpdateFrequency" id="EditUpdateFrequenct" />
                                                                                                        </div>

                                                                                                </td>
                                                                                        </tr> <tr>
                                                                                                <td>
                                                                                                        Budget Deviation
                            </td>
                                                                                                <td>
                                                                                                        <div className="panel panel-default">
                                                                                                                <input type='text' className="UpdateDeviation" id="EditBudgetDeviation" />
                                                                                                        </div>

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
                                                                        <table className="FrequentEntry" id="EditFrequentEntry">
                                                                                <tbody>
                                                                                        <tr>
                                                                                                <td> Status </td>
                                                                                                <td> <select className="ms-Dropdown-select">
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

                                                                                                        <input type='text' className="AgreedBudget" id="EditAgreedBudget" />
                                                                                                </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td> Internal Budget </td>
                                                                                                <td>

                                                                                                        <input type='text' className="InternalBudget" id="EditInternalBudget" />
                                                                                                </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td> Actuals </td>
                                                                                                <td>

                                                                                                        <input type='text' className="Actuals" id="EditActuals" />
                                                                                                </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td> ETC </td>
                                                                                                <td>

                                                                                                        <input type='text' className="ETC" id="EditETC" />
                                                                                                </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td> Progress % </td>
                                                                                                <td>

                                                                                                        <input type='text' className="Progress" id="EditProgress" />
                                                                                                </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td> Expected Hours Per Week </td>
                                                                                                <td>

                                                                                                        <input type='text' className="ExpHours" id="EditExpHours" />
                                                                                                </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td>Actual End Period </td>
                                                                                                <td>

                                                                                                        <input type='text' className="ActualEnd" id="EditActualEnd" />
                                                                                                </td>
                                                                                        </tr> <tr>
                                                                                                <td>Remark </td>
                                                                                                <td>

                                                                                                        <input type='text' className="Remark" id="EditRemark" />
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
                                                                        <table className="EditClosureEntry" id="EditClosureEntry">
                                                                                <tbody>
                                                                                        <tr>
                                                                                                <td>Are all deliveries completed and communicated to front office?</td>
                                                                                                <td> <select className="ms-Dropdown-select">
                                                                                                        <option>Yes</option>
                                                                                                        <option>No</option>

                                                                                                </select> </td>

                                                                                                <td> <input type='text' className="ActualEnd" id="EditActualEnd" /> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td> Has the PM logged ITSS call for project folder archival and deletion from server (after deletion of "working documents" folder)?<br></br> Note: PM shall intimate the retention period in ITSS call, as per the "Project Plan (ProjectID)"</td>

                                                                                                <td> <select className="ms-Dropdown-select">
                                                                                                        <option>Yes</option>
                                                                                                        <option>No</option>

                                                                                                </select> </td>
                                                                                                <td>

                                                                                                        <input type='text' className="AgreedBudget" id="EditAgreedBudget" />
                                                                                                </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td>In case there are hardcopy documents, are these disposed / properly identified and archived by PM?</td>
                                                                                                <td><select className="ms-Dropdown-select">
                                                                                                        <option>Yes</option>
                                                                                                        <option>No</option>

                                                                                                </select> </td>
                                                                                                <td>

                                                                                                        <input type='text' className="InternalBudget" id="EditInternalBudget" />
                                                                                                </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td>Has the PM logged ITSS call for release of project hardware</td>
                                                                                                <td><select className="ms-Dropdown-select">
                                                                                                        <option>Yes</option>
                                                                                                        <option>No</option>

                                                                                                </select> </td>
                                                                                                <td>

                                                                                                        <input type='text' className="Actuals" id="EditActuals" />
                                                                                                </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td>Has the the Dongle been returned?</td>
                                                                                                <td> <select className="ms-Dropdown-select">
                                                                                                        <option>Yes</option>
                                                                                                        <option>No</option>

                                                                                                </select> </td>
                                                                                                <td>

                                                                                                        <input type='text' className="ETC" id="EditETC" />
                                                                                                </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td>Is all project information and data correct and/or updated to reflect the values at project close?</td>
                                                                                                <td> <select className="ms-Dropdown-select">
                                                                                                        <option>Yes</option>
                                                                                                        <option>No</option>

                                                                                                </select> </td>
                                                                                                <td>

                                                                                                        <input type='text' className="Progress" id="EditProgress" />
                                                                                                </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td>Are post-delivery defects (field non-conformities) collected from the Front Office and recorded?</td>
                                                                                                <td> <select className="ms-Dropdown-select">
                                                                                                        <option>Yes</option>
                                                                                                        <option>No</option>

                                                                                                </select> </td>
                                                                                                <td>

                                                                                                        <input type='text' className="ExpHours" id="EditExpHours" />
                                                                                                </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td>Is the CSS form received and circulated?</td>
                                                                                                <td><select className="ms-Dropdown-select">
                                                                                                        <option>Yes</option>
                                                                                                        <option>No</option>

                                                                                                </select> </td>
                                                                                                <td>

                                                                                                        <input type='text' className="ActualEnd" id="EditActualEnd" />
                                                                                                </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td>Have resource skills been updated and communicated to ResourceSkills.EEEC@Emerson.com?</td>
                                                                                                <td><select className="ms-Dropdown-select">
                                                                                                        <option>Yes</option>
                                                                                                        <option>No</option>

                                                                                                </select> </td>
                                                                                                <td>

                                                                                                        <input type='text' className="ActualEnd" id="EditActualEnd" />
                                                                                                </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td>Is project close-out meeting conducted and lessons learnt including project close-out report uploaded to the EEEC Technical Info centre?</td>
                                                                                                <td><select className="ms-Dropdown-select">
                                                                                                        <option>Yes</option>
                                                                                                        <option>No</option>

                                                                                                </select></td>
                                                                                                <td>

                                                                                                        <input type='text' className="ActualEnd" id="EditActualEnd" />
                                                                                                </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td> Close out Notes </td>
                                                                                                <td colSpan={2}>

                                                                                                        <input type='text' className="Remark" id="EditRemark" />
                                                                                                </td>
                                                                                        </tr>
                                                                                </tbody>
                                                                                <tr>
                                                                                        <td>    <button type="submit" className="btn btn-primary" >Submit</button>
                                                                                        </td>
                                                                                        <td>
                                                                                                <button className="btn btn-primary" >Cancel</button>
                                                                                        </td>
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
export default eProjectEditForm;