import React, { Component } from 'react';
import {Text, View, Picker} from 'react-native'; 
import {Card, CardSection, Button, Input} from './common';
import {connect} from 'react-redux';
import {employeeUpdate,createEmployee} from './actions';

class EmployeeCreate extends React.Component{
    onButtonPress(){
        const {name, phone, shift} = this.props;

        this.props.createEmployee({name, phone, shift: shift || 'Monday'})
    }
    render(){

        return(
           <Card>
               <CardSection>
                    <Input
                     placeholder="Jane"
                     label="Name"
                     value={this.props.name}
                     onChangeText={(text) => this.props.employeeUpdate({prop:'name', value:text})}
                     />
               </CardSection>

               <CardSection>
                   <Input 
                   placeholder="555-555-15"
                   label="Phone"
                   value={this.props.phone}
                   onChangeText={(text) => this.props.employeeUpdate({prop:'phone', value:text})}
                   />
               </CardSection>

               <CardSection style={{  }}>
                <Text style={{ paddingLeft:20, fontSize:18 }}>Select Shift</Text>
                <Picker
                style={{ flex: 1 }}
                selectedValue={this.props.shift}
                onValueChange={(day) => this.props.employeeUpdate({prop: 'shift', value:day})}>
                    <Picker.Item label="Monday" value="Monday"/>
                    <Picker.Item label="Tuesday" value="Tuesday"/>
                    <Picker.Item label="Wednesday" value="Wednesday"/>
                    <Picker.Item label="Thursday" value="Thursday"/>
                    <Picker.Item label="Friday" value="Friday"/>
                    <Picker.Item label="Saturday" value="Saturday"/>
                    <Picker.Item label="Sunday" value="Sunday"/>
                    
                </Picker>
               </CardSection>

               <CardSection>
                   <Button onPress={this.onButtonPress.bind(this)}>
                       Create
                   </Button>
               </CardSection>
           </Card>
        )
    }
}

const mapStateToProps = (state) => {
   const {name, phone, shift} = state.employeeForm;

   return {name, phone, shift}
    
}
export default connect(mapStateToProps, {employeeUpdate, createEmployee})(EmployeeCreate);