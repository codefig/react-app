const initial_state = {email : '',password: '', user:null, error : ''}
import {EMAIL_CHANGED, PASS_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL} from '../actions/types';

export default (state = initial_state, action) => {
    console.log(action)
    switch(action.type){
        case EMAIL_CHANGED: 
            return {...state, email : action.payload};
        case PASS_CHANGED:
            return {...state, password: action.payload}
        case LOGIN_USER_SUCCESS: 
            return {...state, user : action.payload};
            case LOGIN_USER_FAIL: 
            return {...state, error : "Authentication failed."};
        default : 
            return state;
    }
}