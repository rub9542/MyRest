
import React, { Component } from 'react';
import axios from 'axios'
import './base.css';
import {connect} from 'react-redux';
import { todoedit, myTodos, editTodos  } from '../Actions/index';
import TodosModal from './TodosModal';

export class Todos extends Component {
constructor(props) {
    super(props)

    this.state = {
        text:[],
        edit:false,
        title:'',
    }
}


async getList () {
    const url ='https://jsonplaceholder.typicode.com/users/1/todos';
    const response = await fetch(url);
    const data = await response.json();
    for(let i=0; i<data.length; i++){
        data[i]={...data[i], edit:false}
        // console.log(data[i]);
    }
    console.log('data',data);
    this.setState({
        text:data,
    })
    this.props.myTodos(this.state.text)
    console.log('todos are ', this.state.text);
}
 componentDidMount(){
    
    this.getList()
}
remove=(index) =>{
    console.log('remove clicked');
    const users=this.props.todos
    const newList = users.filter((x)=> this.state.text.indexOf(x) !== index);
    console.log('remove',newList);
    
    this.setState({
        text:newList
    })
    this.props.myTodos(newList);
}
changeIndex=(index) =>{
    console.log('item clicked');
    this.props.todoedit(index)
}

update = (index)=>{
        
    console.log('title',this.state.title);
    // this.props.setEdit
    this.props.editTodos (this.state.title, index)
    this.props.todoedit(index)
    this.setState({
        edit:false,
        title:'',
    })
}
render() {
    const todos = this.props.todos;
    console.log('todos are',todos)
    return (
        <div>
            <TodosModal/>
            <table>
                <tbody> TODO LIST
                {this.props.todos.map((item,index)=>(
                        
                        <tr key={index} className='user'>
                            {/* {item.edit === false ? */}
                                <td style={{color:'green'}} onClick={()=>this.changeIndex(index)}>Title: {item.title}</td>
                                <td style={{color:'green'}}>{item.completed ? 'Status : Incomplete' : 'Status : Complete' }</td>
                                {/* :
                                <td>
                                <input 
                                    type='text'
                                    placeholder={item.title}
                                    value={this.state.title}
                                    onChange={(event)=> this.setState({title:event.target.value})}
                                    />
                                <button onClick={()=>this.update(index)}>Save</button>
                            </td>
                               
                        } */}
                            
                            <td><button onClick={()=>this.remove(index)}>delete</button></td>
                        </tr>
                    
                    ))}
                </tbody>
            </table>
           
                   
                
        </div>
    )
}
}
const mapStateToProps = state =>{
// const {users} = state.user;
// const {posts} = state.posts;
// const {albums} = state.albums;
// const {todos} = state.todos;
const {todos} = state.todos;
return{
    todos,
}
}
const mapDispatchToProps = (dispatch) =>{
return{
    myTodos: (items)  =>dispatch(myTodos(items)),
    editTodos: (payload, index) =>dispatch(editTodos(payload, index)) ,
    todoedit: (index) => dispatch(todoedit(index)),
}
}


export default connect(mapStateToProps,mapDispatchToProps)(Todos)

// export default Todos;