import React, { Component } from "react";
import { Text, View, Image , ActivityIndicator} from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";

const Spinner = (props) => {
    return (
     
        <View style={style.spinnerStyle}>
            <ActivityIndicator 
            size={props.size || 'large'}/>
        </View>
  
    )
}

const style = {
    spinnerStyle : {
        flex : 1, 
        justifyContent : 'center', 
        alignItems:'center',
    }
}

export {Spinner};
