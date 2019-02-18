import React, { Component } from 'react';
import {Text, View, Picker} from 'react-native'; 
import {Card, CardSection, Button, Input} from './common';
import {connect} from 'react-redux';
import {employeeUpdate} from './actions';

class EmployeeCreate extends React.Component{

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

               <CardSection style={{ flexDirection: 'column' }}>
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
                   <Button>
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
export default connect(mapStateToProps, {employeeUpdate})(EmployeeCreate);