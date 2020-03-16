import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import "react-datepicker/dist/react-datepicker.css";
import 'office-ui-fabric-react/lib/components/DatePicker/examples/DatePicker.Examples.scss'
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
