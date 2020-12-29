import React, { Component } from 'react'
import './profile.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
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
        const item=this.props.index
        console.log('item profile recieved', item);
        const posts=this.props.posts;
        console.log('posts',posts);
        return (
            <div>
            <Users item={item}/>
            <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap -mx-4 -my-8">
                <div class="py-8 px-4 lg:w-1/3">
                  <div class="h-full flex items-start">
                    <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                      <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                      <span class="font-medium text-lg text-gray-800 title-font leading-none">18</span>
                    </div>
                    <div class="flex-grow pl-6" onClick={(event)=>this.content('posts')}>
                      <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">Posts</h2>
                      <h1 class="title-font text-xl font-medium text-gray-900 mb-3">The 400 Blows</h1>
                      <p class="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                      <a class="inline-flex items-center">
                        <img alt="blog" src="https://dummyimage.com/103x103" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/>
                        <span class="flex-grow flex flex-col pl-3">
                          <span class="title-font font-medium text-gray-900">Alper Kamu</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="py-8 px-4 lg:w-1/3">
                  <div class="h-full flex items-start">
                    <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                      <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                      <span class="font-medium text-lg text-gray-800 title-font leading-none">18</span>
                    </div>
                    <div class="flex-grow pl-6" onClick={(event)=>this.content('todos')}>
                      <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">Todos</h2>
                      <h1 class="title-font text-xl font-medium text-gray-900 mb-3">The 400 Blows</h1>
                      <p class="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                      <a class="inline-flex items-center">
                        <img alt="blog" src="https://dummyimage.com/103x103" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/>
                        <span class="flex-grow flex flex-col pl-3">
                          <span class="title-font font-medium text-gray-900">Alper Kamu</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="py-8 px-4 lg:w-1/3">
                  <div class="h-full flex items-start">
                    <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                      <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                      <span class="font-medium text-lg text-gray-800 title-font leading-none">18</span>
                    </div>
                    <div class="flex-grow pl-6" onClick={(event)=>this.content('albums')}>
                      <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">Albums</h2>
                      <h1 class="title-font text-xl font-medium text-gray-900 mb-3">Shooting Stars</h1>
                      <p class="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                      <a class="inline-flex items-center">
                        <img alt="blog" src="https://dummyimage.com/102x102" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/>
                        <span class="flex-grow flex flex-col pl-3">
                          <span class="title-font font-medium text-gray-900">Holden Caulfield</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="py-8 px-4 lg:w-1/3">
                  <div class="h-full flex items-start">
                    <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                      <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                      <span class="font-medium text-lg text-gray-800 title-font leading-none">18</span>
                    </div>
                    <div class="flex-grow pl-6" onClick={(event)=>this.content('photos')}>
                      <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">Photos</h2>
                      <h1 class="title-font text-xl font-medium text-gray-900 mb-3">Neptune</h1>
                      <p class="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                      <a class="inline-flex items-center">
                        <img alt="blog" src="https://dummyimage.com/101x101" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/>
                        <span class="flex-grow flex flex-col pl-3">
                          <span class="title-font font-medium text-gray-900">Henry Letham</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
            {this.state.posts!== '' ? 
                <Posts item={item}/>: null
            }
            {this.state.todos !=='' ?
                <Todos item={item}/>   : null 
        }
            {this.state.albums !=='' ?
                <Albums item={item} />    : null
        }
        {this.state.photos !=='' ?
                <Photos item={item} />    : null
        }
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
        // albums,
        // photos,
        // todos
    }
}

export default connect(mapStateToProps,null)(Profile)
