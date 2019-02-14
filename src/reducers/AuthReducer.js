const initial_state = {email : ''}
import {EMAIL_CHANGED} from '../actions/types';

export default (state = initial_state, action) => {
    switch(action.type){
        case EMAIL_CHANGED: 
            return {...state, email : action.payload};
        default : 
            return state;
    }
}