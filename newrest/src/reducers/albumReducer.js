import { combineReducers} from 'redux';

const INITIAL_STATE = {
    albums:[
        
        
    ]
}

const albumReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case 'ALBUMS_ADDED':
            console.log('payload albums',action.payload);
            return{
                ...state,
                albums:action.payload
            }
        
        
        default: return state
    }
}
export default combineReducers({albums:albumReducer}) ;
