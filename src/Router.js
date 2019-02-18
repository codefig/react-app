import React, { Component } from 'react';
import {Router,Scene} from 'react-native-router-flux'  
import LoginForm from './LoginForm';
import EmployeeList from './EmployeeList';

const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root">
            <Scene key="login" component={LoginForm} title="Please Login" initial/>
            <Scene key="employeeList" component={EmployeeList} title="Employees" />
            </Scene>
        </Router>
    )
}

export default RouterComponent;