import {EMPLOYEE_FETCH_SUCCESS} from '../actions';

const INITIAL_STATE = {}

export default (state = INITIAL_STATE , action) => {
    switch(action.type){
        case EMPLOYEE_FETCH_SUCCESS:
            console.log("success: ", action)
            return action.payload;
        default : 
            return state;
    }
}