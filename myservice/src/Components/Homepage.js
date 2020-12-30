

import React, { Component, Profiler } from 'react';
// import axios from 'axios'
import Modal from 'react-modal'
import '../App.css'
import './users.css';
import {connect} from 'react-redux';
import { Map, GoogleApiWrapper } from 'google-maps-react';
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
    chosen=(name,index)=>{
        this.setState({
            item:index+1,
            name:name,
            modal:!this.state.modal,
        })
        console.log('user clicked', index+1);
        this.props.myIndex(index+1);
        console.log('item clicked', this.state.item);

    }
    render() {
        const users = this.props.users;
        // const user= users.filter((item)=> item.id === )
        console.log('photos are',users)
        return (
            <nav>
            <div className='container'>
                <section >
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-col text-center w-full mb-20">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Users List</h1>
                            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                        </div>
                        <div class="flex flex-wrap -m-2">
                            {users.map((item,index)=>(
                                <div class="p-2 lg:w-1/3 md:w-1/2 w-full" key={index} id='blog1' >
                                    {/* <Link to='/user'> */}
                                        <div class="h-full flex items-center  p-4 rounded-lg" onClick={()=>this.chosen(item.name,index)}>
                                          <img  class="w-15 h-16 bg-gray-100    rounded-full mr-4" src={user}/>
                                          <div class="flex-grow">
                                            <h2 class="text-gray-900 title-font font-medium">{item.name}</h2>
                                            <p class="text-gray-500">{item.username}</p>
                                          </div>
                                        </div>
                                    {/* </Link> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <Modal isOpen={this.state.modal}>
                    <Router>
                    <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link to='/posts'>
        <a class="mr-5 hover:text-gray-900">Posts</a>
      </Link>
      <Link to='/albums'>
        <a class="mr-5 hover:text-gray-900">Albums</a>
      </Link>
      <Link to='/photos'>
        <a class="mr-5 hover:text-gray-900">Photos</a></Link>
      <Link to='/todos'>
        <a class="mr-5 hover:text-gray-900">Todo List</a>
      </Link>
    {/* <Link to='/'> */}
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={()=>this.setState({ modal:!this.state.modal})}>Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    {/* </Link> */}
    </nav>
  </div>
</header>
                        <Switch>
                            <Route path='/albums' exact component={Albums} />
                            <Route path='/posts' exact component={Posts} />
                            <Route path='/photos' exact component={Photos} />
                            <Route path='/todos' exact component={Todos} />
                            {/* <Route path='/' exact component={Homepage} /> */}
                            {/* <Route path='/' exact component={} /> */}
                           
                        </Switch>
                    <Profile/></Router>
                </Modal>
                {this.state.item !=='' ?
                        <Profile index={this.state.item} name={this.state.name} /> : null
                        }
            </div></nav>
        )
    }
}



const mapStateToProps = state =>{
    // const {users} = state.user;
    // const {posts} = state.posts;
    const {users} = state.users;
    const {index} = state.index;
    // const {photos} = state.;
    // const {todos} = state.todos;
    return{
        users,
        index,
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