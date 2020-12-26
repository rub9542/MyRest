import {RECIEVE_TODOS_DATA} from '../actions';

export default (state= [], {type, data})=>{
    switch(type){
        case RECIEVE_TODOS_DATA:
            console.log('data is',data);
            return data;
        default:
            return state;
    }
}