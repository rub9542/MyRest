import { combineReducers} from 'redux';

const INITIAL_STATE = {
    users:[
        
        
    ]
}

const userReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case 'USERS_ADDED':
            console.log('payload users',action.payload);
            return{
                ...state,
                users:action.payload
            }
        
        
        default: return state
    }
}
export default combineReducers({users:userReducer}) ;
