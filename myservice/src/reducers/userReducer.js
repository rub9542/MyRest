const INITIAL_STATE = {
    users:[
               
    ]
}

const userReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case 'USERS_ADDED':
            console.log(' users added',action.payload);
            return{
                ...state,
                users:action.payload
            }
        case 'USER_UPDATE':
            const temp1=state.users[action.index]
            temp1.name=action.payload
            console.log('user updated',action.payload);
            return{
                ...state,
                users:state.users
            }
        case 'USER_EDIT':
            const List1=state.users[action.index];
            List1.edit=!List1.edit;
            const newList1=[...state.users]
            console.log('user edit',state.users);
            return{
                ...state,
                users:newList1
            }
        case 'USER_ADDED':
            const list=state.users;
            const temp=action.payload;
            // list.name=action.name;
            // list.id=action.payload ;
            console.log('list', list);
            const newList=[temp,...list]
            console.log('user added',newList);
            return{
                ...state,
                users:newList
            }
        
        
        default: return state
    }
}
export default userReducer;