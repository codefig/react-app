import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";
import LoginForm from "./LoginForm";
import EmployeeList from "./EmployeeList";
import EmployeeCreate from './EmployeeCreate';
import {Actions} from 'react-native-router-flux';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene>

      <Scene key="auth">
      <Scene key="login" component={LoginForm} title="Login" initial />
      </Scene>


        <Scene key="main">
          <Scene
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            rightTitle="Add"
            onRight={() => {Actions.employeeCreate()}}
          />

          <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
      </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
