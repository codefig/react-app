import {EMAIL_CHANGED, PASS_CHANGED, LOGIN_USER_SUCCESS} from './types';
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
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(userObj => {loginUserSuccess(dispatch, userObj)})
        .catch(() => {
            console.log("Login Incorrect")
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userObj) => {loginUserSuccess(dispatch, userObj)})
        })
    }
}

const loginUserFail = (dispatch)=>{
    dispatch({type : LOGIN_USER_FAIL})
}

const loginUserSuccess = (dispatch, userObj)=>{
    dispatch({type : LOGIN_USER_SUCCESS, payload : userObj})
}