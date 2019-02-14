import React, { Component } from 'react'
import {Text, View} from 'react-native'


class Header extends Component{

    constructor(props){
        super(props);

    }
    render(){
        const {viewStyle, textStyles} = styles
        return(
                <View style={viewStyle}>
                <Text style={textStyles}>{this.props.headerText}</Text>
            </View>
       
        )
        
    }
}

const styles = {
    parentStyle : {
        backgroundColor : '#fff', 
        flex : 1
    }, 
    viewStyle : {
        justifyContent : 'center', 
        alignItems : 'center', 
        height : 60, 
        paddingTop: 15, 
        backgroundColor: '#f8f8f8', 
        shadowColor: '#000',
        shadowOffset: {width:0, height:2},
        shadowOpacity: 0.2,
        elevation: 2, 
        position: 'relative'

    }, 
    textStyles : {
       
        fontSize: 20,

    }
}

export {Header};