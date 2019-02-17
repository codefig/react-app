const initial_state = {email : '',password: '', user:null, error : '', loading:false}
import {EMAIL_CHANGED, PASS_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER} from '../actions/types';

export default (state = initial_state, action) => {
    console.log("Action: " , action)
    switch(action.type){
        case EMAIL_CHANGED: 
            return {...state, email : action.payload};
        case PASS_CHANGED:
            return {...state, password: action.payload}
        case LOGIN_USER:
            return {...state, loading: true, error: ''}
        case LOGIN_USER_SUCCESS: 
            return {...state, user : action.payload, error : '', loading:false};
        case LOGIN_USER_FAIL: 
            return {...state, error : "Authentication failed.", password : '', loading:false};
        default : 
            return state;
    }
}