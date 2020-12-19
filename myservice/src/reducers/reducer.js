import {combineReducers} from 'redux';

const INITIAL_STATE = {
    elements:[]
}

const restReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case 'ELEMENT_ADDED':
            return{
                ...state,
                elements:action.payload
            }
        default: return state
    }
}
export default combineReducers({
    rest:restReducer,
})