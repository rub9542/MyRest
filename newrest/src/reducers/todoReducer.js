import { combineReducers} from 'redux';


const INITIAL_STATE = {
    comments:[
        
    ]
}

const todos = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case 'TODOS_ADDED':
            console.log('payload comments',action.payload);
            return{
                ...state,
                comments:action.payload
            }
        
        
        default: return state
    }
}
export default todos ;
