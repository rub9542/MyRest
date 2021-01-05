import Modal from 'react-modal'

import React, { Component } from 'react';
import axios from 'axios'
import {AiOutlineClose} from "react-icons/ai";
import './profile.css';
import {connect} from 'react-redux';
import { myPosts, postedit, updatePosts, postid } from '../Actions';
// import posts from './posts';
import PostsModal from './PostsModal';
import Comments  from './Comments';

export class Posts extends Component {
    constructor(props) {
        super(props)
        // const postcss =()=>{
        //     border:'1px solid red';
        // }
        this.state = {
            modal:false,
            text:[],
            point:'',
            edit:false,
            title:'',
            body:'',
            index:'',
        }
    }
    
   
    async getList () {
        const url ='https://jsonplaceholder.typicode.com/users/'+this.props.index+'/posts';
        const response = await fetch(url);
        const data = await response.json();
        
        // const text=this.state.text
        for(let i=0; i<data.length; i++){
            data[i]={...data[i], edit:false}
            console.log(data[i]);
        }this.setState({
            text:data,
        })
        this.props.myPosts(data)
        console.log('archived posts ', data);
    }
     componentDidMount(){
        
        this.getList()
    }
    remove=(index) =>{
        console.log('remove clicked');
        const users=this.props.posts
        const newList = users.filter((x)=> this.state.text.indexOf(x) !== index);
        console.log('remove',newList);
        
        this.setState({
            text:newList
        })
        this.props.myPosts(newList);
    }
    changeIndex=(index) =>{
        this.props.postedit(index)
    }
    update = (index)=>{
        console.log('save clicked', index)
        console.log('title',this.state.title);
        this.props.updatePosts(this.state.title, this.state.body, this.state.index)
        this.props.postedit(index);
        this.setState({
            // edit:false,
            title:'',
            body:'',
            modal:!this.state.modal,
        })
    }
    comments = (index) =>{
        this.setState({
            point:index+1,
            edit:!this.state.edit

        })
        this.props.postedit(index)
        console.log('chosen index', this.state.point);
        this.props.postid(index+1)
        console.log('post id sent', index+1);
        console.log('comments clicked',index);

    }
    chosen = (index1) =>{
        console.log('edit index', index1)
        this.setState({
            index:index1,
            modal:!this.state.modal,
        })

        
    }
    render() {
        const postindex =this.props.index
        const posts = this.props.posts;
        const users=this.props.users.filter((item)=> item.id === this.props.index);
        console.log('post user', users.id);
        const name=users.name;
        console.log('posts are', posts);
        return (
            <div>
                {/* <PostsModal/> */}
                <h1 class="md:text-3xl text-2xl font-medium title-font text-gray-900">Posts:</h1>
                {posts.map((item,index)=>(
                    <section  key={index} >
                        <div class="container px-5 py-24 mx-auto hover:bg-gray-200"  >
                            <div class="-my-8 divide-y-2 divide-gray-100">
                                <div class="py-8 flex flex-wrap md:flex-nowrap"  >
                                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                        <h2 class="leading-relaxed" id='blog' onClick={()=>this.chosen(index)}>Edit</h2>
                                        <Modal isOpen={this.state.modal}>
                                            <section class="text-gray-600 body-font relative">
                                                <div class="container px-5 py-24 mx-auto">
                                                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                                                        <div class="relative">
                                                            <label for="name" class="leading-7 text-sm text-gray-600">Title</label>
                                                            <input type="text" id="name" name="name" value={this.state.title} onChange={(event)=>this.setState({title:event.target.value})} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                                        </div>
                                                        <div class="p-2 w-full">
                                                            <div class="relative">
                                                              <label for="message" class="leading-7 text-sm text-gray-600">Body</label>
                                                              <textarea id="message" name="message" value={this.state.body} onChange={(event)=>this.setState({body:event.target.value})} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="p-2 w-full">
                                                            <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={()=>this.update(index)}>Save</button>
                                                        </div>
                                                        <div class="p-2 w-full">
                                                            <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"  onClick={()=>this.chosen()}>Cancel</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </Modal>
                                    </div>
                                    <div class="md:flex-grow">
                                        <h2 class="text-2xl font-medium  title-font mb-2"><p >{item.title}</p></h2>
                                        <p class="leading-relaxed">{item.body}</p>
                                        <p class="leading-relaxed inline-flex items-center mt-4" id='blog' onClick={()=>this.comments(index)}>Comments
                                          <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                          </svg>
                                        </p>
                                        {item.edit !==false? 
                                            <Comments index={index+1} />    : null
                                        }  
                                    </div>
                                    <div class="close w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-200 text-indigo-500 mb-4">
                              <div  onClick={()=>this.remove(index)}><AiOutlineClose/></div>
                          </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        )
    }
}
const mapStateToProps = state =>{
    const {posts} =state.posts;
    const {users}= state.users;
    const {index} =state.userIndex;
    return{
        posts,
        users,
        index,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        myPosts: (payload)  =>dispatch(myPosts(payload)),
        updatePosts : (title,body,index) => dispatch(updatePosts(title,body, index)),
        postedit: (index) => dispatch(postedit(index)),
        postid:(index) => dispatch(postid(index)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Posts)
