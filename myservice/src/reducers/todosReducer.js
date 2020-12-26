const INITIAL_STATE = {
    todos:[
        
        
    ]
}

const todoReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case 'TODOS_ADDED':
            console.log('payload todos',action.payload);
            return{
                ...state,
                todos:action.payload
            }
        case 'TODO_ADDED':
            const List=state.todos;
            const temp=action.payload;
            const newList=[ temp,...List]
            console.log('todo added',action.payload);
            return{
                ...state,
                todos:newList
            }
        case 'TODOS_UPDATE':
            const item=state.todos[action.index];
            item.title=action.payload;
            const newList1=[...state.todos]
            console.log('todo updated',action.payload);
            return{
                ...state,
                todos:newList1
            }
        case 'TODO_EDIT':
            const List1=state.todos[action.index];
            List1.edit=!List1.edit;
            const newList2=[...state.todos]
            console.log('todo edited',state.todos);
            return{
                ...state,
                todos:newList2
            }
            
        
        
        default: return state
    }
}
export default todoReducer;