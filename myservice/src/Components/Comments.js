
import React, { Component } from 'react';
// import axios from 'axios'
import './base.css';
import {connect} from 'react-redux';
import { myComments, editComments, commentedit } from '../Actions/index';
import CommentsModal from './CommentsModal';

export class Comments extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             text:[],
             edit:false,
             title:'',
        }
    }
    
   
    async getList () {
        const url ='https://jsonplaceholder.typicode.com/posts/1/comments';
        const response = await fetch(url);
        const data = await response.json();
        
        // const text=this.state.text
        for(let i=0; i<data.length; i++){
            data[i]={...data[i], edit:false}
            // console.log(data[i]);
        }
        console.log('data',data);
        this.setState({
            text:data,
        })
        
        this.props.myComments(data)
        console.log('comments are ', data);
    }
     componentDidMount(){
        
        this.getList()
    }
    remove=(index) =>{
        console.log('remove clicked');
        const users=this.props.comments
        const newList = users.filter((x)=> this.state.text.indexOf(x) !== index);
        console.log('remove',newList);
        
        this.setState({
            text:newList
        })
        this.props.myComments(newList);
    }
    changeIndex=(index) =>{
        this.props.commentedit(index)
    }
    update = (index)=>{
        
        console.log('title',this.state.title);
        this.props.editComments(this.state.title, index);
        this.props.commentedit(index);
        this.setState({
            edit:false,
            title:'',
        })
    }
    render() {
        const comments = this.props.comments;
        console.log('elements are',comments)
        return (
            <div>
                {/* <CommentsModal/> */}
                
                        {comments.map((item,index)=>(
                            <section class="text-gray-600 body-font overflow-hidden" key={index}>
                            <div class="container px-5 py-24 mx-auto">
                              <div class="-my-8 divide-y-2 divide-gray-100">
                                <div class="py-8 flex flex-wrap md:flex-nowrap" id='blog'>
                                  <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <span class="font-semibold title-font ">{item.email}</span>
                                  </div>
                                  <div class="md:flex-grow">
                                    <h2 class="text-2xl font-medium  title-font mb-2">{item.name}</h2>
                                    <p class="leading-relaxed">{item.body}</p>
                                  
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
    // const {users} = state.user;
    // const {posts} = state.posts;
    // const {albums} = state.albums;
    const {comments} = state.comments;
    // const {todos} = state.todos;
    return{
        comments,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        myComments: (payload)  =>dispatch(myComments(payload)),
        editComments : (payload, index) => dispatch(editComments(payload,index)),
        commentedit:(index)=> dispatch(commentedit(index)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Comments)

// export default Comments;