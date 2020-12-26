import { combineReducers} from 'redux';


const INITIAL_STATE = {
    comments:[
        {title:'javsa'}
    ]
}

const comments = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case 'COMMENTS_ADDED':
            console.log('payload comments',action.payload);
            return{
                ...state,
                comments:action.payload
            }
        
        
        default: return state
    }
}
export default comments ;
