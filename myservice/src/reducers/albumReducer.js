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
        case 'ALBUM_ADDED':
            const List=state.albums;
            const temp=action.payload;
            const newList=[ temp,...List]
            console.log('payload albums',action.payload);
            return{
                ...state,
                albums:newList
            }
            case 'ALBUM_EDIT':
            const List1=state.albums[action.index];
            List1.edit=!List1.edit;
            const newList1=[...state.albums]
            console.log('payload albums',state.albums);
            return{
                ...state,
                albums:newList1
            }
        case 'ALBUM_UPDATE':
            const item=state.albums[action.index];
            item.title=action.payload;
            // const newList=[...List, temp]
            console.log('payload albums',action.payload);
            return{
                ...state,
                albums:state.albums
            }
            
        
        default: return state
    }
}
export default albumReducer ;
