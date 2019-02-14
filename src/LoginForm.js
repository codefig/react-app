import React, { Component } from 'react'
import {Text, View} from 'react-native'
import {Card, CardSection, Input, Button} from './common'
import {connect} from 'react-redux';
import {emailChanged, passwordChanged} from './actions'

class LoginForm extends React.Component{

    onEmailChange(text){
       console.log(text);
       this.props.emailChanged(text);
    }

    onPasswordChanged(text){
        console.log("password : ", text);
        this.props.passwordChanged(text);
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
                    placeholder="ifconfg"
                    onChangeText={this.onPasswordChanged.bind(this)}/>
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
        password : state.auth.password
    }
}

export default connect(mapStateToProps, {emailChanged, passwordChanged})(LoginForm);