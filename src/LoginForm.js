import React, { Component } from 'react'
import {Text, View} from 'react-native'
import {Card, CardSection, Input, Button} from './common'
import {connect} from 'react-redux';
import {emailChanged} from './actions'

class LoginForm extends React.Component{

    onEmailChange(text){
       console.log(text);
    }

    render(){
        console.log(this.props);
        return(
            <Card style={style.bodyStyle}>
                <CardSection>
                    <Input label="email"
                    placeholder="mallam@gmail.com"
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}/>
                </CardSection>

                <CardSection>
                    <Input label="password"
                    placeholder="ifconfg" />
                </CardSection>

                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
        )
    }
}

const style = {
    bodyStyle : {
        flex : 1, 
        backgroundColor:'#ffccff',
        paddingTop: 20
    }
}

const  mapStateToProps = (state) => {
    return {
        email : state.auth.email,
    }
}

export default connect(mapStateToProps, {emailChanged})(LoginForm);