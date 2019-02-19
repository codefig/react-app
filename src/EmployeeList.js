import React, { Component } from 'react';
import {Text, View} from 'react-native'; 
import LoginForm from './LoginForm';
import {employeesFetch} from './actions';
import {connect} from 'react-redux'; 

class EmployeeList extends React.Component{

    componentWillMount(){
        this.props.employeesFetch();
        this.createDataSource(this.props.employees);
    }

    componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps)
    }
    createDataSource({employees}){
        const ds = ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });

        this.dataSource = ds.cloneWithRows(employees)
    }
    render(){

        return(
            <View>
                <Text>EmployeeList  1</Text>
                <Text>EmployeeList  1</Text>
                <Text>EmployeeList  1</Text>
                <Text>EmployeeList  1</Text>
                <Text>EmployeeList  1</Text>
                <Text>EmployeeList  1</Text>
                <Text>EmployeeList  1</Text>
                <Text>EmployeeList  1</Text>
            </View>
        )
    }
}

export default connect(null, {employeesFetch})(EmployeeList);