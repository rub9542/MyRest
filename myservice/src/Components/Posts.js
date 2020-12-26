import React, { Component } from 'react';
import axios from 'axios'
import './base.css';
import {connect} from 'react-redux';
import { myPosts, postedit, updatePosts } from '../Actions';
// import posts from './posts';
import PostsModal from './PostsModal';

export class Posts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            text:[],
            edit:false,
            title:'',
        }
    }
    
   
    async getList () {
        const url ='https://jsonplaceholder.typicode.com/users/1/posts';
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
        console.log('posts are ', data);
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
        
        console.log('title',this.state.title);
        this.props.updatePosts(this.state.title, index)
        this.props.postedit(index);
        this.setState({
            edit:false,
            title:'',
        })
    }
    render() {
        const posts = this.props.posts
        console.log('posts are', posts);
        return (
            <div>
                <PostsModal/>
               <table>
                <tbody>
                    {posts.map((item,index)=>(
                        <tr key={index} className='user'>
                            {item.edit === false ?
                            <td style={{color:'green'}} onClick={()=>this.changeIndex(index)}>{item.title} </td>
                            :
                            <td>
                                <input 
                                    type='text'
                                    placeholder={item.title}
                                    value={this.state.title}
                                    onChange={(event)=> this.setState({title:event.target.value})}
                                    />
                                <button onClick={()=>this.update(index)}>Save</button>
                            </td>}
                           {/* <td style={{color:'green'}} onClick={()=>this.setState({edit:true})}>{item.title} </td> */}
                           <td><button className='delete' onClick={()=>this.remove(index)} >Delete</button></td>
                        </tr>
                            
                        
                        ))}
               </tbody>
            </table>
                       
                    
            </div>
        )
    }
}
// export default Base
const mapStateToProps = state =>{
    const {posts} =state.posts;
    return{
        posts
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        myPosts: (payload)  =>dispatch(myPosts(payload)),
        updatePosts : (payload, index) => dispatch(updatePosts(payload, index)),
        postedit: (index) => dispatch(postedit(index)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Posts)

