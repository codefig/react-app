import React, { Component } from 'react'
import {Text, View} from 'react-native';



const Card  = (props) => {


    return (
    <View style={containerStyle.container}>
        {props.children}
    </View>
    )

}

const containerStyle = {
    container: {
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width:0, height:2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1, 
        marginRight: 5,
        marginLeft: 5,
        marginTop: 10,
        flex: 1,
        backgroundColor:'#fff'

    }
}

export {Card};