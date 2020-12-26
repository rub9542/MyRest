const INITIAL_STATE = {
    comments:[
        
        
    ]
}

const commentsReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case 'COMMENTS_ADDED':
            console.log('payload comments',action.payload);
            return{
                ...state,
                comments:action.payload
            }
        case 'COMMENTS_UPDATE':
            const item=state.comments[action.index];
            item.name=action.payload;
            console.log('payload comments',action.payload);
            return{
                ...state,
                comments:state.comments
            }  
            case 'COMMENT_EDIT':
                const List1=state.comments[action.index];
                List1.edit=!List1.edit;
                const newList1=[...state.comments]
                console.log('payload albums',state.comments);
                return{
                    ...state,
                    comments:newList1
                }
        case 'COMMENT_ADDED':
            const items=state.comments;
            const item1=action.payload;
            const newList=[item1, ...items]
            console.log('payload comments',action.payload);
            return{
                ...state,
                comments:newList
            }
              
        
        default: return state
    }
}
export default commentsReducer;