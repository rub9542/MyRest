

import React, { Component, Profiler } from 'react';
// import axios from 'axios'
import Modal from 'react-modal'
import '../App.css'
import './profile.css';
import {connect} from 'react-redux';
import {AiOutlineClose} from "react-icons/ai";
import {HiUserAdd } from "react-icons/hi";
import user from '../user.webp';
import Profile from './Profile';
import { myUsers,editUser , useredit, myIndex} from '../Actions/index';
import Usermodal from './usermodal';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Link } from 'react-router-dom';
import Users  from './users';
import Albums  from './Albums';
import  Posts from './Posts';
import Photos from './Photos';
import  Todos from './todos';

export class Homepage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            text:[],
            edit:false,
            title:'',
            item:'',
            name:'',
            modal:false,
        }
    }
    
    async getList () {
        const url ='https://jsonplaceholder.typicode.com/users/';
        const response = await fetch(url);
        const data = await response.json();
        for(let i=0; i<data.length; i++){
            data[i]={...data[i], edit:false,image: { avatar: true, src: '/images/avatar/small/jenny.jpg' }}
            // console.log(data[i]);
        }
        console.log('data',data);
        this.setState({
            text:data,
        })
        this.props.myUsers(data)
        console.log('users list ', data);
    }
     componentDidMount(){
        
        this.getList()
    }
    remove=(index) =>{
        const users=this.props.users
        const newList = users.filter((x)=> this.state.text.indexOf(x) !== index);
        console.log('remove',newList);
        
        this.setState({
            text:newList
        })
        this.props.myUsers(newList);
    }
    changeIndex=(index) =>{
        this.props.useredit(index)
    }
    update = (index)=>{
        
        console.log('title',this.state.title);
        this.props.editUser (this.state.title, index)
        this.props.useredit(index)
        this.setState({
            edit:false,
            title:'',
        })
    }
    chosen=(name,index)=>{
        this.setState({
            item:index+1,
            name:name,
            modal:!this.state.modal,
        })
        console.log('user clicked', index+1);
        this.props.myIndex(index+1);
        // console.log('item clicked');

    }
    render() {
        const users = this.props.users;
        console.log('users are',users)
        return (
                <div > 
                        <section  >
                            <div class="container px-5 py-24 mx-auto">
                                <div class=" flex flex-col text-center w-full mb-20">
                                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Users List</h1>
                                    <button className='buttons'><HiUserAdd/></button>
                                </div>
                                <div class=" content flex flex-wrap -m-2">
                                    {users.map((item,index)=>(
                                        <div class="user p-2 lg:w-1/3 md:w-1/2 w-full" key={index} id='blog1' onClick={()=>this.chosen(item.name,index)} >
                                            <div class="close1 w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
             <div  onClick={()=>this.remove(index)}><AiOutlineClose/></div>
         </div>
                                            <Link to='/user'>
                                                <div class="h-full flex items-center  p-4 rounded-lg" >
                                                    <img  class="w-15 h-16 bg-gray-100    rounded-full mr-4" src={user}/>
                                                    <div class="flex-grow">
                                                      <h2 class="text title-font font-medium">{item.name}</h2>
                                                      <p className='text' >{item.username}</p>
                                                    </div>
                                                </div></Link>
                                            
                                                
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                       
                </div>
        )
    }
}



const mapStateToProps = state =>{
    const {albums} = state.albums;
    const {posts} = state.posts;
    const {users} = state.users;
    const {index} = state.userIndex;
    const {photos} = state.photos;
    const {todos} = state.todos;
    return{
        users,
        index,
        photos,
        todos,
        posts,
        albums,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        myUsers: (payload)  =>dispatch(myUsers(payload)),
        editUser: (payload,index) =>dispatch(editUser(payload, index)),
        useredit: (index) => dispatch(useredit(index)),
        myIndex:(index)=> dispatch(myIndex(index)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Homepage)