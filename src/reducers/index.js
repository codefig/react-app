import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeReducer from './EmployeeReducer';
import EmployeeListReducer from './employeesListReducer';

export const reducers = combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeReducer,
    employees : EmployeeListReducer
})