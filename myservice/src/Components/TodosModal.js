import React, { Component } from 'react'
import Modal from 'react-modal'
import {connect} from 'react-redux';
import { myUsers, addTodos} from '../Actions/index';

class TodosModal extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id:'',
            title:'',
            open:false,
             
        }
    }
    submit = () =>{
        const todos=this.props.todos
        const item={userId:1, id:todos.length, title:this.state.title, Completed:false}
        console.log('todos length',todos.length);
        this.props.addTodos(item)
        this.setState({
            open:false,
            title:'',
        })
        console.log(item);
    }
    
    render() {
        const todos = this.props.todos;
        console.log('todos are',todos)
        return (
            <div>
                <button className='buttons' onClick={()=> this.setState({open:true})}>New</button>
                <Modal isOpen={this.state.open}>
                    <form onSubmit={()=>this.submit()}>
                        <div>
                            <ul >
                                <li>
                                    <label>Title</label>
                                    <input type='text' value={this.state.title} onChange={(event)=>this.setState({title:event.target.value})}/>
                                </li>
                                <li>
                                    <button type='submit'>
                                        Submit
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </form>
                </Modal>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    // const {users} = state.user;
    // const {todos} = state.todos;
    const todos = state.todos;
    // const {photos} = state.;
    // const {todos} = state.todos;
    return{
        todos,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        // myUsers: (payload)  =>dispatch(myUsers(payload)),
        addTodos: (payload)  =>dispatch(addTodos(payload)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(TodosModal)

