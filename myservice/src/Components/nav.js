import React, { Component } from 'react'
import { myUsers,editUser , useredit, myIndex,} from '../Actions/index';
import '../App.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
class Nav extends Component {
    render() {
        return (
            <div>
                <header class="text-gray-600 body-font">
                    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                            <Link to='/user'>
                                <a class="mr-5 hover:text-gray-900">Profile</a>
                            </Link>
                            <Link to='/user/{this.state.point}/posts'>
                                <a class="mr-5 hover:text-gray-900">Posts</a>
                            </Link>
                            <Link to='/user/albums'>
                                <a class="mr-5 hover:text-gray-900">Albums</a>
                            </Link>
                            
                            <Link to='/user/todos'>
                                <a class="mr-5 hover:text-gray-900">Todo List</a>
                            </Link>
                            <Link to='/'>
                                <a class="mr-5 hover:text-gray-900">Home</a>
                            </Link>
                        </nav>
                    </div>
                </header>
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
export default connect(mapStateToProps,mapDispatchToProps)(Nav)