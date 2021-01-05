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
        case 'NO_INDEX':
            console.log('NO index', action.payload);
            return{
                index:''
            }
        default:return state
    }
}
export default indexReducer;