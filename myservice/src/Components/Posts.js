import React, { Component } from 'react';
import axios from 'axios'
import './profile.css';
import {connect} from 'react-redux';
import { myPosts, postedit, updatePosts } from '../Actions';
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
            text:[],
            point:'',
            edit:false,
            title:'',
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
        
        console.log('title',this.state.title);
        this.props.updatePosts(this.state.title, index)
        this.props.postedit(index);
        this.setState({
            edit:false,
            title:'',
        })
    }
    comments = (index) =>{
        this.setState({
            point:index,
            edit:!this.state.edit

        })
        console.log('comments clicked',index);

    }
    render() {
        const postindex =this.props.index
        // console.log('pointer', pointer);
        // this.setState({
        //     point:pointer
        // })
        const posts = this.props.posts;
        // const users=this.props.users.filter((item)=> item.id === postindex);
        // const name=users.name;
        console.log('posts are', posts);
        return (
            <div>
                {/* <PostsModal/> */}
                <h1 class="md:text-3xl text-2xl font-medium title-font text-gray-900">Posts:</h1>
                {posts.map((item,index)=>(
                

<section class="text-gray-600 body-font overflow-hidden" key={index}>
  <div class="container px-5 py-24 mx-auto">
    <div class="-my-8 divide-y-2 divide-gray-100">
      <div class="py-8 flex flex-wrap md:flex-nowrap"  >
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          {/* <span class="font-semibold title-font text-gray-700">{name}</span> */}
          {/* <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span> */}
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2"><p style={{color:'purple'}}>{item.title}</p></h2>
          <p class="leading-relaxed">{item.body}</p>
          <a class="text-indigo-500 inline-flex items-center mt-4" onClick={()=>this.comments(index)}>Comments
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          {this.state.edit !==false? 
                <Comments index={this.props.item} />    : null
        }  
        </div>
      </div>
  
 
    </div>
  </div>
</section>))}
           
                    
            </div>
        )
    }
}
// export default Base
const mapStateToProps = state =>{
    const {posts} =state.posts;
    const {users}= state.users;
    const {index} =state.index;
    return{
        posts,
        users,
        index,
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

// <table>
//                 <tbody>
//                     {posts.map((item,index)=>(
//                         <tr key={index} className='user'>
//                             {item.edit === false ?
//                             <td style={{color:'green'}} onClick={()=>this.changeIndex(index)}>{item.title}{item.body} </td>
//                             // <td>{item.body}</td>
//                             :
//                             <td>
//                                 <input 
//                                     type='text'
//                                     placeholder={item.title}
//                                     value={this.state.title}
//                                     onChange={(event)=> this.setState({title:event.target.value})}
//                                     />
//                                 <button onClick={()=>this.update(index)}>Save</button>
//                             </td>}
//                            {/* <td style={{color:'green'}} onClick={()=>this.setState({edit:true})}>{item.title} </td> */}
//                            <td><button className='delete' onClick={()=>this.remove(index)} >Delete</button></td>
//                         </tr>
                            
                        
//                         ))}
//                </tbody>
//             </table>