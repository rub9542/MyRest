export const myIndex = (payload)=>{
    return{
        type:'INDEX_PART',
        payload,
    }
}

export const myPosts = (items) =>{
    return    {
        type: 'POSTS_ADDED',
            payload:items
    }
}
export const addPosts = (items) =>{
    return    {
        type: 'POST_ADDED',
            payload:items
    }
}
export const updatePosts = (title,body, index) =>{
    return    {
        type: 'POSTS_UPDATED',
            title,
            body,
            index,
        }
}
export const postedit = (index) =>{
    return    {
        type: 'POST_EDIT',
            index
    }
}

export const myUsers = (items) =>{
    return{
        type: 'USERS_ADDED',
        payload:items
    }
}
export const addUser = (payload) =>{
    return{
        type: 'USER_ADDED',
        payload,
        
    }
}
export const useredit = (index) =>{
    return{
        type: 'USER_EDIT',
        index,
        
    }
}
export const editUser = (payload,index) =>{
    return{
        type: 'USER_UPDATE',
        payload,
        index
        
    }
}

export const myComments = (items) =>(
    {
        type: 'COMMENTS_ADDED',
            payload:items
    }
)
export const addComments = (items) =>(
    {
        type: 'COMMENT_ADDED',
            payload:items
    }
)
export const commentedit = (index) =>(
    {
        type: 'COMMENT_EDIT',
            index
    }
)
export const editComments = (payload, index) =>(
    {
        type: 'COMMENTS_UPDATE',
        payload,
        index
    }
)
export const myAlbums = (items) =>(
    {
        type: 'ALBUMS_ADDED',
            payload:items
    }
)
export const addAlbums = (payload) =>(
    {
        type: 'ALBUM_ADDED',
            payload
    }
)
export const albumEdit = (index) =>(
    {
        type: 'ALBUM_EDIT',
        index
    }
)
export const updateAlbums = (payload, index) =>(
    {
        type: 'ALBUM_UPDATE',
        payload,
        index
    }
)
export const myTodos = (items) =>(
    {
        type: 'TODOS_ADDED',
            payload:items,
    }
)
export const editTodos = (payload, index ) =>(
    {
        type: 'TODOS_UPDATE',
            payload,
            index
    }
)
export const addTodos = (items) =>(
    {
        type: 'TODO_ADDED',
            payload:items
    }
)
export const todoedit = (index) =>(
    {
        type: 'TODO_EDIT',
        index
    }
)
export const myPhotos = (items) =>(
    {
        type: 'PHOTOS_ADDED',
        payload:items
    }
)
export const addPhotos = (items) =>(
    {
        type: 'PHOTO_ADDED',
        payload:items
    }
)
