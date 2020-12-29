

import React, { Component, Profiler } from 'react';
// import axios from 'axios'
import Modal from 'react-modal'
import './users.css';
import {connect} from 'react-redux';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import user from '../user.webp';
import Profile from './Profile';
import { myUsers,editUser , useredit} from '../Actions/index';
import Usermodal from './usermodal';

export class Homepage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            text:[],
            edit:false,
            title:'',
            item:'',
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
        console.log('users are ', data);
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
    chosen=(index)=>{
        this.setState({
            item:index+1
        })
        console.log('item clicked', this.state.item);

    }
    render() {
        const users = this.props.users;
        // const user= users.filter((item)=> item.id === )
        console.log('photos are',users)
        return (
            <div>
                <section >
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-col text-center w-full mb-20">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
                            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                        </div>
                        <div class="flex flex-wrap -m-2">
                            {users.map((item,index)=>(
                                <div class="p-2 lg:w-1/3 md:w-1/2 w-full" key={index} >
                                  <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg" onClick={()=>this.chosen(index)}>
                                    <img  class="w-15 h-16 bg-gray-100    rounded-full mr-4" src={user}/>
                                    <div class="flex-grow">
                                      <h2 class="text-gray-900 title-font font-medium">{item.name}</h2>
                                      <p class="text-gray-500">{item.username}</p>
                                    </div>
                                  </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {this.state.item !=='' ?
                        <Profile index={this.state.item} /> : null
                        }
            </div>
        )
    }
}



const mapStateToProps = state =>{
    // const {users} = state.user;
    // const {posts} = state.posts;
    const {users} = state.users;
    // const {photos} = state.;
    // const {todos} = state.todos;
    return{
        users,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        myUsers: (payload)  =>dispatch(myUsers(payload)),
        editUser: (payload,index) =>dispatch(editUser(payload, index)),
        useredit: (index) => dispatch(useredit(index)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Homepage)