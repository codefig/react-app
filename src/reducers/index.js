import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import EmployeReducer from './EmployeeReducer';

export const reducers = combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeReducer,
})