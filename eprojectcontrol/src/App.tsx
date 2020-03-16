import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectNewForm from './eProjectNewForm'
import ProjectEditForm from './eProjectEditForm'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import ViewProjectReport from './ViewReportsPage';

import 'jquery'
const App: React.FC = () => {
  return (
   // <ViewProjectReport/> 
   <ProjectNewForm/>
  );
}

export default App;
