import React, { Component } from 'react';
import './App.css';
// import SmartphoneStore from "./SmartphoneStore/SmartstoreComponent";
// import DemoState from './DemoState/DemoState';
// import Car from './Car/Car';
// import DemoForm from './DemoForm/DemoForm';
import StudentManagement from './StudentManagement/StudentManagement';

export default class App extends Component {
  render() {
    return (
      <div className="text-center">
        {/* <DemoState /> */}
        {/* <Car /> */}
        {/* <SmartphoneStore /> */}
        {/* <DemoForm /> */}
        <StudentManagement />
      </div>
    )
  }
}
