import {EMPLOYEE_UPDATE} from './types';

export const employeeUpdate = ({prop, value}) => {
    return {
        type : "EMPLOYEE_UPDATE", 
        payload: {prop, value}
    }
}

export const createEmployee = ({name, phone ,shift}) => {
    console.log("employee", {name, phone, shift})
    return {
        type : "EMPLOYEE_CREATE", 
        payload : {name, phone, shift} 
    }
}