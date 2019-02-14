import React, { Component } from 'react';
import {Text, View, TextInput} from 'react-native';




class Input extends Component{
    
    constructor(props){
        super(props);
    }
    render(){
       
        return(
            <View style={style.containerStyle}>
            <Text style={style.labelStyle}>{this.props.label}</Text>
            <TextInput
            value={this.props.value}
            secureTextEntry={this.props.secureTextEntry}
            placeholder={this.props.placeholder}
            onChangeText={this.props.onChangeText}
            autoCorrect={false}
            style={style.inputStyle}></TextInput>
        </View>
        )
        
    }
}


const style = {
    inputStyle : {
        // color : '#000', 
        paddingRight : 5, 
        paddingLeft : 5, 
        fontSize: 18, 
        lineHeight : 23, 
        flex : 2
    }, 
    labelStyle : {
        fontSize: 18, 
        paddingLeft : 20, 
        flex : 1, 
    }, 
    containerStyle : {
         height: 40, 
         flex : 1, 
         flexDirection: 'row',
         alignItems: 'center'
    }
}


export {Input};
