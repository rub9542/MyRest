const INITIAL_STATE = {
    idAlbum:'',
}

const indexAlbumReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case 'ALBUM_INDEX':
            console.log('album index', action.payload);
            return{
                idAlbum:action.payload
            }
        default:return state
    }
}
export default indexAlbumReducer;