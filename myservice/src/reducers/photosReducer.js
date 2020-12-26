const INITIAL_STATE = {
    photos:[]
}

const photosReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case 'PHOTOS_ADDED':
            console.log('payload photos',action.payload);
            return{
                ...state,
                photos:action.payload
            }
        case 'PHOTO_ADDED':
            const items=state.photos;
            const item=action.payload
            const list=[item, ...items]
        console.log('payload photos',action.payload);
        return{
            ...state,
            photos:list
        }
        default: return state
    }
}
export default  photosReducer;