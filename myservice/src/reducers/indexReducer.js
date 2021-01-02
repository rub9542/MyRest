const INITIAL_STATE = {
    index:'',
}

const indexReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case 'INDEX_PART':
            console.log('final index', action.payload);
            return{
                index:action.payload
            }
        default:return state
    }
}
export default indexReducer;