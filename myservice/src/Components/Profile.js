import React, { Component } from 'react'
import './profile.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux';
import  Albums  from './Albums';
import  Posts  from './Posts';
import  Photos from './Photos';
import Todos  from './todos';
import Users  from './users';
// import Nav from './nav';
class Profile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:'',
             todos:'',
             albums:'',
             photos:'',
             show:false,
        }
    }
    content = (data) =>{
        if(data === 'posts'){
            this.setState({
            posts:1,
            todos:'',
            albums:'',
            photos:'',
            })
            console.log('posts', this.state.posts);
        }else if(data === 'todos'){
            this.setState({
                posts:'',
                todos:1,
                albums:'',
                photos:'',
                })
                console.log('todos', this.state.todos);
        }
        else if(data === 'albums'){
            this.setState({
                posts:'',
                todos:'',
                albums:1,
                photos:'',
                })
                console.log('albums', this.state.albums);
        }
        else if(data === 'photos'){
            this.setState({
                posts:'',
                todos:'',
                albums:'',
                photos:1,
                })
                console.log('photos', this.state.photos);
        }

    }
    render() {
        const item=this.props.index;
        console.log('item profile recieved', item);
        const posts=this.props.posts;
        const postlen=posts.length;
        const todos=this.props.todos;
        const todolen= todos.length;
        const albums=this.props.albums;
        const albumlen= albums.length;
        const photos=this.props.photos;
        const photolen= photos.length;
        console.log('total posts',posts);
        return (
            <div>
              
              {/* <button id='blog' onClick={()=> this.setState({show:!this.state.show})}><h2 class="tracking-widest text-xl title-font mb-1" >User Acivities</h2></button> */}
            <Users />
            
            {this.state.show !== false ?
            <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap -mx-4 -my-8">
                <div class="py-8 px-4 lg:w-1/3" id='blog'>
                  {/* <div class="h-full flex items-start"> */}
                    {/* <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                      <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                      <span class="font-medium text-lg text-gray-800 title-font leading-none">18</span>
                    </div> */}
                    {/* <Link to='/posts'> */}
                    <div class="flex-grow pl-6" onClick={()=>this.content('posts')}>
                      <h2 class="tracking-widest text-xl title-font mb-1" id='text' >Posts</h2>
                      <h1 class="title-font text-xl font-medium  mb-3" id='text'>{this.props.name} has {postlen} Posts</h1>
                      <p class="leading-relaxed mb-5" id='text'>Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                      
                    </div>
                    {/* </Link> */}
                  {/* </div> */}
                </div>
                <div class="py-8 px-4 lg:w-1/3" id='blog'>
                  <div class="h-full flex items-start">
                    {/* <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                      <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                      <span class="font-medium text-lg text-gray-800 title-font leading-none">18</span>
                    </div> */}
                     {/* <Link to='/todos'> */}
                    <div class="flex-grow pl-6" onClick={()=>this.content('todos')}>
                      <h2 class="tracking-widest text-xl title-font  mb-1"id='text'>Todos</h2>
                      <h1 class="title-font text-xl font-medium  mb-3"id='text'>{this.props.name} has {todolen} Todos Data</h1>
                      <p class="leading-relaxed mb-5"id='text'>Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                     
                    </div>
                    {/* </Link> */}
                  </div>
                </div>
                <div class="py-8 px-4 lg:w-1/3 ml-1 mt-5" id='blog'>
                  <div class="h-full flex items-start">
                    {/* <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                      <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                      <span class="font-medium text-lg text-gray-800 title-font leading-none">18</span>
                    </div> */}
                     {/* <Link to='/albums'> */}
                    <div class="flex-grow pl-6" onClick={()=>this.content('albums')}>
                      <h2 class="tracking-widest text-xl title-font  mb-1"id='text'>Albums</h2>
                      <h1 class="title-font text-xl font-medium  mb-3"id='text'>{this.props.name} has {albumlen} Album Data</h1>
                      <p class="leading-relaxed mb-5"id='text'>Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                      
                    </div>
                    {/* </Link> */}
                  </div>
                </div>
                <div class="py-8 px-4 lg:w-1/3 mt-5" id='blog'>
                  <div class="h-full flex items-start">
                    {/* <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                      <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                      <span class="font-medium text-lg text-gray-800 title-font leading-none">18</span>
                    </div> */}
                     {/* <Link to='/photos'> */}
                    <div class="flex-grow pl-6" onClick={()=>this.content('photos')}>
                      <h2 class="tracking-widest text-xl title-font    mb-1"id='text'>Photos</h2>
                      <h1 class="title-font text-xl font-medium  mb-3"id='text'>{this.props.name} has {photolen} Photos</h1>
                      <p class="leading-relaxed mb-5"id='text'>Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                     
                    </div>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </section> 
          :
           null}
          
            {/* {this.state.posts!== '' ? 
                <Posts item={this.props.index}/>: null
            }
            {this.state.todos !=='' ?
                <Todos item={item}/>   : null 
        }
            {this.state.albums !=='' ?
                <Albums item={item} />    : null
        }
        {this.state.photos !=='' ?
                <Photos item={item} />    : null
        } */}
          </div>
        )
    }
}

// export default Profile

const mapStateToProps = state =>{
    const {posts} = state.posts;
    const {albums} = state.albums;
    const {photos} = state.photos;
    const {todos} = state.todos;
    return{
        posts,
        albums,
        photos,
        todos,
    }
}

export default connect(mapStateToProps,null)(Profile)
