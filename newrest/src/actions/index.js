export const myPosts = (items) =>{
    return    {
        type: 'POSTS_ADDED',
            payload:items
    }
}


export const myUsers = (items) =>{
    return{
        type: 'USERS_ADDED',
        payload:items
    }
}
export const myComments = (items) =>(
    {
        type: 'COMMENTS_ADDED',
            payload:items
    }
)
export const myAlbums = (items) =>(
    {
        type: 'ALBUMS_ADDED',
            payload:items
    }
)
export const myTodos = (items) =>(
    
    {
        type: 'TODOS_ADDED',
        payload:items
    }
)
export const REQUEST_TODOS_DATA = 'REQUEST_TODOS_DATA';
export const RECIEVE_TODOS_DATA ='RECIEVE_TODOS_DATA';

export const requestTodosData = () =>({type:REQUEST_TODOS_DATA});
export const recieveTodosData = data =>({type:RECIEVE_TODOS_DATA,data});