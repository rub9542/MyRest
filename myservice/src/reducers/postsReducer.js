const INITIAL_STATE = {
    posts:[
        
        
    ]
}

const postsReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case 'POSTS_ADDED':
            console.log('payload posts',action.payload);
            return{
                ...state,
                posts:action.payload
            }
        case 'POST_ADDED':
            const items=state.posts
            const item=action.payload;
            const list=[item, ...items]
            console.log('payload posts',action.payload);
            return{
                ...state,
                posts:list
            }
            case 'POST_EDIT':
                const List1=state.posts[action.index];
                List1.edit=!List1.edit;
                const newList1=[...state.posts]
                console.log('payload posts',state.posts);
                return{
                    ...state,
                    posts:newList1
                }
        case 'POSTS_UPDATED':
            console.log('payload posts',action.payload);
            const temp=state.posts[action.index]
            temp.title=action.payload
            return{
                ...state,
                posts:state.posts
            }
        
        
        default: return state
    }
}
export default postsReducer;