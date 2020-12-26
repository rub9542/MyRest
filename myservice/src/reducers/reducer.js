import {combineReducers} from 'redux';

const INITIAL_STATE = {
    elements:[
        
        // {users:[]},
        // {posts:[]},
        // {comments:[]},
        // {albums:[]},
        // {todos:[]},

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
const postsReducer =( state=INITIAL_STATE, action) =>{
    switch(action.type){
        case 'POSTS_ADDED':
            return{
                ...state,
                posts:action.payload
            }
            default: return state
    }    } 

const commentsReducer =( state=INITIAL_STATE, action) =>{
    switch(action.type){
        case 'COMMENTS_ADDED':
            return{
                ...state,
                comments:action.payload
            }
            default: return state
    }    } 

const albumsReducer =( state=INITIAL_STATE, action) =>{
    switch(action.type){
        case 'ALBUMS_ADDED':
            return{
                ...state,
                albums:action.payload
            }
            default: return state
    }    } 

const todosReducer =( state=INITIAL_STATE, action) =>{
    switch(action.type){
        case 'TODOS_ADDED':
            return{
                ...state,
                todos:action.payload
            }
            default: return state
    }    } 
    

export default rootReducer