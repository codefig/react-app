import React, { Component } from "react";
import { Text, View, Image , TouchableOpacity} from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";

const Button = (props) => {
    return (
        <TouchableOpacity style={style.buttonStyle} onPress={props.onPress}>
                  <Text style={style.textStyle}>{props.children}</Text>
        </TouchableOpacity>
  
    )
}

const style = {
    textStyle : {
        alignSelf: 'center',
        color:'#007aff', 
        fontSize: 15,
        fontWeight : "100",  
        paddingTop: 10,
        paddingBottom: 10,
    }, 
    buttonStyle : {
         flex:1, 
         alignSelf : "stretch", 
         backgroundColor:'#fff',
         borderRadius: 5, 
         borderWidth: 1, 
         borderColor:'#007aff', 
         marginLeft : 5, 
         marginRight: 5,
    }
}

export {Button};
