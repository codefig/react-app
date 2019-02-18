import React, { Component } from 'react';
import {Text, View, } from 'react-native'; 
import {Card, CardSection, Button, Input} from './common';
import {connect} from 'react-redux';
import {empoloyeeUpdate} from './actions';

class EmployeeCreate extends React.Component{

    render(){

        return(
           <Card>
               <CardSection>
                    <Input
                     placeholder="Jane"
                     label="Name"/>
               </CardSection>

               <CardSection>
                   <Input 
                   placeholder="555-555-15"
                   label="Phone"/>
               </CardSection>

               <CardSection>

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

export default connect(null, {empoloyeeUpdate})(EmployeeCreate);