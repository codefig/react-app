import {EMPLOYEE_UPDATE, EMPLOYEE_CREATE} from './types';
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux';


export const employeeUpdate = ({prop, value}) => {
    return {
        type : "EMPLOYEE_UPDATE", 
        payload: {prop, value}
    }
}

export const createEmployee = ({name, phone ,shift}) => {
    console.log("employee", {name, phone, shift})
    const {currentUser} = firebase.auth();

 
    return (dispatch) =>  {
        firebase.database().ref(`/users/${currentUser.uid}/employees`).push({name, phone, shift})
        .then(()=> {
            dispatch({type : EMPLOYEE_CREATE})
            Actions.employeeList({back: false})
    })
    }
}