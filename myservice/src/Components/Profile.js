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
              
             
            <Users />
            
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
