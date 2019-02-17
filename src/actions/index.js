import {
    EMAIL_CHANGED, 
    PASS_CHANGED, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL, 
    LOGIN_USER
} from './types';
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
    //dispatch the spinner Login_user action

    
    return (dispatch) => {
        dispatch({type : LOGIN_USER})
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(userObj => {loginUserSuccess(dispatch, userObj)})
        .catch(() => {
            console.log("Login Incorrect")
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userObj) => {loginUserSuccess(dispatch, userObj)})
            .catch(() => {loginUserFail(dispatch)})
        })
    }
} 

const loginUserFail = (dispatch)=>{
    dispatch({type : LOGIN_USER_FAIL})
}

const loginUserSuccess = (dispatch, userObj)=>{
    dispatch({type : LOGIN_USER_SUCCESS, payload : userObj})
}