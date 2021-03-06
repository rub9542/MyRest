
import React, { Component } from 'react';
import axios from 'axios'
import './profile.css';
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
    const url ='https://jsonplaceholder.typicode.com/users/'+this.props.index+'/todos';
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
    console.log('todos recieved',todos)
    return (
        <div>
            <TodosModal/>
            <table>
                <tbody> 
                {/* {this.props.todos.map((item,index)=>( */}
                        
                        <section class="text-gray-600 body-font">
                        <div class="container px-5 py-24 mx-auto"  >
                          <div class="flex flex-col text-center w-full mb-20" >
                            <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Todo List</h1>
                            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                          </div>
                          <div class="flex flex-wrap">
                          {todos.map((item,index)=>( 
                            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60" key={index} id='blog2' >
                                <h2 id='blog' onClick={()=>this.chosen(index)}>Edit</h2>
                              <h2 class="text-lg sm:text-xl  font-medium title-font mb-2">{item.title}</h2>
                              <h2 class="leading-relaxed text-base mb-4">{item.completed === false ? 'Status : Pending' : 'Status : Complete'}</h2>
                              
                            </div>))}
                          </div>
                          <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        </div>
                      </section>
                    
                    {/* ))} */}
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
const {index} = state.userIndex;
const {todos} = state.todos;
return{
    todos,
    index,
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


// <tr key={index} className='user'>
// {/* {item.edit === false ? */}
//     <td style={{color:'green'}} onClick={()=>this.changeIndex(index)}>Title: {item.title}</td>
//     <td style={{color:'green'}}>{item.completed ? 'Status : Incomplete' : 'Status : Complete' }</td>
//     {/* :
//     <td>
//     <input 
//         type='text'
//         placeholder={item.title}
//         value={this.state.title}
//         onChange={(event)=> this.setState({title:event.target.value})}
//         />
//     <button onClick={()=>this.update(index)}>Save</button>
// </td>
   
// } */}

// <td><button onClick={()=>this.remove(index)}>delete</button></td>
// </tr>