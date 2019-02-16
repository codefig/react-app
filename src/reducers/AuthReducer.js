const initial_state = {email : '',password: ''}
import {EMAIL_CHANGED, PASS_CHANGED, LOGIN_USER_SUCCESS} from '../actions/types';

export default (state = initial_state, action) => {
    console.log(action)
    switch(action.type){
        case EMAIL_CHANGED: 
            return {...state, email : action.payload};
        case PASS_CHANGED:
            return {...state, password: action.payload}
        default : 
            return state;
    }
}