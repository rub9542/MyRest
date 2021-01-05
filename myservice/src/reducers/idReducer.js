const INITIAL_STATE = {
    idpost:''
}

const idReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case 'POST_ID':
            console.log('id recived at reducer', action.payload);
            return{
                
                idpost:action.payload
            }
            default: return state
    }
}
export default idReducer;