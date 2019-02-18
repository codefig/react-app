import React, { Component } from 'react'
import {Text, View} from 'react-native';



const CardSection  = (props) => {


    return (
    <View style={[style.container, props.style]}>
       {props.children}
    </View>
    )

}

const style = {
    container: {
        borderWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position:'relative',

    }
}

export {CardSection}