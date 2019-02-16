import {EMAIL_CHANGED, PASS_CHANGED} from './types';
import firebase from 'firebase';


export const emailChanged = (text) => {
    return {
        type : EMAIL_CHANGED, 
        payload : text
    }
}

export const passwordChanged = (text) => {
    return {
        type : PASS_CHANGED, 
        payload : text
    }
}

export const loginUser = ({email, password}) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userObj) => {
        console.log("Correct: ",userObj );
    })
}