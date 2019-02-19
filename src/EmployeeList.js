import React, { Component } from 'react';
import {Text, View, ListView} from 'react-native'; 
import LoginForm from './LoginForm';
import {employeesFetch} from './actions';
import {connect} from 'react-redux'; 
import _ from 'lodash'

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
        console.log("props: ", this.props)
        return(
            <View>
                <Text>EmployeeList  1</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const employees = _.map(state.employees, (val, uid) => {
        return {...val, uid};
    });

    return {employees};
}

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);